import type { ethers } from 'ethers';
import { useEffect, useState } from 'react';

interface ENSResult {
  ensName: string | null;
  ensAvatar: string | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * ENS域名解析Hook
 * @param address 钱包地址
 * @param provider ethers provider
 * @returns ENS解析结果
 */
export const useENS = (
  address: string | null,
  provider: ethers.BrowserProvider | null
): ENSResult => {
  const [ensName, setEnsName] = useState<string | null>(null);
  const [ensAvatar, setEnsAvatar] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolveENS = async () => {
      if (!address || !provider) {
        setEnsName(null);
        setEnsAvatar(null);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // 反向解析地址到ENS域名
        const name = await provider.lookupAddress(address);
        setEnsName(name);

        // 如果有ENS域名，尝试获取头像
        if (name) {
          try {
            // 获取ENS域名的解析器
            const resolver = await provider.getResolver(name);
            if (resolver) {
              // 尝试获取头像
              const avatar = await resolver.getAvatar();
              setEnsAvatar(avatar || null);
            }
          } catch (avatarErr) {
            console.log('ENS头像解析失败:', avatarErr);
            setEnsAvatar(null);
          }
        } else {
          setEnsAvatar(null);
        }
      } catch (err) {
        console.log('ENS解析失败:', err);
        setError('ENS解析失败');
        setEnsName(null);
        setEnsAvatar(null);
      } finally {
        setIsLoading(false);
      }
    };

    resolveENS();
  }, [address, provider]);

  return { ensName, ensAvatar, isLoading, error };
};

/**
 * 格式化显示名称（优先显示ENS域名，否则显示格式化地址）
 * @param address 钱包地址
 * @param ensName ENS域名
 * @returns 格式化的显示名称
 */
export const formatDisplayName = (
  address: string | null,
  ensName: string | null
): string => {
  if (!address) return '';

  // 如果有ENS域名，优先显示ENS域名
  if (ensName) {
    return ensName;
  }

  // 否则显示格式化的地址
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
