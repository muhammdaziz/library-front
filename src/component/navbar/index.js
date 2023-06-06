import Button from "../button/SimplyButton";
import IconyButton from "../button/IconyButton";
import svg from "../../assets/images/railways_logo.png";
import svg1 from "../../assets/icons/grid.svg";
import svg2 from "../../assets/icons/bottomArrow.svg";

import Input from "../input/input";
import DropDown from "../dropdown/DropDown";
import LogoBtn from "../button/LogoBtn";

const Navbar = () => {
    const option = [
        {
            value: 'asa',
            label: 'adsf'
        },
        {
            value: 'www',
            label: 'grgr'
        },
        {
            value: 'eds',
            label: 'yj'
        },
        {
            value: '76y',
            label: '9ui'
        },
        {
            value: 'kjh',
            label: 'lok'
        },
        {
            value: 'wwaqdr',
            label: 'kjj'
        },
    ]
    return(
        <div style={{backgroundColor: 'rgb(12, 13, 1, 0.5)', padding: '10%'}}>
            <Button text={"btn-test"} ></Button>
            <IconyButton src={svg1}></IconyButton>
            <Input
                type={'text'}
                placeholder={"text here"}
                color={"red"}
                borderRadius={"0"}

            />


            <DropDown src1={svg1} src2={svg2}/>

            <LogoBtn src={svg} title={'Bookoe'} subtitle={'Book store website'}/>
        </div>
    )
}

export default Navbar;