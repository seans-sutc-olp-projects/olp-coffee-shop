import { useParams } from "@solidjs/router";
import { Component, createSignal, For } from "solid-js";
import Layout from "../layout.jsx";
import pageGrid from "./../orderPage-grid.module.css";
const Order: Component = () => {
    const arrayOfProducts = [{name: "latte",price:4}, {name:"cappucino",price:6}]
    // Product selection maths
    const [arrayOfProductsSignal, setArrayOfProductsSignal] = createSignal([]);
    const [totalPrice, setTotalPrice] = createSignal(0);
    const params = useParams();
    return (
        <Layout staff={params.staff}>
            <div>
                <h1>Order</h1>
                <p>Order total = £{totalPrice()}</p>
                <button onClick={() => {
                    console.log("Hi")
                    window.location.href = `/checkout/${params.staff}/${JSON.stringify(arrayOfProductsSignal())}/${totalPrice()}`
                }}>Complete order</button>
                <div class={pageGrid.parent}>
                    <For each={arrayOfProducts}>{(product, i) =>
                        <div class={pageGrid[`div${Number(i)}`]}>
                            <h2>{product.name}</h2>
                            <p>£{product.price}</p>
                            <button onClick={() => {computeOrder({get: arrayOfProductsSignal, set: setArrayOfProductsSignal}, product.price, product.name); setTotalPrice(totalPrice() + product.price)}}>Add to order</button>
                    </div>
                    }
                    </For>
                </div>
            </div>
        </Layout>
    )
}
function computeOrder(signal:{set: any,get:any}, price: number, product: string) {
    const currentArr: any[] = signal.get();
    currentArr.push({
        name: product,
        price: price
    })
    signal.set(currentArr);
    return
}
export default Order;