export const MangroveABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "outbound_tkn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "inbound_tkn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "CleanComplete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "offersToBeCleaned",
        type: "uint256",
      },
    ],
    name: "CleanStart",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Credit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Debit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Kill",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NewMgv",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerWants",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerGives",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "penalty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "mgvData",
        type: "bytes32",
      },
    ],
    name: "OfferFail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerWants",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerGives",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "penalty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "mgvData",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "posthookData",
        type: "bytes32",
      },
    ],
    name: "OfferFailWithPosthookData",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "deprovision",
        type: "bool",
      },
    ],
    name: "OfferRetract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerWants",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerGives",
        type: "uint256",
      },
    ],
    name: "OfferSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerWants",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerGives",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "posthookData",
        type: "bytes32",
      },
    ],
    name: "OfferSuccessWithPosthookData",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "tick",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gives",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasprice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasreq",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "OfferWrite",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "OrderComplete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "Tick",
        name: "maxTick",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fillVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "fillWants",
        type: "bool",
      },
    ],
    name: "OrderStart",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "outbound_tkn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "inbound_tkn",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tickSpacing",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "SetActive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SetDensity96X32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SetFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "offer_gasbase",
        type: "uint256",
      },
    ],
    name: "SetGasbase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SetGasmax",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SetGasprice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "SetGovernance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SetMaxGasreqForFailingOffers",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SetMaxRecursionDepth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "SetMonitor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "SetNotify",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "SetUseOracle",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "density96X32",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offer_gasbase",
        type: "uint256",
      },
    ],
    name: "activate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "outbound_tkn",
        type: "address",
      },
      {
        internalType: "address",
        name: "inbound_tkn",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "outbound_tkn",
        type: "address",
      },
      {
        internalType: "address",
        name: "inbound_tkn",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
    ],
    name: "best",
    outputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "offerId",
            type: "uint256",
          },
          {
            internalType: "Tick",
            name: "tick",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "gasreq",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takerWants",
            type: "uint256",
          },
        ],
        internalType: "struct MgvLib.CleanTarget[]",
        name: "targets",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
    ],
    name: "cleanByImpersonation",
    outputs: [
      {
        internalType: "uint256",
        name: "successes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
    ],
    name: "config",
    outputs: [
      {
        internalType: "Global",
        name: "_global",
        type: "uint256",
      },
      {
        internalType: "Local",
        name: "_local",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
    ],
    name: "deactivate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "outbound_tkn",
                type: "address",
              },
              {
                internalType: "address",
                name: "inbound_tkn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tickSpacing",
                type: "uint256",
              },
            ],
            internalType: "struct OLKey",
            name: "olKey",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "offerId",
            type: "uint256",
          },
          {
            internalType: "Offer",
            name: "offer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takerWants",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takerGives",
            type: "uint256",
          },
          {
            internalType: "OfferDetail",
            name: "offerDetail",
            type: "uint256",
          },
          {
            internalType: "Global",
            name: "global",
            type: "uint256",
          },
          {
            internalType: "Local",
            name: "local",
            type: "uint256",
          },
        ],
        internalType: "struct MgvLib.SingleOrder",
        name: "sor",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
    ],
    name: "flashloan",
    outputs: [
      {
        internalType: "uint256",
        name: "gasused",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "makerData",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
    ],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "global",
    outputs: [
      {
        internalType: "Global",
        name: "_global",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "Tick",
        name: "tick",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "gasreq",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerWants",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
    ],
    name: "internalCleanByImpersonation",
    outputs: [
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "int256",
        name: "index",
        type: "int256",
      },
    ],
    name: "leafs",
    outputs: [
      {
        internalType: "Leaf",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "int256",
        name: "index",
        type: "int256",
      },
    ],
    name: "level1s",
    outputs: [
      {
        internalType: "Field",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "int256",
        name: "index",
        type: "int256",
      },
    ],
    name: "level2s",
    outputs: [
      {
        internalType: "Field",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "int256",
        name: "index",
        type: "int256",
      },
    ],
    name: "level3s",
    outputs: [
      {
        internalType: "Field",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
    ],
    name: "local",
    outputs: [
      {
        internalType: "Local",
        name: "_local",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
    ],
    name: "locked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "Tick",
        name: "maxTick",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "fillVolume",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fillWants",
        type: "bool",
      },
    ],
    name: "marketOrderByTick",
    outputs: [
      {
        internalType: "uint256",
        name: "takerGot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerGave",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePaid",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "Tick",
        name: "maxTick",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "fillVolume",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fillWants",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "maxGasreqForFailingOffers",
        type: "uint256",
      },
    ],
    name: "marketOrderByTickCustom",
    outputs: [
      {
        internalType: "uint256",
        name: "takerGot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerGave",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePaid",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "takerWants",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerGives",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fillWants",
        type: "bool",
      },
    ],
    name: "marketOrderByVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "takerGot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerGave",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePaid",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "Tick",
        name: "maxTick",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "fillVolume",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fillWants",
        type: "bool",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
    ],
    name: "marketOrderForByTick",
    outputs: [
      {
        internalType: "uint256",
        name: "takerGot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerGave",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePaid",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "takerWants",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerGives",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fillWants",
        type: "bool",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
    ],
    name: "marketOrderForByVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "takerGot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerGave",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePaid",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "Tick",
        name: "tick",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "gives",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasreq",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasprice",
        type: "uint256",
      },
    ],
    name: "newOfferByTick",
    outputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "wants",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gives",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasreq",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasprice",
        type: "uint256",
      },
    ],
    name: "newOfferByVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "offerData",
    outputs: [
      {
        internalType: "Offer",
        name: "offer",
        type: "uint256",
      },
      {
        internalType: "OfferDetail",
        name: "offerDetail",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "offerDetails",
    outputs: [
      {
        internalType: "OfferDetail",
        name: "offerDetail",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "offers",
    outputs: [
      {
        internalType: "Offer",
        name: "offer",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "olKeyHash",
        type: "bytes32",
      },
    ],
    name: "olKeys",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "outbound_tkn",
        type: "address",
      },
      {
        internalType: "address",
        name: "inbound_tkn",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deprovision",
        type: "bool",
      },
    ],
    name: "retractOffer",
    outputs: [
      {
        internalType: "uint256",
        name: "provision",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
    ],
    name: "root",
    outputs: [
      {
        internalType: "Field",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "density96X32",
        type: "uint256",
      },
    ],
    name: "setDensity96X32",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "offer_gasbase",
        type: "uint256",
      },
    ],
    name: "setGasbase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gasmax",
        type: "uint256",
      },
    ],
    name: "setGasmax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gasprice",
        type: "uint256",
      },
    ],
    name: "setGasprice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "governanceAddress",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxGasreqForFailingOffers",
        type: "uint256",
      },
    ],
    name: "setMaxGasreqForFailingOffers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxRecursionDepth",
        type: "uint256",
      },
    ],
    name: "setMaxRecursionDepth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "monitor",
        type: "address",
      },
    ],
    name: "setMonitor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "notify",
        type: "bool",
      },
    ],
    name: "setNotify",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "useOracle",
        type: "bool",
      },
    ],
    name: "setUseOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "Tick",
        name: "tick",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "gives",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasreq",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasprice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "updateOfferByTick",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "outbound_tkn",
            type: "address",
          },
          {
            internalType: "address",
            name: "inbound_tkn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
        ],
        internalType: "struct OLKey",
        name: "olKey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "wants",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gives",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasreq",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasprice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "updateOfferByVolume",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "noRevert",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
