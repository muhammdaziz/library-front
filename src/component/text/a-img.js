import styled from "styled-components";
import {ColorBlack} from "../../utils";
import Image from "../image/img";


export const A = ({
    href,
    imgWidth,
    imgHeight,
    img,
    margin,
    padding,
    border,
    borderRadius,
    backgroundColor,
    className
            }) => {

    const StyledA = styled.a`
      text-decoration: none;
      cursor: pointer;
      margin: ${margin};
      padding: ${padding};
      border: ${border};
      border-radius: ${borderRadius};
      background-color: ${backgroundColor};
    `

    return(
        <StyledA
            href={href}
            className={className}
        >
            <Image
                margin={'0 auto'}
                height={imgHeight}
                width={imgWidth}
                src={img}
            />
        </StyledA>
    )
}
