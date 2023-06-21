import Frame from "../../../component/frame/frame";
import CustomOwlCarousel from "../../../component/carousel/owlCarousel";
import {OfferBox} from "./offer-box";
import {Heading} from "../../../component/text/heading";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_PATH} from "../../../utils";
import {toast} from "react-toastify";

export const Offer = () => {

    const [offers, setOffers] = useState([])

    const getOffers = () => {
        axios.get(
            BASE_PATH+'/offer',
        ).then(res =>
            setOffers(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
            getOffers(),
        [])

    return(
        <Frame
            padding={'2% 8% 0% 8%'}
        >
            <Heading
                titleMargin={'0 0 20px 0'}
                textAlign={'center'}
                subtitleCenter
                titleClassName={'demi-bold'}
                widthSubtitle={'40%'}
                subtitleFontSize={'14px'}
                title={'Special Offers'}
                subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua.'}
            />

            <Frame
                padding={'5% 0 2% 0'}
                className={'offer-carousel'}
            >
                <CustomOwlCarousel
                    key={`carousel_${offers.length}`}
                    margin={35}
                    nav
                    dots={false}
                    items={3}
                >
                    {offers.map((offer, index) =>
                        <OfferBox
                            offer={offer}
                            key={index}
                        />
                    )}
                </CustomOwlCarousel>
            </Frame>
        </Frame>
    )
}
