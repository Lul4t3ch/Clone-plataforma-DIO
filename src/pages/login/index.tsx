import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md"
import { Button } from "../../components/button/";
import { Header } from "../../components/header/";
import { Input } from "../../components/input/";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Column, Container, ForgotText, Row, SignUpText, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import {  api } from "../../services/api";
import { IFormData } from "./types";


const schema = yup.object({
    email: yup.string().email('email digitado não é valido').required('Campo obrigatório'),
    password: yup.string().min(5, 'Sua senha deve possuir no mínimo 5 caracteres').required('Campo obrigatótio')
  }).required();


const Login = () => {

    const navigate = useNavigate();
    
    const { control, handleSubmit, formState: { errors} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    const onSubmit = async (formData:IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate("/feed");
            }else{
                alert("email ou senha não cadastrado.");
            }
        } catch{
            alert("Houve um erro, tente novamente!");
        }
    };

    return (
        <div>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias 
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu Login!</TitleLogin>
                        <SubTitleLogin>Faça seu login and make the change.</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Sign in" variant="secondary"  type="submit"/>
                        </form>
                        <Row>
                            <ForgotText>Forgot password</ForgotText>
                            <SignUpText>Sign up</SignUpText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export { Login }