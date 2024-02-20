import { Header } from "../../Components/Header";
import { Container, Content, FilmContent } from "./styles";
import { Button } from './../../Components/Button';
import { FiPlus } from "react-icons/fi"
import { Films } from "../../Components/Films";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigation = useNavigate();

    function handleNewFIlm(){
        navigation("/CreateMovie");
    }
    return (
        <Container>
            <Header />

            <Content>
                <div>
                    <h2>Meus Filmes</h2>
                    <Button icon={FiPlus} onClick={handleNewFIlm} title="Adicionar Novo Filme" />
                </div>


                <FilmContent>
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={4}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                    <Films
                        title="Interestellar"
                        score={5}
                        description=" Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
                            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper,
                            acredita que seu qu arto está assombrado por um fantasma que tenta se comunicar com ela.
                            Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional,
                            deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand."
                        category={["Ficção Científica", "Drama", "Família"]}
                    />
                </FilmContent>
            </Content>
        </Container>
    )
}