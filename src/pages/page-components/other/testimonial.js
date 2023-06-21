import Frame from "../../../component/frame/frame";
import {Heading} from "../../../component/text/heading";
import {BASE_PATH, Color, getCount, IMAGE_PATH, Lorem} from "../../../utils";
import styled from "styled-components";
// import {testimonial} from "../../utils/temp";
import CustomOwlCarousel from "../../../component/carousel/owlCarousel";
import {TestimonialBox} from "./testimonial-box";
import axios from "axios";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

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

export const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([])

    const getFeedback = () => {
        axios.get(
            BASE_PATH + '/feedback/testimonial/0/20',
        ).then(res =>
            setTestimonial(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
        getFeedback(),
        []
    )

    if (testimonial?.latestUsers?.length > 5) {
        testimonial.latestUsers = testimonial.latestUsers.slice(0, 4);
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
                {testimonial.latestUsers?.map((user, index) =>
                    <StyledImg
                        key={index}
                        src={IMAGE_PATH + user.avatar}
                    />
                )}
                {testimonial.more ? <StyledH>{feedbackCount}</StyledH> : ''}
            </Styled>

            <Frame
                padding={'3% 0 0 0'}
                className={'testimonial-carousel'}
            >
                <CustomOwlCarousel
                    key={`carousel2_${testimonial.length}`}
                    items={2}
                    center
                    loop
                    dots={false}
                    margin={100}

                >
                    {testimonial.feedbacks?.map((feedback, index) =>
                        <TestimonialBox
                            testimonial={feedback}
                            key={index}
                        />
                    )}
                </CustomOwlCarousel>
            </Frame>
        </Frame>
    )
}