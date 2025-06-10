import style from "./style.module.css";
import Link from "next/link";

export const LoginForm = () => {
    return(
        <div className={style.form}>
        <h1>Login</h1>
        <form>
            <input type="email" name="email" placeholder="Digite seu email" required/>
            <input type="password" name="senha" placeholder="Digite sua senha" required/>
            <div className={style.esqueceu_senha}><Link href="/recuperar-senha">Esqueceu a senha?</Link></div>
            <button type="submit">Login</button>
        </form>
        <div className={style.linha}></div>
        <p>Ainda não criou sua conta? <Link href="/cadastro" className={style.link_cadastro}>Cadastre-se</Link></p>
        </div>
    );
}