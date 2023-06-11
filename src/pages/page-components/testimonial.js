import Frame from "../../component/frame/frame";
import {Heading} from "../../component/text/heading";
import {Color, Lorem} from "../../utils";
import styled from "styled-components";
import {testimonial} from "../../utils/temp";
import CustomOwlCarousel from "../../component/carousel/owlCarousel";
import Temp from "./Temp";
import {TestimonialBox} from "./testimonial-box";

const Styled = styled.div`
  width: 13%;
  margin: 25px auto;
  padding-left: 25px;
  display: flex;
  flex-wrap: wrap;
  
`

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -10px;
  border-radius: 50%;
  border: #fff solid 3px;
`

const StyledH = styled.h1`
  padding: 7% 3%;
  margin-left: -10px;
  border-radius: 50%;
  border: #fff solid 3px;
  background-color: ${Color};
  font-size: 10px;
  text-align: center;
`

export const Testimonial = ({}) => {

    if (testimonial.latestUsers.length > 5) {
        testimonial.latestUsers = testimonial.latestUsers.slice(0, 4);
    }

    function getCount(count) {
        if (count > 999) return count / 1000 + 'K+'
        if (count > 999999) return count / 1000000 + 'M+'
        return count
    }

    const feedbackCount = getCount(testimonial.count);

    return (

        <Frame
            padding={'3% 0'}
        >
            <Heading
                titleFontSize={'40px'}
                titleClassName={'demi-bold'}
                textAlign={'center'}
                titleMargin={'0 0 15px 0'}
                title={'Testimonials'}
                subtitle={Lorem}
                subtitleFontSize={'13px'}
                widthSubtitle={'30%'}
                subtitleCenter
            />

            <Styled>
                {testimonial.latestUsers.map((testimonial, index) =>
                    <StyledImg
                        key={index}
                        src={testimonial.user.avatar}
                    />
                )}
                {testimonial.more ? <StyledH>{feedbackCount}</StyledH> : ''}
            </Styled>

            <Frame
                padding={'3% 0 0 0'}
                className={'testimonial-carousel'}
            >
                <CustomOwlCarousel
                    items={2}
                    center
                    loop
                    dots={false}
                    margin={100}

                >
                    {testimonial.messages.map((message, index) =>
                        <TestimonialBox
                            testimonial={message}
                            key={index}
                        />
                    )}
                </CustomOwlCarousel>
            </Frame>
        </Frame>
    )
}