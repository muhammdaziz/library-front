import Navbar from "../page-components/other/navbar";
import {OnSale} from "../page-components/other/on-sale";
import {Info} from "../page-components/other/info";
import {Subscribe} from "../page-components/other/subscribe";
import {Footer} from "../page-components/other/footer";
import ServiceInfo2 from "../page-components/other/service-info-2";
import {BookDisplay} from "../page-components/book-display";
import {useParams} from "react-router-dom";

export function Book({website}) {

    let {param} = useParams();

    return (
        <>
            <Navbar website={website}/>

            <BookDisplay param={param}/>

            <ServiceInfo2/>

            <OnSale/>

            <Info/>

            <Subscribe/>

            <Footer website={website}/>
        </>
    );
}
