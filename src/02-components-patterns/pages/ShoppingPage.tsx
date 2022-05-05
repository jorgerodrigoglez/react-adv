import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

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

                {/* Forma 1 */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Producto 1'} />
                    <ProductCard.Buttons  />
                </ProductCard>

                {/* Forma 2 */}
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons  />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage;