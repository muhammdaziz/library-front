import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  min-width: ${({ minWidth }) => minWidth + "px" || "auto"};
  transition: 0.3s ease;
  position: relative;
  display: inline-block;
  padding: 1% 3%;
`

export default StyledButton