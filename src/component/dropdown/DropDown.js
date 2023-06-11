
import './index.css'
import DoubleIconyButton from "../button/DoubleIconyButton";

const CustomDropDown = ({
    leftImg,
    rightImg,
    text,
    bkgColor
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
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default CustomDropDown;