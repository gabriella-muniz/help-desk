import style from '../cadastro/cadastro.css'
import Button from '../components/button/button';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Input from '../components/input/input';
import LoginCard from "../login-card/page";

export default function Cadastro(){
    return (
        <> 
        <Header />
        <div className="background"> 
           <LoginCard title= "Crie sua conta">
           <form className='form'> 
           <Input type= "text" placeholder="Digite seu nome" />
            <Input type= "email" placeholder="Digite seu email" />
            <Input type= "password" placeholder="Digite sua senha" />
           <Button>Cadastrar</Button>
        </form>
            </LoginCard>
        </div>
        <Footer/>
        </>
    )
}