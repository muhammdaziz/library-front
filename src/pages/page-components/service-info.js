import Frame from "../../component/frame/frame";
import {services} from '../../utils/temp';
import {GridBox} from "./grid-box";
import {Color3} from "../../utils";


const serviceInfo = () => {

    return (
        <Frame
            padding={'1% 8%'}
            className={'grid-4'}
        >
            {services.map((service, index) =>
                <GridBox
                    svgBackgroundColor={Color3}
                    data={service}
                    key={index}
                />
            )}
        </Frame>
    )
}

export default serviceInfo;