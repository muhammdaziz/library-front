import Frame from "../../../component/frame/frame";
import CustomCarousel, {CarouselItem} from "../../../component/carousel/custom-carousel";
import styled from "styled-components";
import {books,} from '../../../utils/temp'
import H1 from "../../../component/text/h1";
import H5 from "../../../component/text/h5";
import BookCard from "../book-card/book-card-border";
import P from "../../../component/text/p";
import PriceBox from "../../../component/frame/price-box";
import SimplyButton from "../../../component/button/SimplyButton";
import {ColorWhite} from "../../../utils";

const Styled = styled.div`
  padding: 30px;
  text-align: center;
  z-index: 3;
  //background-color: red;
`

const StyledBlur = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(9px);
`

const bestSeller = ({
    // book
                    }) => {

    return(
        <CustomCarousel
            leftArrow
            rightArrow
            leftIndicatorClassName={'best-seller-arrow-indicator best-seller-left-arrow-indicator'}
            rightIndicatorClassName={'best-seller-arrow-indicator best-seller-right-arrow-indicator'}
        >
            {books.map((book, index) =>
                <CarouselItem key={index}>
                    <Styled>
                        <Frame
                            padding={'0'}
                        >
                            <H1
                                color={ColorWhite}
                                fontFamily={'OrgonPlan-Bold'}
                                fontSize={'35px'}
                                text={'Best Seller'}
                            />

                            <H5
                                color={ColorWhite}
                                text={'Based sales this week'}
                                fontFamily={'OrgonPlan-Light'}
                            />

                            <Frame
                                padding={'20px 25px'}
                            >
                                <BookCard
                                    imgHeight={'230px'}
                                    border={'2px solid #fff'}
                                    book={book}
                                />
                            </Frame>

                            <H5
                                color={ColorWhite}
                                text={book.title}
                            />

                            <P
                                color={ColorWhite}
                                margin={'3px 10px 10px'}
                                fontSize={'9px'}
                                fontFamily={'OrgonPlan-Light'}
                                text={book?.genre?.slice(0, 6).map(genre => genre).join('  ')}
                            />

                            <SimplyButton
                                padding={'0'}
                                backgroundColor={'rgb(255, 255, 255)'}
                            >
                                <PriceBox
                                    text1={book.discount.percent}
                                    text2={book.price}
                                />
                            </SimplyButton>

                        </Frame>
                    </Styled>

                    <StyledBlur
                        style={{backgroundImage: 'url('+ book.img +')'}}
                    />
                </CarouselItem>
            )}
        </CustomCarousel>

    )
}

export default bestSeller;