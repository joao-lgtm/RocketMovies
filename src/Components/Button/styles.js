import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;

    background: ${({ theme }) => theme.COLORS.PINK_1000};
    border: none;
    border-radius: 5px;
    
    font-size: ${({ theme }) => theme.FONTSIZE.MEDIUM};
    color: ${({ theme }) => theme.COLORS.BLACK};
    
    padding: 15px 15px;

`;


