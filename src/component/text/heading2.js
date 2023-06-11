import Frame from "../frame/frame";
import H1 from "./h1";
import P from "./p";

// subtitle located in upper side
export const Heading = ({
    title,
    subtitle,
    textAlign,
    width,
    titleWidth,
    titleFontSize,
    titleClassName,
    titleMargin,
    titleColor,
    subtitleColor,
    subtitleClassName,
    subtitleFontSize,
                        }) => {

    return(
        <Frame
            justifyContent={'center'}
            textAlign={textAlign}
            width={width}
            margin={'0 auto'}
        >
            <P
                className={titleClassName}
                margin={titleMargin}
                width={titleWidth}
                fontSize={titleFontSize}
                text={title}
                color={titleColor}
            />
            <H1
                fontSize={subtitleFontSize}
                className={subtitleClassName}
                text={subtitle}
                color={subtitleColor}
            />
        </Frame>
    )
}