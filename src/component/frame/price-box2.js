import styled from 'styled-components';
import a from '../../assets/temp/bg.jpg'
import P from "../text/p";
import H4 from "../text/h4";
import H2 from "../text/h2";
import Temp from "../../pages/page-components/Temp";

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
    padding,
    justifyContent
               }) => {

    const StyledDiv = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: ${justifyContent ? justifyContent : 'end'};
      padding: ${padding ? padding : '10px 10px 7px'};
      border: ${border};
      border-radius: ${borderRadius};
      text-align: ${textAlign};
      background-color: ${backgroundColor};
      color: ${color ? color : '#fff'};
    `

    return (
        <StyledDiv className={className}>
            <H4
                className={'demi-bold'}
                color={text1Color ? text1Color : '#252222'}
                text={'$ ' + text1}
                fontSize={text1FontSize}
            />

            {text2 ?
                <H4
                    className={'light'}
                    margin={text2Margin}
                    fontSize={text2FontSize}
                    textDecoration={'line-through'}
                    color={'#909090'}
                    text={'$' + text2}
                />
                : ''}
        </StyledDiv>
    )
}

export default frame;