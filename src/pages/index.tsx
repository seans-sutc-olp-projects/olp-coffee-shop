import { Component, createEffect, createSignal } from "solid-js";

const Index: Component = () => {
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");
    createEffect(() => {
        /*console.log("username", username());
        console.log("password", password());*/
        if (username() === "staff" && password() === "staffPassword") {
          window.location.href = "/order";
        }
      });
    return (
        <div>
            <h1>Please login!</h1>
            <form action="#">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" value={username()} onChange={(e) => setUsername(e.currentTarget.value)}/>
                <br />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" value={password()} onChange={(e) => setPassword(e.currentTarget.value)}/>
            </form>
        </div>
    )
}
export default Index;