import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import React from "react";
import ListShoe from "../pages/list-shoe";
import DetailShoe from "../pages/detail";
import Cart from "../pages/cart";
export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ListShoe />,
        },
        {
          path: "/:id", //value'name can change
          element: <DetailShoe />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
}
