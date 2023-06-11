import styled from "styled-components";
import Image from "../../../component/image/book-img";

const Styled = styled.img`
  //border-radius: 16px;
  //width: 100%;
`

const bookCard = ({
    book,
    border,
    className,
    imgHeight,

                  }) => {

    const style = {
        border,
        borderRadius: '16px'
    }

    return(
        <Image
            height={imgHeight}
            style={style}
            className={className}
            src={book.img}
            alt={'image'}
        />
    )
}

export default bookCard;