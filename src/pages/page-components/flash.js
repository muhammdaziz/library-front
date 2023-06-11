import Frame from "../../component/frame/frame";
import H1 from "../../component/text/h1";
import P from "../../component/text/p";
import {Heading} from "../../component/text/heading";
import {Time} from "./time";

import {flash} from "../../utils/temp";
import BookCard2 from "./book-card/book-card2";

export const Flash = () => {

    return(
        <Frame
            padding={'3% 8%'}
        >
            <Heading
                titleMargin={'0 0 20px 0'}
                textAlign={'center'}
                titleClassName={'demi-bold'}
                widthSubtitle={'40%'}
                subtitleFontSize={'14px'}
                title={'Flash Sales'}
                subtitleCenter
                subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            />

            <Time
                deadline={flash.time}
            />

            <Frame
                className={'grid-5'}
                margin={'6% 0 0 0'}
            >
                {flash.books.slice(0, 5).map((book, index) =>
                    <BookCard2
                        imgHeight={'280px'}
                        book={book}
                        key={index}
                    />
                )}
            </Frame>
        </Frame>
    )
}

