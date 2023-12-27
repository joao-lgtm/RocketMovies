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

export function MoviePreview() {
    return (
        <Container>
            <Header />
            <Content>
                <a href="/"> <FiArrowLeft /> Voltar</a>

                <FilmPreviewContent>
                    <FilmNameAndScore>
                        <h2>Interestellar</h2>
                        <Stars score={5} />
                    </FilmNameAndScore>
                    <UserPost>
                        <div>
                            <img src={teste} /> <span>Por João Paulo Cassatti</span>
                        </div>
                        <div>
                            <FiClock /> <span>23/05/22 às 08:00 </span>
                        </div>
                    </UserPost>
                    <Categorys>
                        <Tags name="Ficção Cientifica" />
                        <Tags name="Drama" />
                        <Tags name="Familia" />
                    </Categorys>

                    <Description>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sapien nec mauris feugiat consectetur. Quisque tincidunt cursus sapien ut mattis. Cras vitae ante ac elit lacinia venenatis id sit amet ipsum. Donec id condimentum urna. Aliquam sed purus non tortor fermentum cursus. Etiam molestie magna id mi maximus lacinia. Fusce non dignissim nisl. Sed non urna vitae magna auctor ultrices. Curabitur dignissim vel metus aliquet ullamcorper. In non fringilla est. Sed cursus hendrerit tortor ac facilisis. Nulla tincidunt scelerisque est nec luctus. Sed cursus, lacus et efficitur dignissim, velit ligula ornare ligula, vitae blandit augue est eget ligula. Curabitur diam leo, luctus vitae est vel, euismod tristique ipsum.

                            Phasellus eleifend, quam sit amet ultrices dapibus, lacus magna varius nunc, eu tempor leo nulla ac ipsum. Praesent neque libero, vestibulum vitae sollicitudin in, blandit vel metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eget molestie nulla. Donec vehicula imperdiet felis nec pretium. Nunc at rhoncus mi. Mauris ipsum lectus, porta at mauris a, rhoncus tristique ligula. Aliquam vel accumsan risus. Morbi aliquet ornare justo, eu faucibus odio tristique fringilla.

                            Ut eros lorem, malesuada vel viverra quis, varius eu risus. Etiam quis neque id quam mollis gravida quis eget nunc. Duis ac dolor consequat, posuere sapien ut, hendrerit ante. Morbi est erat, laoreet id ante in, hendrerit ornare dui. Phasellus gravida ornare est, at scelerisque elit. Sed non quam ac diam efficitur tincidunt vitae in odio. Aenean porttitor nunc sit amet quam congue vehicula. Ut vehicula, arcu eget finibus ultrices, massa orci congue risus, vitae tincidunt neque libero sit amet mauris.

                            Aliquam blandit ipsum quis elit luctus, sed mollis mauris aliquam. Integer accumsan, tellus et cursus luctus, purus turpis sagittis lacus, eu convallis dui ex sollicitudin erat. Nunc commodo eros vitae est sollicitudin auctor. Pellentesque non suscipit quam. Vestibulum scelerisque elit et semper rutrum. Morbi a risus neque. Maecenas porta posuere nisi, et auctor dui facilisis et.

                            Phasellus euismod ultricies eros ac egestas. Sed sagittis elit sit amet tortor vehicula, in feugiat turpis gravida.
                            Morbi suscipit libero eget volutpat pharetra. Nam gravida, lacus vitae gravida efficitur, lacus massa hendrerit odio, ac fermentum magna velit ac sapien. In tristique ante sit amet ipsum volutpat pharetra. Mauris non mi tellus. Donec at tortor vel arcu egestas lobortis egestas vel orci. Suspendisse vehicula lobortis mi vel imperdiet. Morbi et porttitor enim. In hac habitasse platea dictumst. Nulla scelerisque massa nec arcu iaculis, at efficitur leo tempus. Aliquam cursus iaculis vulputate. Quisque maximus sem est, a venenatis libero sollicitudin vel. Donec porta
                            
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sapien nec mauris feugiat consectetur. Quisque tincidunt cursus sapien ut mattis. Cras vitae ante ac elit lacinia venenatis id sit amet ipsum. Donec id condimentum urna. Aliquam sed purus non tortor fermentum cursus. Etiam molestie magna id mi maximus lacinia. Fusce non dignissim nisl. Sed non urna vitae magna auctor ultrices. Curabitur dignissim vel metus aliquet ullamcorper. In non fringilla est. Sed cursus hendrerit tortor ac facilisis. Nulla tincidunt scelerisque est nec luctus. Sed cursus, lacus et efficitur dignissim, velit ligula ornare ligula, vitae blandit augue est eget ligula. Curabitur diam leo, luctus vitae est vel, euismod tristique ipsum.

                            Phasellus eleifend, quam sit amet ultrices dapibus, lacus magna varius nunc, eu tempor leo nulla ac ipsum. Praesent neque libero, vestibulum vitae sollicitudin in, blandit vel metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eget molestie nulla. Donec vehicula imperdiet felis nec pretium. Nunc at rhoncus mi. Mauris ipsum lectus, porta at mauris a, rhoncus tristique ligula. Aliquam vel accumsan risus. Morbi aliquet ornare justo, eu faucibus odio tristique fringilla.

                            Ut eros lorem, malesuada vel viverra quis, varius eu risus. Etiam quis neque id quam mollis gravida quis eget nunc. Duis ac dolor consequat, posuere sapien ut, hendrerit ante. Morbi est erat, laoreet id ante in, hendrerit ornare dui. Phasellus gravida ornare est, at scelerisque elit. Sed non quam ac diam efficitur tincidunt vitae in odio. Aenean porttitor nunc sit amet quam congue vehicula. Ut vehicula, arcu eget finibus ultrices, massa orci congue risus, vitae tincidunt neque libero sit amet mauris.

                            Aliquam blandit ipsum quis elit luctus, sed mollis mauris aliquam. Integer accumsan, tellus et cursus luctus, purus turpis sagittis lacus, eu convallis dui ex sollicitudin erat. Nunc commodo eros vitae est sollicitudin auctor. Pellentesque non suscipit quam. Vestibulum scelerisque elit et semper rutrum. Morbi a risus neque. Maecenas porta posuere nisi, et auctor dui facilisis et.

                            Phasellus euismod ultricies eros ac egestas. Sed sagittis elit sit amet tortor vehicula, in feugiat turpis gravida.
                            Morbi suscipit libero eget volutpat pharetra. Nam gravida, lacus vitae gravida efficitur, lacus massa hendrerit odio, ac fermentum magna velit ac sapien. In tristique ante sit amet ipsum volutpat pharetra. Mauris non mi tellus. Donec at tortor vel arcu egestas lobortis egestas vel orci. Suspendisse vehicula lobortis mi vel imperdiet. Morbi et porttitor enim. In hac habitasse platea dictumst. Nulla scelerisque massa nec arcu iaculis, at efficitur leo tempus. Aliquam cursus iaculis vulputate. Quisque maximus sem est, a venenatis libero sollicitudin vel. Donec porta
                            
                            </p>
                        
                    </Description>

                </FilmPreviewContent>
            </Content>
        </Container>
    )
}