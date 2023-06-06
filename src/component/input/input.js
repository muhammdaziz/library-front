import styled from "styled-components";



const Input = ({
    placeholder,
    backgroundColor,
    color,
    borderColor,
    type,
    borderRadius,
               }) => {

    const StyledInput = styled.input`
      padding: 15px;
      border: none;
      outline: none;
      font-size: 16px;
    `

    const style = {
        backgroundColor,
        borderColor,
        color,
        borderRadius: borderRadius ? borderRadius : '10px',
    }

    return(
        <StyledInput
            style={style}
            placeholder={placeholder}
            type={type}

        />
    )
}

export default Input;