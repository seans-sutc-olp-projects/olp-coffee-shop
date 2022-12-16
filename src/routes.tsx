import { RouteDefinition, useRoutes } from "@solidjs/router";
import { lazy } from "solid-js";

const routeArr: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("./pages/")),
    },
    {
        path: "/order/:staff",
        component: lazy(() => import("./pages/order")),
    },
    {
        path: "/checkout/:staff/:products/:price",
        component: lazy(() => import("./pages/checkout")),
    }
]
export const Routes = useRoutes(routeArr);