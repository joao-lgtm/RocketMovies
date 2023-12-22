import { Tags } from "../../Components/Tags";
import { Stars } from "../../Components/Stars";
import { Categorys, Container, Description, TitleAndStars } from "./styles";


export function Films({ title, score, description, category }) {
    console.log(category)


    category.map((element, index) => {
        console.log(element, index)
    })
    return (
        <Container>
            <TitleAndStars>
                <h2>{title}</h2>
                <Stars score={score} />
            </TitleAndStars>
            <Description>
                <p>{description}</p>
            </Description>
            <Categorys>
                {category.map((element, index) => (
                    <Tags key={index} name={element} />
                ))}
            </Categorys>
        </Container>
    )
}