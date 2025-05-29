import Link from "next/link"; 

export default function Teste() {
    return(
        <div>
            <Link href={'/usuarios/login'}>Login</Link> <br />
            <Link href={'/carrinho'}>Carrinho</Link> <br />
            <Link href={'/produtos'}>Produtos</Link> <br />
            <Link href={'/produtos/produto'}>Produto</Link> <br />
        </div>
    );
}