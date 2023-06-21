import Navbar from "../page-components/other/navbar";
import TopDisplay from "../page-components/other/top-display";
import ServiceInfo from "../page-components/other/service-info";
import {Recommendation} from "../page-components/other/recommendation";
import {Offer} from "../page-components/other/offer";
import {Flash} from "../page-components/other/flash";
import {OnSale} from "../page-components/other/on-sale";
import {Featured} from "../page-components/other/featured";
import {Testimonial} from "../page-components/other/testimonial";
import {News} from "../page-components/other/news";
import {Info} from "../page-components/other/info";
import {Subscribe} from "../page-components/other/subscribe";
import {Footer} from "../page-components/other/footer";
import {BookGrid} from "../page-components/other/book-grid";
import BreadCrumb from "../../component/bread-crumb";
import Frame from "../../component/frame/frame";


export const Books = ({website}) => {

    const links = ['Home', 'Books']

    return(
        <>
            <Navbar website={website}/>

            <Frame
                padding={'1.5% 8%'}
            >
                <BreadCrumb
                    links={links}
                />
            </Frame>

            <BookGrid/>

            <OnSale/>

            <ServiceInfo/>

            <Subscribe/>

            <Footer website={website}/>

        </>
    )
}