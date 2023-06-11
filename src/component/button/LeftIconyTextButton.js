import styled from "styled-components";
import StyledButton from "./StyledButton";

const StyledImg = styled.img`
  margin: 0 0 -12px 5px;
  transform: scale(0.7);
`

const Button = (
    {
        onclick,
        color,
        text,
        backgroundColor,
        src,
        padding,
        fontSize

    }) => {

    const style = {
        borderRadius: '8px',
        border: 'none',
        padding,
        fontSize,
        color: color ? color : 'white',
        backgroundColor: backgroundColor ? backgroundColor : 'unset',
    }

    return(
        <StyledButton
            onClick={onclick}
            style={style}
        >
            {text}
            <StyledImg src={src} alt={'>'}/>
        </StyledButton>
    )
}

export default Button;