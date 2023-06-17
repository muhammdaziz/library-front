import styled from "styled-components";
import Frame from "../../../component/frame/frame";
import {Color, ColorGrey, getDiscountPrice, IMAGE_PATH, mapList} from "../../../utils";
import PriceBox2 from "../../../component/frame/price-box2";
import {GridBox2} from "../grid-box2";
import template from '../../../assets/icons/template.svg'
import {Heading} from "../../../component/text/heading";
import {Heading as Heading2} from "../../../component/text/heading2";
import IconyButton2 from "../../../component/button/IconyButton2";
import svgDownload from "../../../assets/icons/download2.svg";
import Image from "../../../component/image/book-img";


const Styled3 = styled.div`
  display: grid;
  grid-template-columns:2.5fr 1fr;
  padding: 15px 0;
`

const bookCard = ({
                      book,
                      border,
                      index,
                      borderRadius,
                      imgHeight,
                      className,
                      boxShadow,
                      backgroundColor,

                  }) => {

    if (book.genres.length > 3)
        book.genres = book.genres.slice(0, 3).concat('..')

    const bookDetail = {
        img: template,
        title: book.title,
        subtitle: mapList(book.genres)
    }

    return (
        <Frame
            padding={'5%'}
            className={'grid-1-15 relative'}
            margin={'7% 0 0 0'}
            key={index}
            backgroundColor={backgroundColor}
            boxShadow={boxShadow}
            border={border}
            borderRadius={borderRadius}
        >
            <Image
                borderRadius={'13px'}
                height={imgHeight}
                className={className}
                src={IMAGE_PATH + book.image}
                alt={'image'}
            />
            <Frame>
                <GridBox2
                    data={bookDetail}
                    index={1}
                    subtitleColor={Color}
                    titleMargin={'10px 0 5px 0'}
                />

                <Heading
                    title={book.publisher}
                    titleFontSize={'16px'}
                    titleMargin={'20px 0 10px 0'}
                    subtitle={book.description}
                    subtitleLimit={250}
                    subtitleFontSize={'13px'}
                />

                <Frame
                    className={'grid-2'}
                >

                    <Frame>
                        <Heading2
                            titleFontSize={'11px'}
                            titleMargin={'20px 0 5px 0'}
                            titleColor={ColorGrey}
                            title={'Written by'}
                            subtitle={book.author.firstname + ' ' + book.author.lastname}
                            subtitleFontSize={'15px'}
                        />
                    </Frame>
                    <Frame>
                        <Heading2
                            titleFontSize={'11px'}
                            titleMargin={'20px 0 5px 0'}
                            titleColor={ColorGrey}
                            title={'Year'}
                            subtitle={new Date(book.publishedDate).getFullYear()}
                            subtitleFontSize={'15px'}
                        />
                    </Frame>
                </Frame>

                <Styled3
                    className={'grid-2'}
                >
                    <PriceBox2
                        padding={'10px 0 10px 0'}
                        text1={book.discount ? getDiscountPrice(book.price, book.discount.value) : book.price}
                        text2={book.discount ? book.price : null}
                        text1Color={Color}
                        text1FontSize={'20px'}
                        text2FontSize={'13px'}
                        text2Margin={'3% 0 0 5%'}
                        justifyContent={'start'}
                    />
                    <IconyButton2
                        className={'right-position'}
                        width={'fit-content'}
                        img={svgDownload}
                        text={'ADD'}
                        backgroundColor={Color}
                    />

                </Styled3>
            </Frame>
        </Frame>
    )
}

export default bookCard;