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


export const MainModalLayout = () => {

    // const showModal = true;
    const showModal: boolean = useSelector((state: RootState) => state.toggle.value)
    const dispatch = useDispatch()

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
                            />
                        </MainModalButtonsWrapper>
                    </MainModalContentWrapper>
                </MainModalWrapper>
                , document.getElementById('portal') as HTMLElement
            )}
        </>
    )
}
