import styled from "styled-components";
import {ColorBlack} from "../../utils";

const Styled = styled.h5`
    
`

const H5 = ({
    text,
    className,
    color,
    fontSize,
    fontFamily,
    letterSpacing,
    fontWeight
            }) => {

    const style = {
        color : color ? color : ColorBlack,
        fontSize,
        fontFamily,
        letterSpacing,
        fontWeight
    }

    return(
        <Styled
            className={className}
            style={style}
        >
            {text}
        </Styled>
    )
}

export default H5