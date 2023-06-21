import Frame from "../../../component/frame/frame";
import styled from "styled-components";
import Temp from "./Temp";
import Temp2 from "./Temp2";
import Temp3 from "./Temp3";
import {FilterBox} from "./filter-box";

export const BookGrid = () => {

    const Styled = styled.div`
      padding: 1.5% 8%;
        display: grid;
      grid-template-columns: 1.4fr 4fr;
      grid-gap: 20px;
      
    `

    return(

        <Styled>
            <FilterBox/>

            <Temp3/>
        </Styled>
    )
}