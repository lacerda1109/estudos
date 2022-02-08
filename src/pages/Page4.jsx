import React, { useReducer } from "react";

const initialState = {
    cart: [],
    products: [],
    user: { name: "null" },
    number: 0,
};

// O primeiro parâmetro é o estado inicial, que pretendemos "evoluir".
// O segundo parâmetro chamamos de action, que altera o estado da aplicação para a nova versão, a partir desta ação, que tem um tipo (ou nome). A partir do tipo da ação podemos saber como alterar esse estado.
function reducer(state, action) {
    switch (action.type) {
        case "numberAdd2":
            return { ...state, number: state.number + 2 };
        case "login_fixo":
            return { ...state, user: { name: "Gabriel Lacerda" } };
        case "login_dinamico":
            return { ...state, user: { name: action.payload } }
        default:
            return state;
    }
}

export default function Page1() {
    // Aqui no useReducer, passamos como parâmetro a função responsável por "evoluir" o estado, e o estado inicial em si.
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>useReducer</h1>
            <p>O valor number do estado inicial é: {state.number}.</p>
            <p>O botão abaixo incrementa o valor em 2.</p>
            {/* O objeto passado por parâmetro abaixo é a chamada action. A função dispatch não chama a função reducer diretamente. Ela dispara a ação que internamente chama a função reducer que retorna a nova versão do estado. */}
            <button onClick={() => dispatch({ type: "numberAdd2" })}>
                Incrementar
            </button>
            <br />
            <br />
            <p>O valor user do estado inicial é: {state.user.name}.</p>
            <p>O botão abaixo loga com um usuário.</p>
            <button onClick={() => dispatch({ type: "login_fixo" })}>
                Logar como Gabriel
            </button>
            {/* Além do type, podemos passar uma segunda propriedade no objeto para ser usada para manipular o valor que queremos atribuír. Costumamos chamar de payload. Este valor pode ser obtido de um input ou do retorno de uma requisição, por exemplo. */}
            <button onClick={() => dispatch({ type: "login_dinamico", payload: 'Gabriel Dinâmico' })}>
                Logar com nome dinâmico
            </button>
        </div>
    );
}
