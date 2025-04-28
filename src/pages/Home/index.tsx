import Header from "../../components/Header"
import ProductList from "../../components/ProductList"

import hioki from '../../assets/hioki-sushi.png'
import dolceVita from '../../assets/dolce-vita.png'
import Food from "../../models/Food"

const foods: Food[] =[
    {
        id: 1,
        title: 'Hioki Sushi',
        descrption: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        assessment: '4.9',
        infos: ['Destaque da semana', 'Japonesa'],
        image: hioki,
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        descrption: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        assessment: '4.6',
        infos: ['Italiana'],
        image: dolceVita,
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        descrption: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        assessment: '4.6',
        infos: ['Italiana'],
        image: dolceVita,
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        descrption: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        assessment: '4.6',
        infos: ['Italiana'],
        image: dolceVita,
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        descrption: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        assessment: '4.6',
        infos: ['Italiana'],
        image: dolceVita,
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        descrption: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        assessment: '4.6',
        infos: ['Italiana'],
        image: dolceVita,
    },
]

const Home = () => {
    return(
        <>
            <Header/>
            <ProductList food={foods}/>
        </>
    )
}
export default Home;