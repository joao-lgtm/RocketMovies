import { FiStar } from "react-icons/fi";
import { Container } from "./styles";

export function Stars({score}) {
    let stars = [];
    let count = 0;
    const starsCont = () => {
        for (let index = 0; index < score; index++) {
            count++; 
            stars.push(<FiStar key={String(count)} id="stars" />)
        }

        if (score < 5) {
            let scorefaltando = 5 - score;
            for (let index = 0; index < scorefaltando; index++) {
                count++; 
                stars.push(<FiStar key={String(count)}/>)
            }
        }
    }

   

    starsCont()


    return (
        <Container>
            {stars}
        </Container>
    )
}