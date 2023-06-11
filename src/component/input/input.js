import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    outline: none;
    text-indent: 15px;
`

const Input = ({
    placeholder,
    backgroundColor,
    color,
    borderColor,
    padding,
    type,
    border,
    borderRadius,
    fontSize,
    width,
    className,

               }) => {

    const style = {
        backgroundColor,
        borderColor,
        color,
        borderRadius,
        width,
        padding,
        fontSize,
        border,
        borderTop:'none',
        borderBottom:'none'
    }

    return(
        <StyledInput
            style={style}
            placeholder={placeholder}
            type={type}
            className={className}

        />
    )
}

export default Input;