import { Address } from "viem"

type NetworkToken = {
  parentSymbol: string
  description?: string
  symbol: string
  name: string
  comment?: string
  contractName?: string
  address: Address
  default?: boolean
}

type TokenConfig = Record<number, NetworkToken[]>

export const ERC20_ADDRESSES = {
  [1]: [
    {
      parentSymbol: "WETH",
      description: "Wrapped Ether",
      symbol: "WETH.",
      name: "Wrapped Ether",
      comment: "",
      contractName: "WETH9",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      default: true,
    },
  ],
  [5]: [
    {
      parentSymbol: "WETH",
      description: "Wrapped Ether",
      symbol: "WETH.",
      name: "Wrapped Ether",
      comment: "Unverified test WETH on Goerli.",
      contractName: "",
      address: "0x695364ffAA20F205e337f9e6226e5e22525838d9",
      default: true,
    },
    {
      parentSymbol: "DAI",
      description: "Dai Stablecoin",
      symbol: "DAI.",
      name: "Dai Stablecoin",
      comment: "Test DAI on Goerli.",
      contractName: "TestnetERC20",
      address: "0xD77b79BE3e85351fF0cbe78f1B58cf8d1064047C",
      default: true,
    },
    {
      parentSymbol: "USDC",
      description: "Circle's USD Coin",
      symbol: "USDC.",
      name: "USD Coin",
      comment: "Unverified test USDC on Goerli.",
      contractName: "",
      address: "0x3a034FE373B6304f98b7A24A3F21C958946d4075",
      default: true,
    },
  ],
  [137]: [
    {
      parentSymbol: "WBTC",
      description: "Wrapped BTC",
      symbol: "WBTC.e",
      name: "(PoS) Wrapped BTC",
      comment:
        "Bridged WBTC from Ethereum. Likely bridged by Polygon's FxPortal/Mapper.",
      contractName: "UChildERC20Proxy",
      address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      default: true,
    },
    {
      parentSymbol: "WETH",
      description: "Wrapped Ether",
      symbol: "WETH.e",
      name: "Wrapped Ether",
      comment:
        "Native ETH bridged from Ethereum. Likely bridged by Polygon's FxPortal/Mapper.",
      contractName: "MaticWETH",
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      default: true,
    },
    {
      parentSymbol: "DAI",
      description: "Dai Stablecoin",
      symbol: "DAI.e",
      name: "(PoS) Dai Stablecoin",
      comment:
        "Bridged DAI from Ethereum. Likely bridged by Polygon's FxPortal/Mapper.",
      contractName: "UChildERC20Proxy",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      default: true,
    },
    {
      parentSymbol: "USDC",
      description: "Circle's USD Coin",
      symbol: "USDC.",
      name: "USD Coin",
      comment: "Native USDC by Circle.",
      contractName: "FiatTokenProxy",
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    },
    {
      parentSymbol: "USDC",
      description: "Circle's USD Coin",
      symbol: "USDC.e",
      name: "USD Coin (PoS)",
      comment:
        "Bridged USDC from Ethereum. Not issued by Circle. Likely bridged by Polygon's FxPortal/Mapper.",
      contractName: "UChildERC20Proxy",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      default: true,
    },
    {
      parentSymbol: "USDT",
      description: "Tether USD",
      symbol: "USDT.e",
      name: "(PoS) Tether USD",
      comment:
        "Bridged USDT from Ethereum. Not issued by Tether. Likely bridged by Polygon's FxPortal/Mapper.",
      contractName: "UChildERC20Proxy",
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      default: true,
    },
    {
      parentSymbol: "PxUSDC",
      description: "Test USDC deployed by Mangrove DAO",
      symbol: "PxUSDC.",
      name: "Pixie USDC",
      comment: "Test USDC deployed by Mangrove DAO",
      contractName: "PixieUSDC",
      address: "0xB70041dC246412E0DCE34bd788062E969276E737",
      default: true,
    },
    {
      parentSymbol: "PxMATIC",
      description: "Test MATIC deployed by Mangrove DAO",
      symbol: "PxMATIC.",
      name: "Pixie MATIC",
      comment: "Test MATIC deployed by Mangrove DAO",
      contractName: "PixieMATIC",
      address: "0xba6fBacEeeE55D2d657Eb26023C64002e23Af5E8",
      default: true,
    },
  ],
  [42161]: [
    {
      parentSymbol: "WETH",
      description: "Wrapped Ether",
      symbol: "WETH.e",
      name: "Wrapped Ether",
      comment: "WETH bridged from Ethereum using Arbitrum's canonical bridge.",
      contractName: "TransparentUpgradeableProxy",
      address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      default: true,
    },
    {
      parentSymbol: "DAI",
      description: "Dai Stablecoin",
      symbol: "DAI.e",
      name: "Dai Stablecoin",
      comment: "DAI bridged from Ethereum using Arbitrum's canonical bridge.",
      contractName: "Dai",
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      default: true,
    },
    {
      parentSymbol: "USDC",
      description: "Circle's USD Coin",
      symbol: "USDC.",
      name: "USD Coin",
      comment: "Native USDC by Circle.",
      contractName: "FiatTokenProxy",
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      default: true,
    },
    {
      parentSymbol: "USDC",
      description: "Circle's USD Coin",
      symbol: "USDC.e",
      name: "USD Coin",
      comment: "USDC bridged from Ethereum using Arbitrum's canonical bridge.",
      contractName: "TransparentUpgradeableProxy",
      address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    },
    {
      parentSymbol: "USDT",
      description: "Tether USD",
      symbol: "USDT.e",
      name: "Tether USD",
      comment: "USDT bridged from Ethereum using Arbitrum's canonical bridge.",
      contractName: "TransparentUpgradeableProxy",
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      default: true,
    },
  ],
  [80001]: [
    {
      parentSymbol: "WBTC",
      description: "Wrapped BTC",
      symbol: "WBTC.T/AAVEv3",
      name: "WBTC",
      comment: "AAVE v3 testnet WBTC",
      contractName: "TestnetERC20",
      address: "0x2Fa2e7a6dEB7bb51B625336DBe1dA23511914a8A",
      default: true,
    },
    {
      parentSymbol: "WBTC",
      description: "Wrapped BTC",
      symbol: "WBTC.T/MGV",
      name: "Mangrove Tesnet WBTC token",
      comment: "Test WBTC deployed by Mangrove DAO",
      contractName: "TestToken",
      address: "0xf402f6197d979F0A4cba61596921a3d762520570",
    },
    {
      parentSymbol: "WETH",
      description: "Wrapped Ether",
      symbol: "WETH.T/MGV",
      name: "Mangrove Testnet WETH token",
      comment: "Test WETH deployed by Mangrove DAO",
      contractName: "TestToken",
      address: "0x406bF0fcE108dD8864627EC6816AaFF8336f8231",
      default: true,
    },
    {
      parentSymbol: "WMATIC",
      description: "Wrapped Matic",
      symbol: "WMATIC.T/MGV",
      name: "Mangrove Tesnet WMATIC token",
      comment: "Test WMATIC deployed by Mangrove DAO",
      contractName: "TestToken",
      address: "0x193163EeFfc795F9d573b171aB12cCDdE10392e8",
      default: true,
    },
    {
      parentSymbol: "DAI",
      description: "Dai Stablecoin",
      symbol: "DAI.T/AAVEv3",
      name: "Dai Stablecoin",
      comment: "AAVE v3 testnet DAI",
      contractName: "TestnetERC20",
      address: "0xc8c0Cf9436F4862a8F60Ce680Ca5a9f0f99b5ded",
      default: true,
    },
    {
      parentSymbol: "DAI",
      description: "Dai Stablecoin",
      symbol: "DAI.T/MGV",
      name: "Mangrove Testnet DAI token",
      comment: "Test DAI deployed by Mangrove DAO",
      contractName: "TestToken",
      address: "0x5b67e3fa6f8AF1ca80C78102B8c039a40B96689E",
    },
    {
      parentSymbol: "USDC",
      description: "Circle's USD Coin",
      symbol: "USDC.T/MGV",
      name: "Mangrove Testnet USDC token",
      comment: "Test USDC deployed by Mangrove DAO",
      contractName: "TestToken",
      address: "0xe9259C5B6936Ee6439654171AFd674b31a533985",
      default: true,
    },
    {
      parentSymbol: "USDT",
      description: "Tether USD",
      symbol: "USDT.T/MGV",
      name: "Mangrove Tesnet USDT token",
      comment: "Test USDT deployed by Mangrove DAO",
      contractName: "TestToken",
      address: "0xe8099699aa4A79d89dBD20A63C50b7d35ED3CD9e",
      default: true,
    },
    {
      parentSymbol: "CRV",
      description: "Curve DAO Token",
      symbol: "CRV.T/AAVEv3",
      name: "Curve DAO Token",
      comment: "AAVE v3 testnet CRV",
      contractName: "TestnetERC20",
      address: "0x2bbF1f48a678d2f7c291dc5F8fD04805D34F485f",
      default: true,
    },
  ],
} as const satisfies TokenConfig

type ComputedAddresses = typeof ERC20_ADDRESSES

type PossibleChains = keyof ComputedAddresses
type ParentSymbols = ComputedAddresses[PossibleChains][number]["parentSymbol"]
type ParentSymbolsForChain<TChain extends PossibleChains> =
  ComputedAddresses[TChain][number]["parentSymbol"]

type Unboxed<T> = T extends (infer U)[] ? U : T
type ConvertOrNever<T> = T extends never ? undefined : T

type TokenFromChainAndParentSymbol<
  TChain extends PossibleChains,
  TParentSymbol extends string = ParentSymbolsForChain<TChain>,
> = TParentSymbol extends ParentSymbolsForChain<TChain>
  ? ConvertOrNever<
      Extract<
        Unboxed<ComputedAddresses[TChain]>,
        { parentSymbol: TParentSymbol }
      >
    >
  : undefined

function getTokenWithParent<
  TChain extends PossibleChains,
  TParentSymbol extends string = ParentSymbolsForChain<TChain>,
>(
  chain: TChain,
  parentSymbol: TParentSymbol,
): TokenFromChainAndParentSymbol<TChain, TParentSymbol> {
  return ERC20_ADDRESSES[chain].find(
    (token) => token.parentSymbol === parentSymbol,
  ) as TokenFromChainAndParentSymbol<TChain, TParentSymbol>
}

type ChildSymbols = ComputedAddresses[PossibleChains][number]["symbol"]
type ChildSymbolsForChain<TChain extends PossibleChains> =
  ComputedAddresses[TChain][number]["symbol"]

type TokenFromChainAndChildSymbol<
  TChain extends PossibleChains,
  TChildSymbol extends string = ChildSymbolsForChain<TChain>,
> = TChildSymbol extends ChildSymbols
  ? ConvertOrNever<
      Extract<Unboxed<ComputedAddresses[TChain]>, { symbol: TChildSymbol }>
    >
  : undefined

function getTokenWithChild<
  TChain extends PossibleChains,
  TChildSymbol extends string = ChildSymbolsForChain<TChain>,
>(
  chain: TChain,
  childSymbol: TChildSymbol,
): TokenFromChainAndChildSymbol<TChain, TChildSymbol> {
  return ERC20_ADDRESSES[chain].find(
    (token) => token.symbol === childSymbol,
  ) as TokenFromChainAndChildSymbol<TChain, TChildSymbol>
}

type TokenFromChainAndSymbol<
  TChain extends PossibleChains,
  TSymbol extends string =
    | ParentSymbolsForChain<TChain>
    | ChildSymbolsForChain<TChain>,
> = TokenFromChainAndParentSymbol<TChain, TSymbol> extends undefined
  ? TokenFromChainAndChildSymbol<TChain, TSymbol>
  : TokenFromChainAndParentSymbol<TChain, TSymbol>

export function getTokenWithSymbol<
  TChain extends PossibleChains,
  TSymbol extends string =
    | ParentSymbolsForChain<TChain>
    | ChildSymbolsForChain<TChain>,
>(chain: TChain, symbol: TSymbol): TokenFromChainAndSymbol<TChain, TSymbol> {
  const result = (getTokenWithParent(chain, symbol) ??
    getTokenWithChild(chain, symbol)) as unknown as TokenFromChainAndSymbol<
    TChain,
    TSymbol
  >
  return result
}
