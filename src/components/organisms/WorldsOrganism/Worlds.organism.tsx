import {WorldsOrganismTextWrapper, WorldsOrganismWrapper} from "./Worlds.styled";
import {BorderedIconMolecule} from "../../molecules/BorderedIconMolecule/BorderedIcon.molecule";
import {theme} from "../../../styles/theme.styled";

interface WorldsOrganismI {
    src: string;
    worldsTitle: string;
    onClick: () => void;
}

export const WorldsOrganism = ( props: WorldsOrganismI) => {

    const {src, worldsTitle, onClick} = props;

    return (
        <WorldsOrganismWrapper
            onClick={onClick}
        >
            <BorderedIconMolecule
                width='18.8rem'
                bgColor={theme.TOKENS.S1.i400}
                borderColor={theme.TOKENS.S1.i400}
                src={src}
            />
            <WorldsOrganismTextWrapper>
                <p>{worldsTitle}</p>
            </WorldsOrganismTextWrapper>
        </WorldsOrganismWrapper>
    )
}
