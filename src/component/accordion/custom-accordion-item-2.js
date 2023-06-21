import React, { useState } from "react";
import { useRef } from "react";
import P from "../text/p";
import {ColorGrey, getUrl} from "../../utils";
import {A} from "../text/a";
import './index.css'

const CustomAccordionItem = ({
    setHeightP,
    clickedP,
    setClickedP,
                                 contentEl1,
                                 item
}) => {

    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const { title, body, count } = item;

    const handleToggle = () => {
        setClicked((prev) => !prev);
        setHeightP(clickedP ? contentEl1.current.scrollHeight+contentEl.current.scrollHeight: 'fit-content')
    };

    return (
        <li className={`custom-accordion-item ${clicked ? "active" : ""}`}>
            <button className="-button" onClick={handleToggle}>
                <P
                    className={'bold'}
                    text={clicked ? '- ' : '+ '}
                />

                <P
                    margin={'0 5px'}
                    className={'bold'}
                    text={title}
                />

                <P
                    color={ColorGrey}
                    className={'bold'}
                    text={' (' + count + ')'}
                />
            </button>

            <div
                ref={contentEl}
                className="answer-wrapper"
                style={
                    clicked
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="-answer">
                    {
                        body.map((item, index) =>
                            <A
                                color={ColorGrey}
                                key={index}
                                href={'book/' + getUrl(item)}
                                text={item}
                            />
                        )
                    }
                </div>
            </div>
        </li>
    );
};

export default CustomAccordionItem;
