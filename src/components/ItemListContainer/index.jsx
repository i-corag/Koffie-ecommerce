import ItemCard from "../ItemCard/ItemCard";


const ItemListContainer = ({ products }) => {
    return (
        <ul>
            {products.map((product) => {
                return <ItemCard key={product.id} product={product} />
            })}
        </ul>
    );
};

export default ItemListContainer; 