import {SDGWrapper} from "./SDG.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import H2Atom from "../../atoms/H2Atom/H2.atom";

interface SDGMoleculeI {
    src: string;
    sdgTitle: string;
    bgColor: string;
}

export const SDGMolecule = ( props: SDGMoleculeI) => {

    const {src, sdgTitle, bgColor} = props;

    return (
        <SDGWrapper
            bgColor={bgColor}
        >
            <IconAtom
                src={src}
                height='2.5rem'
                width='2.5rem'
            />
            <p>{sdgTitle}</p>
        </SDGWrapper>
    )
}
