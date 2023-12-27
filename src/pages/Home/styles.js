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


`;

export const Content = styled.main`
    grid-area: content;


    padding: 47px 106px 40px 123px;


   > :first-child {
    display: flex;
    justify-content: space-between;


    > h2 {
        font-size: 2rem;
        font-weight: 500;
    }
   }
    
   
`;


export const FilmContent = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 80%;
    overflow-y: auto;

    margin-top: 64.45px;
    border-radius: 16px;

    > div {
        margin-bottom: 24px;
    }
`;