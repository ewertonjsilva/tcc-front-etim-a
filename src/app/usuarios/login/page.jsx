'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MdLogin } from "react-icons/md";

import styles from './page.module.css';

function Login() {

    const router = useRouter();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function logar() {
        router.push('/'); 
    }

    return (

        <div className={styles.containerLog}>
            <div>
                <h2>Acessar o site</h2>
            </div>
            <form id="form" className={styles.form} onSubmit={logar}>
                <input
                    type="text"
                    id="email"
                    className={styles.input}
                    placeholder="E-mail"
                    onChange={v => setLogin(v.target.value)}
                    value={login}
                />
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    placeholder="Senha"
                    onChange={v => setSenha(v.target.value)}
                    value={senha}
                />
                <div className={styles.info}>
                    <Link href='/usuarios/cadastro'>Não tenho cadastro!</Link>
                    <a href="#">Esqueci o e-mail</a>
                </div>
                <button type="submit" className={styles.botao}><MdLogin className={styles.ico} /> Entrar</button>
            </form>
        </div>

    );
}

export default Login;