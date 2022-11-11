import { Header } from "../../components/header/";
import { Card } from "../../components/card/"
import { UserInfo } from "../../components/userInfo/"
import { Container, Column, Title, TitleHighlight,  } from "./styles";

const Feed = () => {
    return (
        <div>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} name="Luis Henrique"
                        image="https://avatars.githubusercontent.com/u/104802918?v=4" />
                    <UserInfo percentual={50} name="Luis Henrique"
                        image="https://avatars.githubusercontent.com/u/104802918?v=4" />
                    <UserInfo percentual={32} name="Luis Henrique"
                        image="https://avatars.githubusercontent.com/u/104802918?v=4" />
                    <UserInfo percentual={20} name="Luis Henrique"
                        image="https://avatars.githubusercontent.com/u/104802918?v=4" />
                    <UserInfo percentual={11} name="Luis Henrique"
                        image="https://avatars.githubusercontent.com/u/104802918?v=4" />
                </Column>

            </Container>
        </div>
    );
}

export { Feed }