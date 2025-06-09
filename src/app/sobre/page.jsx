import Image from "next/image"

import styles from "./page.module.css";

export default function Sobre() {
    return (
        <div>
            <h3 className={styles.tituloConstrucao}>Página em construção</h3>
            <p className={styles.textoConstrucao}>Estamos trabalhando nesta página, tente novamente em breve.</p>
            <Image src="/emconstrucao.svg" alt="emconstrucao" width="730" height="450" />
        </div>
    )
}