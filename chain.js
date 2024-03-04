export const blast = {
  id: 34443,
  name: 'Mode',
  network: 'Mode',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://mainnet.mode.network'] },
    default: { http: ['https://mainnet.mode.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'basescan', url: 'https://explorer.mode.network/' },
    default: { name: 'basescan', url: 'https://explorer.mode.network/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} 
