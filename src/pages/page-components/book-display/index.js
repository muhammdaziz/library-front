import Frame from "../../../component/frame/frame";
import H1 from "../../../component/text/h1";
import {useEffect, useState} from "react";
import axios from "axios";
import {
    BASE_PATH, Color, Color3,
    ColorGrey,
    ColorOrange, DOWNLOAD_PATH,
    getCount,
    getDiscountPrice,
    getLimitedText,
    getPoints,
    IMAGE_PATH
} from "../../../utils";
import {toast} from "react-toastify";
import BreadCrumb from "../../../component/bread-crumb";
import BookCard from "../book-card/book-card";
import Temp3 from "../other/Temp3";
import P from "../../../component/text/p";
import Image from "../../../component/image/img";
import comment from '../../../assets/icons/comment1.svg'
import like from '../../../assets/icons/like.svg'
import Temp from "../other/Temp";
import {Heading} from "../../../component/text/heading2";
import PriceBox2 from "../../../component/frame/price-box2";
import H4 from "../../../component/text/h4";
import styled from "styled-components";
import SimplyButton from "../../../component/button/SimplyButton";
import Shopping from "../../../assets/icons/shopping.svg";
import IconyTextButton from "../../../component/button/IconyTextButton";
import {A} from "../../../component/text/a";
import H2 from "../../../component/text/h2";
import {List} from "../../../component/list";
import Temp2 from "../other/Temp2";
import BookCard5 from "../book-card/book-card5";
import {ReviewBox} from "../other/review-box";


const Styled2 = styled.div`
  background-color: rgba(238, 125, 87, 0.85);
  width: fit-content;
  padding: 5px 10px 5px 10px;
  border-radius: 20px;
  height: fit-content;
  margin-top: 10px;
`


export const BookDisplay = ({param}) => {

    const [book, setBook] = useState()

    const [load, setLoad] = useState(false)

    const getBook = () => {
        axios.get(
            BASE_PATH + '/book/' + param,
        ).then(res => {
                setBook(res.data.data)
                setLoad(true)
            }
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() => {
        getBook()
        getRelatedBook()
    },
        []
    )

    const links = ['Home', 'Book', load ? book?.title : '']

    const [open, setOpen] = useState(true);

    const [related, setRelated] = useState()

    const getRelatedBook = () => {
        axios.get(
            BASE_PATH + '/book',
        ).then(res => {
                setRelated(res.data.data)
            }
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    return(
        <Frame
            padding={'3% 8%'}
        >
            <BreadCrumb links={links}/>

            {load ?
                <Frame
                    className={'grid-1-3'}
                    padding={'4% 0'}
                    gridGap={'5%'}
                >
                    <BookCard
                        book={book}
                    />

                    <Frame
                    >
                        <H1
                            className={'bold'}
                            text={book.title}
                        />

                        <Frame
                            className={'grid-2'}
                            padding={'1% 0'}
                        >
                            <Frame
                                className={'grid-3'}
                            >
                                <Frame
                                    className={'flex-wrap'}
                                >
                                    <Frame
                                        className={'grid-5'}
                                        gridGap={'0'}
                                    >
                                        {getPoints(book.points).map((item) => item)}
                                    </Frame>
                                    <P
                                        margin={'1% 0 0 10%'}
                                        textAlign={'left'}
                                        className={'bold'}
                                        color={ColorOrange}
                                        text={book.points}
                                    />
                                </Frame>

                                <Frame
                                    className={'flex-wrap'}
                                >
                                    <Image
                                        height={'20px'}
                                        width={'20px'}
                                        margin={'0 10px 0 0'}
                                        src={comment}
                                    />

                                    <P
                                        text={book.reviewCount + ' Reviews'}
                                    />
                                </Frame>

                                <Frame
                                    className={'flex-wrap'}
                                >
                                    <Image
                                        height={'20px'}
                                        width={'20px'}
                                        margin={'0 10px 0 0'}
                                        src={like}
                                    />

                                    <P
                                        text={getCount(book.reviewCount) + ' Like'}
                                    />
                                </Frame>
                            </Frame>

                            <Temp/>
                        </Frame>

                        {
                            book ?
                                <>
                                    <P
                                        fontSize={'14px'}
                                        color={ColorGrey}
                                        text={getLimitedText(book?.description, 445)}
                                        lineHeight={'25px'}
                                        margin={'0 0 20px 0'}
                                    />

                                    <P
                                        fontSize={'14px'}
                                        color={ColorGrey}
                                        text={book?.description?.substring(445)}
                                        lineHeight={'25px'}
                                    />
                                </>
                                : ''
                        }

                        <Frame
                            padding={'3% 0 1% 0'}
                            className={'grid-15-1'}

                            borderBottom={'dotted 2px ' + ColorGrey}
                        >
                            <Frame
                                className={'flex-wrap'}
                                gridGap={'10%'}
                            >
                                <Frame
                                    className={'grid-1-3'}
                                >
                                    <Image
                                        borderRadius={'25%'}
                                        width={'50px'}
                                        height={'50px'}
                                        src={IMAGE_PATH + book.author.avatar}
                                        margin={'0 4px 0 0'}
                                    />
                                    <Heading
                                        titleFontSize={'13px'}
                                        title={'Written by'}
                                        titleColor={ColorGrey}
                                        titleMargin={'3px 0 10px 0'}
                                        subtitleFontSize={'16px'}
                                        subtitle={book.author.firstname + ' ' + book.author.lastname}
                                    />
                                </Frame>

                                <Frame
                                    padding={'5px 0 0 0'}
                                >
                                    <Heading
                                        titleFontSize={'13px'}
                                        title={'Publisher'}
                                        titleColor={ColorGrey}
                                        titleMargin={'0 0 10px 0'}
                                        subtitleFontSize={'16px'}
                                        subtitle={book.publisher}
                                    />
                                </Frame>

                                <Frame
                                    padding={'5px 0 0 0'}
                                >
                                    <Heading
                                        titleFontSize={'13px'}
                                        title={'Year'}
                                        titleColor={ColorGrey}
                                        titleMargin={'0 0 10px 0'}
                                        subtitleFontSize={'16px'}
                                        subtitle={new Date(book.publishedDate).getFullYear()}
                                    />
                                </Frame>
                            </Frame>
                        </Frame>

                        <Frame
                            className={'grid-2'}
                        >
                            <Frame
                                className={'flex-wrap'}
                            >
                                <PriceBox2
                                    justifyContent={'center'}
                                    text1={book.discount ? getDiscountPrice(book.price, book.discount.value) : book.price}
                                    text2={book.discount ? book.price : null}
                                    text1FontSize={'30px'}
                                    text2FontSize={'13px'}
                                    text2Margin={'15px 10px 0'}
                                />

                                {book.discount ?
                                    <Styled2>
                                        <H4
                                            color={'#fff'}
                                            fontSize={'13px'}
                                            text={book.discount.value + '%'}
                                        />
                                    </Styled2>
                                    : ''}
                            </Frame>

                            <Frame
                                className={'flex-wrap'}
                                justifyContent={'end'}
                                padding={'2%'}
                            >
                                <A
                                    href={DOWNLOAD_PATH + book.document}
                                >
                                    <IconyTextButton
                                        padding={'5px 20px'}
                                        text={'Download'}
                                        backgroundColor={Color}
                                        src={Shopping}
                                        imgMargin={'5px 10px 0 0'}
                                    />
                                </A>
                            </Frame>
                        </Frame>

                    </Frame>
                </Frame>
            : ''}

            <Frame
                padding={'3% 0'}
                className={'grid-3-1'}
                gridGap={'3%'}
            >
                <Frame>
                    <Frame
                        className={'flex-wrap'}
                        justifyContent={'start'}
                        margin={'0 0 3% 0'}
                    >
                        <H2
                            className={'demi-bold'}
                            cursor={'pointer'}
                            onclick={() => setOpen(true)}
                            color={open ? null : ColorGrey}
                            text={'Details Product'}
                            margin={'0 5% 0 0'}
                        />
                        <H2
                            className={'demi-bold'}
                            cursor={'pointer'}
                            onclick={() => setOpen(false)}
                            color={open ? ColorGrey : null}
                            text={'Customer Reviews'}
                        />
                    </Frame>

                    {open ?
                        <List
                            book={book}
                        />
                        :
                        <ReviewBox book={book}/>
                    }
                </Frame>

                <Frame>
                    <H2
                        className={'demi-bold'}
                        text={'Related Books'}
                    />

                    <Frame
                        margin={'9% 0 0 0'}
                    >
                        {
                            related?.slice(0, 3).map((book, index) =>
                                <BookCard5
                                    margin={'9% 0'}
                                    key={index}
                                    book={book}
                                />
                            )
                        }

                        <A
                            href={'/books/'}
                        >
                            <SimplyButton
                                text={'VIEW MORE'}
                                backgroundColor={Color3}
                                color={Color}
                                padding={'10px 20px'}
                                fontSize={'13px'}
                                width={'100%'}
                                borderRadius={'10px'}
                            />
                        </A>
                    </Frame>
                </Frame>
            </Frame>
        </Frame>
    )
}