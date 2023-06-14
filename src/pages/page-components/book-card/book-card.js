import Frame from "../../../component/frame/frame";
import Image from "../../../component/image/book-img";
import {IMAGE_PATH} from "../../../utils";

const bookCard = ({
    book,
    border,
    borderRadius,
    imgHeight,
    className

                  }) => {

    return(
        <Frame
            border={border}
            borderRadius={borderRadius}
        >
            <Image
                style={{
                    borderRadius: '12px'
                }}
                height={imgHeight}
                className={className}
                src={IMAGE_PATH + book.image}
                alt={'image'}
            />
        </Frame>
    )
}

export default bookCard;