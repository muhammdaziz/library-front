import styled from "styled-components";

const StyledImg = styled.img`
  margin: -5px 8px -5px 0;
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
        padding: '15px 20px',
        borderRadius: '10px',
        border: 'none',
        fontSize: fontSize ? fontSize : '16px',
        color: color ? color : 'white',
        backgroundColor: backgroundColor ? backgroundColor : 'rgb(1, 2, 3, 0.5)',
    }

    return(
        <button
            onClick={onclick}
            style={style}
        >
            <StyledImg src={src} alt={'>'}/>
            {text}
        </button>
    )
}

export default Button;