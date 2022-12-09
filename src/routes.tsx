import { RouteDefinition, useRoutes } from "@solidjs/router";
import { lazy } from "solid-js";

const routeArr: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("./pages/")),
    },
    {
        path: "/order",
        component: lazy(() => import("./pages/order")),
    }
]
export const Routes = useRoutes(routeArr);