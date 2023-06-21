import LogoBtn from "../../../component/button/LogoBtn";
import styled from "styled-components";
import DropDown from "../../../component/dropdown/DropDown";
import MenuSvg from '../../../assets/icons/grid.svg';
import ArrowBottomSvg from '../../../assets/icons/bottomArrow.svg';
import SearchSVG from '../../../assets/icons/search.svg';
import AccountSvg from '../../../assets/icons/UserImg.svg';
import Input from "../../../component/input/input";
import IconyButton from "../../../component/button/IconyButton";
import Button from "../../../component/button/SimplyButton";
import IconyTextButton from "../../../component/button/IconyTextButton";
import {BASE_PATH, Color, getUrl} from "../../../utils";
import {menu} from "../../../utils/temp";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import Frame from "../../../component/frame/frame";
import {A} from "../../../component/text/a";
import {useOutsideAlerter} from "../../../utils/useOutsideAlerter";

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

const Styled = styled.div`
  position: absolute;
  top: 100%;
  background-color: #ffffff;
  padding: 15px;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  border-radius: 5px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
`

const Navbar = ({
                    website
}) => {

    const data = {
        title: website.name,
        subtitle: website.subtitle,
        img: website.logo
    }

    const [search, setSearch] = useState();

    const [blur, setBlur] = useState(false);

    const [searchBooks, setSearchBooks] = useState({});

    const doSearch = (e) => {

        if (e.target.value === '') {
            setSearchBooks({})
            setSearch(e.target.value)
            setBlur(false)
        } else {
            setSearch(e.target.value)
            setBlur(true)
        }

    }

    const doSearchAgain = () => {

        if (searchBooks?.books?.length === 0)
            toast.info('No Book Found')
        else{
            getSearch()
            onFocus()
        }

    }

    const onBlur = () => {
        setBlur(false)
    }

    const onFocus = () => {

        if(searchBooks?.books?.length > 0)
            setBlur(true)
    }

    const getSearch = () => {

        if(search !== '' && search)
            axios.get(
                BASE_PATH + '/book/search',
                {
                    params: {
                        search: search
                    }
                }
            ).then(res =>
                {
                    setSearchBooks(res.data.data)

                    if(res.data.data.books?.length === 0)
                        setBlur(false)
                }
            ).catch(err =>
                toast.error(err.response.data.errors[0].msg)
            )
    }

    useEffect(() =>
        getSearch()
        ,[search]
    )


    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onBlur);


    return(
        <StyledDiv>
            <LogoBtn
                apiImg
                data={data}
                width={'180px'}
            />

            <StyledDivSearch>
                <DropDown
                    links={menu}
                    leftImg={MenuSvg}
                    rightImg={ArrowBottomSvg}
                    text={'Menu'}
                />
                <Frame
                       className={'relative'}
                       padding={'0'}
                >
                    <Input
                        height={'100%'}
                        width={'100%'}
                        onChange={doSearch}
                        onFocus={onFocus}
                        placeholder={'Search over 30 million book title'}
                        color={Color}
                        border={'1px rgb(226, 226, 226) solid'}
                    />
                    {blur ?
                        <Styled
                            ref={wrapperRef}
                        >
                            {searchBooks?.books?.slice(0, 10).map((book, index) =>
                                <A
                                    fontSize={'15px'}
                                    key={index}
                                    href={'book/' + getUrl(book.id)}
                                    text={book.title}
                                />
                            )}
                        </Styled>
                    :''
                    }
                </Frame>
                <IconyButton
                    onclick={doSearchAgain}
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