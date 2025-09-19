import { CardGiftcard, Send } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, Divider, Paper, Typography } from '@mui/material';
import { ethers } from 'ethers';
import { useAtom } from 'jotai';
import { useState } from 'react';
import type React from 'react';
import RedPacketContract from '../abis/RedPacket';
import { useWalletContext } from '../contexts/WalletContext';
import { redPacketContractAtom } from './AddRedPacket';

import { BigNumber } from '@ethersproject/bignumber';

const RED_PACKET_ADDRESS = '0x8e65E1433Dc78a2DE1E9e0F0358C9C03f7133c99';
const zero = BigNumber.from('0');
const RedPacketABI = RedPacketContract.abi;

const SendRedPacket: React.FC = () => {
  const { isConnected, signer, provider, address } = useWalletContext();

  const [redPacketState, setRedPacketState] = useAtom(redPacketContractAtom);
  const [error, setError] = useState<string | null>(null);
  const [isDepositing, setIsDepositing] = useState<boolean>(false);
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

  /**
   * 设置红包监听器
   * @returns
   */
  // 事件监听辅助函数
  const setupAlreadyEventListener = (contract: ethers.Contract) => {
    let alreadyEventTriggered = false;
    let eventListenerActive = true;

    const handleAlreadyEvent = (sender: string) => {
      if (sender.toLowerCase() === address?.toLowerCase() && eventListenerActive) {
        alreadyEventTriggered = true;
        setError('您已经抢过红包了（事件监听检测到）~');
      }
    };

    contract.on('Already', handleAlreadyEvent);

    return {
      isTriggered: () => alreadyEventTriggered,
      cleanup: () => {
        eventListenerActive = false;
        contract.off('Already', handleAlreadyEvent);
        console.log('✅ 事件监听器清理完成');
      },
    };
  };

  // 检查交易日志中的Already事件
  const checkAlreadyEventInLogs = (contract: ethers.Contract, transactionReceipt: any) => {
    for (const log of transactionReceipt.logs) {
      try {
        const parsedLog = contract.interface.parseLog(log);
        if (parsedLog?.name === 'Already') {
          const eventSender = parsedLog.args?.sender;
          if (eventSender && eventSender.toLowerCase() === address?.toLowerCase()) {
            setError('您已经抢过红包了（交易日志检测到）~');
            return true;
          }
        }
      } catch (error) {
        console.log('❌ 解析日志出错:', error);
      }
    }
    return false;
  };

  /**
   * 抢红包
   * @returns
   */
  const getRedPacket = async () => {
    setIsDepositing(true);
    setError(null);
    setSuccess(null);

    try {
      const contract = new ethers.Contract(RED_PACKET_ADDRESS!, RedPacketABI, signer);
      const _count = await contract.count();
      if (_count == zero) {
        setError('红包已抢完~');
        return;
      }

      // 设置事件监听
      const eventListener = setupAlreadyEventListener(contract);

      try {
        const tx = await contract.sendRedPacket();

        const transactionReceipt = await provider?.waitForTransaction(tx.hash);

        if (transactionReceipt?.status === 1) {
          // 等待事件处理
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // 检查事件监听结果
          if (eventListener.isTriggered()) {
            console.log('🎯 实时事件监听检测到Already事件');
          } else if (!checkAlreadyEventInLogs(contract, transactionReceipt)) {
            console.log('🎉 抢红包成功');
            setSuccess('抢红包成功，请查看余额！');
            getContractBalance();
          }
        } else {
          setError('交易失败，请重试');
        }
      } finally {
        eventListener.cleanup();
      }
    } catch (error: any) {
      if (error.reason === 'Already grabbed' || (error.message && error.message.includes('Already'))) {
        setError('您已经抢过红包了~');
      } else {
        setError(`抢红包失败: ${error.message || error.reason || error}`);
      }
    } finally {
      setIsDepositing(false);
    }
  };

  return (
    <Paper className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <CardGiftcard className="text-secondary-500 mb-4" sx={{ fontSize: 48 }} />
      <Typography variant="h6" className="mb-2 font-semibold">
        发红包
      </Typography>
      <Typography variant="body2" className="text-gray-600" style={{ marginBottom: '0px' }}>
        创建新的红包，与朋友分享快乐
      </Typography>

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
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={getRedPacket}
              disabled={!isConnected || isDepositing}
              startIcon={isDepositing ? <CircularProgress size={20} /> : <Send />}
            >
              {isDepositing ? '抢红包中...' : '抢红包'}
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default SendRedPacket;
