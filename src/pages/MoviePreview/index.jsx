import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../../Components/Header";
import {
    Categorys,
    Container,
    Content,
    Description,
    FilmNameAndScore,
    FilmPreviewContent,
    UserPost
} from './styles';
import { Stars } from "../../Components/Stars";
import teste from "../../assets/teste.png"
import { Tags } from './../../Components/Tags';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function MoviePreview() {
    const { id } = useParams();
    console.log(id)
    const [data, setData] = useState();
    const [dataUser, setDataUser] = useState();

    useEffect(() => {
        async function fetchFilmDetail() {
            const response = await api.get(`movie/${id}`);
            setData(response.data)
        }

        fetchFilmDetail();
    }, []);

    console.log(data)
    return (
        <Container>
            <Header />
            <Content>
                <a href="/"> <FiArrowLeft /> Voltar</a>
                {data &&
                    <FilmPreviewContent>
                        <FilmNameAndScore>
                            <h2>{data.title}</h2>
                            <Stars score={data.rating} />
                        </FilmNameAndScore>
                        <UserPost>
                            <div>
                                <img src={teste} /> <span>Por</span>
                            </div>
                            <div>
                                <FiClock /> <span>{data.created_at}</span>
                            </div>
                        </UserPost>
                        <Categorys>
                            {data.tags && data.tags.map(tag => (
                                <Tags key={tag.id} name={tag.name} />
                            ))}
                        </Categorys>

                        <Description>
                            <p>
                                {data.description}
                            </p>
                        </Description>

                    </FilmPreviewContent>
                }

            </Content>
        </Container>
    )
}