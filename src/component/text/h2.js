import styled from "styled-components";
import {ColorBlack} from "../../utils";

const StyledH2 = styled.h2`
    
`

const H2 = ({
                className,
    cursor,
    onclick,
    text,
    color,
    margin,
    fontSize,
    fontFamily,
    fontWeight
            }) => {

    const style = {
        color : color ? color : ColorBlack,
        fontSize,
        margin,
        fontFamily,
        fontWeight,
        cursor
    }

    return(
        <StyledH2
            onClick={onclick}
            className={className}
            style={style}
        >
            {text}
        </StyledH2>
    )
}

export default H2