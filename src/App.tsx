import {useState} from 'react'
import {GlobalStyles} from "./styles/globalStyles.styled";
import {theme} from "./styles/theme.styled";
import {ThemeProvider} from "styled-components";

import {config} from "../configs/walletConnect.config";
import {Web3Modal} from '@web3modal/react'
// import {ConnectButton, useConnectModal} from '@web3modal/react'
import {AppRouter} from "./routes/AppRouter.routes";
import {MainModalLayout} from "./components/layouts/MainModalLayout/MainModal.layout";

import {
    LivepeerConfig,
} from '@livepeer/react';

import {store} from "./store/store";
import {Provider} from "react-redux";
import {client, livePeerTheme} from "../configs/livePeerClient";



function App() {
    // const {isOpen, open, close} = useConnectModal()

    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <LivepeerConfig client={client} theme={livePeerTheme}>
                        <GlobalStyles/>
                        <MainModalLayout/>
                        <AppRouter/>
                        {/*<ConnectButton/>*/}
                    </LivepeerConfig>
                </ThemeProvider>
            </Provider>
            <Web3Modal config={config}/>
        </>
    )
}

export default App
