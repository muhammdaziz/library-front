import Frame from "../../../component/frame/frame";
import styled from "styled-components";
import LogoBtn from "../../../component/button/LogoBtn";
import P from "../../../component/text/p";
import {BASE_PATH, Color, Color3, ColorGrey2, getUrl, IMAGE_PATH} from "../../../utils";
import H4 from "../../../component/text/h4";
import {A} from "../../../component/text/a-img";
import {A as AHref} from "../../../component/text/a";
import {quickLinks} from "../../../utils/temp";
import {YandexMap} from "../../../component/map/yandex-map";
import Image from "../../../component/image/img";
import location from '../../../assets/icons/location.svg'
import phone from '../../../assets/icons/phone2.svg'
import email from '../../../assets/icons/email.svg'
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Styled = styled.div`
  padding: 3% 8%;
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.4fr 1fr;
  grid-gap: 6%;
`

const Styled2 = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);

`

const Styled3 = styled.div`
  display: flex;
  margin: 15px 0;
`

export const Footer = ({
                           website
                       }) => {

    let moreGenres = false;

    const [genres, setGenres] = useState([])

    const getGenres = () => {
        axios.get(
            BASE_PATH + '/genre',
        ).then(res =>
            setGenres(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
            getGenres(),
        []
    )

    if (genres.length > 13)
        moreGenres = true;

    const data = {
        title: website.name,
        subtitle: website.subtitle,
        img: website.logo
    }

    return (
        <Frame>
            <Styled
                padding={'3% 8%'}
            >
                <Frame>
                    <Frame
                        className={'grid-2'}
                    >
                        <LogoBtn
                            apiImg
                            data={data}
                            width={'180px'}
                        />
                    </Frame>

                    <P
                        margin={'10% 0'}
                        fontSize={'14px'}
                        className={'light'}
                        text={website.description}
                    />

                    <H4
                        margin={'40px 0 0 0'}
                        className={'medium'}
                        text={'Follow us'}
                    />

                    <Frame
                        className={'grid-6'}
                        gridGap={'10px'}
                        margin={'20px 0'}
                    >
                        {website.webPages?.map((webpage, index) =>
                            <A
                                border={'1px solid ' + Color3}
                                borderRadius={'10px'}
                                padding={'12px 10px 7px 13px'}
                                imgWidth={'18px'}
                                imgHeight={'18px'}
                                href={webpage.link}
                                img={IMAGE_PATH + webpage.image}
                                key={index}
                            />
                        )}
                    </Frame>
                </Frame>

                <Frame
                    textAlign={'left'}
                >
                    <H4
                        className={'demi-bold'}
                        text={'Book Categories'}
                        margin={'0 0 10% 0'}
                    />
                    <Styled2>
                        {genres.slice(0, 12).map((category, index) =>
                            <P
                                key={index}
                                fontSize={'15px'}
                                margin={'6% 0'}
                                text={category.name}
                            />
                        )}

                        {moreGenres ?
                            <AHref
                                className={'medium'}
                                fontSize={'15px'}
                                margin={'6% 0'}
                                text={'View more >'}
                                href={'http://'}
                                color={Color}
                            />
                            : ''
                        }
                    </Styled2>
                </Frame>

                <Frame>
                    <H4
                        className={'demi-bold'}
                        text={'Quick Links'}
                        margin={'0 0 20% 0'}
                    />

                    <Styled2>
                        {
                            quickLinks.slice(0, 7).map((link, index) =>
                                <AHref
                                    key={index}
                                    fontSize={'15px'}
                                    margin={'6.5% 0'}
                                    text={link}
                                    href={getUrl(link)}
                                />
                            )
                        }
                    </Styled2>
                </Frame>

                <Frame>
                    <H4
                        className={'demi-bold'}
                        text={'Our Store'}
                        margin={'0 0 10% 0'}
                    />
                    <Frame
                        borderRadius={'10px'}
                        overflow={'hidden'}
                    >
                        <YandexMap
                            width={'100%'}
                            height={'100px'}
                            coordinates={website.location}
                        />

                        <Styled3>
                            <Image
                                width={'37px'}
                                src={location}
                                margin={'0 10px 0 0'}
                            />
                            <P
                                margin={'5px 0 0 0'}
                                className={'medium'}
                                fontSize={'15px'}
                                text={website.address}
                            />
                        </Styled3>

                        <Styled3>
                            <Image
                                width={'20px'}
                                src={phone}
                                margin={'0 15px 0 0'}
                            />
                            <P
                                margin={'5px 0 0 0'}
                                className={'medium'}
                                fontSize={'15px'}
                                text={website.phone}
                            />
                        </Styled3>

                        <Styled3>
                            <Image
                                width={'30px'}
                                src={email}
                                margin={'0 10px 0 0'}
                            />
                            <P
                                margin={'5px 0 0 0'}
                                className={'medium'}
                                fontSize={'15px'}
                                text={website.email}
                            />
                        </Styled3>
                    </Frame>
                </Frame>
            </Styled>

            <Frame
                className={'grid-2'}
                borderTop={'1px solid ' + ColorGrey2}
                padding={'1.5% 8%'}
            >
                <P
                    fontSize={'13px'}
                    color={Color}
                    text={'Bookoe Book Store Website - © 2020 All Rights Reserved'}
                />
                <P
                    textAlign={'right'}
                    fontSize={'13px'}
                    color={Color}
                    text={'Made with ❤️ by SomeOne'}
                />
            </Frame>
        </Frame>
    )
}