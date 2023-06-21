import React, { useState } from 'react';
import './index.css'
import Frame from "../frame/frame";
import P from "../text/p";
import {ColorGrey, ColorGrey2, ColorGrey3, getUrl} from "../../utils";
import {A} from "../text/a";
const Accordion = ({
    item
}) => {

    const [active, setActive] = useState(false);

    return (
        <Frame
            className="accordion-item"
        >

            <div
                className="accordion-title"
                onClick={() => setActive(!active)}
            >
                <P
                    className={'bold'}
                    text={active ? '- ' : '+ '}
                    margin={'0'}
                />

                <P
                    margin={'0 5px'}
                    className={'bold'}
                    text={item.title}
                />

                <P
                    color={ColorGrey}
                    className={'bold'}
                    text={' (' + item.count + ')'}
                />
            </div>

            {active &&
                <div
                    className="accordion-content"
                >
                    {
                        item?.body.map((item, index) =>
                            <A
                                color={ColorGrey}
                                key={index}
                                href={'book/' + getUrl(item)}
                                text={item}
                            />
                        )
                    }
                </div>
            }
        </Frame>
    );
};

export default Accordion;