function addressFormat(address: string): string {
  // console.log('地址', address.length);
  // 检查地址是否有效
  if (!address?.startsWith('0x')) {
    return '无效地址';
  }

  // 截取并格式化地址
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}
export { addressFormat };
