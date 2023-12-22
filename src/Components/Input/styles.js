import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.GRAY_500} ;
    background: ${({ theme }) => theme.BACKGROUND.BACKGROUND_500};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;
        border-radius: 5px;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

       
    }
    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-left: 16px;
    }
`