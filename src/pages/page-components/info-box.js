import Frame from "../../component/frame/frame";
import Image from "../../component/image/img";
import {Heading} from "../../component/text/heading";
import {ColorGrey, getNumber} from "../../utils";

export const InfoBox = ({
                            info
                        }) => {

    return (
        <Frame>
            <Image
                src={info.img}
                height={'80px'}
            />

            <Heading
                textAlign={'center'}
                title={getNumber(info.value)}
                titleMargin={'13% 0 2% 0'}
                titleClassName={'demi-bold'}
                subtitle={info.title}
                subtitleFontSize={'14px'}
                subtitleColor={ColorGrey}
            />
        </Frame>
    )
}