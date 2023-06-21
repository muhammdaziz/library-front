import Frame from "../../../component/frame/frame";
import subscribeBg from '../../../assets/temp/subscribe-bg.jpg'
import Input from "../../../component/input/input";
import H1 from "../../../component/text/h1";
import {Color1, Color3, ColorWhite} from "../../../utils";
import SimplyButton from "../../../component/button/SimplyButton";
import {useState} from "react";

export const Subscribe = () => {

    const [email, setEmail] = useState('')

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const subscribe = () => {
        setEmail('')

        alert("You subscribed 👍🏻")
    }

    return (
        <Frame
            padding={'3% 8%'}
        >
            <Frame
                borderRadius={'10px'}
                padding={'5% 30%'}
                backgroundImg={subscribeBg}
                textAlign={'center'}
            >
                <H1
                    fontSize={'27px'}
                    color={ColorWhite}
                    text={'Subscribe our newsletter for newest books updates'}
                />

                <Frame
                    margin={'7% 5% 0 5%'}
                    borderRadius={'10px'}
                    overflow={'hidden'}
                    className={'grid-3-1 placeHolderColor'}
                >
                        <Input
                            type={'email'}
                            value={email}
                            onChange={onChange}
                            padding={'15px'}
                            fontSize={'13px'}
                            backgroundColor={Color1}
                            color={Color3}
                            placeholder={'Type your email here'}
                        />
                        <SimplyButton
                            onclick={() => subscribe()}
                            fontSize={'15px'}
                            text={'Subscribe'}
                            backgroundColor={ColorWhite}
                            borderRadius={'none'}
                        />
                </Frame>
            </Frame>
        </Frame>
    )
}