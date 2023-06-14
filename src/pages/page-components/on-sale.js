import Frame from "../../component/frame/frame";
import H1 from "../../component/text/h1";
import CustomOwlCarousel from "../../component/carousel/owlCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import BookCard3 from "./book-card/book-card3";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_PATH} from "../../utils";
import {toast} from "react-toastify";

export const OnSale = () => {

    const [bookList, setBooks] = useState([]);

    const getBooks = () => {

        axios.get(
            BASE_PATH + "/book"
        ).then(res =>
            setBooks(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
        getBooks(), []
    )

    return(
        <Frame
            padding={'3% 8%'}
        >
            <H1
                className={'demi-bold'}
                text={'Books on Sale'}
            />

            <Frame
                className={'sale-owl-carousel'}
                padding={'3% 0'}
            >
                <CustomOwlCarousel
                    key={`carousel_${bookList.length}`}
                    className="owl-theme"
                    nav
                    dots
                    items={6}
                    margin={30}
                >
                    {bookList.length && (bookList.map((book, index) =>
                            <BookCard3
                                imgHeight={'270px'}
                                key={index}
                                book={book}
                            />
                    ))}
                </CustomOwlCarousel>
            </Frame>
        </Frame>
    )
}
