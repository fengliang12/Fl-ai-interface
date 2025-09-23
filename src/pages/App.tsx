import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import AddRedPacket from '@/components/AddRedPacket';
import Dashboard from '@/components/Dashboard';
import SendRedPacket from '@/components/SendRedPacket';
import TopInfo from '@/components/TopInfo';
import React from 'react';
import { useImmer } from '@fl/hooks';
import { ButtonCva } from '@fl/components';

const App: React.FC = () => {
  const [state, setState] = useImmer('1111');
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <AppBar position="static" elevation={0} className="bg-white border-b">
        <TopInfo></TopInfo>
      </AppBar>

      {/* 主要内容区域 */}
      <Container maxWidth="lg" className="py-8">
        {/* 欢迎卡片 */}
        <Card className="mb-8 bg-gradient-to-r text-black">
          <CardContent className="text-black">
            <Typography variant="h4" component="h1" className="mb-2 font-bold">
              欢迎使用红包应用 🧧{state}
              <ButtonCva></ButtonCva>
            </Typography>
            <Typography variant="body1" className="opacity-90">
              基于区块链技术的去中心化红包系统，安全、透明、公平
            </Typography>
          </CardContent>
        </Card>

        {/* 统计信息 */}
        <Box className="mt-8">
          <Dashboard></Dashboard>
        </Box>

        {/* 功能卡片网格 */}
        <Grid container spacing={4} className="mt-[100px]">
          {/* 钱包余额卡片 */}
          <Grid size={6}>
            <AddRedPacket></AddRedPacket>
          </Grid>

          {/* 发红包卡片 */}
          <Grid size={6}>
            <SendRedPacket></SendRedPacket>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
