import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;

    background: ${({ theme,$exclud }) => $exclud ? "black" : theme.COLORS.PINK_1000};
    color: ${({ theme,$exclud }) => $exclud ? theme.COLORS.PINK_1000: "black"};
    border: none;
    border-radius: 5px;
    

    
    font-size: ${({ theme }) => theme.FONTSIZE.MEDIUM};
    
    padding: 15px 15px;

`;


