import Frame from "../../../component/frame/frame";
import {Color, Color3, ColorGrey, IMAGE_PATH} from "../../../utils";
import Image from "../../../component/image/img";
import {Heading} from "../../../component/text/heading";
import styled from "styled-components";

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  grid-gap: 10px;
  //background-color: #00b533;
`

// for image not svg
export const GridBox2 = ({
    data,
    index,
    textAlign,
    imgHeight,
    imgWidth,
    titleFontSize,
    titleMargin,
    subtitleColor,
    imgBorderRadius,
    apiImp,
                        }) => {

    return(
        <Styled
            key={index}
        >
            <Image
                borderRadius={imgBorderRadius}
                width={imgWidth}
                height={imgHeight}
                src={apiImp ? IMAGE_PATH + data.img : data.img}
            />

            <Frame
                textAlign={textAlign}
            >
                <Heading
                    title={data.title}
                    titleFontSize={titleFontSize ? titleFontSize : '20px'}
                    subtitle={data.subtitle}
                    subtitleColor={subtitleColor}
                    subtitleFontSize={'12px'}
                    titleClassName={'demi-bold'}
                    titleMargin={titleMargin}
                />

            </Frame>
        </Styled>
    )
}