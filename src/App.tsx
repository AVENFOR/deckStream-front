import {useState} from 'react'
import './App.css'
import {GlobalStyles} from "./styles/globalStyles.styled";
import {theme} from "./styles/theme.styled";
import {ThemeProvider} from "styled-components";

import {config} from "../configs/walletConnect.config";
import {Web3Modal} from '@web3modal/react'
import { ConnectButton, useConnectModal } from '@web3modal/react'


function App() {
    const [count, setCount] = useState(0)
    const { isOpen, open, close } = useConnectModal()

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <ConnectButton />
            </ThemeProvider>
            <Web3Modal config={config}/>
        </>
    )
}

export default App
