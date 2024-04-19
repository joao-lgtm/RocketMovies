import { Header } from "../../Components/Header";
import { Container, Content, FilmContent } from "./styles";
import { Button } from './../../Components/Button';
import { FiPlus } from "react-icons/fi"
import { Films } from "../../Components/Films";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
    const [search, setSearch] = useState("");
    const [films, setFilms] = useState([]);
    const navigation = useNavigate();

    function handleNewFilm() {
        navigation("/CreateMovie");
    }

    function handleMoviePreview(id){
        navigation(`/moviePreview/${id}`)
    }

    useEffect(() => {
        async function fetchFilms() {
            const response = await api.get(`movie?title=${search}`)
            setFilms(response.data)
        }

        fetchFilms();
    }, [search]);

    return (
        <Container>
            <Header setSearch={setSearch}/>

            <Content>
                <div>
                    <h2>Recomendaçôes de filmes</h2>
                    <Button icon={FiPlus} onClick={handleNewFilm} title="Adicionar Novo Filme" />
                </div>

                <FilmContent>
                    {films &&
                        films.map((film) => (
                            <Films
                                key={String(film.id)}
                                title={film.title}
                                score={film.rating}
                                description={film.description}
                                category={film.tags}
                                onClick={() => handleMoviePreview(film.id)}
                            />
                        ))

                    }
                </FilmContent>
            </Content>
        </Container>
    )
}