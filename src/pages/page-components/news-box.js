import Frame from "../../component/frame/frame";
import Image from "../../component/image/book-img";
import {Heading} from "../../component/text/heading";
import {Color, ColorGrey, getUrl} from "../../utils";
import {A} from "../../component/text/a";
import React from "react";
import {GridBox2} from "./grid-box2";

export const NewsBox = ({
                            news
                        }) => {

    const data = {
        img: news.author.avatar,
        title: news.author.firstname + ' ' + news.author.lastname,
        subtitle: news.publishedDate
    }

    return (
        <Frame>
            <Image
                borderRadius={'6px'}
                height={'170px'}
                src={news.img}
            />

            <Heading
                title={news.title}
                titleClassName={'regular'}
                titleFontSize={'13px'}
                titleMargin={'5% 0'}
                subtitle={news.text}
                subtitleFontSize={'12px'}
                subtitleLimit={110}
                subtitleColor={ColorGrey}
            />

            <A
                href={getUrl(news.title)}
                text={'Continue Reading'}
                color={Color}
                fontSize={'12px'}
            />
            <Frame
                margin={'23px 0'}
                className={'grid-15-1'}
            >
                <GridBox2
                    data={data}
                    imgHeight={'40px'}
                    imgWidth={'40px'}
                    titleFontSize={'13px'}
                    titleMargin={'3px 0'}
                    subtitleColor={ColorGrey}
                />

            </Frame>
        </Frame>
    )
}