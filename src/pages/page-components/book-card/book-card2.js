import styled from "styled-components";
import Frame from "../../../component/frame/frame";
import H1 from "../../../component/text/h1";
import H5 from "../../../component/text/h5";
import H4 from "../../../component/text/h4";
import P from "../../../component/text/p";
import {Color, ColorGrey} from "../../../utils";
import {mapList} from "../../../utils";
import PriceBox2 from "../../../component/frame/price-box2";
import Image from "../../../component/image/book-img";

const bookCard = ({
    book,
    border,
    index,
    borderRadius,
    imgHeight,
    imgWidth,
    className

                  }) => {

    if (book.genre.length > 2)
        book.genre = book.genre.slice(0, 2).concat('..')

    return(
        <Frame
            key={index}
            border={border}
            borderRadius={borderRadius}
            // backgroundColor={ColorGrey}
            textAlign={'center'}
        >
            <Image
                width={imgWidth}
                borderRadius={'12px'}
                height={imgHeight}
                className={className}
                src={book.img}
                alt={'image'}
            />
            <H4
                margin={'10px 0 7px 0'}
                fontSize={'14px'}
                className={'demi-bold'}
                limit={18}
                text={book.title}
            />

            <P
                fontSize={'11px'}
                color={Color}
                text={mapList(book.genre)}
            />

            <PriceBox2
                text1={book.price}
                text2={book.discount.percent}
                text1Color={Color}
                text2FontSize={'13px'}
            />

        </Frame>
    )
}

export default bookCard;