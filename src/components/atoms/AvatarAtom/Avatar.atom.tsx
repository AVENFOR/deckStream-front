import {AvatarIMG, AvatarWrapper} from "./Avatar.styled";

interface Props {
    src: string;
    propsClass?: string;
    height: string;
    width: string;
    alt?: string;
    rounded?: boolean;
    onclick?: () => void;
}

const AvatarAtom = (props: Props) => {
    const {
        src = '',
        propsClass,
        height = '',
        alt,
        width = '',
        onclick = () => {},
        rounded = false,
    } = props;

    return (
        <AvatarWrapper
            height={height}
            width={width}
            onClick={onclick}
            className={propsClass}
        >
            <AvatarIMG
                src={src}
                alt={alt ? alt : "Avatar"}
            />
        </AvatarWrapper>
    );
};

export default AvatarAtom;
