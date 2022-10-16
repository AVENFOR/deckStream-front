import {WelcomeWorldsWrapper} from "./WelcomeWorlds.styled";
import {WorldsOrganism} from "../../organisms/WorldsOrganism/Worlds.organism";

import igICON from '../../../assets/icons/wallet.svg';
import {useNavigate} from "react-router-dom";
import {useContractWrite, useWaitForTransaction} from "@web3modal/react";
import {soulAbi} from "../../../../configs/smartContract.config";

const addressNFT = "0x2cFe378354FBC7E15f4E69AD6F077f619dBb865f";
const owner = "0xf61585d10622b799Fd05f8a9baB50211B563cEa6"


export const WelcomeWorldsSection = () => {

    const navigate = useNavigate();

    const { data, error, write } = useContractWrite({
        addressOrName: '0x1a0E25D5B68cd8233AC7c787E82D269Ae618C798',
        contractInterface: soulAbi,
        functionName: 'addProject',
        args: [addressNFT, owner], //times 10 cuz decimals, gotta fix this
    });

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    const sendTx = () => {
        console.log('yo')
        write();
    }

    return (
        <WelcomeWorldsWrapper>
            <WorldsOrganism
                src={igICON}
                worldsTitle='Creator'
                onClick={sendTx}
            />
            <WorldsOrganism
                src={igICON}
                worldsTitle='Sponsor'
                onClick={() => navigate('/projects')}
            />
            <WorldsOrganism
                src={igICON}
                worldsTitle='Deckster'
                onClick={() => navigate('/player')}
            />
        </WelcomeWorldsWrapper>
    )
}
