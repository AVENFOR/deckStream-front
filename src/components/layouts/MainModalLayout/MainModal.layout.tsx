import {MainModalButtonsWrapper, MainModalContentWrapper, MainModalWrapper} from "./MainModal.styled";
// import { createPortal } from 'react-dom';
import * as ReactDOM from 'react-dom';
import sponsorshipSVG from "../../../assets/icons/sponsorship.svg";
import cancelSVG from "../../../assets/icons/cancel.svg";
import {theme} from "../../../styles/theme.styled";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";


export const MainModalLayout = () => {

    const showModal = true;

    return (
        <>
            {showModal && ReactDOM.createPortal(
                <MainModalWrapper>
                    <MainModalContentWrapper>
                        <h2>Become a sponsor</h2>
                        <MainModalButtonsWrapper>
                            <IconButtonMolecule
                                iconWidth='1.8rem'
                                src={cancelSVG}
                                iconText='Cancel'
                                backgroundColor='transparent'
                                borderColor={theme.TOKENS.T2.i000}
                                color='white'
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
