
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import '../styles/custom-styles.css';


const product = products[0];


export const ShoppingPage = () => {

    return (
        <div>
            <h1>Mi Shoppig Store</h1>
            <hr />
            <div>

                <ProductCard
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValues={{
                        count: 3,
                        maxCount: 10
                    }}

                >
                    {
                        ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
                        //( args ) => (
                            <>

                                <ProductImage
                                    className="custom-image"
                                    style={{
                                        boxShadow: '5px 5px 10px'
                                    }}
                                />
                                <ProductTitle className="text-white" />
                                <ProductButtons className="custom-buttons" />

                                <button onClick={reset}>Reset</button>
                                {/* { JSON.stringify( args, null, 3)} */}
                                <button onClick={() => increaseBy(-2)}> -2</button>
                                {
                                    ( !isMaxCountReached && <button onClick={ ()=> increaseBy(+2) } >+2</button> )
                                }
                                <span>{ count } - { maxCount }</span>
                            </>
                        )
                    }
                </ProductCard>


            </div>
        </div>
    )
}

export default ShoppingPage;