import Frame from "../../component/frame/frame";
import {Color3, ColorGrey} from "../../utils";
import Image from "../../component/image/img";
import {Heading} from "../../component/text/heading";
import styled from "styled-components";

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  //background-color: #00b533;
`

// for svg
export const GridBox = ({
    data,
    index,
    svgBackgroundColor
                        }) => {

    return(
        <Styled
            key={index}
        >
            <Frame
                backgroundColor={svgBackgroundColor}
                padding={'0 10px'}
                borderRadius={'18px'}
                maxHeight={'60px'}
            >
                <Image src={data.svg}/>
            </Frame>
            <Frame>
                <Heading
                    title={data.title}
                    titleFontSize={'16px'}
                    subtitle={data.subtitle}
                    subtitleColor={ColorGrey}
                    titleClassName={'demi-bold'}
                    subtitleFontSize={'13px'}
                    titleMargin={'2px 0 5px 0'}
                />

            </Frame>
        </Styled>
    )
}