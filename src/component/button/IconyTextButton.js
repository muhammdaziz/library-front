import styled from "styled-components";
import StyledButton from "./StyledButton";

const StyledImg = styled.img`
  margin: -5px 8px -10px 0;
  transform: scale(0.9);
`

const Button = (
    {
        onclick,
        color,
        text,
        backgroundColor,
        src,
        fontSize

    }) => {

    const style = {
        borderRadius: '10px',
        border: 'none',
        fontSize,
        color: color ? color : 'white',
        backgroundColor: backgroundColor ? backgroundColor : 'unset',
    }

    return(
        <StyledButton
            onClick={onclick}
            style={style}
        >
            <StyledImg src={src} alt={'>'}/>
            {text}
        </StyledButton>
    )
}

export default Button;