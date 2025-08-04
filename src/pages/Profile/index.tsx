import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MassasList from "../../components/MassasList";
import MassasHeader from "../../components/MassasHeader";
import { Food } from "../Home";

const Profile = () => {
    const { id } = useParams();
    const [restaurante, setRestaurante] = useState<Food | null>(null);
    const [menuItems, setMenuItems] = useState<Food['cardapio']>();

    useEffect(() => {
        fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
        .then((res) => res.json())
        .then((res) => {
            const encontrado = res.find((item: Food) => item.id.toString() === id);
            if (encontrado) {
            setRestaurante(encontrado);
            setMenuItems(encontrado.cardapio);
            }
        });
    }, [id]);

    return (
        <div>
        {restaurante && restaurante.tipo && restaurante.titulo && restaurante.capa && (
            <>
            <MassasHeader
                title={restaurante.tipo}
                subtitle={restaurante.titulo}
                backgroundImage={restaurante.capa}
            />
            {menuItems && <MassasList massa={menuItems} />}
            </>
        )}
        </div>
    );
};

export default Profile;
