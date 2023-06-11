import CustomCarousel, {CarouselItem} from "../../component/carousel/custom-carousel";
import H5 from "../../component/text/h5";
import {promotions} from "../../utils/temp";
import {Color, ColorBlack, ColorGrey} from "../../utils";
import H1 from "../../component/text/h1";
import H2 from "../../component/text/h2";
import LeftIconyTextButton from "../../component/button/LeftIconyTextButton";
import ArrowRight from "../../assets/icons/arrow-right-stick.svg";
import SimplyButton from "../../component/button/SimplyButton";
import styled from "styled-components";
import Frame from "../../component/frame/frame";

const StyledDiv2 = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 42%;
  padding: 5% 6%;
`

const StyledDiv3 = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-gap: 20px;
  padding: 20px 0 50px;
`

const pageCarousel = ({


                      }) => {

    return(

        <CustomCarousel
            dot
            dotIndicatorClassName={'top-promo-carousel-indicators'}
        >
            {promotions.map((promotion, index) =>
                <CarouselItem key={index}>
                    <Frame
                        borderRadius={'15px'}
                        overflow={'hidden'}
                        padding={'3% 0'}
                        backgroundImg={promotion.bgImg}
                    >
                        <StyledDiv2>
                            <H5
                                text={promotion.header}
                                letterSpacing={'4px'}
                                color={Color}
                            />

                            <H1
                                text={promotion.title}
                                color={ColorBlack}
                                fontFamily={'OrgonPlan-DemiBold'}
                                fontSize={'45px'}
                            />

                            <H2
                                text={promotion.subtitle}
                                color={ColorBlack}
                                fontSize={'30px'}
                                fontFamily={'OrgonPlan-Light'}
                            />

                            <H5
                                text={promotion.content}
                                color={ColorBlack}
                                fontFamily={'OrgonPlan-Light'}
                                fontSize={'11px'}
                            />

                            <StyledDiv3>
                                <LeftIconyTextButton
                                    text={promotion.btn1}
                                    backgroundColor={Color}
                                    src={ArrowRight}
                                    fontSize={'13px'}
                                    padding={'8px'}
                                />
                                <SimplyButton
                                    text={promotion.btn2}
                                    fontSize={'13px'}
                                    borderRadius={'8px'}
                                    color={ColorBlack}
                                    padding={'8px'}
                                    border={'solid 1px '+ColorGrey}
                                />
                            </StyledDiv3>
                        </StyledDiv2>
                    </Frame>
                </CarouselItem>
            )}
        </CustomCarousel>

    )
}

export default pageCarousel;