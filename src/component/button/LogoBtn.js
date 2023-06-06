import styled from "styled-components";
import './index.css';

const StyledImg = styled.img`
    margin-right: 7px;
`

const StyledH1 = styled.h1`
  margin: 3px 0 0 0;
  text-align: left;
  font-size: 35px;
  font-weight: 400;
`

const StyledH5 = styled.h4`
  margin: -10px 0 0 1px;
  font-weight: 400;
  text-align: left;
`

const Button = (
    {
        onclick,
        color,
        title,
        subtitle,
        src,

    }) => {

    const style = {
        border: 'none',
        color: color ? color : 'white',
        backgroundColor: 'red',
    }

    return(
        <button
            className={"wrapper"}
            onClick={onclick}
            style={style}
        >
            <StyledImg className={"sidebar"} src={src} alt={'>'}/>
            <StyledH1 className={"header"}>{title}</StyledH1>
            <StyledH5 className={"content"}>{subtitle}</StyledH5>
        </button>
    )
}

export default Button;