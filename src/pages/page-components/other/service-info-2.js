import Frame from "../../../component/frame/frame";
import {GridBox} from "./grid-box";
import {ACCESS_TOKEN, BASE_PATH, Color, Color3} from "../../../utils";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {services2} from "../../../utils/temp";

const ServiceInfo = () => {

    const [services, setServices] = useState([]);

    const getServices = () => {

        axios.get(
            BASE_PATH+'/service',
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }
        )
            .then(res => {

                setServices(res.data.data)
            })
            .catch(err =>
                toast.error(err.response.data.errors[0].msg)
            )
    }

    useEffect(() => {
        getServices();
    }, [])

    return (
        <Frame
            backgroundColor={Color3}
            padding={'5% 8%'}
            margin={'5% 0'}
            className={'grid-4'}
        >
            {services.map((service, index) =>
                <GridBox
                    svgBackgroundColor={Color}
                    data={service}
                    svg={services2[index].svg}
                    key={index}
                />
            )}
        </Frame>
    )
}

export default ServiceInfo;