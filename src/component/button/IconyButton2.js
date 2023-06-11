import Image from "../image/img";
import styled from "styled-components";
import {Color} from "../../utils";

const Styled = styled.button`
  cursor: pointer;
  background-color: ${Color};
  outline: none;
  border: none;
  border-radius: 13px;
  padding: 13px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
`

const Button = (
    {
        className,
        onclick,
        color,
        text,
        backgroundColor,
        fontSize,
        padding,
        border,
        width,
        margin,
        img,

        children
    }) => {


    const style = {
        width,
        color,
        backgroundColor,
        padding,
        fontSize,
        border,
        margin

    }

    return (
        <Styled
            className={className}
            onClick={onclick}
            style={style}
        >
            <Image
                width={'20px'}
                margin={'0 10px 0 0'}
                src={img}
            />
            {text}
        </Styled>
    )
}

export default Button;