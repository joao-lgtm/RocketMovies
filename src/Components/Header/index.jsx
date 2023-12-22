import { Container, Profile } from "./style";
import { Input } from "./../Input/";
import  teste  from "../../assets/teste.png"


export function Header() {
    return (
        <Container>

            <span>RocketMovies</span>

            <Input type="text" placeholder="Pesquisar pelo titulo" />


            <Profile>
                <div>
                    <span>João Paulo Cassatti</span>
                    <a href="">sair</a>
                </div>
                <a href=""><img src={teste} alt="" /></a>
            </Profile>

        </Container>
    )
}