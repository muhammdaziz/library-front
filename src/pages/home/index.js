import Frame from "../../component/frame/frame";
import Navbar from "../page-components/navbar";
import TopDisplay from "../page-components/top-display";
import ServiceInfo from "../page-components/service-info";
import Recommendation from "../page-components/recommendation";
import {Offer} from "../page-components/offer";
import {Flash} from "../page-components/flash";
import {OnSale} from "../page-components/on-sale";
import {Featured} from "../page-components/featured";
import {Testimonial} from "../page-components/testimonial";
import {News} from "../page-components/news";
import {Info} from "../page-components/info";
import {Subscribe} from "../page-components/subscribe";
import {Footer} from "../page-components/footer";

const Home = () => {

    const style = {
        backgroundColor: '#909090',
        padding: '0'
    }

    return(
        <>
            <Navbar/>

            <TopDisplay/>

            <ServiceInfo/>

            <Recommendation/>

            <Offer/>

            <Flash/>

            <OnSale/>

            <Featured/>

            <Testimonial/>

            <News/>

            <Info/>

            <Subscribe/>

            <Footer/>

        </>
    )
}

export default Home;