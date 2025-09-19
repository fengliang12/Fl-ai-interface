import {
  AccountCircle as AccountCircleIcon,
  ContentCopy as ContentCopyIcon,
  ExpandMore as ExpandMoreIcon,
  Wallet as WalletIcon,
} from '@mui/icons-material';
import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useWalletContext } from '../contexts/WalletContext';
import type { NETWORKS } from '../hooks';
import { formatDisplayName, useENS } from '../hooks/useENS';

const TopInfo: React.FC = () => {
  const {
    isConnected,
    address,
    balance,
    networkName,
    chainId,
    isConnecting,
    error: walletError,
    connectWallet,
    disconnectWallet,
    switchNetwork,
    networks,
    provider,
  } = useWalletContext();
  // ENS解析
  const { ensName, ensAvatar, isLoading: ensLoading } = useENS(address, provider);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [networkAnchorEl, setNetworkAnchorEl] = React.useState<null | HTMLElement>(null);

  /**
   * 打开用户菜单
   * @param event
   */
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * 关闭用户菜单
   */
  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  /**
   * 打开网络菜单
   * @param event
   */
  const handleNetworkMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNetworkAnchorEl(event.currentTarget);
  };

  /**
   * 关闭网络菜单
   */
  const handleNetworkMenuClose = () => {
    setNetworkAnchorEl(null);
  };

  /**
   * 切换网络
   * @param networkKey
   */
  const handleNetworkSwitch = async (networkKey: keyof typeof NETWORKS) => {
    await switchNetwork(networkKey);
    handleNetworkMenuClose();
  };

  /**
   * 复制地址
   */
  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  // 格式化显示名称（优先显示ENS域名）
  const displayName: string = useMemo(() => {
    return formatDisplayName(address, ensName);
  }, [address, ensName]);

  // 余额
  const formatBalance: string = useMemo(() => {
    if (!balance) return '0';
    return Number.parseFloat(balance).toFixed(4);
  }, [balance]);

  return (
    <>
      {/* 顶部导航栏 */}
      <AppBar position="static" className="bg-gray-100 text-gray-800">
        <Toolbar>
          <Typography variant="h6" component="div" className="flex-grow text-white">
            红包合约
          </Typography>

          {/* 错误提示 */}
          {walletError && (
            <Alert severity="error" className="mr-4 py-0">
              {walletError}
            </Alert>
          )}

          {/* 右侧用户信息 */}
          <Box className="flex items-center gap-4">
            {/* 网络选择 */}
            {isConnected && (
              <Button
                variant="contained"
                size="small"
                onClick={handleNetworkMenuOpen}
                endIcon={<ExpandMoreIcon />}
                className="min-w-[120px] normal-case border-gray-300 text-gray-800"
              >
                {networkName || 'Unknown'}
              </Button>
            )}

            {/* 钱包连接状态 */}
            {!isConnected ? (
              <Button
                variant="contained"
                startIcon={isConnecting ? <CircularProgress size={16} /> : <WalletIcon />}
                onClick={connectWallet}
                disabled={isConnecting}
                className="normal-case"
                data-testid="connect-wallet-button"
              >
                {isConnecting ? '连接中...' : '连接钱包'}
              </Button>
            ) : (
              <>
                {/* 余额显示 */}
                <Box className="flex flex-col items-center border border-gray-300 rounded p-2 min-w-[80px] bg-white">
                  <Typography variant="caption" className="text-gray-600">
                    余额
                  </Typography>
                  <Typography variant="body2" className="font-bold text-black">
                    {formatBalance} ETH
                  </Typography>
                </Box>

                {/* 用户头像和地址 */}
                <Button
                  onClick={handleUserMenuOpen}
                  className="flex items-center gap-2 normal-case text-gray-800"
                  data-testid="wallet-info-button"
                >
                  <Avatar className="w-8 h-8" src={ensAvatar || undefined}>
                    {!ensAvatar && <AccountCircleIcon />}
                  </Avatar>
                  <Box className="flex flex-col items-start">
                    <Typography variant="body2" className="font-bold text-black">
                      {ensLoading ? '解析中...' : displayName}
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      {ensName ? '已连接 (ENS)' : '已连接'}
                    </Typography>
                  </Box>
                  <ExpandMoreIcon />
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* 网络选择菜单 */}
      <Menu
        anchorEl={networkAnchorEl}
        open={Boolean(networkAnchorEl)}
        onClose={handleNetworkMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {Object.entries(networks).map(([key, network]) => (
          <MenuItem
            key={key}
            onClick={() => handleNetworkSwitch(key as keyof typeof NETWORKS)}
            selected={chainId === network.chainId}
          >
            <ListItemText primary={network.chainName} />
          </MenuItem>
        ))}
      </Menu>

      {/* 用户菜单 */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleUserMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={copyAddress}>
          <ContentCopyIcon className="mr-2" />
          <ListItemText primary="复制地址" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={disconnectWallet}>
          <ListItemText primary="断开连接" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default TopInfo;
