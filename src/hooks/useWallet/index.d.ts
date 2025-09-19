import type { ethers } from 'ethers';
import type { NETWORKS } from './config';
export interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
  chainId: string | null;
  account: string | null;
  networkName: string | null;
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  networks: typeof NETWORKS;
}
