import Frame from "../../component/frame/frame";
import {GridBox} from "./grid-box";
import {ACCESS_TOKEN, BASE_PATH, Color3} from "../../utils";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {servicesI} from "../../utils/temp";

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
            padding={'1% 8%'}
            className={'grid-4'}
        >
            {services.map((service, index) =>
                <GridBox
                    svgBackgroundColor={Color3}
                    data={service}
                    svg={servicesI[index].svg}
                    key={index}
                />
            )}
        </Frame>
    )
}

export default ServiceInfo;