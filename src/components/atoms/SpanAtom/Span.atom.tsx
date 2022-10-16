import {SpanWrapper} from "./Span.styled";

interface Props {
    text: string;
    color: string;
    paddingL?: string;
    paddingR?: string;
}

export const SpanAtom = ( props: Props) => {

    const {text, color, paddingR, paddingL} = props;

    return (
        <SpanWrapper
            color={color}
            paddingR={paddingR}
            paddingL={paddingL}
        >
            {text}
        </SpanWrapper>
    )
}
