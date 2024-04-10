import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return products.map((prod) => <Item key={product.id} producto={product} />);
};

//aca tengo un problema, creo que que al instalar React desde Vite no me valida el codigo de js por lo que me pide que lo pase a jsx. me dice que puede que falte una libreria de babel para validar
