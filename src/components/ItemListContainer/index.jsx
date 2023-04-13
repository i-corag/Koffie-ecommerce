import style from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../contexts/ProductsContext";
import ItemCard from "../ItemCard";

const ItemListContainer = () => {

    const { products } = useProductsContext();
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

