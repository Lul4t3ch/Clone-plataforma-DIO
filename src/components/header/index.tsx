import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png"
import { Button } from "../button";
import {
    BuscarInputContainer,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from "./styles"
import {  IHeader } from "./types";


const Header = ({autenticado}:IHeader) => {

    const navigate = useNavigate();
    
    const handleClickSignIn = () => {
        navigate("/login")
    }

    const handleClickSignUp = () => {
        navigate("/signup")
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <MenuRight href="/"><img src={logo} alt="Logo da DIO" /></MenuRight>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/104802918?v=4"/>
                    ) : (
                        <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn}/>
                        <Button title="Cadastrar" onClick={handleClickSignUp}/>
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }