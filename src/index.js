import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Store } from './store/store';
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//web3modal
import { polygon } from 'viem/chains';
import { WagmiProvider } from 'wagmi'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SignClient from '@walletconnect/sign-client'
import Homecontent from './components/pages/Homecontent';

//react router
const Router = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: "notfound",
    children: [
        { path: "/homecontent/", element: "h" }
    ]
}])

//connectwallet config
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>

        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <CookiesProvider defaultSetOptions={{ path: '/' }}>
                    <RouterProvider router={Router} />
                </CookiesProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </Provider>
);
