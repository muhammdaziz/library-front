import StyledButton from "./StyledButton";

const Button = (
    {
        onclick,
        onsubmit,
        color,
        text,
        backgroundColor,
        fontSize,
        padding,
        border,
        margin,
        borderRadius,
        type,
        width,
        children
    }) => {

    const style = {
        borderRadius,
        border: border ? border : 'none',
        fontSize,
        padding,
        width,
        margin,
        overflow: 'hidden',
        color,
        backgroundColor: backgroundColor ? backgroundColor : 'unset',
    }

    return(
        <StyledButton
            type={type}
            onClick={onclick}
            onSubmit={onsubmit}
            style={style}

        >
            {text ? text : children}
        </StyledButton>
    )
}

export default Button;