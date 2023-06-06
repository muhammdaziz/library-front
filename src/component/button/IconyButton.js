import styled from "styled-components";

const StyledImg = styled.img`
  margin: -5px 0;
  transform: scale(1.4);
`

const Button = (
    {
        onclick,
        backgroundColor,
        src

    }) => {

    const style = {
        padding: '15px 20px',
        borderRadius: '10px',
        border: 'none',
        fontSize: '14px',
        backgroundColor: backgroundColor ? backgroundColor : 'rgb(1, 2, 3, 0.5)',
    }

    return(
        <button
            onClick={onclick}
            style={style}
        >
            <StyledImg src={src} alt={'>'}/>
        </button>
    )
}

export default Button;