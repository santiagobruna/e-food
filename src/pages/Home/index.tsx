import Header from "../../components/Header"
import ProductList from "../../components/ProductList"

import { useEffect, useState } from "react"

export type Food = {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: string;
    descricao: string;
    capa: string;
}

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<Food[]>([]);

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestaurantes(res))
    }, [])
    return(
        <>
            <Header/>
            <ProductList food={restaurantes}/>
        </>
    )
}
export default Home;