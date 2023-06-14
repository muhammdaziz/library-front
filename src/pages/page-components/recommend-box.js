import Frame from "../../component/frame/frame";

import RecommendOwlCarousel from "../../component/carousel/owlCarousel";
import BookCard from "./book-card/book-card";
import {Heading} from "../../component/text/heading";
import {IMAGE_PATH} from "../../utils";

const recommendBox = ({
                          content,
                          items,

                      }) => {

    return (
        <Frame
            borderRadius={'13px'}
            overflow={'hidden'}
            backgroundImg={IMAGE_PATH + content.bkgImage}
            padding={'5% 8% 3% 8%'}
        >
            <Frame
                padding={'15px 0 35px 10px'}
            >
                <Heading
                    title={content.title}
                    subtitle={content.subtitle}
                    widthSubtitle={'75%'}
                    titleMargin={'0 0 15px 0'}
                    subtitleFontSize={'12px'}
                    titleFontSize={'26px'}
                />
            </Frame>

            <Frame
                className={'M-O-C-R-box'}
            >
                <RecommendOwlCarousel
                    items={4}
                    margin={20}
                    nav
                    dots={false}
                >
                    {content.books.map((book, index) =>
                        <BookCard
                            key={index}
                            imgHeight={'170px'}
                            className={'book-card'}
                            book={book}
                            borderRadius={'15px'}
                            border={'3px solid #fff'}
                        />
                    )}
                </RecommendOwlCarousel>
            </Frame>
        </Frame>
    )
}

export default recommendBox;