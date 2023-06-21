
const CustomAccordionItem = ({
                                 contentEl1,
    clicked,
    setClicked,
                                 item
                             }) => {


    const {title, body} = item;

    const handleToggle = () => {
        setClicked((prev) => !prev);
    };

    return (
        <li className={`custom_accordion_item ${clicked ? "active" : ""}`}>
            <button className="button" onClick={handleToggle}>
                {title}
                <span className="control">{clicked ? '-' : '+'}</span>
            </button>

            <div
                ref={contentEl1}
                className="answer_wrapper"
                style={
                    clicked
                        ? {height: contentEl1.current.scrollHeight}
                        : {height: '0px'}
                }
            >
                <div className="answer">{body}</div>
            </div>
        </li>
    );
};

export default CustomAccordionItem;
