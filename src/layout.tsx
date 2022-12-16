import { Component, JSX } from "solid-js";
import grid from './grid.module.css';

const Layout: Component<{children: JSX.Element, staff: string}> = (props: any) => {
    return (
            <div class={grid.parent}>
                <div class={grid.div1}>
                    <h1>Staff member: {props.staff}</h1>
                </div>
                <div class={grid.div2}>
                    <img src="/assets/UTC-Sheffield-Olympic-Legacy-Park-Horizontal.svg" alt="logo" />
                </div>
                <div class={grid.div3}></div>
                <div class={grid.div4}>
                    {props.children}
                </div>
            </div>
    )
}
export default Layout;