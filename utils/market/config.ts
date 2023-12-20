import { Address, Hex, HttpTransport, PublicClient } from "viem";
import { OLKey } from "./lib/olkey";
import { MangroveLocalConfig } from "./preprocessed";
import { MangroveReaderABI } from "@/config/abis";

type Props = {
  publicClient: PublicClient<HttpTransport>;
  mangroveReader: Address;
}

export class ConfigCache {

  private client: PublicClient<HttpTransport>;
  private mangroveReader: Address;
  private cache: Map<Hex, MangroveLocalConfig> = new Map();

  constructor(connection: Props) {
    this.client = connection.publicClient;
    this.mangroveReader = connection.mangroveReader;
  }

  async getConfigFor(asksOlKey: OLKey): Promise<Record<"bids" | "asks", MangroveLocalConfig>> {
    const bidsOlKey = asksOlKey.fliped();

    const bidsHash = bidsOlKey.hash();
    const asksHash = asksOlKey.hash();

    const bidsFromCache = this.cache.get(bidsHash);
    const asksFromCache = this.cache.get(asksHash);
    if (bidsFromCache && asksFromCache) {
      return Promise.resolve({
        bids: bidsFromCache,
        asks: asksFromCache,
      })
    }

    return this.client.multicall({
      contracts: [
        { address: this.mangroveReader, abi: MangroveReaderABI, functionName: "localUnpacked", args: [asksOlKey] },
        { address: this.mangroveReader, abi: MangroveReaderABI, functionName: "localUnpacked", args: [bidsOlKey] },
      ],
      allowFailure: false,
    }).then(res => {
      this.cache.set(asksHash, res[0]);
      this.cache.set(bidsHash, res[1]);
      return {
        asks: res[0],
        bids: res[1],
      }
    })
  }
}