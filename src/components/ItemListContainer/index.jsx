import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard";
import style from "./ItemListContainer.module.css";



const ItemListContainer = ({ products }) => {
    const { categoryId } = useParams();
    const category = products.filter((product) => product.category == categoryId);

    if (categoryId) {
        return (
            <ul className={style.container}>
                {category.map((product) => {
                    return <ItemCard key={product.id} product={product} />
                })}
            </ul>
        );
    } else
        return (
            <ul className={style.container}>
                {products.map((product) => {
                    return <ItemCard key={product.id} product={product} />
                })}
            </ul>
        );
};

export default ItemListContainer;

