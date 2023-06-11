import Frame from "../../component/frame/frame";
import H1 from "../../component/text/h1";
import CustomOwlCarousel from "../../component/carousel/owlCarousel";
import Temp from "./Temp";
import {books} from "../../utils/temp";
import BookCard3 from "./book-card/book-card3";

export const OnSale = () => {

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
                    nav
                    dots
                    items={6}
                    margin={30}
                >
                    {books.map((book, index) =>
                        <BookCard3
                            imgHeight={'270px'}
                            key={index}
                            book={book}
                        />
                    )}
                </CustomOwlCarousel>
            </Frame>
        </Frame>
    )
}