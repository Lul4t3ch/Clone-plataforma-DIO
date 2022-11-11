import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/";
import { Header } from "../../components/header/";
import Banner from "../../assets/capa-dio.png";

import { Container, TextContent, Title, TitleHighlight } from "./styles";

const Home = () => {

    const navigate = useNavigate();
    
    const handleClickSignIn = () => {
        navigate("/login")
    }
    return (
    <div>
        <Header/>
        <Container>
            <div>
                <Title> 
                    <TitleHighlight>
                        Implemente
                        <br /> 
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo 
                    e encare seu novo desafio profissional, evoluindo em comunidade com os
                    melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={Banner} alt="Imagem Principal"/>
            </div>
        </Container>
    </div>
    )
}

export { Home }