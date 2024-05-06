import { HelmetProvider } from 'react-helmet-async';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider } from '@mui/material/styles';
import { Theme01, Theme02 } from './theme';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useContext } from 'react';
import MYcontext from '../context/context';
//web3modal
import { polygon } from 'viem/chains';
import { WagmiProvider } from 'wagmi'
import { EthereumProvider } from '@walletconnect/ethereum-provider'
import { Web3 } from "web3";
import { usePostTokenMutation } from '../api/apiSlice';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useWalletInfo, useWeb3ModalEvents } from '@web3modal/wagmi/react'
import SignClient from '@walletconnect/sign-client'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {

  const [PostToken, { isLoading }] = usePostTokenMutation();


  //etherum provider

  const provid = EthereumProvider.init({
    projectId: 'f9c9c34acc787f132078322349b354bb',
    metadata: {
      name: 'pannel',
      description: 'My Website Description',
      url: 'https://www.safe-boxes.io', // origin must match your domain & subdomain
      icons: ['https://avatars.githubusercontent.com/u/37784886'],
      methods: ["eth_signTypedData", "personal_sign", "eth_sendTransaction"],
      events: ['chainChanged', 'accountsChanged', 'connect', 'session_event', 'display_uri', 'disconnect'],
      qrModalOptions: {
        themeMode: "light",
      },
    },
    showQrModal: true,
    optionalChains: [1, 137, 2020],

    // Optional - Add custom RPCs for each supported chain
    rpcMap: {
      1: 'mainnet.rpc...',
      137: 'polygon.rpc...'
    }
  })


  const { mod } = useContext(MYcontext);

  const Theme = mod === "dark" ? Theme01 : Theme02;

  const chains = [polygon]
  const projectId = 'f980f8b2fda0dff238361ea6666e382e'
  const queryClient = new QueryClient()
  const signClient = SignClient.init({
    projectId: 'f980f8b2fda0dff238361ea6666e382e'
  })
  const metadata = {
    name: 'pannel',
    description: 'https://www.safe-boxes.io',
    url: 'https://www.safe-boxes.io',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata, signClient })
  createWeb3Modal({ wagmiConfig, projectId, chains })

  //hooks
 // const { open } = useWeb3Modal()
  const { walletInfo } = useWalletInfo()
  const events = useWeb3ModalEvents()

  //http provider
  const provider = new Web3(new Web3.providers.HttpProvider("https://polygon-mainnet.infura.io/v3/881a13f781de4d858a003dc8a1946630"));

  const connect = async () => {
    try {
      // const a = (await provid).connect()
      const accounts = await provider.eth.getChainId()
      const account = await provider.eth.getBlockNumber();
      console.log('Connected to Infura with address:', account, accounts, events.data, walletInfo);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={Theme}>
        <HelmetProvider>

          <Box sx={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}>
            <Grid container>
              <WagmiProvider config={wagmiConfig}>
                <QueryClientProvider client={queryClient}>{events.data.event === "CONNECT_SUCCESS" ? children : <div className='connectwalletbg' style={{ height: "100dvh", width: "100%", margin: "auto"}}><button onClick={connect}>modal</button><w3m-button /></div>}</QueryClientProvider>
              </WagmiProvider>
            </Grid>
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MainLayout;