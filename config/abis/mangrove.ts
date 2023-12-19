export const MangroveABI = [
  {
    "type": "constructor",
    "inputs": [
      { "name": "mgv", "type": "address", "internalType": "address" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "MGV",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "address", "internalType": "contract IMangrove" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "configInfo",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "_global",
        "type": "tuple",
        "internalType": "struct GlobalUnpacked",
        "components": [
          { "name": "monitor", "type": "address", "internalType": "address" },
          { "name": "useOracle", "type": "bool", "internalType": "bool" },
          { "name": "notify", "type": "bool", "internalType": "bool" },
          {
            "name": "gasprice",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "gasmax", "type": "uint256", "internalType": "uint256" },
          { "name": "dead", "type": "bool", "internalType": "bool" },
          {
            "name": "maxRecursionDepth",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "maxGasreqForFailingOffers",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_local",
        "type": "tuple",
        "internalType": "struct LocalUnpacked",
        "components": [
          { "name": "active", "type": "bool", "internalType": "bool" },
          { "name": "fee", "type": "uint256", "internalType": "uint256" },
          { "name": "density", "type": "uint256", "internalType": "Density" },
          {
            "name": "binPosInLeaf",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "level3", "type": "uint256", "internalType": "Field" },
          { "name": "level2", "type": "uint256", "internalType": "Field" },
          { "name": "level1", "type": "uint256", "internalType": "Field" },
          { "name": "root", "type": "uint256", "internalType": "Field" },
          {
            "name": "kilo_offer_gasbase",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "lock", "type": "bool", "internalType": "bool" },
          { "name": "last", "type": "uint256", "internalType": "uint256" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getFee",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "outVolume", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProvision",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "ofr_gasreq", "type": "uint256", "internalType": "uint256" },
      { "name": "ofr_gasprice", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProvisionWithDefaultGasPrice",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "ofr_gasreq", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "globalUnpacked",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct GlobalUnpacked",
        "components": [
          { "name": "monitor", "type": "address", "internalType": "address" },
          { "name": "useOracle", "type": "bool", "internalType": "bool" },
          { "name": "notify", "type": "bool", "internalType": "bool" },
          {
            "name": "gasprice",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "gasmax", "type": "uint256", "internalType": "uint256" },
          { "name": "dead", "type": "bool", "internalType": "bool" },
          {
            "name": "maxRecursionDepth",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "maxGasreqForFailingOffers",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isEmptyOB",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isMarketOpen",
    "inputs": [
      {
        "name": "market",
        "type": "tuple",
        "internalType": "struct Market",
        "components": [
          { "name": "tkn0", "type": "address", "internalType": "address" },
          { "name": "tkn1", "type": "address", "internalType": "address" },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "localUnpacked",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct LocalUnpacked",
        "components": [
          { "name": "active", "type": "bool", "internalType": "bool" },
          { "name": "fee", "type": "uint256", "internalType": "uint256" },
          { "name": "density", "type": "uint256", "internalType": "Density" },
          {
            "name": "binPosInLeaf",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "level3", "type": "uint256", "internalType": "Field" },
          { "name": "level2", "type": "uint256", "internalType": "Field" },
          { "name": "level1", "type": "uint256", "internalType": "Field" },
          { "name": "root", "type": "uint256", "internalType": "Field" },
          {
            "name": "kilo_offer_gasbase",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "lock", "type": "bool", "internalType": "bool" },
          { "name": "last", "type": "uint256", "internalType": "uint256" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "marketConfig",
    "inputs": [
      {
        "name": "market",
        "type": "tuple",
        "internalType": "struct Market",
        "components": [
          { "name": "tkn0", "type": "address", "internalType": "address" },
          { "name": "tkn1", "type": "address", "internalType": "address" },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "config",
        "type": "tuple",
        "internalType": "struct MarketConfig",
        "components": [
          {
            "name": "config01",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          },
          {
            "name": "config10",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "minVolume",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "gasreq", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "minusFee",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "outVolume", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nextOfferId",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "offer", "type": "uint256", "internalType": "Offer" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nextOfferIdById",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "offerId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "numOpenMarkets",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "offerInfo",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "offerId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      {
        "name": "offer",
        "type": "tuple",
        "internalType": "struct OfferUnpacked",
        "components": [
          { "name": "prev", "type": "uint256", "internalType": "uint256" },
          { "name": "next", "type": "uint256", "internalType": "uint256" },
          { "name": "tick", "type": "int256", "internalType": "Tick" },
          { "name": "gives", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "name": "offerDetail",
        "type": "tuple",
        "internalType": "struct OfferDetailUnpacked",
        "components": [
          { "name": "maker", "type": "address", "internalType": "address" },
          { "name": "gasreq", "type": "uint256", "internalType": "uint256" },
          {
            "name": "kilo_offer_gasbase",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "gasprice", "type": "uint256", "internalType": "uint256" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "offerList",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "fromId", "type": "uint256", "internalType": "uint256" },
      { "name": "maxOffers", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "", "type": "uint256", "internalType": "uint256" },
      { "name": "", "type": "uint256[]", "internalType": "uint256[]" },
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct OfferUnpacked[]",
        "components": [
          { "name": "prev", "type": "uint256", "internalType": "uint256" },
          { "name": "next", "type": "uint256", "internalType": "uint256" },
          { "name": "tick", "type": "int256", "internalType": "Tick" },
          { "name": "gives", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct OfferDetailUnpacked[]",
        "components": [
          { "name": "maker", "type": "address", "internalType": "address" },
          { "name": "gasreq", "type": "uint256", "internalType": "uint256" },
          {
            "name": "kilo_offer_gasbase",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "gasprice", "type": "uint256", "internalType": "uint256" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "offerListEndPoints",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "fromId", "type": "uint256", "internalType": "uint256" },
      { "name": "maxOffers", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "startId", "type": "uint256", "internalType": "uint256" },
      { "name": "length", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "openMarkets",
    "inputs": [
      { "name": "from", "type": "uint256", "internalType": "uint256" },
      { "name": "maxLen", "type": "uint256", "internalType": "uint256" },
      { "name": "withConfig", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [
      {
        "name": "markets",
        "type": "tuple[]",
        "internalType": "struct Market[]",
        "components": [
          { "name": "tkn0", "type": "address", "internalType": "address" },
          { "name": "tkn1", "type": "address", "internalType": "address" },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "configs",
        "type": "tuple[]",
        "internalType": "struct MarketConfig[]",
        "components": [
          {
            "name": "config01",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          },
          {
            "name": "config10",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "openMarkets",
    "inputs": [
      { "name": "withConfig", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct Market[]",
        "components": [
          { "name": "tkn0", "type": "address", "internalType": "address" },
          { "name": "tkn1", "type": "address", "internalType": "address" },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct MarketConfig[]",
        "components": [
          {
            "name": "config01",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          },
          {
            "name": "config10",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "openMarkets",
    "inputs": [
      { "name": "from", "type": "uint256", "internalType": "uint256" },
      { "name": "maxLen", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      {
        "name": "markets",
        "type": "tuple[]",
        "internalType": "struct Market[]",
        "components": [
          { "name": "tkn0", "type": "address", "internalType": "address" },
          { "name": "tkn1", "type": "address", "internalType": "address" },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "configs",
        "type": "tuple[]",
        "internalType": "struct MarketConfig[]",
        "components": [
          {
            "name": "config01",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          },
          {
            "name": "config10",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "openMarkets",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct Market[]",
        "components": [
          { "name": "tkn0", "type": "address", "internalType": "address" },
          { "name": "tkn1", "type": "address", "internalType": "address" },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct MarketConfig[]",
        "components": [
          {
            "name": "config01",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          },
          {
            "name": "config10",
            "type": "tuple",
            "internalType": "struct LocalUnpacked",
            "components": [
              { "name": "active", "type": "bool", "internalType": "bool" },
              { "name": "fee", "type": "uint256", "internalType": "uint256" },
              {
                "name": "density",
                "type": "uint256",
                "internalType": "Density"
              },
              {
                "name": "binPosInLeaf",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "level3",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level2",
                "type": "uint256",
                "internalType": "Field"
              },
              {
                "name": "level1",
                "type": "uint256",
                "internalType": "Field"
              },
              { "name": "root", "type": "uint256", "internalType": "Field" },
              {
                "name": "kilo_offer_gasbase",
                "type": "uint256",
                "internalType": "uint256"
              },
              { "name": "lock", "type": "bool", "internalType": "bool" },
              { "name": "last", "type": "uint256", "internalType": "uint256" }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "packedOfferList",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "fromId", "type": "uint256", "internalType": "uint256" },
      { "name": "maxOffers", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "", "type": "uint256", "internalType": "uint256" },
      { "name": "", "type": "uint256[]", "internalType": "uint256[]" },
      { "name": "", "type": "uint256[]", "internalType": "Offer[]" },
      { "name": "", "type": "uint256[]", "internalType": "OfferDetail[]" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "prevOfferId",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "offer", "type": "uint256", "internalType": "Offer" }
    ],
    "outputs": [
      { "name": "offerId", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "prevOfferIdById",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "offerId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "simulateMarketOrderByTick",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "maxTick", "type": "int256", "internalType": "Tick" },
      { "name": "fillVolume", "type": "uint256", "internalType": "uint256" },
      { "name": "fillWants", "type": "bool", "internalType": "bool" },
      { "name": "accumulate", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct VolumeData[]",
        "components": [
          {
            "name": "totalGot",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGave",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGasreq",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "simulateMarketOrderByTick",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "maxTick", "type": "int256", "internalType": "Tick" },
      { "name": "fillVolume", "type": "uint256", "internalType": "uint256" },
      { "name": "fillWants", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct VolumeData[]",
        "components": [
          {
            "name": "totalGot",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGave",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGasreq",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "simulateMarketOrderByVolume",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "takerWants", "type": "uint256", "internalType": "uint256" },
      { "name": "takerGives", "type": "uint256", "internalType": "uint256" },
      { "name": "fillWants", "type": "bool", "internalType": "bool" },
      { "name": "accumulate", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct VolumeData[]",
        "components": [
          {
            "name": "totalGot",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGave",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGasreq",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "simulateMarketOrderByVolume",
    "inputs": [
      {
        "name": "olKey",
        "type": "tuple",
        "internalType": "struct OLKey",
        "components": [
          {
            "name": "outbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "inbound_tkn",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      { "name": "takerWants", "type": "uint256", "internalType": "uint256" },
      { "name": "takerGives", "type": "uint256", "internalType": "uint256" },
      { "name": "fillWants", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct VolumeData[]",
        "components": [
          {
            "name": "totalGot",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGave",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "totalGasreq",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateMarket",
    "inputs": [
      {
        "name": "market",
        "type": "tuple",
        "internalType": "struct Market",
        "components": [
          { "name": "tkn0", "type": "address", "internalType": "address" },
          { "name": "tkn1", "type": "address", "internalType": "address" },
          {
            "name": "tickSpacing",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
] as const;