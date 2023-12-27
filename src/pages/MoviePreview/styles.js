import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;


    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 15vh 85vh;
    grid-template-areas: 
     "header"
     "content"
    ;

`

export const Content = styled.div`
    grid-area: content;
    
    padding: 47px 106px 40px 123px;


    > a {
        display: flex;
        align-items: center;
        gap: 5px;

        font-size: ${({ theme }) => theme.FONTSIZE.MEDIUM};
        color: ${({ theme }) => theme.COLORS.PINK_1000};
    }
`;

export const FilmPreviewContent = styled.div`
    max-height: 80%;
    overflow-y: scroll;
  
`;

export const FilmNameAndScore = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;
    margin-top: 24px;

    >h2{
        font-size: ${({ theme }) => theme.FONTSIZE.LG};
    }
    > div {
        > svg {
            font-size: 20px;
    }
    }
`;

export const UserPost = styled.div`
    margin-top: 24px;
    display: flex;
    align-items: baseline;
    gap: 8px;

    > div {
        display: flex;
        gap:8px;
        align-items: center;
        > img {
            width: 16px;
            height: 16px;
        }
        > svg {
            color: ${({ theme }) => theme.COLORS.PINK_1000};
        }
    }
`;

export const Categorys = styled.section`
    margin-top: 40px;
    display: flex;
    gap: 8px;
`;

export const Description = styled.div`
    margin-top: 40px;
    text-indent: 3ch;

    font-size: ${({ theme }) => theme.FONTSIZE.MEDIUM};

`;