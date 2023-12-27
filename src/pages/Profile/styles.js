import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background: rgb(255 133 155 / 5%);
        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK_1000};
            font-size: 24px;
        }
    }
`;


export const Form = styled.form`
    max-width: 340px;
    margin: 34px auto;

    > div:nth-child(4) {
        margin-top: 24px;
    }

    > button {
        width: 100%;
    }

`;


export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;
    border-radius: 50%;

    > img {
        border-radius:50%;
        width: 186px;
        height: 186px;     
    }

    > label{
        width: 48px;
        height: 48px;
        background: ${({ theme }) => theme.BACKGROUND.BACKGROUND_100};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input{
           display :none
        }


        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }

`