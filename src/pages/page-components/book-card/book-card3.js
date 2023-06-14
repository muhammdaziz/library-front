import styled from "styled-components";
import Frame from "../../../component/frame/frame";
import H4 from "../../../component/text/h4";
import P from "../../../component/text/p";
import {Color, ColorOrange, getDiscountPrice, IMAGE_PATH, mapList} from "../../../utils";
import PriceBox2 from "../../../component/frame/price-box2";
import Image from "../../../component/image/book-img";
import favourite from '../../../assets/icons/favorite2.svg'

const Styled = styled.img`
  //border-radius: 12px;
  //width: 100%;
`


const Styled2 = styled.div`
  background-color: rgba(238, 125, 87, 0.85);
  width: fit-content;
  padding: 10px 10px 5px 10px;
  border-radius: 0 10px 10px 0;
  position: absolute;
  top: 20px;
`

const bookCard = ({
                      book,
                      border,
                      index,
                      imgHeight,
                      borderRadius,
                      className

                  }) => {

    if (book.genres.length > 3)
        book.genres = book.genres.slice(0, 3).concat('..')

    const Styled3 = styled.div`
      display: grid;
      grid-template-columns: ${book.points === 0 ? '1fr' : '1fr 3fr'};
      padding: 10px 0;
    `

    const Styled4 = styled.div`
      display: ${book.points === 0 ? 'none' : 'grid'};
      text-align: right;
      grid-template-columns: 1fr 1.3fr;
      padding: 20% 0;
    `

    return (
        <Frame
            key={index}
            border={border}
            borderRadius={borderRadius}
        >
            <Frame
                borderRadius={'12px'}
                overflow={'hidden'}
            >
                <Image
                    height={imgHeight}
                    className={className}
                    src={IMAGE_PATH + book.image}
                    alt={'image'}
                />
                {book.discount ?
                    <Styled2>
                        <H4
                            color={'#fff'}
                            className={'bold'}
                            text={book.discount.value + '%'}
                        />
                    </Styled2>
                : ''}
            </Frame>
            <H4
                margin={'20px 0 5px 0'}
                fontSize={'16px'}
                className={'demi-bold'}
                limit={20}
                text={book.title}
            />

            <P
                fontSize={'13px'}
                color={Color}
                text={mapList(book.genres)}
            />

            <Styled3>
                <Styled4>
                    <Image
                        margin={'10% 0 0 0'}
                        src={favourite}
                    />
                    <P
                        margin={'0 0 0 5%'}
                        className={'bold'}
                        color={ColorOrange}
                        text={book.points}
                    />
                </Styled4>
                <PriceBox2
                    text1={book.discount ? getDiscountPrice(book.price, book.discount.value) : book.price}
                    text2={book.discount ? book.price : null}
                    text1Color={Color}
                    text1FontSize={'16px'}
                    text2FontSize={'13px'}
                    text2Margin={false ? '1% 5% 0' : '1% 0 0 5%'}
                />
            </Styled3>

        </Frame>
    )
}

export default bookCard;