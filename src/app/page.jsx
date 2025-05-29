import Image from "next/image"; 
import Link from "next/link";

import Botao from "@/componentes/botao";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1>TCC</h1>
      <p className='textoAlternativo'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo perferendis assumenda. Ullam id modi nesciunt quas placeat officia, qui voluptatibus harum ab rem tempore porro molestias soluta cum dicta!</p>
      <Link href={'/usuarios/login'} >Login</Link>
      <Image 
        src="/esquemaModelagem.png"
        alt="Picture of the author"
        width={350}
        height={150} 
        className={styles.img}
      /> 
      <Botao />
    </div>
  );
}
