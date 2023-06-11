import styled from 'styled-components';
import a from '../../assets/temp/bg.jpg'
import P from "../text/p";
import H4 from "../text/h4";
import H2 from "../text/h2";

const StyledDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  grid-template-columns: 0.6fr 1fr;
  padding: 10px 10px 7px;
  text-align: center;
`
const frame = ({
    backgroundColor,
    border,
    borderRadius,
    color,
    className,
    text1,
    text2,

    children
               }) => {

    const style = {
        border,
        borderRadius,
        backgroundColor,
        color : color ? color : '#fff',
    }
    
    return (
        <StyledDiv className={className} style={style}>
            <H4
                textDecoration={'line-through'}
                color={'#909090'}
                text={text1}
            />
            <H4
                color={'#252222'}
                text={text2}
            />
        </StyledDiv>
    )
}

export default frame;