import style from "./style.module.css";
import Link from "next/link";

export const CadastroForm = () => {
    return(
        <div className={style.form}>
        <h1>Criar uma conta</h1>
        <p>Preencha todos os campos para conseguir realizar o seu cadastro como fornecedor.</p>
        <form>
            <input type="text" name="nome" placeholder="Digite seu nome" required/>
            <input type="email" name="email" placeholder="E-mail" required/>
            <input type="password" name="senha" placeholder="Senha" required/>
            <div className={style.esqueceu_senha}><input type="checkbox" name="aceite" required/><p>Ao criar a conta, você está aceitando os termos de uso e a política de privacidade.</p></div>
            <button type="submit">Cadastrar</button>
        </form>
        <div className={style.linha}></div>
        <p>Já tem uma conta?  <Link href="/login" className={style.link_cadastro}>Login</Link></p>
        </div>
    );
}