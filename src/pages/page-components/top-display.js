import Frame from "../../component/frame/frame";
import styled from "styled-components";
import Temp2 from "./Temp2";

import {promotion} from "../../utils/temp";
import PageCarousel from "./page-carousel";
import BestSeller from "./bestSeller";

const Styled = styled.div`
  display: grid;
  grid-template-columns: 3.75fr 1fr;
  grid-gap: 20px;
  padding: 2.5% 8%;
`



const topDisplay = () => {

    return(
        <Styled>
            <PageCarousel/>

            <BestSeller/>
        </Styled>
    )
}

export default topDisplay;