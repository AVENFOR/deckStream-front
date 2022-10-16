import {theme} from "../../../styles/theme.styled";
import H2Atom from "../../atoms/H2Atom/H2.atom";
import {WelcomeMainSectionWrapper} from "./WelcomeMain.styled";

export const WelcomeMainSection = () => {
    return (
        <WelcomeMainSectionWrapper>
            <H2Atom
                text='Worlds by'
                isSpanText={true}
                spanText='DeckStreamer'
                spanTextColor={theme.TOKENS.S1.i400}
            />
        </WelcomeMainSectionWrapper>
    )
}
