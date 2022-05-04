import { ProductCard } from "../components/ProductCard";

const product = {
    id: '1',
    title: 'Coffee Mugg',
    img: '././coffee-mug.png'

}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Mi Shoppig Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={product}/>
       
            </div>
        </div>
    )
}

export default ShoppingPage;