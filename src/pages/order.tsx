import { Component, For } from "solid-js";

const Order: Component = () => {
    const arrayOfProducts = [
        "latte",
        "cappuccino",
    ]
    return (
        <div>
            <h1>Order</h1>
            <For each={arrayOfProducts}>
            </For>
        </div>
    )
}
export default Order;