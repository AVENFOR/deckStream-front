import {MainModalButtonsWrapper, MainModalContentWrapper, MainModalWrapper} from "./MainModal.styled";
// import { createPortal } from 'react-dom';
import * as ReactDOM from 'react-dom';
import sponsorshipSVG from "../../../assets/icons/sponsorship.svg";
import cancelSVG from "../../../assets/icons/cancel.svg";
import {theme} from "../../../styles/theme.styled";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {setToggle} from "../../../store/toggle.slice";
import {UserBalanceMolecule} from "../../molecules/UserBalanceMolecule/UserBalance.molecule";
import {useContractWrite, useWaitForTransaction} from "@web3modal/react";
import {soulAbi} from "../../../../configs/smartContract.config";
import {useNavigate} from "react-router-dom";


const addressNFT = "0x2cFe378354FBC7E15f4E69AD6F077f619dBb865f";
const owner = "0xf61585d10622b799Fd05f8a9baB50211B563cEa6"

export const MainModalLayout = () => {

    // const showModal = true;
    const showModal: boolean = useSelector((state: RootState) => state.toggle.value)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { data, error, write } = useContractWrite({
        addressOrName: '0x1a0E25D5B68cd8233AC7c787E82D269Ae618C798',
        contractInterface: soulAbi,
        functionName: 'addAmount',
        args: [addressNFT], //times 10 cuz decimals, gotta fix this
    });

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    const sendTx = async() => {
        console.log('yo')
        await write().then(() => {
            navigate('/player')
        });
    }

    return (
        <>
            {showModal && ReactDOM.createPortal(
                <MainModalWrapper>
                    <MainModalContentWrapper>
                        <h2>Become a sponsor</h2>
                        <UserBalanceMolecule/>
                        <MainModalButtonsWrapper>
                            <IconButtonMolecule
                                iconWidth='1.8rem'
                                src={cancelSVG}
                                iconText='Cancel'
                                backgroundColor='transparent'
                                borderColor={theme.TOKENS.T2.i000}
                                color='white'
                                onClick={() => dispatch(setToggle(false))}
                            />
                            <IconButtonMolecule
                                iconWidth='1.8rem'
                                src={sponsorshipSVG}
                                iconText='Give sponsorship'
                                backgroundColor={theme.TOKENS.S3.i900}
                                borderColor={theme.TOKENS.S3.i900}
                                color='white'
                                onClick={sendTx}
                            />
                        </MainModalButtonsWrapper>
                    </MainModalContentWrapper>
                </MainModalWrapper>
                , document.getElementById('portal') as HTMLElement
            )}
        </>
    )
}
