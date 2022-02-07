// Este componente tem como finalidade criar um contexto encapsulado para envolver toda a aplicação, e compartilhar funções para alterar esses valores separadamente, de forma controlada e sem riscos de sobrescrever o objeto inteiro.

import React, { createContext, useState } from "react";

const initialState = {
    number: 1234,
    text: "Context API + Hooks",
};
export const AppContext = createContext();

export default function Store(props) {
    const [state, setState] = useState(initialState);
    function updateState(key, value) {
        setState({
            ...state,
            [key]: value,
        });
    }

    // O objeto passado no provider nos dá acesso aos valores do contexto, e à funções que criamos para alterar especificamente cada valor, eliminando assim o risco do objeto todo do contexto ser alterado.

    return (
        <AppContext.Provider
            value={{
                number: state.number,
                text: state.text,
                setNumber: (n) => updateState("number", n),
                setText: (t) => updateState("text", t),
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
