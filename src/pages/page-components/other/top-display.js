import styled from "styled-components";

import PageCarousel from "./page-carousel";
import BestSeller from "./bestSeller";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH} from "../../../utils";
import {toast} from "react-toastify";

const Styled = styled.div`
  display: grid;
  grid-template-columns: 3.75fr 1fr;
  grid-gap: 20px;
  padding: 2.5% 8%;
`

const TopDisplay = () => {

    const [promotions, setPromotions] = useState([]);

    const toastId = useRef(null);

    const getPromos = () => {

        axios.get(
                BASE_PATH+'/promotion',
                {
                    headers:
                        {
                            Authorization: localStorage.getItem(ACCESS_TOKEN)
                        }
                    }
            )
            .then(res => {
                setPromotions(res.data.data)
            })
            .catch(err => {
                if(! toast.isActive(toastId.current))
                    toastId.current = toast.error(err.response.data.errors[0].msg)
                }
            )
    }

    useEffect(() => {
        getPromos();
    }, [])

    return(
            <Styled>
                <PageCarousel
                    promotions={promotions}
                />

                <BestSeller/>
            </Styled>
    )
}

export default TopDisplay;