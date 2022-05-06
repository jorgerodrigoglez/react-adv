import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mugg',
    img: './coffee-mug.png'

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
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'Producto 1'} className="text-white" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                {/* Forma 2 */}
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductImage 
                        className="custom-image" 
                        style={{
                            boxShadow: '5px 5px 10px'
                        }}
                    />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                {/* Forma 3 */}
                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage 
                        style={{
                            boxShadow: '5px 5px 10px'
                        }}
                    />
                    <ProductTitle 
                        style={{
                            fontWeight: 'bold'
                        }}
                    />
                    <ProductButtons 
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage;