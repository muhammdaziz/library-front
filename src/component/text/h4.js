import styled from "styled-components";
import {ColorBlack, getLimitedText} from "../../utils";

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

    if(limit && text.length > limit)
        text = getLimitedText(text, limit)

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