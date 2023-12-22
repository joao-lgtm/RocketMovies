import { FiStar } from "react-icons/fi";
import { Container } from "./styles";

export function Stars({score}) {
    let stars = []

    const starsCont = () => {
        for (let index = 0; index < score; index++) {
            stars.push(<FiStar id="stars" />)
        }

        if (score < 5) {
            let scorefaltando = 5 - score;
            for (let index = 0; index < scorefaltando; index++) {
                stars.push(<FiStar />)
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