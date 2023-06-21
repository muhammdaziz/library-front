import Frame from "../frame/frame";
import styled from "styled-components";
import {Color, Color2, Color3, ColorBlack} from "../../utils";
import H4 from "../text/h4";
import P from "../text/p";
import {Badge} from "../badge/badge";


export const List = ({
                         book
                     }) => {

    const StyledUl = styled.ul`
      color: ${ColorBlack};
      list-style: none;
      border: 1.5px solid ${Color3};
      overflow: hidden;
      border-radius: 5px;
    `

    const StyledLi = styled.li`
      padding: 23px;
      border-bottom: solid 1px ${Color3};
      display: grid;
      grid-template-columns: 1fr 2fr;
    `

    const publishedDate = new Intl.DateTimeFormat(
        'en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'}).format(new Date(book ? book.publishedDate : '2/1/2010'));

    return (
        <Frame>
            {book ?
                <StyledUl>
                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'Book Title'}
                        />

                        <P
                            text={book?.title}
                        />
                    </StyledLi>

                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'Author'}
                        />

                        <P
                            text={book?.author.firstname + ' ' + book.author.lastname}
                        />
                    </StyledLi>

                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'ISBN'}
                        />

                        <P
                            text={book.isbn}
                        />
                    </StyledLi>

                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'Language'}
                        />

                        <P
                            text={book?.language}
                        />
                    </StyledLi>

                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'Book Format'}
                        />

                        <P
                            text={book?.editionFormat}
                        />
                    </StyledLi>

                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'Published Date'}
                        />

                        <P
                            text={publishedDate}
                        />
                    </StyledLi>

                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'Publisher'}
                        />

                        <P
                            text={book?.publisher}
                        />
                    </StyledLi>

                    <StyledLi>
                        <H4
                            className={'demi-bold'}
                            text={'Genres'}
                        />

                        <Frame
                            className={'flex-wrap'}
                        >
                            {
                                book.genres.map((genre, index) =>
                                    <Badge
                                        margin={'0 1%'}
                                        text={genre}
                                        color={Color}
                                        backgroundColor={Color3}
                                        fontSize={'13px'}
                                        fontWeight={'900'}
                                    />
                                )
                            }
                        </Frame>
                    </StyledLi>
                </StyledUl>
            : ''
            }
        </Frame>
    )
}