import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import left from '../../assets/icons/arrow-left.svg';
import right from '../../assets/icons/arrow-right.svg';

import "./Carousel.css";
import Image from "../image/img";

export const CarouselItem = ({
    key,
        children,
        width,
}) => {
    return (
        <div
            key={key}
            className="custom-carousel-item"
            style={{ width: width }}
        >
            {children}
        </div>
    );
};

const CustomCarousel = (
    {
        children,
        dot,
        leftArrow,
        rightArrow,
        dotIndicatorClassName,
        leftIndicatorClassName,
        rightIndicatorClassName,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="custom-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="custom-inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            {/* left control button (previous)*/}
            <div
                className={leftIndicatorClassName+' left-indicator indicator'}
            >
                {leftArrow ?
                    <button
                        className={'arrow-indicator'}
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        <Image src={left} alt={'>'}/>
                    </button>
                    : ''
                }
            </div>

            {/* right control button (next)*/}
            <div
                className={rightIndicatorClassName+' right-indicator indicator'}
            >
                {rightArrow ?
                    <button
                        className={'arrow-indicator'}
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        <Image src={right} alt={'>'}/>
                    </button>
                    : ''
                }
            </div>

            {/* dot indicators*/}
            <div
                className={'dot-indicators indicator '+ dotIndicatorClassName}
            >
                {dot ?
                    React.Children.map(children, (child, index) => {
                        return (
                            <button
                                className={`${index === activeIndex ? "active" : ""}`}
                                onClick={() => {
                                    updateIndex(index);
                                }}

                                style={{
                                    width:'10px',
                                    height: '10px',
                                    border: 'none',
                                    borderRadius: '50%'
                                }}
                            >
                            </button>
                        );
                    })
                    : ''
                }
            </div>
        </div>
    );
};

export default CustomCarousel;
