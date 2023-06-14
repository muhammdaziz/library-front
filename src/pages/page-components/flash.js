import Frame from "../../component/frame/frame";
import {Heading} from "../../component/text/heading";
import {Time} from "./time";

import {flash} from "../../utils/temp";
import BookCard2 from "./book-card/book-card2";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_PATH} from "../../utils";
import {toast} from "react-toastify";

export const Flash = () => {

    const [books, setBook] = useState([]);

    const getBooks = () => {

        axios.get(
            BASE_PATH + "/book"
        ).then(res =>
            setBook(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
        getBooks(), []
    )

    return(
        flash.time > new Date().getTime() ?

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
                {books.slice(0, 5).map((book, index) =>
                    <BookCard2
                        imgHeight={'280px'}
                        book={book}
                        key={index}
                    />
                )}
            </Frame>
        </Frame>

            : ''
    )
}

