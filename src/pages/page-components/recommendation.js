import Frame from "../../component/frame/frame";
import RecommendBox from "./recommend-box";
import {recommendations} from "../../utils/temp";


const recommendation = () => {


    return(
        <Frame
            className={'grid-2'}
            padding={'5% 8%'}
            gridGap={'25px'}
        >
            {recommendations.map((recommendation, index) =>
                <RecommendBox
                    key={index}
                    content={recommendation}
                    items={4}
                />
            )}
        </Frame>
    )
}

export default recommendation;