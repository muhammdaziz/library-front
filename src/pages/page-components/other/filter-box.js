import Frame from "../../../component/frame/frame";
import H1 from "../../../component/text/h1";
import {EditorPicks} from "./editor-picks";
import CustomAccordion from "../../../component/accordion/custom-accordion";
import {useRef, useState} from "react";
import H2 from "../../../component/text/h2";

export const FilterBox = () => {

    const contentEl1 = useRef();
    const [height, setHeight] = useState();
    const [clicked, setClicked] = useState(false);

    const links = ['Alone Hero', 'Alien Invassion', 'Bullo The Cat', 'Cut That Hair!', 'Dragon Of The King']

    const items = [
        {
            title: 'Best Sales',
            body: links,
            count: 105
        },
        {
            title: 'Most Commented',
            body: links,
            count: 21
        }
    ]

    const accordionItem = [
        {
            title: 'Editor Picks',
            body:   <EditorPicks
                setHeight={setHeight}
                contentEl1={contentEl1}
                items={items}
                clicked={clicked}
                setClicked={setClicked}
            />
        },
    ]



    return(
        <Frame
            // padding={'20px 0'}
            // backgroundColor={'yellow'}
        >
            <H1
                className={'demi-bold'}
                text={'Filter Option'}
            />

            <CustomAccordion
                clicked={clicked}
                setClicked={setClicked}
                contentEl1={contentEl1}
                classname={'custom_accordion'}
                items={accordionItem}
            />

        </Frame>
    )
}