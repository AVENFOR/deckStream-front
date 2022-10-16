import type {ConfigOptions} from '@web3modal/react'
import {chains, providers} from "@web3modal/ethereum";

export const config: ConfigOptions = {
    projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
    theme: 'dark',
    accentColor: 'default',
    ethereum: {
        appName: 'web3Modal',
        chains: [chains.arbitrumGoerli],
        providers: [
            providers.alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_URL }),
            providers.publicProvider()
        ]
    }
}
