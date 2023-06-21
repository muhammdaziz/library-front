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
    height,
                   className,
                   value,
                   onChange,
    onBlur,
    onFocus,

               }) => {

    const style = {
        backgroundColor,
        borderColor,
        color,
        borderRadius,
        width,
        padding,
        fontSize,
        height,
        border,
        borderTop:'none',
        borderBottom:'none'
    }

    return(
        <StyledInput
            onChange={(e) => onChange(e)}
            onFocus={onFocus}

            style={style}
            placeholder={placeholder}
            type={type}
            className={className}
            value={value}
        />
    )
}

export default Input;