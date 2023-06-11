import styled from "styled-components";

const StyledImg = styled.img`
    width: 100%;
`

const Image = ({
    style,
    src,
    alt,
    borderRadius,
    width,
    margin,
    height
               }) => {

    const style1 = {
        height,
        width,
        borderRadius,
        margin,
        ...style,
    }

    return(
        <StyledImg
            style={style1}
            src={src}
            alt={alt}
        />
    )
}

export default Image;