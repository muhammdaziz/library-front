import styled from "styled-components";

const StyledImg1 = styled.img`
  margin: -5px 8px -5px 0;
`
const StyledImg2 = styled.img`
  margin: -5px 0 -5px 8px;
  transform: scale(2);
`

const Button = (
    {
        onclick,
        color,
        text,
        backgroundColor,
        src1,
        src2,
        classname,
        borderRadius,
        fontSize

    }) => {

    const style = {
        padding: '15px 20px',
        borderRadius,
        border: 'none',
        fontSize : fontSize ? fontSize : '16px',
        color: color ? color : 'white',
        backgroundColor,
    }

    return(
        <button
            className={classname}
            onClick={onclick}
            style={style}
        >
            <StyledImg1 src={src1} alt={'>'}/>
            {text}
            <StyledImg2 src={src2} alt={'>'}/>
        </button>
    )
}

export default Button;