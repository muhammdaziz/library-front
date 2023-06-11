import styled from "styled-components";
import {ColorBlack} from "../../utils";

const Styled = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const A = ({
    href,
    width,
    text,
    color,
    fontSize,
    fontFamily,
    fontWeight,
    margin,
    className
            }) => {

    const style = {
        color : color ? color : ColorBlack,
        fontSize,
        width,
        fontFamily,
        fontWeight,
        margin,
    }

    return(
        <Styled
            href={href}
            style={style}
            className={className}
        >
            {text}
        </Styled>
    )
}
