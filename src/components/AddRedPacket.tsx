import { AccountBalanceWallet, Send } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControlLabel,
  Paper,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import { ethers } from 'ethers';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import RedPacketContract from '../abis/RedPacket';
import { useWalletContext } from '../contexts/WalletContext';

const RED_PACKET_ADDRESS = '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99';
const RedPacketABI = RedPacketContract.abi;

export const redPacketContractAtom = atom({
  count: '',
  isEqual: true,
  balance: '',
  address: '',
});

const AddRedPacket = () => {
  const { isConnected, signer } = useWalletContext();

  const [redPacketState, setRedPacketState] = useAtom(redPacketContractAtom);

  const [redPacketCount, setRedPacketCount] = useState<string>('');
  const [isEqualAmount, setIsEqualAmount] = useState<boolean>(true);
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [isDepositing, setIsDepositing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  /**
   * 获取合约信息
   * @returns
   */
  const getContractBalance = async () => {
    if (!signer) return;
    try {
      const contract = new ethers.Contract(RED_PACKET_ADDRESS!, RedPacketABI, signer);
      const balance = await contract.getBalance();
      const count = await contract.count();
      const isEqual = await contract.isEqual();

      // 获取合约信息，保存到状态中
      setRedPacketState({
        ...redPacketState,
        count: ethers.formatUnits(count, 0),
        address: RED_PACKET_ADDRESS!,
        isEqual: isEqual,
        balance: ethers.formatEther(balance),
      });
    } catch (err) {
      console.error('获取合约余额失败:', err);
    }
  };

  useEffect(() => {
    if (isConnected && signer) {
      getContractBalance();
    }
  }, [isConnected, signer]);

  /**
   * 充值红包
   * @returns
   */
  const handleDeposit = async () => {
    if (!signer || !redPacketCount || !depositAmount) {
      setError('请填写完整信息');
      return;
    }

    const count = Number.parseInt(redPacketCount);
    const amount = Number.parseFloat(depositAmount);

    if (count <= 0 || amount <= 0) {
      setError('红包数量和充值金额必须大于0');
      return;
    }

    setIsDepositing(true);
    setError(null);
    setSuccess(null);

    try {
      const contract = new ethers.Contract(RED_PACKET_ADDRESS!, RedPacketABI, signer);
      // 调用充值合约方法
      const tx = await contract.deposit(count, isEqualAmount, {
        value: ethers.parseEther(depositAmount),
      });

      await tx.wait();
      setSuccess(`成功充值 ${depositAmount} ETH，创建 ${count} 个红包！`);

      // 重新获取合约余额
      await getContractBalance();

      // 清空表单
      setRedPacketCount('');
      setDepositAmount('');
    } catch (err: any) {
      if (err.code === 4001) {
        setError('用户取消了交易');
      } else if (err.message?.includes('insufficient funds')) {
        setError('余额不足');
      } else {
        setError('充值失败，请重试');
      }
    } finally {
      setIsDepositing(false);
    }
  };

  return (
    <Paper className="p-6 hover:shadow-lg transition-shadow duration-300">
      <Box className="text-center mb-6">
        <AccountBalanceWallet className="text-primary-500 mb-2" sx={{ fontSize: 48 }} />
        <Typography variant="h5" className="mb-2 font-semibold">
          红包充值
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" className="mb-4">
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" className="mb-4">
          {success}
        </Alert>
      )}

      {!isConnected ? (
        <Box className="text-center">
          <Typography variant="h6" className="mb-4">
            请先连接钱包
          </Typography>
        </Box>
      ) : (
        <Box>
          <Divider className="mb-4" />
          <Box className="space-y-4">
            <TextField
              fullWidth
              label="红包数量"
              type="number"
              value={redPacketCount}
              onChange={(e) => setRedPacketCount(e.target.value)}
              placeholder="请输入红包数量"
              inputProps={{ min: 1 }}
            />

            <FormControlLabel
              control={
                <Switch checked={isEqualAmount} onChange={(e) => setIsEqualAmount(e.target.checked)} color="primary" />
              }
              label={isEqualAmount ? '等额发放' : '随机金额'}
            />

            <TextField
              fullWidth
              label="充值金额 (ETH)"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="请输入充值金额"
              inputProps={{ min: 0, step: 0.001 }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleDeposit}
              disabled={isDepositing || !redPacketCount || !depositAmount}
              startIcon={isDepositing ? <CircularProgress size={20} /> : <Send />}
            >
              {isDepositing ? '充值中...' : '充值红包'}
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default AddRedPacket;
