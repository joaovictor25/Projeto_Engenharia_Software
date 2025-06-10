import style from "./style.module.css"
import {LoginForm} from "@/components/loginform/LoginForm";

export default function Page(){
    return(
        <>
        <div className={style.container}>
            <div className={style.container_left}>

            </div>

            <div className={style.container_right}>
                <LoginForm></LoginForm>
            </div>
        </div>
        </>
    );
}