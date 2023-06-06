import Option from "./Option";
import styled from "styled-components";

const StyledSelect = styled.select`
    padding: 20px;
  font-size: 14px;
  margin: 20px;
  
    background-color: #00b533;
  
`

const CustomSelect = ({
    options,

                }) => {

    return(
        <StyledSelect>
            <Option options={options}/>
        </StyledSelect>
    )
}

export default CustomSelect;