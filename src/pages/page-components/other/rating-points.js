import Frame from "../../../component/frame/frame";
import Image from "../../../component/image/img";
import favourite from '../../../assets/icons/favorite2.svg'
import P from "../../../component/text/p";
import {Progress} from "../../../component/progress";
import styled from "styled-components";
import {getReviewPercent} from "../../../utils";

export const RatingPoints = ({review}) => {

    const Styled = styled.div`
      display: grid;
      grid-template-columns: 1fr 6fr 1fr;
      margin: 2.5% 0;
    `

    const report = {
        five: getReviewPercent(review, 5),
        four: getReviewPercent(review, 4),
        three: getReviewPercent(review, 3),
        two: getReviewPercent(review, 2),
        one: getReviewPercent(review, 1),
    }

    return (
        <Frame>
            <Styled>
                <Frame
                    className={'grid-2'}
                >
                    <Image
                        width={'15px'}
                        height={'15px'}
                        src={favourite}
                    />
                    <P
                        fontSize={'13px'}
                        text={'5'}
                    />
                </Frame>

                <Progress
                    margin={'4px 20px 0 0'}
                    value={report.five}
                    height={'7px'}
                />

                <P
                    fontSize={'13px'}
                    text={report.five + '%'}
                />
            </Styled>

            <Styled>
                <Frame
                    className={'grid-2'}
                >
                    <Image
                        width={'15px'}
                        height={'15px'}
                        src={favourite}
                    />
                    <P
                        fontSize={'13px'}
                        text={'4'}
                    />
                </Frame>

                <Progress
                    margin={'4px 20px 0 0'}
                    value={report.four}
                    height={'7px'}
                />

                <P
                    fontSize={'13px'}
                    text={report.four + '%'}
                />
            </Styled>

            <Styled>
                <Frame
                    className={'grid-2'}
                >
                    <Image
                        width={'15px'}
                        height={'15px'}
                        src={favourite}
                    />
                    <P
                        fontSize={'13px'}
                        text={'3'}
                    />
                </Frame>

                <Progress
                    margin={'4px 20px 0 0'}
                    value={report.three}
                    height={'7px'}
                />

                <P
                    fontSize={'13px'}
                    text={report.three + '%'}
                />
            </Styled>

            <Styled>
                <Frame
                    className={'grid-2'}
                >
                    <Image
                        width={'15px'}
                        height={'15px'}
                        src={favourite}
                    />
                    <P
                        fontSize={'13px'}
                        text={'2'}
                    />
                </Frame>

                <Progress
                    margin={'4px 20px 0 0'}
                    value={report.two}
                    height={'7px'}
                />

                <P
                    fontSize={'13px'}
                    text={report.two + '%'}
                />
            </Styled>

            <Styled>
                <Frame
                    className={'grid-2'}
                >
                    <Image
                        width={'15px'}
                        height={'15px'}
                        src={favourite}
                    />
                    <P
                        fontSize={'13px'}
                        text={'1'}
                    />
                </Frame>

                <Progress
                    margin={'4px 20px 0 0'}
                    value={report.one}
                    height={'7px'}
                />

                <P
                    fontSize={'13px'}
                    text={report.one + '%'}
                />
            </Styled>
        </Frame>
    )
}