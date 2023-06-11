import styled from "styled-components";
import {ColorBlack} from "../../utils";

const Styled = styled.p`
`

const P = ({
    limit,
    width,
    text,
    key,
    color,
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    margin,
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
    }

    if(text.length > limit)
        text = text.slice(0, limit).trim().concat('...')

    return(
        <Styled
            key={key}
            style={style}
            className={className}
        >
            {text}
        </Styled>
    )
}

export default P