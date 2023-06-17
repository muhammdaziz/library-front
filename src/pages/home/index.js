import Navbar from "../page-components/navbar";
import TopDisplay from "../page-components/top-display";
import ServiceInfo from "../page-components/service-info";
import {Offer} from "../page-components/offer";
import {Flash} from "../page-components/flash";
import {OnSale} from "../page-components/on-sale";
import {Featured} from "../page-components/featured";
import {Testimonial} from "../page-components/testimonial";
import {News} from "../page-components/news";
import {Info} from "../page-components/info";
import {Subscribe} from "../page-components/subscribe";
import {Footer} from "../page-components/footer";
import {Recommendation} from "../page-components/recommendation";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_PATH} from "../../utils";
import {toast} from "react-toastify";

const Home = () => {

    const style = {
        backgroundColor: '#909090',
        padding: '0'
    }

    const [books, setBooks] = useState({data:[]});

    const getBooks = () => {

        axios.get(
            BASE_PATH + "/book"
        ).then(res =>
            setBooks(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    // const addFeedback = () => {
    //
    //     axios.post(
    //         BASE_PATH + "/feedback",
    //         {
    //             message: 'sdsdsa',
    //             point: 3
    //         },
    //         {
    //             headers:{
    //                 Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlckFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY4NjkyNjc4OCwiZXhwIjoxNjg2OTk4Nzg4fQ.vP4Rh-Ky_q178I0fHkoqVJlJ3GNGv3je8or6j5oWBGGmmRQ4ZvCvOfpUF_WwA-HzwLTplvgI5imNJTZfQ3P5xA'
    //             }
    //         }
    //     ).then(res =>
    //         console.log(res)
    //         // setBooks(res.data.data)
    //     ).catch(err =>
    //         toast.error(err.response.data.errors[0].msg)
    //     )
    // }


    useEffect(() =>
        getBooks(),
        []
    )

    const contents = {books: books}

    return(
        <>
            <Navbar/>

            <TopDisplay/>

            <ServiceInfo/>

            <Recommendation/>

            <Offer/>

            <Flash/>

            <OnSale content={contents}/>

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