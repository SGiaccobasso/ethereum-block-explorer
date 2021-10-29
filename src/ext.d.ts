import { ethers } from 'ethers';
export declare global {
  interface Window {
    ethereum: any;
    provider: ethers.providers.Web3Provider;
  }
}
