import styled from "styled-components";
import {ColorBlack, getLimitedText} from "../../utils";

const Styled = styled.p`
`

const P = ({
    limit,
    width,
    text,
    color,
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    margin,
    lineHeight,
    className
            }) => {

    const style = {
        color : color ? color : ColorBlack,
        fontSize,
        width,
        textAlign,
        fontFamily,
        fontWeight,
        margin,
        lineHeight,
    }

    if(limit && text.length > limit)
        text = getLimitedText(text, limit)

    return(
        <Styled
            style={style}
            className={className}
        >
            {text}
        </Styled>
    )
}

export default P