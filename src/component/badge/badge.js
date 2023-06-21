import styled from "styled-components";


const Styled = styled.span`
  width: fit-content;
  background-color: #9a5f5f;
  padding: 8px 10px;
  border-radius: 12px;
  font-family: OrgonPlan-Light, sans-serif;
  font-size: 9px;
  margin: 1px;
  letter-spacing: 1px;

`

export const Badge = ({
    text,
    fontSize,
    color,
    backgroundColor,
    margin,
    fontWeight,
                      }) => {

    const style = {
        fontSize,
        color,
        backgroundColor,
        margin,
        fontWeight
    }

    return(
        <Styled
            style={style}
        >
            {text}
        </Styled>
    )
}