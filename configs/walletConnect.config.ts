import type {ConfigOptions} from '@web3modal/react'

export const config: ConfigOptions = {
    projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
    theme: 'dark',
    accentColor: 'default',
    ethereum: {
        appName: 'web3Modal'
    }
}
