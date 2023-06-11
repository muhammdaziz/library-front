import styled from "styled-components";
import Frame from "../../../component/frame/frame";
import {Color, ColorGrey, mapList} from "../../../utils";
import PriceBox2 from "../../../component/frame/price-box2";
import {GridBox2} from "../grid-box2";
import template from '../../../assets/icons/template.svg'
import {Heading} from "../../../component/text/heading";
import {Heading as Heading2} from "../../../component/text/heading2";
import IconyButton2 from "../../../component/button/IconyButton2";
import svgDownload from "../../../assets/icons/download2.svg";
import Image from "../../../component/image/book-img";
// import svgDownload from "../../../assets/icons/favorite2.svg";


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

    if (book.genre.length > 3)
        book.genre = book.genre.slice(0, 3).concat('..')

    const bookDetail = {
        img: template,
        title: book.title,
        subtitle: mapList(book.genre)
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
                src={book.img}
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
                            subtitle={book.author.name}
                            subtitleFontSize={'17px'}
                        />
                    </Frame>
                    <Frame>
                        <Heading2
                            titleFontSize={'11px'}
                            titleMargin={'20px 0 5px 0'}
                            titleColor={ColorGrey}
                            title={'Year'}
                            subtitle={book.publishedYear}
                            subtitleFontSize={'17px'}
                        />
                    </Frame>
                </Frame>

                <Styled3
                    className={'grid-2'}
                    margin={'20px 0 0 0'}
                >
                    <PriceBox2
                        text1={'$ ' + book.price}
                        text2={book.discount.percent}
                        text1Color={Color}
                        text1FontSize={'20px'}
                        text2FontSize={'14px'}
                        text2Margin={'3px 0 0 0'}
                        textAlign={'left'}
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