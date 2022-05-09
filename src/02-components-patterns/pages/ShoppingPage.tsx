
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {
    // useShoppingCart
    const{ products, onProductCountChange, shoppingCart } = useShoppingCart();

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
                {/* <ProductCard product={product}>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'Producto 1'} className="text-white" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard> */}



                {/* Forma 2 */}
                {/* <ProductCard
                    product={product2}
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
                </ProductCard> */}

                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
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
                    ))
                }

                <div className="shopping-card">

                    {
                        Object.entries(shoppingCart).map(([key, productInCard]) => (

                            <ProductCard
                                //key={product.id}
                                key={key}
                                product={productInCard}
                                className="bg-dark text-white"
                                onChange={onProductCountChange}
                                value={productInCard.count}
                                style={{
                                    width: '100px',
                                    height: '150px',
                                }}
                            >
                                <ProductImage
                                    className="custom-image"
                                    style={{
                                        boxShadow: '5px 5px 10px'
                                    }}
                                />

                                <ProductTitle title={`${productInCard.count}`} />

                                <ProductButtons
                                    className="custom-buttons"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                />
                            </ProductCard>
                        ))
                    }

                </div>

                {/* Forma 3 */}
                {/* <ProductCard
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
                </ProductCard> */}

                <div>
                    <code>
                        {JSON.stringify(shoppingCart, null, 5)}
                    </code>
                </div>

            </div>
        </div>
    )
}

export default ShoppingPage;