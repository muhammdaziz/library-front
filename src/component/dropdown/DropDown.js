
import './index.css'
import DoubleIconyButton from "../button/DoubleIconyButton";
import {A} from "../text/a";
import {getUrl} from "../../utils";
import Frame from "../frame/frame";

const CustomDropDown = ({
    leftImg,
    rightImg,
    text,
    bkgColor,
    links
                        }) => {

    return(
        <div className="dropdown">
            <DoubleIconyButton
                borderRadius={'12px 0 0 12px'}
                text={text}
                backgroundColor={bkgColor}
                classname={'drop-btn'}
                rightImg={rightImg}
                leftImg={leftImg}
                color={'rgb(105, 96, 205)'}
                fontSize={'13px'}
            />
            <Frame
                className="dropdown-content"
            >
                {
                    links.map((link, index) => {
                            return <A
                                key={index}
                                href={getUrl(link)}
                                text={link}
                            />
                        }
                    )
                }
            </Frame>
        </div>
    )
}

export default CustomDropDown;