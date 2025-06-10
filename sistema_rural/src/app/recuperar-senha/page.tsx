import style from "./style.module.css"
import {RecuperarSenhaForm} from "@/components/recuperarsenhaform/RecuperarSenhaForm";

export default function Page(){
    return(
        <>
        <div className={style.container}>
            <RecuperarSenhaForm></RecuperarSenhaForm>
        </div>
        </>
    );
}