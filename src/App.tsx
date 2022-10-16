import {useState} from 'react'
import {GlobalStyles} from "./styles/globalStyles.styled";
import {theme} from "./styles/theme.styled";
import {ThemeProvider} from "styled-components";

import {config} from "../configs/walletConnect.config";
import {Web3Modal} from '@web3modal/react'
// import {ConnectButton, useConnectModal} from '@web3modal/react'
import {AppRouter} from "./routes/AppRouter.routes";
import {HeaderLayout} from "./components/layouts/HeaderLayout/Header.layout";


function App() {
    // const {isOpen, open, close} = useConnectModal()

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <AppRouter/>
                <HeaderLayout/>
                {/*<ConnectButton/>*/}
            </ThemeProvider>
            <Web3Modal config={config}/>
        </>
    )
}

export default App
