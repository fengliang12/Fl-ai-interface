import type React from 'react';
import { type ReactNode, createContext, useContext } from 'react';
import { type NETWORKS, type WalletState, useWallet } from '../hooks/useWallet';

interface WalletContextType extends WalletState {
  isConnecting: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchNetwork: (networkKey: keyof typeof NETWORKS) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const walletState = useWallet();
  return <WalletContext.Provider value={{ ...walletState }}>{children}</WalletContext.Provider>;
};

export default WalletProvider;

export const useWalletContext = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};
