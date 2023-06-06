const Button = (
    {
        onclick,
        color,
        text,
        backgroundColor,
        fontSize

    }) => {

    const style = {
        padding: '15px',
        borderRadius: '10px',
        border: 'none',
        fontSize: fontSize ? fontSize : '16px',
        color: color ? color : 'white',
        backgroundColor: backgroundColor ? backgroundColor : 'rgb(1, 2, 3, 0.5)',
    }

    return(
        <button
            onClick={onclick}
            style={style}
        >
            {text}
        </button>
    )
}

export default Button;