import './access.css'
import CustomAccordionItem2 from "./custom-accordion-item-2";

const Accordion = ({
    items,
    classname,
    clicked,
    setClicked,
    setHeight,
                       contentEl1,
                   }) => {

    return (
        <ul className={classname}>
            {items?.map((item, index) =>
                <CustomAccordionItem2
                    clickedP={clicked}
                    setClickedP={setClicked}
                    setHeightP={setHeight}
                    key={index}
                    item={item}
                    contentEl1={contentEl1}
                />
            )}
        </ul>
    );
};

export default Accordion;
