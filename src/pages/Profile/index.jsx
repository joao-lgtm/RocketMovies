import { Avatar, Container, Form } from "./styles";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Input } from './../../Components/Input';
import { Button } from './../../Components/Button/index';

export function Profile () {
    return(
        <Container>
            <header>
                <a href=""><FiArrowLeft/> aqui</a>
            </header>


            
            <Form>
                <Avatar>
                    <img src="https://github.com/joao-lgtm.png" alt="Foto do usuario" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}