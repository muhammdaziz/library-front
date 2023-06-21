import Frame from "../../../component/frame/frame";
import CustomAccordion2 from "../../../component/accordion/custom-accordion-2";
import H1 from "../../../component/text/h1";

export function EditorPicks({
    clicked,
    setClicked,
    setHeight,
                                contentEl1,
                          items
                      }) {


    return (
        <Frame>
            <CustomAccordion2
                clicked={clicked}
                setClicked={setClicked}
                setHeight={setHeight}
                classname={'custom-accordion'}
                items={items}
                contentEl1={contentEl1}
            />
        </Frame>
    )
}
