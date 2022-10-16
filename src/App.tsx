import {useState} from 'react'
import {GlobalStyles} from "./styles/globalStyles.styled";
import {theme} from "./styles/theme.styled";
import {ThemeProvider} from "styled-components";

import {config} from "../configs/walletConnect.config";
import {Web3Modal} from '@web3modal/react'
// import {ConnectButton, useConnectModal} from '@web3modal/react'
import {AppRouter} from "./routes/AppRouter.routes";
import {MainModalLayout} from "./components/layouts/MainModalLayout/MainModal.layout";


function App() {
    // const {isOpen, open, close} = useConnectModal()

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <MainModalLayout/>
                <AppRouter/>
                {/*<ConnectButton/>*/}
            </ThemeProvider>
            <Web3Modal config={config}/>
        </>
    )
}

export default App
