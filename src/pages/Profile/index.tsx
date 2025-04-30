import Food from "../../models/Food";
import pizza from '../../assets/pizza.png'
import MassasList from "../../components/MassasList";
import MassasHeader from "../../components/MassasHeader";

const massas: Food[] = [
    {
        id: 1,
        title: 'Pizza',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        assessment: '',
        infos: [],
        image: pizza,
        link: 'Adicionar ao carrinho'
    },
    {
        id: 1,
        title: 'Pizza',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        assessment: '',
        infos: [],
        image: pizza,
        link: 'Adicionar ao carrinho'
    },
    {
        id: 1,
        title: 'Pizza',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        assessment: '',
        infos: [],
        image: pizza,
        link: 'Adicionar ao carrinho'
    },
    {
        id: 1,
        title: 'Pizza',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        assessment: '',
        infos: [],
        image: pizza,
        link: 'Adicionar ao carrinho'
    },
    {
        id: 1,
        title: 'Pizza',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        assessment: '',
        infos: [],
        image: pizza,
        link: 'Adicionar ao carrinho'
    },
    {
        id: 1,
        title: 'Pizza',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        assessment: '',
        infos: [],
        image: pizza,
        link: 'Adicionar ao carrinho'
    },
] 

const Profile = () => {
    return(
        <div>
            <MassasHeader/>
            <MassasList  massa={massas}/>
        </div>
    )
}
export default Profile;