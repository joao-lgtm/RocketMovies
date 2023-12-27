import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    padding: 16px;
    background: ${({ theme, $isNew }) => $isNew ? "transparent" : "#262529"  };
    
    border: ${({ theme, $isNew }) => $isNew  ? "1px dashed gray"  : "none"};
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({ theme, $isNew }) => $isNew ? "gray" :  "white" };

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK_1000};
    }

`;