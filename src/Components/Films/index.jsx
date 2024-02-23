import { Tags } from "../../Components/Tags";
import { Stars } from "../../Components/Stars";
import { Categorys, Container, Description, TitleAndStars } from "./styles";


export function Films({ title, score, description, category, ...rest}) {
    return (
        <Container {...rest}>
            <TitleAndStars>
                <h2>{title}</h2>
                <Stars score={score} />
            </TitleAndStars>
            <Description>
                <p>{description}</p>
            </Description>
            <Categorys>
                {category.map((element, index) => (
                    <Tags key={index} name={element.name} />
                ))}
            </Categorys>
        </Container>
    )
}