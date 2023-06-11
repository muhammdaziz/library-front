import Frame from "../../component/frame/frame";
import H1 from "../../component/text/h1";
import P from "../../component/text/p";
import CustomOwlCarousel from "../../component/carousel/owlCarousel";
import Temp from "./Temp";
import {offers} from "../../utils/temp";
import {OfferBox} from "./offer-box";
import {Heading} from "../../component/text/heading";

export const Offer = () => {

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
