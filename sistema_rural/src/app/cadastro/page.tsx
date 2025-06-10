import style from "./style.module.css"
import {CadastroForm} from "@/components/cadastroform/CadastroForm";

export default function Page(){
    return(
        <>
        <div className={style.container}>
            <div className={style.container_left}>

            </div>

            <div className={style.container_right}>
                <CadastroForm></CadastroForm>
            </div>
        </div>
        </>
    );
}