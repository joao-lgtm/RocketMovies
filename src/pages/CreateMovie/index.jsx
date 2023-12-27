import { FiArrowLeft } from "react-icons/fi";
import { Buttons, Container, Content, Inputs, NewFilmContent, TextArea } from "./styles";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Marcadores } from "../../Components/Marcadores";
import { NewCategory } from "../../Components/NewCategory";
import { Button } from "../../Components/Button";

export function CreateMovie() {
    return (
        <Container>
            <Header />
            <Content>
                <a href="/"> <FiArrowLeft /> Voltar</a>

                <NewFilmContent>
                    <h2>Novo Filme</h2>
                    <Inputs>
                        <Input Placeholder="Titulo" />
                        <Input type="number" min="0" max="5" Placeholder="Sua nota (de 0 a 5)" />
                    </Inputs>
                    <TextArea>
                        <textarea placeholder="Observações" />
                    </TextArea>

                    <h3>Marcadores</h3>
                    <Marcadores>
                        <NewCategory name="React" />
                        <NewCategory isNew />
                    </Marcadores>


                    <Buttons>
                        <Button $exclud title="Excluir filme" /> <Button title="Salvar alteração" />
                    </Buttons>
                </NewFilmContent>
            </Content>

        </Container>
    )
}