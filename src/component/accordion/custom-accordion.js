import CustomAccordionItem from './custom-accordion-item';
import './access.css'

const Accordion = ({
    items,
    classname,
    clicked,
    setClicked,
                       contentEl1
                   }) => {

    return (
        <ul className={classname}>
            {items?.map((item, index) => (
                <CustomAccordionItem
                    clicked={clicked}
                    setClicked={setClicked}
                    key={index}
                    item={item}
                    contentEl1={contentEl1}
                />
            ))}
        </ul>
    );
};

export default Accordion;
