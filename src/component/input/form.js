import styled from "styled-components";

const StyledForm = styled.form`
`

export const Form = ({
                   backgroundColor,
                   color,
                   borderColor,
                   padding,
                   border,
                   borderRadius,
                   fontSize,
                   width,
                   className,
    children,
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
        <StyledForm
            action={() => {}}
            style={style}
            className={className}
        >
            {children}
        </StyledForm>
    )
}