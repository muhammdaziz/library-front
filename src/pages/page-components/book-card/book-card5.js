import styled from "styled-components";
import Frame from "../../../component/frame/frame";
import H4 from "../../../component/text/h4";
import {Color, Color3, ColorBlack, ColorGrey, ColorOrange, getDiscountPrice, IMAGE_PATH, mapList} from "../../../utils";
import Image from "../../../component/image/book-img";
import P from "../../../component/text/p";
import favourite from '../../../assets/icons/favorite2.svg'
import PriceBox2 from "../../../component/frame/price-box2";
import IconyTextButton from "../../../component/button/IconyTextButton";
import arrow from "../../../assets/icons/arrow-right-radius.svg";
import {A} from "../../../component/text/a";

const bookCard = ({
                      book,
                      border,
                      index,
                      imgHeight,
                      borderRadius,
                      className,
                      margin,

                  }) => {

    if (book && book?.genre?.length > 3)
        book.genre = book.genre.slice(0, 3).concat('..')

    const Styled3 = styled.div`
      position: absolute;
      right: 0;
      bottom: 0;
    `

    const Styled4 = styled.div`
      display: grid;
      text-align: right;
      grid-template-columns: 1fr 1.3fr;
      padding: 15% 0;
    `

    return (
        book ?
            <Frame
                margin={margin}
                className={'grid-1-15'}
                key={index}
                border={border}
                borderRadius={borderRadius}
                gridGap={'5%'}
            >
                <Image
                    borderRadius={'10px'}
                    height={imgHeight}
                    className={className}
                    src={IMAGE_PATH + book.image}
                    alt={'image'}
                />

                <Frame
                    className={'relative'}
                >

                    <H4
                        margin={'5px 0'}
                        fontSize={'13px'}
                        className={'demi-bold'}
                        text={book.title}
                    />

                    <P
                        fontSize={'13px'}
                        color={Color}
                        text={mapList(book.genres)}
                    />

                    <Frame
                        className={'grid-1-3'}
                    >
                        <Styled4>
                            <Image
                                src={favourite}
                            />
                            <P
                                margin={'5% 0 0 10%'}
                                textAlign={'left'}
                                className={'bold'}
                                color={ColorOrange}
                                text={book.points}
                            />
                        </Styled4>

                        <P
                            margin={'5% 0 0 10%'}
                            textAlign={'left'}
                            color={ColorGrey}
                            text={book.reviewCount + ' reviews'}
                        />
                    </Frame>

                    <PriceBox2
                        text1={book.discount ? getDiscountPrice(book.price, book.discount.value) : book.price}
                        text2={book.discount ? book.price : null}
                        text1Color={ColorBlack}
                        text1FontSize={'16px'}
                        text2FontSize={'13px'}
                        justifyContent={'start'}
                        text2Margin={book.discount ? '1% 5% 0' : '1% 0 0 5%'}
                    />

                    <Styled3>
                        <A
                            href={'/book/' + book.id}
                        >
                            <IconyTextButton
                                padding={'1px 20px'}
                                text={'View'}
                                fontSize={'13px'}
                                backgroundColor={Color3}
                                src={arrow}
                                color={Color}
                                imgMargin={'5px 10px 0 0'}
                            />
                        </A>
                    </Styled3>
                </Frame>

            </Frame>

            : ''
    )
}

export default bookCard;