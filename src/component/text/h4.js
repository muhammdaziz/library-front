import styled from "styled-components";
import {ColorBlack} from "../../utils";

const StyledH4 = styled.h4`
    
`

const H4 = ({
        className,
        text,
        limit,
        color,
        fontSize,
    textAlign,
        fontFamily,
        letterSpacing,
        fontWeight,
        margin,
        textDecoration
            }) => {

    const style = {
        color : color ? color : ColorBlack,
        fontSize,
        margin,
        fontFamily,
        textAlign,
        letterSpacing,
        fontWeight,
        textDecoration
    }

    if (limit !== null && text.length > limit)
        text = text.slice(0, limit) + '..'


    return(
        <StyledH4
            style={style}
            className={className}
        >
            {text}
        </StyledH4>
    )
}

export default H4