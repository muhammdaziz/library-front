import Frame from "../../../component/frame/frame";
import {InfoBox} from "./info-box";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_PATH} from "../../../utils";
import {toast} from "react-toastify";
import {infos} from "../../../utils/temp";


export const Info = () => {

    const [report, setReport] = useState([])

    const getReport = () => {
        axios.get(
            BASE_PATH + '/website/report',
        ).then(res =>
            setReport(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
            getReport(),
        []
    )

    return(
        <Frame
            className={'grid-4'}
            padding={'3% 15%'}
        >
            {report.slice(0, 4).map((info, index) =>
                <InfoBox
                    key={index}
                    info={info}
                    img={infos[index].img}
                />
            )}
        </Frame>
    )
}