import Frame from "../../../component/frame/frame";
import {BASE_PATH, Color, Color3, getPoints} from "../../../utils";
import styled from "styled-components";
import {Heading} from "../../../component/text/heading";
import {RatingPoints} from "./rating-points";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import H1 from "../../../component/text/h1";
import P from "../../../component/text/p";
import {ReviewCard} from "./review-card";
import SimplyButton from "../../../component/button/SimplyButton";

export const ReviewBox = ({book}) => {

    const Styled = styled.div`
      border: 1px solid ${Color3};
      padding: 3%;
      border-radius: 10px;
      display: grid;
      grid-gap: 5%;
      grid-template-columns: 2fr 2fr 1fr;
    `

    const [reviewPoints, setReviewPoints] = useState([]);
    const [review, setReview] = useState({size: 0, reviews:[]});
    const [page, setPage] = useState(0)

    const getReviewPoints = () => {

        axios.get(
            BASE_PATH + "/review/book-review/" + book.id
        ).then(res =>
            setReviewPoints(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
        {
            getReviewPoints()
            getReview()
        },
        []
    )

    const getReview =  () => {
        axios.get(
            BASE_PATH + "/review/4/" + page
        ).then(res =>
            setReview(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    };

    const getData =  () => {
        axios.get(
            BASE_PATH + "/review/4/" + page
        ).then(res => {
            return res.data.data
        }).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
        return {}
    };

    const getMore = () => {
        setPage((prev) => prev+1)

        let temp = getData()

        return {
            size: review?.size + temp?.size,
            reviews: [...review?.reviews, ...temp?.reviews]
        }
    }

    return (
        <Frame>
            <Styled>
                <Heading
                    title={'Rating Information'}
                    subtitle={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore\n' +
                        'magna aliqua. Ut enim ad minim'}
                    titleFontSize={'21px'}
                    titleMargin={'0 0 10px 0'}
                    titleClassName={'demi-bold'}
                    subtitleFontSize={'13px'}
                    subtitleLineHeight={'25px'}
                />

                <RatingPoints
                    review={reviewPoints}
                />

                <Frame
                    width={'70%'}
                    margin={'30% auto 0'}
                >
                    <Frame
                        className={'grid-2'}
                    >
                        <H1
                            text={book.points}
                        />
                        <P
                            margin={'25% 0 0 0'}
                            fontSize={'13px'}
                            text={'out of 5'}
                        />
                    </Frame>

                    <Frame
                        className={'grid-5'}
                        gridGap={'0'}
                    >
                        {getPoints(book.points).map((item) => item)}
                    </Frame>
                </Frame>
            </Styled>

            <Frame
                className={'grid-2'}
                padding={'3% 0 0'}
            >
                <P
                    className={'demi-bold'}
                    text={'Showing ' + review?.reviews?.length + ' of ' + review.size + ' reviews'}
                />
            </Frame>

            {
                review?.reviews?.map((review, index) =>
                    <ReviewCard
                        key={index}
                        review={review}
                    />
                )
            }

            <SimplyButton
                text={'VIEW MORE'}
                backgroundColor={Color}
                color={Color3}
                padding={'10px 20px'}
                fontSize={'13px'}
                width={'100%'}
                borderRadius={'10px'}
                onclick={setReview(getMore())}
            />
        </Frame>
    )
}