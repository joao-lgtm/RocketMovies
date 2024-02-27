import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../../Components/Header";
import {
    Buttons,
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../Components/Button";
import { api } from './../../services/api';

export function MoviePreview() {
    const { id } = useParams();
    const [dataFilm, setDataFilm] = useState();
    const [dataUser, setDataUser] = useState();
    const [avatarURL, setAvatarURL] = useState();
    const { user } = useAuth();
    const navigation = useNavigate();


    useEffect(() => {
        async function fetchFilmDetail() {
            try {
                const filmResponse = await getFilmDetails();
                const userData = await getUserDetails(filmResponse.data.user_id);
                const avatarURL = buildAvatarURL(userData.avatar);

                setDataFilm(filmResponse.data);
                setDataUser(userData);
                setAvatarURL(avatarURL);
            } catch (error) {
                console.error("Erro ao buscar detalhes do filme:", error);
            }
        }

        async function getFilmDetails() {
            try {
                const response = await api.get(`movie/${id}`);
                return response;
            } catch (error) {
                console.error("Erro ao buscar detalhes do filme:", error);
                throw error;
            }
        }

        async function getUserDetails(userId) {
            try {
                const responseUser = await api.get(`users/${userId}`);
                return responseUser.data;
            } catch (error) {
                console.error("Erro ao buscar detalhes do usuário:", error);
                throw error;
            }
        }

        function buildAvatarURL(avatar) {
            return `${api.defaults.baseURL}/files/${avatar}`;
        }

        fetchFilmDetail();

    }, []);

    async function handleDelete(){
        await api.delete(`movie/${id}`);
        alert("Filme excluido.");
        navigation("/");
    }

    return (
        <Container>
            <Header />
            <Content>
                <a href="/"> <FiArrowLeft /> Voltar</a>
                {dataFilm &&
                    <FilmPreviewContent>
                        <FilmNameAndScore>
                            <h2>{dataFilm.title}</h2>
                            <Stars score={dataFilm.rating} />
                        </FilmNameAndScore>
                        <UserPost>
                            <div>
                                <img src={avatarURL} /> <span>Por {dataUser.name}</span>
                            </div>
                            <div>
                                <FiClock /> <span>{dataFilm.created_at}</span>
                            </div>
                        </UserPost>
                        <Categorys>
                            {dataFilm.tags && dataFilm.tags.map(tag => (
                                <Tags key={tag.id} name={tag.name} />
                            ))}
                        </Categorys>

                        <Description>
                            <p>
                                {dataFilm.description}
                            </p>
                        </Description>

                    </FilmPreviewContent>
                }

                {dataFilm && user.id === dataFilm.user_id &&
                    <Buttons>
                        <Button $exclud title="Excluir filme" onClick={handleDelete} />
                    </Buttons>
                }


            </Content>
        </Container>
    )
}