import Frame from "../../../component/frame/frame";
import {Color, Color3, ColorBlack, ColorOrange, getPoints, IMAGE_PATH} from "../../../utils";
import Image from "../../../component/image/img";
import {Heading} from "../../../component/text/heading";
import P from "../../../component/text/p";
import H1 from "../../../component/text/h1";
import SimplyButton from "../../../component/button/SimplyButton";

export const ReviewCard = ({
    review
                           }) => {

    const publishedDate = new Intl.DateTimeFormat(
        'en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'}).format(new Date(review ? review.date : '2/1/2010'));

    return(
        <Frame>
            <Frame
                margin={'2% 0'}
                border={'1px solid ' + Color3}
                padding={'4%'}
                className={'grid-4-1'}
                borderRadius={'10px'}
            >
                <Frame>
                    <Frame
                        className={'grid-1-3'}
                        width={'fit-content'}
                    >
                        <Image
                            borderRadius={'25%'}
                            width={'40px'}
                            height={'40px'}
                            src={IMAGE_PATH + review.user.avatar}
                            margin={'0 2px 0 0'}
                        />
                        <Heading
                            titleFontSize={'14px'}
                            title={review.user.firstname + ' ' + review.user.lastname}
                            titleColor={ColorBlack}
                            titleMargin={'3px 0'}
                            subtitleFontSize={'11px'}
                            subtitle={publishedDate}
                        />
                    </Frame>

                    <P
                        margin={'20px 0 0'}
                        lineHeight={'25px'}
                        text={review.message}
                        fontSize={'14px'}
                    />
                </Frame>

                <Frame
                    width={'70%'}
                    margin={'15% auto 0'}
                    textAlign={'center'}
                >
                    <H1
                        className={'demi-bold'}
                        color={ColorOrange}
                        text={review.point + '.0'}
                    />

                    <Frame
                        className={'grid-5'}
                        gridGap={'0'}
                    >
                        {getPoints(review.point).map((item) => item)}
                    </Frame>

                </Frame>
            </Frame>
        </Frame>
    )
}