import StyledButton from "./StyledButton";

const Button = (
    {
        onclick,
        color,
        text,
        backgroundColor,
        fontSize,
        padding,
        border,
        margin,
        borderRadius,

        children
    }) => {

    const style = {
        borderRadius,
        border: border ? border : 'none',
        fontSize,
        padding,
        margin,
        overflow: 'hidden',
        color,
        backgroundColor: backgroundColor ? backgroundColor : 'unset',
    }

    return(
        <StyledButton
            onClick={onclick}
            style={style}

        >
            {text ? text : children}
        </StyledButton>
    )
}

export default Button;