import { useParams } from "@solidjs/router";
import { Component, createSignal, For } from "solid-js";
import grid from "../checkoutPage-grid.module.css";
const Checkout: Component = () => {
    const params = useParams();
    const [arrayOfProducts, setArrayOfProducts] = createSignal(params.products);
    const [totalPrice, setTotalPrice] = createSignal(params.price);
    const [tax, setTax] = createSignal(Number(params.price) * 0.2);
    return (
        <div>
            <h1>Checkout</h1>
            <div class={grid.parent}>
                <div class={grid.div1}>
                    <h2>Products</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <For each={JSON.parse(arrayOfProducts())}>{(product: {name: string, price:number}, i) =>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            }
                            </For>
                        </tbody>
                    </table>
                </div>
                <div class={grid.div2}>
                    <p>
                        SubTotal: £{totalPrice()}
                        <br />
                        Tax: £{tax()}
                        <br />
                        Total: £{Number(totalPrice()) + Number(tax())}
                    </p>
                </div>
                <div class={grid.div3}>
                    <h2>Payment</h2>
                    <p>
                        Payment method: Cash
                        <br />
                        Please hand over the money to the cashier
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Checkout;