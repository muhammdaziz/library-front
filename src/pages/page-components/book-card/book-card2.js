import Frame from "../../../component/frame/frame";
import H4 from "../../../component/text/h4";
import P from "../../../component/text/p";
import {Color, getDiscountPrice, IMAGE_PATH} from "../../../utils";
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

    if (book.genres.length > 2)
        book.genres = book.genres.slice(0, 2).concat('..')

    return(
        <Frame
            key={index}
            border={border}
            borderRadius={borderRadius}
            textAlign={'center'}
        >
            <Image
                width={imgWidth}
                borderRadius={'12px'}
                height={imgHeight}
                className={className}
                src={IMAGE_PATH + book.image}
                alt={'image'}
            />
            <H4
                margin={'10px 0 0px 0'}
                fontSize={'16px'}
                className={'demi-bold'}
                limit={18}
                text={book.title}
            />

            <P
                fontSize={'13px'}
                color={Color}
                text={mapList(book.genres)}
            />

            <PriceBox2
                justifyContent={'center'}
                text1={book.discount ? getDiscountPrice(book.price, book.discount.value) : book.price}
                text2={book.discount ? book.price : null}
                text1Color={Color}
                text1FontSize={'22px'}
                text2FontSize={'16px'}
                text2Margin={'5px 10px 0'}
            />

        </Frame>
    )
}

export default bookCard;