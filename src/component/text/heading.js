import Frame from "../frame/frame";
import H1 from "./h1";
import P from "./p";

export const Heading = ({
    title,
    subtitle,
    textAlign,
    width,
    widthSubtitle,
    titleFontSize,
    titleClassName,
    titleMargin,
    titleColor,
    subtitleColor,
    subtitleClassName,
    subtitleCenter,
    subtitleLimit,
    subtitleFontSize,
                            subtitleLineHeight,
                        }) => {

    return(
        <Frame
            justifyContent={'center'}
            textAlign={textAlign}
            width={width}
            margin={'0 auto'}
        >
            <H1
                fontSize={titleFontSize}
                margin={titleMargin}
                className={titleClassName}
                text={title}
                color={titleColor}
            />
            <P
                lineHeight={subtitleLineHeight}
                className={subtitleClassName}
                margin={subtitleCenter ? '0 auto' : ''}
                width={widthSubtitle}
                fontSize={subtitleFontSize}
                text={subtitle}
                limit={subtitleLimit}
                color={subtitleColor}
            />
        </Frame>
    )
}