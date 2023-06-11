import Frame from "../../component/frame/frame";
import {infos} from "../../utils/temp";
import {InfoBox} from "./info-box";


export const Info = () => {


    return(
        <Frame
            className={'grid-4'}
            padding={'3% 15%'}
        >
            {infos.slice(0, 4).map((info, index) =>
                <InfoBox
                    key={index}
                    info={info}
                />
            )}
        </Frame>
    )
}