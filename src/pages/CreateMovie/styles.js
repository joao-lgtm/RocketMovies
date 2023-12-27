import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;


    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 10vh 90vh;
    grid-template-areas: 
     "header"
     "content"
    ;

`;

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

export const NewFilmContent = styled.div`
     margin-top: 40px;
     max-height: 90%;
     padding: 20px;
     overflow-y: scroll;    
     display: flex;
     flex-direction: column;
     gap: 40px;

    > h2 {
        font-size:  ${({ theme }) => theme.FONTSIZE.LG};
    }
`;

export const Inputs = styled.div`
    display: flex;
    gap: 40px;
`;


export const TextArea = styled.div`
    > textArea {
        background: ${({ theme }) => theme.BACKGROUND.BACKGROUND_500};
        resize: none;
        width: 100%;
        height: 274px;
        border: none;
        padding: 12px;
        color: white;
        border-radius: 20px;
    }
`;


export const Buttons = styled.div`
    display: flex;
    gap: 40px;

    > button {
        width: 100%;
    }
`;