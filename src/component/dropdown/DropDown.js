
import './index.css'
import DoubleIconyButton from "../button/DoubleIconyButton";

const CustomDropDown = ({
    src1,
    src2
                        }) => {

    return(
        <div className="dropdown">
            <DoubleIconyButton text={'Menu'} classname={'drop-btn'} src1={src1} src2={src2}/>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default CustomDropDown;