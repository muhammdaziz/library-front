import Frame from "../../../component/frame/frame";
import {Heading} from "../../../component/text/heading";
import {BASE_PATH, Color, Lorem} from "../../../utils";
import ArrowRight from "../../../assets/icons/arrow-right-stick.svg";
import LeftIconyTextButton from "../../../component/button/LeftIconyTextButton";
import styled from "styled-components";
import {NewsBox} from "./news-box";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Styled = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: rgba(105, 96, 205, 0.5) 0 30px 40px -7px;
`

export const News = () => {

    const [news, setNews] = useState([])

    const getNews = () => {
        axios.get(
            BASE_PATH + '/news/0/4',
        ).then(res =>
            setNews(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
            getNews(),
        []
    )

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