import Temp from "./Temp";
import Frame from "../../component/frame/frame";
import Temp2 from "./Temp2";
import {Heading} from "../../component/text/heading";
import {Color, Lorem} from "../../utils";
import ArrowRight from "../../assets/icons/arrow-right-stick.svg";
import LeftIconyTextButton from "../../component/button/LeftIconyTextButton";
import styled from "styled-components";
import {news} from "../../utils/temp";
import {NewsBox} from "./news-box";

const Styled = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: rgba(105, 96, 205, 0.5) 0 30px 40px -7px;
`

export const News = () => {

    return(
        <Frame
            padding={'3% 8%'}
        >
            <Frame
                className={'grid-2'}
            >
                <Heading
                    subtitleFontSize={'13px'}
                    titleMargin={'0 0 20px 0'}
                    titleClassName={'demi-bold'}
                    titleFontSize={'40px'}
                    widthSubtitle={'65%'}
                    title={'Latest News'}
                    subtitle={Lorem}
                />
                <Frame
                    className={'relative'}
                >
                    <Styled>
                        <LeftIconyTextButton
                            text={'View more'}
                            backgroundColor={Color}
                            src={ArrowRight}
                            fontSize={'13px'}
                            padding={'8px 20px'}
                        />
                    </Styled>
                </Frame>
            </Frame>

            <Frame
                margin={'5% 0'}
                className={'grid-4'}
                gridGap={'33px'}
            >
                {news.slice(0, 4).map((news, index) =>
                    <NewsBox
                        news={news}
                        key={index}
                    />
                )}
            </Frame>
        </Frame>
    )
}