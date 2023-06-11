import LogoBtn from "../../component/button/LogoBtn";
import styled from "styled-components";
import DropDown from "../../component/dropdown/DropDown";
import MenuSvg from '../../assets/icons/grid.svg';
import ArrowBottomSvg from '../../assets/icons/bottomArrow.svg';
import SearchSVG from '../../assets/icons/search.svg';
import AccountSvg from '../../assets/icons/UserImg.svg';
import Input from "../../component/input/input";
import IconyButton from "../../component/button/IconyButton";
import Button from "../../component/button/SimplyButton";
import IconyTextButton from "../../component/button/IconyTextButton";
import {Color} from "../../utils";

const StyledDiv = styled.div`
  padding: 1% 8%;
  border-bottom: 1px solid rgb(240, 240, 240);
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  grid-gap: 30px;
`

const StyledDivSearch = styled.div`
  margin: 10px 0;
  border-radius: 13px;
  border: solid 1px rgb(226, 226, 226);
  display: grid;
  grid-template-columns: 1fr 5fr 0.4fr;
`
const StyledDivSignBtn = styled.div`
  margin: 10px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1.8fr;
`

const Navbar = () => {

    return(
        <StyledDiv>
            <LogoBtn
                width={'180px'}
            />

            <StyledDivSearch>
                <DropDown
                    leftImg={MenuSvg}
                    rightImg={ArrowBottomSvg}
                    text={'Menu'}
                />
                <Input
                    placeholder={'Search over 30 million book title'}
                    color={Color}
                    border={'1px rgb(226, 226, 226) solid'}
                />
                <IconyButton
                    borderRadius={'0 12px 12px 0'}
                    src={SearchSVG}
                />
            </StyledDivSearch>
            <StyledDivSignBtn>
                <Button
                    borderRadius={'8px'}
                    text={'Sign In'}
                    backgroundColor={'rgb(240, 238, 253)'}
                    color={Color}
                />
                <IconyTextButton
                    text={'Sign Up'}
                    backgroundColor={Color}
                    src={AccountSvg}
                />
            </StyledDivSignBtn>
        </StyledDiv>
    )
}

export default Navbar;