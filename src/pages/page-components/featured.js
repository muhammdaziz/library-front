import Frame from "../../component/frame/frame";
import {ColorWhite, Lorem} from "../../utils";
import featuredBGI from '../../assets/temp/featured.jpg'
import styled from "styled-components";
import {Heading} from "../../component/text/heading";
import BookCard4 from "./book-card/book-card4";
import {featured} from "../../utils/temp";
import Image from "../../component/image/book-img";
import {useState} from "react";


export const Featured = () => {

    const [displayBook, setDisplayBook] = useState(featured[0]);

    const changeBook = (index) => {
        setDisplayBook(featured[index])
    }


    return (
        <Frame
            backgroundImg={featuredBGI}
            padding={'3.5% 8%'}
            className={'grid-2'}
            gridGap={'50px'}
        >
            <Frame
                padding={'5% 0 0 0'}
            >
                <Heading
                    subtitleFontSize={'13px'}
                    titleMargin={'0 0 20px 0'}
                    titleClassName={'demi-bold'}
                    titleFontSize={'40px'}
                    widthSubtitle={'65%'}
                    title={'Featured Books'}
                    subtitle={Lorem}
                />

                <BookCard4
                    imgHeight={'310px'}
                    backgroundColor={ColorWhite}
                    borderRadius={'10px'}
                    boxShadow={'rgb(105, 96, 205, 0.3) 4px 14px 29px 0'}
                    book={displayBook}
                />
            </Frame>

            <Frame
                className={'grid-3'}
                gridGap={'30px'}
            >
                {featured.slice(0, 6).map((book, index) =>
                    <Frame
                        key={index}
                        onclick={() => {
                            changeBook(index);
                        }}
                        cursor={'pointer'}
                    >
                        <Image
                            borderRadius={'13px'}
                            height={'270px'}
                            key={index}
                            src={book.img}
                        />
                    </Frame>
                )}
            </Frame>
        </Frame>
    )
}