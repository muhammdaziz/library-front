import styled from "styled-components";
import {ColorBlack} from "../../utils";

const StyledH2 = styled.h2`
    
`

const H2 = ({
                className,
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
        fontWeight
    }

    return(
        <StyledH2
            className={className}
            style={style}
        >
            {text}
        </StyledH2>
    )
}

export default H2