import styled from "styled-components";
import Frame from "../../../component/frame/frame";
import Image from "../../../component/image/book-img";

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
                src={book.img}
                alt={'image'}
            />
        </Frame>
    )
}

export default bookCard;