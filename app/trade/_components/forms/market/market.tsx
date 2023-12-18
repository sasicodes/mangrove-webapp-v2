import { type Token } from "@mangrovedao/mangrove.js"
import { type ValidationError } from "@tanstack/react-form"
import { LucideChevronRight } from "lucide-react"
import React from "react"

import {
  CustomRadioGroup,
  CustomRadioGroupItem,
} from "@/components/custom-radio-group"
import {
  NumericInput,
  type NumericInputProps,
} from "@/components/numeric-input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/utils"
import { FIELD_ERRORS } from "@/utils/form-errors"
import { MarketDetails } from "../components/market-details-line"
import { TokenBalance } from "../components/token-balance"
import { TradeAction } from "../enums"
import FromWalletLimitOrderDialog from "./components/from-wallet-order-dialog"
import { useMarketForm } from "./hooks/use-market"
import { type Form } from "./types"
import { isGreaterThanZeroValidator, sendValidator } from "./validators"

// const sliderValues = [25, 50, 75, 100]
const slippageValues = ["0.1", "0.5", "1"]

export function Market() {
  const [formData, setFormData] = React.useState<Form>()
  const [showCustomInput, setShowCustomInput] = React.useState(false)

  const {
    computeReceiveAmount,
    computeSendAmount,
    // computeSliderValue,
    sendTokenBalance,
    handleSubmit,
    form,
    market,
    sendToken,
    receiveToken,
    tickSize,
    estimatedFee,
    estimatedVolume,
    // send,
  } = useMarketForm({ onSubmit: (formData) => setFormData(formData) })

  // const handleSliderChange = (value: number) => {
  //   const amount = (value * Number(sendTokenBalance.formatted)) / 100
  //   console.log(amount, sendTokenBalance.formatted)
  //   form.setFieldValue("send", amount.toString())
  //   computeReceiveAmount()
  //   form.validateAllFields("submit")
  // }

  // const sliderValue = Math.min(
  //   Big(Number(send) ?? 0)
  //     .mul(100)
  //     .div(sendTokenBalance.formatted ?? 1)
  //     .toNumber(),
  //   100,
  // ).toFixed(0)

  return (
    <>
      <form.Provider>
        <form onSubmit={handleSubmit} autoComplete="off">
          <form.Field name="tradeAction">
            {(field) => (
              <CustomRadioGroup
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onValueChange={(e: TradeAction) => {
                  field.handleChange(e)
                  computeReceiveAmount()
                }}
                disabled={!market}
              >
                {Object.values(TradeAction).map((action) => (
                  <CustomRadioGroupItem
                    key={action}
                    value={action}
                    id={action}
                    variant={
                      action === TradeAction.SELL ? "secondary" : "primary"
                    }
                    className="capitalize"
                  >
                    {action}
                  </CustomRadioGroupItem>
                ))}
              </CustomRadioGroup>
            )}
          </form.Field>
          <div className="space-y-4 !mt-6">
            <form.Field
              name="send"
              onChange={sendValidator(Number(sendTokenBalance.formatted ?? 0))}
            >
              {(field) => (
                <TradeInput
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={({ target: { value } }) => {
                    field.handleChange(value)
                    computeReceiveAmount()
                  }}
                  token={sendToken}
                  label="Send amount"
                  disabled={!market}
                  showBalance
                  error={
                    field.state.value === "0" && estimatedVolume === "0"
                      ? [FIELD_ERRORS.insufficientVolume]
                      : field.state.meta.touchedErrors
                  }
                />
              )}
            </form.Field>
            <form.Field name="receive" onChange={isGreaterThanZeroValidator}>
              {(field) => (
                <TradeInput
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={({ target: { value } }) => {
                    field.handleChange(value)
                    computeSendAmount()
                  }}
                  token={receiveToken}
                  label="Receive amount"
                  disabled={!(market && form.state.isFormValid)}
                  error={
                    field.state.value === "0" && estimatedVolume === "0"
                      ? [FIELD_ERRORS.insufficientVolume]
                      : field.state.meta.touchedErrors
                  }
                  showBalance
                />
              )}
            </form.Field>

            {/* Slider component */}
            {/* <div className="space-y-5 pt-2 px-3">
              <Slider
                name={"sliderPercentage"}
                defaultValue={[0]}
                value={[Number(sliderValue)]}
                step={5}
                min={0}
                max={100}
                // onBlur={field.handleBlur}
                onValueChange={([value]) => {
                  handleSliderChange(Number(value))
                }}
                disabled={!(market && form.state.isFormValid)}
              />
              <div className="flex justify-center space-x-3">
                {sliderValues.map((value) => (
                  <Button
                    key={`percentage-button-${value}`}
                    variant={"secondary"}
                    size={"sm"}
                    className={cn("text-xs w-full", {
                      "opacity-10": Number(sliderValue) !== value,
                    })}
                    onClick={(e) => {
                      e.preventDefault()
                      handleSliderChange(Number(value))
                    }}
                    disabled={!market}
                  >
                    {value}%
                  </Button>
                ))}
              </div>
            </div> */}

            <Separator className="!my-6" />
            <div className="flex justify-between">
              <span className="text-muted-foreground text-xs">
                Average market price
              </span>
              <span className="text-xs">$0.00</span>
            </div>
            <Separator className="!my-6" />
            <form.Field name="slippage">
              {(field) => (
                <div className="space-y-2">
                  <Label>Slippage tolerence</Label>
                  {/* Add buttons for 25%, 50%, 75%, and 100% */}
                  <div className="flex space-x-3">
                    {slippageValues.map((value) => (
                      <Button
                        key={`percentage-button-${value}`}
                        variant={"secondary"}
                        size={"sm"}
                        className={cn("text-xs", {
                          "opacity-10":
                            field.state.value !== Number(value) ||
                            showCustomInput,
                        })}
                        onClick={(e) => {
                          e.preventDefault()
                          showCustomInput &&
                            setShowCustomInput(!showCustomInput)
                          field.handleChange(Number(value))
                        }}
                        disabled={!market}
                      >
                        {value}%
                      </Button>
                    ))}
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        setShowCustomInput(!showCustomInput)
                      }}
                      variant={"secondary"}
                      size={"sm"}
                      className={cn("text-xs", {
                        "opacity-10": !showCustomInput,
                      })}
                    >
                      Custom
                    </Button>
                  </div>
                  {/* Render the custom input component */}
                  {showCustomInput && (
                    <TradeInput
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={({ target: { value } }) => {
                        field.handleChange(Number(value))
                      }}
                      label="Custom"
                      disabled={!(market && form.state.isFormValid)}
                      error={field.state.meta.touchedErrors}
                    />
                  )}
                </div>
              )}
            </form.Field>
            <Separator className="!my-6" />

            <MarketDetails takerFee={estimatedFee} tickSize={tickSize} />

            <form.Subscribe
              selector={(state) => [
                state.canSubmit,
                state.isSubmitting,
                state.values.tradeAction,
              ]}
            >
              {([canSubmit, isSubmitting, tradeAction]) => {
                return (
                  <Button
                    className="w-full flex items-center justify-center !mb-4 capitalize !mt-6"
                    size={"lg"}
                    type="submit"
                    disabled={!canSubmit || !market}
                  >
                    {isSubmitting ? "Processing..." : tradeAction}
                    <div
                      className={cn(
                        "ml-2 bg-white h-6 w-6 rounded-full text-secondary flex items-center justify-center transition-opacity",
                        {
                          "opacity-10": !market,
                        },
                      )}
                    >
                      <LucideChevronRight className="h-4 text-current" />
                    </div>
                  </Button>
                )
              }}
            </form.Subscribe>
          </div>
        </form>
      </form.Provider>
      {formData && (
        <FromWalletLimitOrderDialog
          form={formData}
          onClose={() => setFormData(undefined)}
        />
      )}
    </>
  )
}

type TradeInputProps = {
  token?: Token
  disabled?: boolean
  label?: string
  showBalance?: boolean
  error?: ValidationError[]
} & NumericInputProps

const TradeInput = React.forwardRef<HTMLInputElement, TradeInputProps>(
  ({ label, token, showBalance = false, error, ...inputProps }, ref) => {
    return (
      <div className="flex-col flex">
        {label && <Label>{label}</Label>}
        <NumericInput
          {...inputProps}
          ref={ref}
          icon={token?.symbol}
          symbol={token?.symbol}
          aria-invalid={!!error?.length}
        />
        {error && (
          <p role="aria-live" className="text-red-100 text-xs leading-4 mt-1">
            {error}
          </p>
        )}
        {showBalance && <TokenBalance token={token} />}
      </div>
    )
  },
)

TradeInput.displayName = "TradeInput"
