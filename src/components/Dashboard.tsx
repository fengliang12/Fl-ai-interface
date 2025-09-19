import { Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { redPacketContractAtom } from './AddRedPacket';
import React from 'react';

const Dashboard: React.FC = () => {
  const [redPacketState] = useAtom(redPacketContractAtom);

  return (
    <div className="Dashboard">
      <Typography variant="h5" className="!mb-6 font-semibold text-center">
        平台统计
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Paper className="p-4 text-center h-full">
          <Typography variant="h4" className="font-bold text-primary-600">
            {redPacketState?.count}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            总红包数
          </Typography>
        </Paper>
        <Paper className="p-4 text-center h-full">
          <Typography variant="h4" className="font-bold text-secondary-600">
            {redPacketState?.isEqual ? '是' : '否'}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            是否等额发放
          </Typography>
        </Paper>
        <Paper className="p-4 text-center h-full">
          <Typography variant="h4" className="font-bold text-green-600">
            {Number(redPacketState?.balance).toFixed(6)}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            总金额 (ETH)
          </Typography>
        </Paper>
        <Paper
          className="p-4 text-center h-full cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() =>
            window.open(
              `https://sepolia.etherscan.io/address/${redPacketState?.address}`,
              '_blank'
            )
          }
        >
          <Typography
            variant="h4"
            className="font-bold text-orange-600 hover:text-orange-700 transition-colors"
            title="点击查看合约详情"
          >
            {redPacketState?.address?.slice(0, 4)}...
            {redPacketState?.address?.slice(-4)}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            红包合约地址（点击查看）
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
