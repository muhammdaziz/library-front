const Option = ({
    options
                }) => {

    return (
        options.map(option =>
            <option value={option.value}>{option.label}</option>
        )
    )
}

export default Option;