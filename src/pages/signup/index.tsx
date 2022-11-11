import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Column, Container, ForgotText, Row, SignInText, SubTitleLogin, Title, TitleLogin, Wrapper, TermsText,
     HaveAccount, FormContainer} from "./styles";
import { api } from "../../services/api";
import { IFormData } from "./types";


const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email('email digitado não é valido').required('Campo obrigatório'),
    password: yup.string().min(5, 'Sua senha deve possuir no mínimo 5 caracteres').required('Campo obrigatótio')
}).required();


const SignUp = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate("/feed");
            } else {
                alert("email ou senha não cadastrado.");
            }
        } catch {
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
                    </Wrapper>
                    <FormContainer>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />} />
                            <Button title="Create account" variant="secondary" type="submit" />
                        </form>
                    </FormContainer>
                    <Column>
                        <Wrapper>
                            <TermsText>Ao clicar em "criar minha conta grátis", declaro que aceito 
                            as Políticas de Privacidade e os Termos de Uso da DIO.</TermsText>
                            <Row>
                                <HaveAccount>Já tenho conta.</HaveAccount>
                                <a href="/login">
                                <SignInText>Fazer login</SignInText>
                                </a>
                            </Row>
                        </Wrapper>
                    </Column>
                </Column>
            </Container>
        </div>
    )
}

export { SignUp }