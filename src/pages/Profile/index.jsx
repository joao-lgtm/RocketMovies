import { Avatar, Container, Form } from "./styles";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Input } from './../../Components/Input';
import { Button } from './../../Components/Button/index';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import UserSvg from "../../assets/user-3296.svg"
import { api } from "../../services/api";

export function Profile() {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : UserSvg;
    
    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    async function handleUpdate(){
        const update = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        
        const userUpdate = Object.assign(user, update)

        await updateProfile({user: userUpdate, avatarFile })
    }

    function handleChangeAvatar (event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <div onClick={handleBack}><FiArrowLeft /> Voltar</div>
            </header>

        

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuario" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}