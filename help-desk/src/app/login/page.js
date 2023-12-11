import style from '../login/style-login.css'
import Link from 'next/link'
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from "../login-card/page";
import Header from '../components/header/header';

export default function Login(){
    return (
        
        <> 
        <Header/>
        <div className='background'> 
        <LoginCard title= "Entre na sua conta">
        
        <form className='form'> 
            <Input type= "email" placeholder="Digite seu email" />
            <Input type= "password" placeholder="Digite sua senha" />
           <Button>Entrar</Button>
           <Link href="/cadastro">Ainda não possui conta? </Link>
        </form>
           
           </LoginCard>
           </div>
           
           </>
       
    )
}