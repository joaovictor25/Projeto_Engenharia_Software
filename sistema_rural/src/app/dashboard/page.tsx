import style from "./style.module.css";
import Image from "next/image";
import UserImg from "../../../public/assets/user.png";

export default function Page(){
    return(
        <>
        <div className={style.container}>
            <div className={style.menu}>
                <div className={style.nav_menu}>
                    <ul>
                        <li className={style.home}>Home</li>
                        <li className={style.cotacao}>Cotação</li>
                        <li className={style.contato}>Contato</li>
                    </ul> 
                </div>
                <div className={style.user}>
                    <p>João Victor</p>
                    <Image src={UserImg} alt="Imagem de perfil" width={50} height={50}/>
                </div>
            </div>

            <div className={style.main}>
                <div className={style.sidebar}>
                    <button>Cadastrar novo item</button>
                    <ul>
                        <div className={style.botao}><li className={style.painel}>Painel</li></div>
                        <div className={style.botao}><li className={style.vender}>Quero vender</li></div>
                        <div className={style.botao}><li className={style.conta}>Minha conta</li></div>
                    </ul> 
                </div>

                <div className={style.content}>
                    Conteudo
                </div>
            </div>
        </div>
        </>
    );
}