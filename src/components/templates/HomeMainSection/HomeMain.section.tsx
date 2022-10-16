import H2Atom from "../../atoms/H2Atom/H2.atom";
import {HomeMainSectionWrapper} from "./HomeMain.styled";
import {theme} from "../../../styles/theme.styled";

export const HomeMainSection = () => {
    return (
        <HomeMainSectionWrapper>
            <H2Atom
                text='WELCOME TO'
                isSpanText={true}
                spanText='DeckStream'
                spanTextColor={theme.TOKENS.S1.i400}
            />
            <p>LIVE Streaming the new Tech Tool</p>
        </HomeMainSectionWrapper>
    )
}
