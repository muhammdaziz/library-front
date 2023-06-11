import styled from 'styled-components';
import a from '../../assets/temp/bg.jpg'

const StyledDiv = styled.div`
  font-family: OrgonPlan-Medium, sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
`
const frame = ({
    overflowY,
    textAlign,
    gridGap,
    padding,
    margin,
    backgroundColor,
    backgroundImg,
    border,
    borderRadius,
    color,
    width,
    className,
    boxShadow,
    overflow,
    borderBottom,
    borderTop,
    maxHeight,
    justifyContent,
    onclick,
    cursor,
    children
               }) => {

    const style = {
        padding : padding ? padding : '0',
        margin : margin ? margin : '0',
        borderRadius,
        gridGap,
        cursor,
        borderTop,
        borderBottom,
        textAlign,
        border,
        maxHeight,
        overflow,
        justifyContent,
        width,
        overflowY,
        boxShadow,
        backgroundColor,
        color : color ? color : '#fff',
        backgroundImage: backgroundImg ? 'url('+ backgroundImg +')' : 'none'
    }
    
    return (
        <StyledDiv
            onClick={onclick}
            className={className}
            style={style}
        >
            {children}
        </StyledDiv>
    )
}

export default frame;