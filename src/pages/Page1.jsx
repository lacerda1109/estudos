import React, { useContext } from "react";
import DataContext from "../data/DataContext";

export default function Page1() {
    let context = useContext(DataContext);

    return (
        <div>
            <h1>useContext</h1>
            <p>
                Os valores abaixo foram acessados do objeto passado por
                contexto.
            </p>
            <li>O número contido no contexto é: {context.state.number}</li>
            <li>O texto contido no contexto é: {context.state.text}</li>
        </div>
    );
}
