import { Address } from "viem"

export type NetworkToken = {
  parentSymbol: string
  displayedDecimals?: number
  displayedAsPriceDecimals?: number
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
      "parentSymbol": "WETH",
      "description": "Wrapped Ether",
      "symbol": "WETH.",
      "name": "Wrapped Ether",
      "comment": "",
      "contractName": "WETH9",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "default": true,
      displayedDecimals: 4,
      displayedAsPriceDecimals: 10,
    }
  ],
  [5]: [
    {
      "parentSymbol": "WETH",
      "description": "Wrapped Ether",
      "symbol": "WETH.",
      "name": "Wrapped Ether",
      "comment": "Unverified test WETH on Goerli.",
      "contractName": "",
      "address": "0x695364ffaa20f205e337f9e6226e5e22525838d9",
      "default": true,
      displayedDecimals: 4,
      displayedAsPriceDecimals: 10,
    },
    {
      "parentSymbol": "DAI",
      "description": "Dai Stablecoin",
      "symbol": "DAI.",
      "name": "Dai Stablecoin",
      "comment": "Test DAI on Goerli.",
      "contractName": "TestnetERC20",
      "address": "0xd77b79be3e85351ff0cbe78f1b58cf8d1064047c",
      "default": true
    },
    {
      "parentSymbol": "USDC",
      "description": "Circle's USD Coin",
      "symbol": "USDC.",
      "name": "USD Coin",
      "comment": "Unverified test USDC on Goerli.",
      "contractName": "",
      "address": "0x3a034fe373b6304f98b7a24a3f21c958946d4075",
      "default": true
    }
  ],
  [137]: [
    {
      "parentSymbol": "WBTC",
      "description": "Wrapped BTC",
      "symbol": "WBTC.e",
      "name": "(PoS) Wrapped BTC",
      "comment": "Bridged WBTC from Ethereum. Likely bridged by Polygon's FxPortal/Mapper.",
      "contractName": "UChildERC20Proxy",
      "address": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      "default": true,
      displayedDecimals: 6,
    },
    {
      "parentSymbol": "WETH",
      "description": "Wrapped Ether",
      "symbol": "WETH.e",
      "name": "Wrapped Ether",
      "comment": "Native ETH bridged from Ethereum. Likely bridged by Polygon's FxPortal/Mapper.",
      "contractName": "MaticWETH",
      "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      "default": true,
      displayedAsPriceDecimals: 10,
      displayedDecimals: 4
    },
    {
      "parentSymbol": "DAI",
      "description": "Dai Stablecoin",
      "symbol": "DAI.e",
      "name": "(PoS) Dai Stablecoin",
      "comment": "Bridged DAI from Ethereum. Likely bridged by Polygon's FxPortal/Mapper.",
      "contractName": "UChildERC20Proxy",
      "address": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      "default": true
    },
    {
      "parentSymbol": "USDC",
      "description": "Circle's USD Coin",
      "symbol": "USDC.",
      "name": "USD Coin",
      "comment": "Native USDC by Circle.",
      "contractName": "FiatTokenProxy",
      "address": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"
    },
    {
      "parentSymbol": "USDC",
      "description": "Circle's USD Coin",
      "symbol": "USDC.e",
      "name": "USD Coin (PoS)",
      "comment": "Bridged USDC from Ethereum. Not issued by Circle. Likely bridged by Polygon's FxPortal/Mapper.",
      "contractName": "UChildERC20Proxy",
      "address": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      "default": true
    },
    {
      "parentSymbol": "USDT",
      "description": "Tether USD",
      "symbol": "USDT.e",
      "name": "(PoS) Tether USD",
      "comment": "Bridged USDT from Ethereum. Not issued by Tether. Likely bridged by Polygon's FxPortal/Mapper.",
      "contractName": "UChildERC20Proxy",
      "address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "default": true
    },
    {
      "parentSymbol": "PxUSDC",
      "description": "Test USDC deployed by Mangrove DAO",
      "symbol": "PxUSDC.",
      "name": "Pixie USDC",
      "comment": "Test USDC deployed by Mangrove DAO",
      "contractName": "PixieUSDC",
      "address": "0xb70041dc246412e0dce34bd788062e969276e737",
      "default": true
    },
    {
      "parentSymbol": "PxMATIC",
      "description": "Test MATIC deployed by Mangrove DAO",
      "symbol": "PxMATIC.",
      "name": "Pixie MATIC",
      "comment": "Test MATIC deployed by Mangrove DAO",
      "contractName": "PixieMATIC",
      "address": "0xba6fbaceeee55d2d657eb26023c64002e23af5e8",
      "default": true
    }
  ],
  [42161]: [
    {
      "parentSymbol": "WETH",
      "description": "Wrapped Ether",
      "symbol": "WETH.e",
      "name": "Wrapped Ether",
      "comment": "WETH bridged from Ethereum using Arbitrum's canonical bridge.",
      "contractName": "TransparentUpgradeableProxy",
      "address": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      "default": true,
      displayedAsPriceDecimals: 10,
      displayedDecimals: 4,
    },
    {
      "parentSymbol": "DAI",
      "description": "Dai Stablecoin",
      "symbol": "DAI.e",
      "name": "Dai Stablecoin",
      "comment": "DAI bridged from Ethereum using Arbitrum's canonical bridge.",
      "contractName": "Dai",
      "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
      "default": true
    },
    {
      "parentSymbol": "USDC",
      "description": "Circle's USD Coin",
      "symbol": "USDC.",
      "name": "USD Coin",
      "comment": "Native USDC by Circle.",
      "contractName": "FiatTokenProxy",
      "address": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
      "default": true
    },
    {
      "parentSymbol": "USDC",
      "description": "Circle's USD Coin",
      "symbol": "USDC.e",
      "name": "USD Coin",
      "comment": "USDC bridged from Ethereum using Arbitrum's canonical bridge.",
      "contractName": "TransparentUpgradeableProxy",
      "address": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8"
    },
    {
      "parentSymbol": "USDT",
      "description": "Tether USD",
      "symbol": "USDT.e",
      "name": "Tether USD",
      "comment": "USDT bridged from Ethereum using Arbitrum's canonical bridge.",
      "contractName": "TransparentUpgradeableProxy",
      "address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
      "default": true
    }
  ],
  [80001]: [
    {
      "parentSymbol": "WBTC",
      "description": "Wrapped BTC",
      "symbol": "WBTC.T/AAVEv3",
      "name": "WBTC",
      "comment": "AAVE v3 testnet WBTC",
      "contractName": "TestnetERC20",
      "address": "0x2fa2e7a6deb7bb51b625336dbe1da23511914a8a",
      "default": true,
      displayedDecimals: 6,
    },
    {
      "parentSymbol": "WBTC",
      "description": "Wrapped BTC",
      "symbol": "WBTC.T/MGV",
      "name": "Mangrove Tesnet WBTC token",
      "comment": "Test WBTC deployed by Mangrove DAO",
      "contractName": "TestToken",
      "address": "0xf402f6197d979f0a4cba61596921a3d762520570",
      displayedDecimals: 6,
    },
    {
      "parentSymbol": "WETH",
      "description": "Wrapped Ether",
      "symbol": "WETH.T/MGV",
      "name": "Mangrove Testnet WETH token",
      "comment": "Test WETH deployed by Mangrove DAO",
      "contractName": "TestToken",
      "address": "0x406bf0fce108dd8864627ec6816aaff8336f8231",
      "default": true,
      displayedAsPriceDecimals: 10,
      displayedDecimals: 4,
    },
    {
      "parentSymbol": "WMATIC",
      "description": "Wrapped Matic",
      "symbol": "WMATIC.T/MGV",
      "name": "Mangrove Tesnet WMATIC token",
      "comment": "Test WMATIC deployed by Mangrove DAO",
      "contractName": "TestToken",
      "address": "0x193163eeffc795f9d573b171ab12ccdde10392e8",
      "default": true
    },
    {
      "parentSymbol": "DAI",
      "description": "Dai Stablecoin",
      "symbol": "DAI.T/AAVEv3",
      "name": "Dai Stablecoin",
      "comment": "AAVE v3 testnet DAI",
      "contractName": "TestnetERC20",
      "address": "0xc8c0cf9436f4862a8f60ce680ca5a9f0f99b5ded",
      "default": true
    },
    {
      "parentSymbol": "DAI",
      "description": "Dai Stablecoin",
      "symbol": "DAI.T/MGV",
      "name": "Mangrove Testnet DAI token",
      "comment": "Test DAI deployed by Mangrove DAO",
      "contractName": "TestToken",
      "address": "0x5b67e3fa6f8af1ca80c78102b8c039a40b96689e"
    },
    {
      "parentSymbol": "USDC",
      "description": "Circle's USD Coin",
      "symbol": "USDC.T/MGV",
      "name": "Mangrove Testnet USDC token",
      "comment": "Test USDC deployed by Mangrove DAO",
      "contractName": "TestToken",
      "address": "0xe9259c5b6936ee6439654171afd674b31a533985",
      "default": true
    },
    {
      "parentSymbol": "USDT",
      "description": "Tether USD",
      "symbol": "USDT.T/MGV",
      "name": "Mangrove Tesnet USDT token",
      "comment": "Test USDT deployed by Mangrove DAO",
      "contractName": "TestToken",
      "address": "0xe8099699aa4a79d89dbd20a63c50b7d35ed3cd9e",
      "default": true
    },
    {
      "parentSymbol": "CRV",
      "description": "Curve DAO Token",
      "symbol": "CRV.T/AAVEv3",
      "name": "Curve DAO Token",
      "comment": "AAVE v3 testnet CRV",
      "contractName": "TestnetERC20",
      "address": "0x2bbf1f48a678d2f7c291dc5f8fd04805d34f485f",
      "default": true
    }
  ]
} as const satisfies TokenConfig

type ComputedAddresses = typeof ERC20_ADDRESSES

// All possible chains
type PossibleChains = keyof ComputedAddresses

// All possible parent symbols for given chain
// if not determined then use NetworkToken["parentSymbol"]
type ParentSymbolsForChain<TChain extends number = PossibleChains> =
  TChain extends PossibleChains ?
  ComputedAddresses[TChain][number]["parentSymbol"]
  : NetworkToken["parentSymbol"]

// utility types
type Unboxed<T> = T extends (infer U)[] ? U : T
type ConvertOrNever<T> = T extends never ? undefined : T

// Get token from chain and parent symbol
// if chain and parent symbol are not determined then use NetworkToken or undefined
type TokenFromChainAndParentSymbol<
  TChain extends number = PossibleChains,
  TParentSymbol extends string = ParentSymbolsForChain<TChain>,
> = TParentSymbol extends ParentSymbolsForChain<TChain>
  ? TChain extends PossibleChains ? ConvertOrNever<
    Extract<
      Unboxed<ComputedAddresses[TChain]>,
      { parentSymbol: TParentSymbol }
    >
  > : (NetworkToken | undefined)
  : (NetworkToken | undefined)

function isDefinedChain(chain: number): chain is PossibleChains {
  return chain in ERC20_ADDRESSES
}

function getTokenWithParent<
  TChain extends number = PossibleChains,
  TParentSymbol extends string = ParentSymbolsForChain<TChain>,
>(
  chain: TChain,
  parentSymbol: TParentSymbol,
): TokenFromChainAndParentSymbol<TChain, TParentSymbol> {
  if (!isDefinedChain(chain)) return undefined as TokenFromChainAndParentSymbol<TChain, TParentSymbol>;
  return ERC20_ADDRESSES[chain].find(
    (token) => token.parentSymbol === parentSymbol,
  ) as TokenFromChainAndParentSymbol<TChain, TParentSymbol>
}

const test = getTokenWithParent(137, "USDCe")

type ChildSymbolsForChain<TChain extends number = PossibleChains> =
  TChain extends PossibleChains ?
  ComputedAddresses[TChain][number]["symbol"]
  : NetworkToken["symbol"]

type TokenFromChainAndChildSymbol<
  TChain extends number = PossibleChains,
  TChildSymbol extends string = ChildSymbolsForChain<TChain>,
> = TChain extends PossibleChains ? TChildSymbol extends ChildSymbolsForChain<TChain>
? ConvertOrNever<
  Extract<Unboxed<ComputedAddresses[TChain]>, { symbol: TChildSymbol }>
>
: NetworkToken | undefined : NetworkToken | undefined

function getTokenWithChild<
  TChain extends number = PossibleChains,
  TChildSymbol extends string = ChildSymbolsForChain<TChain>,
>(
  chain: TChain,
  childSymbol: TChildSymbol,
): TokenFromChainAndChildSymbol<TChain, TChildSymbol> {
  if (!isDefinedChain(chain)) return undefined as TokenFromChainAndChildSymbol<TChain, TChildSymbol>;
  return ERC20_ADDRESSES[chain].find(
    (token) => token.symbol === childSymbol,
  ) as TokenFromChainAndChildSymbol<TChain, TChildSymbol>
}

type TokenFromChainAndSymbol<
  TChain extends number = PossibleChains,
  TSymbol extends string =
  | ParentSymbolsForChain<TChain>
  | ChildSymbolsForChain<TChain>,
> = TokenFromChainAndParentSymbol<TChain, TSymbol> & TokenFromChainAndChildSymbol<TChain, TSymbol>

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


type PossibleChainAddresses<TChain extends number = PossibleChains> =
  TChain extends PossibleChains ?
  ComputedAddresses[TChain][number]["address"]
  : Address

type TokenFromChainAndAddress<
  TChain extends number = PossibleChains,
  TAddress extends string = PossibleChainAddresses<TChain>,
> = TAddress extends PossibleChainAddresses<TChain>
  ? TChain extends PossibleChains ? ConvertOrNever<
    Extract<
      Unboxed<ComputedAddresses[TChain]>,
      { address: Lowercase<TAddress> }
    >
  > : NetworkToken | undefined
  : NetworkToken | undefined

export function getTokenFromChainAndAddress<
  TChain extends number = PossibleChains,
  TAddress extends string = PossibleChainAddresses<TChain>,
>(chain: TChain, address: TAddress): TokenFromChainAndAddress<TChain, TAddress> {
  if (!isDefinedChain(chain)) return undefined as TokenFromChainAndAddress<TChain, TAddress>;
  return ERC20_ADDRESSES[chain].find(
    (token) => token.address.toLowerCase() === address.toLowerCase(),
  ) as TokenFromChainAndAddress<TChain, TAddress>
}

export function getTokenDisplayedDecimals<
  TChain extends number = PossibleChains,
  TAddress extends (string | undefined) = PossibleChainAddresses<TChain>,
>(
  chain: TChain,
  address: TAddress,
): number {
  if (!address) return 2;
  const token = getTokenFromChainAndAddress(chain, address)
  if (!token) return 2;
  if ("displayedDecimals" in token) return token.displayedDecimals || 2;
  return 2;
}

export function getTokenDisplayedAsPriceDecimals<
  TChain extends number = PossibleChains,
  TAddress extends (string | undefined) = PossibleChainAddresses<TChain>,
>(
  chain: TChain,
  address: TAddress,
): number {
  if (!address) return 6;
  const token = getTokenFromChainAndAddress(chain, address)
  if (!token) return 6;
  if ("displayedAsPriceDecimals" in token) return token.displayedAsPriceDecimals || 2;
  return 6;
}