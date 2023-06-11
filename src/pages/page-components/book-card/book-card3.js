import styled from "styled-components";
import Frame from "../../../component/frame/frame";
import H4 from "../../../component/text/h4";
import P from "../../../component/text/p";
import {Color, ColorOrange, mapList} from "../../../utils";
import PriceBox2 from "../../../component/frame/price-box2";
import Image from "../../../component/image/book-img";
import favourite from '../../../assets/icons/favorite2.svg'

const Styled = styled.img`
  //border-radius: 12px;
  //width: 100%;
`

const Styled3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 15px 0;
`

const Styled4 = styled.div`
  display: grid;
  text-align: right;
  grid-template-columns: 1fr 1.3fr;
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

    if (book.genre.length > 3)
        book.genre = book.genre.slice(0, 3).concat('..')

    return (
        <Frame
            key={index}
            border={border}
            borderRadius={borderRadius}
            // backgroundColor={ColorGrey}
        >
            <Frame
                borderRadius={'12px'}
                overflow={'hidden'}
            >
                <Image
                    height={imgHeight}
                    className={className}
                    src={book.img}
                    alt={'image'}
                />
                <Styled2
                >
                    <H4
                        color={'#fff'}
                        className={'bold'}
                        text={book.discount.percent}
                    />
                </Styled2>
            </Frame>
            <H4
                margin={'20px 0 5px 0'}
                fontSize={'14px'}
                className={'demi-bold'}
                limit={20}
                text={book.title}
            />

            <P
                fontSize={'11px'}
                color={Color}
                text={mapList(book.genre)}
            />

            <Styled3>
                <Styled4>
                    <Image
                        src={favourite}
                    />
                    <P
                        className={'bold'}
                        margin={'30% 0 0 0'}
                        color={ColorOrange}
                        text={book.point}
                    />
                </Styled4>
                <PriceBox2
                    text1={book.price}
                    text2={book.discount.percent}
                    text1Color={Color}
                    text1FontSize={'14px'}
                    text2FontSize={'13px'}
                />
            </Styled3>

        </Frame>
    )
}

export default bookCard;