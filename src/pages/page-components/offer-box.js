import Frame from "../../component/frame/frame";
import Image from "../../component/image/img";
import H2 from "../../component/text/h2";
import {Badge} from "../../component/badge/badge";
import P from "../../component/text/p";
import H5 from "../../component/text/h5";
import svgDownload from '../../assets/icons/download2.svg'
import {Color, Color3, ColorGrey2} from "../../utils";
import styled from "styled-components";
import PriceBox2 from "../../component/frame/price-box2";

const Styled = styled.button`
  cursor: pointer;
  background-color: ${Color};
  outline: none;
  border: none;
  border-radius: 13px;
  padding: 13px 30px;
  display: grid;
  color: #fff;
  font-size: 14px;
  grid-template-columns: 0.4fr 1fr;
`

const Styled2 = styled.div`
  height: 240px;
`

export const OfferBox = ({
                             offer,
                             index
                         }) => {

    return (
        <Frame
            borderRadius={'13px'}
            key={index}
            border={'0.5px solid ' + ColorGrey2}
            backgroundColor={'#fff'}
            overflow={'hidden'}
            className={'offer-box'}
        >
            <Styled2>
                <Image
                    src={offer.img}
                />
            </Styled2>

            <Frame
                padding={'20px'}
            >
                <H2
                    margin={'10px 0'}
                    className={'demi-bold'}
                    text={offer.book.title}
                />
                <Frame
                    className={'flex-wrap'}
                    maxHeight={'45px'}
                    overflowY={'auto'}
                >
                    {offer.book.genre.map((genre, index) =>
                        <Badge
                            backgroundColor={Color3}
                            color={Color}
                            text={genre}
                            key={index}
                        />
                    )}
                </Frame>

                <P
                    margin={'20px 0'}
                    width={'97%'}
                    fontSize={'13px'}
                    text={offer.book.description}
                />

                <H5
                    text={offer.book.author.name}
                />

                <Frame
                    padding={'20px 0 0 0'}
                    className={'grid-2'}
                >
                    <Styled
                        fontSize={'15px'}
                        backgroundColor={'pink'}
                        src={svgDownload}
                        text={'Add to cart'}
                    >
                        <Image
                            height={'20px'}
                            src={svgDownload}
                        />
                        {'Add to cart'}
                    </Styled>
                    <PriceBox2
                        text1={'$ ' + offer.book.price}
                        text2={offer.book.discount.percent}
                        text1FontSize={'18px'}
                        text2FontSize={'13px'}
                        textAlign={'right'}
                        text2Margin={'2px 0 0 0'}
                    />
                </Frame>

            </Frame>
        </Frame>
    )
}