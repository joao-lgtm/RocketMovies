import { Container, Exit, Logo, Profile } from "./style";
import { Input } from "./../Input/";
import UserSvg from "../../assets/user-3296.svg"
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";


export function Header() {
    const { signOut, user } = useAuth();
    const navigation = useNavigate();
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : UserSvg;
    console.log(user)
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
                    <Link to="/profile"><span>{user.name}</span></Link>
                    <Exit onClick={handleSignOut}>sair</Exit>
                </div>
                <Link to="/profile"><img src={avatarURL} alt="imagem de perfil" /></Link>
            </Profile>

        </Container>
    )
}