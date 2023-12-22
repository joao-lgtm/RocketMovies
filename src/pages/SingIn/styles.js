import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
`

export const Form = styled.form`
   padding: 0 136px;
   display: flex;
   flex-direction: column;
   justify-content: center;


    > h1 {
      font-size: ${({ theme }) => theme.FONTSIZE.EXL};
      color: ${({ theme }) => theme.COLORS.PINK_1000};
    }

    > h2 {
      font-size: ${({ theme }) => theme.FONTSIZE.SM};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > span {
      margin: 48px 0;
      font-size: ${({ theme }) => theme.FONTSIZE.LM};
    }

    > button{
      margin-top: 24px;
      margin-bottom: 42px;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.PINK_1000};
      text-align: center;
    }

`