import styled from "styled-components";


export const Container = styled.div`
    grid-area: header;
    display: flex;
    align-items: center;
    padding:  30px 123px;

    gap: 64px;
    
    border-bottom: 1px solid #3E3B47;
    > span {
        font-size: ${({ theme }) => theme.FONTSIZE.LM};
        color: ${({theme}) => theme.COLORS.PINK_1000};
        font-weight: bold;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
    width: 350px;

    

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    span{
        font-weight: bold;
    }
    a{
        color: ${({ theme }) => theme.COLORS.GRAY_100}
    }
       
    }
    > a {
        
        > img {
            width: 64px;
            height: 64px;
            border-radius: 35px;
            border: 2px solid #3E3B47;
        }
    }
`;