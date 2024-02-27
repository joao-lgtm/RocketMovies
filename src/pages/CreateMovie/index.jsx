import { FiArrowLeft } from "react-icons/fi";
import { Buttons, Container, Content, Inputs, NewFilmContent, TextArea } from "./styles";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Marcadores } from "../../Components/Marcadores";
import { NewCategory } from "../../Components/NewCategory";
import { Button } from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function CreateMovie() {
    const { user } = useAuth();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDesctiption] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddNewTags() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("");
    }

    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter(marker => marker !== deleted));
    }

    async function handleCreateMovie() {
        if (!title) {
            return alert("digite um titulo")
        }
        if (!description) {
            return alert("digite uma descrição")
        }
        if (newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
        }
        await api.post(`/movie/${user.id}`, {
            title,
            description,
            rating,
            tags
        })

        alert("Filme criado com sucesso")
        navigate(-1)
    }

    return (
        <Container>
            <Header />
            <Content>
                <Link to="/"> <FiArrowLeft /> Voltar</Link>

                <NewFilmContent>
                    <h2>Novo Filme</h2>
                    <Inputs>
                        <Input placeholder="Titulo" onChange={e => setTitle(e.target.value)} />
                        <Input type="number" min="0" max="5" placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)} />
                    </Inputs>
                    <TextArea>
                        <textarea placeholder="Observações" onChange={e => setDesctiption(e.target.value)} />
                    </TextArea>

                    <h3>Marcadores</h3>
                    <Marcadores>
                        {tags.map((tag, index) => (
                            <NewCategory
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTags(tag)}
                            />
                        ))}


                        <NewCategory
                            isNew
                            placeholder="Nova Categoria"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddNewTags}
                        />
                    </Marcadores>


                    <Buttons>
                        <Button title="Salvar alteração" onClick={handleCreateMovie} />
                    </Buttons>
                </NewFilmContent>
            </Content>

        </Container>
    )
}