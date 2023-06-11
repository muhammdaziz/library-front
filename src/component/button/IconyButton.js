import styled from "styled-components";
import StyledButton from "./StyledButton";

const StyledImg = styled.img`
  margin-top: 7px;
`

const Button = (
    {
        onclick,
        backgroundColor,
        src,
        borderRadius,

    }) => {

    const style = {
        borderRadius: borderRadius ? borderRadius : '10px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: backgroundColor ? backgroundColor : 'unset',
    }

    return(
        <StyledButton
            onClick={onclick}
            style={style}
        >
            <StyledImg src={src} alt={'>'}/>
        </StyledButton>
    )
}

export default Button;