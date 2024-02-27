import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 32px;
    background: rgb(255 133 155 / 5%);
    cursor: pointer;
`;

export const TitleAndStars = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Description = styled.div`
    > p {
        max-height: 250px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    }
    
`;

export const Categorys = styled.section`
    display: flex;
    gap: 8px;
`;