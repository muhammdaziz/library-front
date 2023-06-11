import styled from "styled-components";

const StyledImg = styled.img`
    height: 100%;
    width: 100%;
`

const Image = ({
    src,
    alt,
    width,
    margin,
    height
               }) => {

    const style = {
        height,
        width,
        margin
    }

    return(
        <StyledImg
            style={style}
            src={src}
            alt={alt}
        />
    )
}

export default Image;