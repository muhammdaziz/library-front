import styled from "styled-components";
import './index.css';
import {website} from "../../utils/temp";
import {GridBox2} from "../../pages/page-components/grid-box2";


const Button = (
    {
        width,
        onclick,
        margin,
    }) => {


    const data = {
        title: website.name,
        subtitle: website.subtitle,
        img: website.img
    }

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