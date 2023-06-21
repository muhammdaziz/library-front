import styled from "styled-components";
import './index.css';
import {website} from "../../utils/temp";
import {GridBox2} from "../../pages/page-components/other/grid-box2";


const Button = (
    {
        width,
        onclick,
        margin,
        data,
        apiImg,
    }) => {


    const Styled = styled.button`
        border: none;
        cursor: pointer;
        width: ${width};
      margin: ${margin};
      background-color: unset;
    `

    return(
        <Styled
            onClick={onclick}
        >
            <GridBox2
                apiImp={apiImg}
                textAlign={'left'}
                titleFontSize={'32px'}
                data={data}
                imgWidth={'55px'}
                imgHeight={'55px'}
            />
        </Styled>
    )
}

export default Button;