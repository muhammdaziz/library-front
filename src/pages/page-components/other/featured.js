import Frame from "../../../component/frame/frame";
import {BASE_PATH, ColorWhite, IMAGE_PATH, Lorem} from "../../../utils";
import featuredBGI from '../../../assets/temp/featured.jpg'
import {Heading} from "../../../component/text/heading";
import BookCard4 from "../book-card/book-card4";
import Image from "../../../component/image/book-img";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";


export const Featured = () => {

    const [featured, setFeatured] = useState([])

    const [displayBook, setDisplayBook] = useState();

    const getFeatured = () => {

        axios.get(
            BASE_PATH + "/featured"
        ).then(res =>
            {
                setFeatured(res.data.data)
            }
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
        getFeatured(), []
    )

    useEffect(() =>
        changeBook(0), [featured]
    )

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

                {displayBook ?
                <BookCard4
                    imgHeight={'310px'}
                    backgroundColor={ColorWhite}
                    borderRadius={'10px'}
                    boxShadow={'rgb(105, 96, 205, 0.3) 4px 14px 29px 0'}
                    book={displayBook?.book}
                />
                : ''}
            </Frame>

            <Frame
                className={'grid-3'}
                gridGap={'30px'}
            >
                {featured.slice(0, 6).map((featured, index) =>
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
                            src={IMAGE_PATH + featured.book.image}
                        />
                    </Frame>
                )}
            </Frame>
        </Frame>
    )
}