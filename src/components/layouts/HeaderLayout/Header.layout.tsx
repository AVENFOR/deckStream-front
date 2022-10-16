import {HeaderAdressWrapper, HeaderWrapper, IconWrapper} from "./Header.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";

import logo from '../../../assets/logo.svg'
import walletSVG from '../../../assets/icons/wallet.svg'
import logoutSVG from '../../../assets/icons/logout.svg'

import {useAccount, useConnectModal} from '@web3modal/react'
import {useDisconnect} from '@web3modal/react'

import { useNavigate } from "react-router-dom";

export const HeaderLayout = () => {

    const {isOpen, open, close} = useConnectModal()

    const {address, isConnected} = useAccount()
    const result = address.slice(-5);

    const navigate = useNavigate();

    const disconnect = useDisconnect()

    function* generator() {
        yield disconnect();
        yield navigate("/home");
    }

    const gen = generator();

    return (
        <HeaderWrapper>
            <IconWrapper>
                <IconAtom
                    src={logo}
                    alt='logo'
                    width={'2.853rem'}
                />
                <h2>DeckStream</h2>
            </IconWrapper>
            {isConnected &&
                <HeaderAdressWrapper>
                    <IconAtom src={walletSVG} alt='wallet logo'/>
                    <p>{`...${result}`}</p>
                    <a onClick={() => gen.next() &&
                        // setTimeout(() => gen.next(), 1000)}>
                        gen.next()}>
                        <IconAtom src={logoutSVG} alt='logout logo'/>
                    </a>
                </HeaderAdressWrapper>
            }
            {!isConnected &&
                <IconButtonMolecule
                    iconWidth='1.8rem'
                    src={walletSVG}
                    iconText='Connect'
                    backgroundColor={'#322DC1'}
                    borderColor={'#322DC1'}
                    color='white'
                    onClick={open}
                />
            }
        </HeaderWrapper>
    )
}
