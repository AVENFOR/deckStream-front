import {BorderedIconBG, BorderedIconWrapper} from "./BorderedIcon.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";

interface BorderedIconMoleculeI {
    width: string;
    src: string;
    borderColor: string;
    bgColor: string;
}

export const BorderedIconMolecule = (props: BorderedIconMoleculeI) => {

    const {width, bgColor, borderColor, src} = props;

    return (
        <BorderedIconWrapper
            width={width}
            borderColor={borderColor}
        >
            <BorderedIconBG
                bgColor={bgColor}
            >
                <IconAtom
                    src={src}
                    height='8rem'
                    width='8rem'
                />
            </BorderedIconBG>
        </BorderedIconWrapper>
    )
}
