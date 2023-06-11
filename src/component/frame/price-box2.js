import styled from 'styled-components';
import a from '../../assets/temp/bg.jpg'
import P from "../text/p";
import H4 from "../text/h4";
import H2 from "../text/h2";

const StyledDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 0.5fr;
  padding: 10px 10px 7px;
`
const frame = ({
    backgroundColor,
    border,
    borderRadius,
    color,
    className,
    text1,
    text2,
    text2FontSize,
    text2Margin,
    text1FontSize,
    text1Color,
    textAlign,

    children
               }) => {

    const style = {
        border,
        borderRadius,
        backgroundColor,
        textAlign,
        color : color ? color : '#fff',
    }
    
    return (
        <StyledDiv className={className} style={style}>
            <H4
                color={text1Color ? text1Color : '#252222'}
                text={text1}
                fontSize={text1FontSize}
            />
            <H4
                margin={text2Margin}
                fontSize={text2FontSize}
                textDecoration={'line-through'}
                color={'#909090'}
                text={text2}
            />
        </StyledDiv>
    )
}

export default frame;