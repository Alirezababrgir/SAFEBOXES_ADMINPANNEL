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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { EthereumProvider } from '@walletconnect/ethereum-provider'
import {Web3} from "web3";

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {

  const provider = EthereumProvider.init({
    projectId: 'f9c9c34acc787f132078322349b354bb',
    metadata: {
      name: 'pannel',
      description: 'My Website Description',
      url: 'https://www.safe-boxes.io', // origin must match your domain & subdomain
      icons: ['https://avatars.githubusercontent.com/u/37784886'],
      methods: ["eth_signTypedData","personal_sign", "eth_sendTransaction"],
      events: ['chainChanged', 'accountsChanged', 'connect', 'session_event', 'display_uri', 'disconnect'],
      qrModalOptions: {
        themeMode: "light",
      },
    },
    showQrModal: true,
    optionalChains: [1, 137, 2020],

    /*Optional - Add custom RPCs for each supported chain*/
    rpcMap: {
      1: 'mainnet.rpc...',
      137: 'polygon.rpc...'
    }
  })

  const web3 = new Web3(window.ethereum );

  const { mod } = useContext(MYcontext);

  const Theme = mod === "dark" ? Theme01 : Theme02;

  var x = 0

  //web3modal


  // 0. Setup queryClient
  const queryClient = new QueryClient()
  console.log(queryClient)
  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = 'f9c9c34acc787f132078322349b354bb'

  // 2. Create wagmiConfig
  const metadata = {
    name: 'pannel',
    description: 'Web3Modal Example',
    url: 'http://localhost:3000/', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const chains = [polygon]
  const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    provider
    //...wagmiOptions // Optional - Override createConfig parameters
  })
  // 3. Create modal
  createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true // Optional - false as default
  })

  const connect = async () => {
    (await provider).connect().then((x)=>console.log(x))
    const result = await (await provider).request({ method: 'eth_requestAccounts' })
    console.log(result)
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
              <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>{!x === 0 ? children : <div style={{ height: "100dvh", margin: "auto" }}><button onClick={connect}>modal</button><w3m-button /></div>}</QueryClientProvider>
              </WagmiProvider>
            </Grid>
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MainLayout;