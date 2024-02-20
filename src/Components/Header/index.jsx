import { Container, Exit, Logo, Profile } from "./style";
import { Input } from "./../Input/";
import teste from "../../assets/teste.png"
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";


export function Header() {
    const { signOut } = useAuth();
    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    return (
        <Container>

            <Logo to="/">RocketMovies</Logo>

            <Input type="text" placeholder="Pesquisar pelo titulo" />


            <Profile>
                <div>
                    <Link to="/profile"><span>João Paulo Cassatti</span></Link>
                    <Exit onClick={handleSignOut}>sair</Exit>
                </div>
                <Link to="/profile"><img src={teste} alt="imagem de perfil" /></Link>
            </Profile>

        </Container>
    )
}