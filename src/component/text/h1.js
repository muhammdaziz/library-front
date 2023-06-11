import styled from "styled-components";
import {ColorBlack} from "../../utils";

const StyledH1 = styled.h1`
    
`

const H1 = ({
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
        margin,
        fontSize,
        fontFamily,
        fontWeight
    }

    return(
        <StyledH1
            className={className}
            style={style}
        >
            {text}
        </StyledH1>
    )
}

export default H1