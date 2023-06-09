import Frame from "../../../component/frame/frame";
import H4 from "../../../component/text/h4";
import {ColorGrey3, getPoints} from "../../../utils";
import {GridBox2} from "./grid-box2";
import Temp3 from "./Temp3";
import styled from "styled-components";
import Temp from "./Temp";

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  margin: 20px 0 0 0;

`

export const TestimonialBox = ({
                                   testimonial,
                               }) => {

    let data = {
        img: testimonial.user.avatar,
        title: testimonial.user.firstname + ' ' + testimonial.user.lastname,
        subtitle: testimonial.user.bio
    }


    return (

        <Frame
            padding={'5% 5% 3% 5%'}
            borderRadius={'10px'}
            border={'0.5px solid '+ColorGrey3}
        >
            <H4
                textAlign={'center'}
                fontSize={'16px'}
                text={testimonial.message}
            />
            <Styled>
                <GridBox2
                    imgBorderRadius={'50%'}
                    imgHeight={'55px'}
                    titleFontSize={'16px'}
                    titleMargin={'5px 0'}
                    data={data}
                    apiImp
                />

                <Temp/>

                <Frame
                    className={'grid-5'}
                    gridGap={'0'}
                    padding={'13% 0 0 0'}
                >
                    {getPoints(testimonial.point).map((item) => item)}
                </Frame>
            </Styled>
        </Frame>
    )
}