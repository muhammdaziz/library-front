import Frame from "../../component/frame/frame";
import RecommendBox from "./recommend-box";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_PATH} from "../../utils";
import {toast} from "react-toastify";


export const Recommendation = () => {

    const [recommendation, setRecommendation] = useState([])

    const getRecommendation = () => {
        axios.get(
            BASE_PATH+'/recommendation',
        ).then(res =>
            setRecommendation(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
        getRecommendation(),
        [])

    return(
        <Frame
            className={'grid-2'}
            padding={'5% 8%'}
            gridGap={'25px'}
        >
            {recommendation.map((recommendation, index) =>
                <RecommendBox
                    key={index}
                    content={recommendation}
                    items={4}
                />
            )}
        </Frame>
    )
}