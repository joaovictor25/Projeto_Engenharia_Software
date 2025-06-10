import style from "./style.module.css";
import Link from "next/link";

export const RecuperarSenhaForm = () => {
    return(
        <div className={style.form}>
            <div className={style.form_center}>
                <h1>Esqueceu sua senha?</h1>
                <p>Informe seu email e enviaremos para você as instruções para redefinir sua senha</p>
                <form>
                    <input type="email" name="email" placeholder="Digite seu email" required/>
                    <button type="submit">Enviar instruções para mudar a senha</button>
                </form>
                <div className={style.back}>
                <Link href="/login">Voltar</Link>
                </div>
            </div>
        </div>
    );
}