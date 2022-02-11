// Estado inicial e função reducer.
export const initialState = {
    cart: [],
    products: [],
    user: { name: "null" },
    number: 2,
};

// O primeiro parâmetro é o estado inicial, que pretendemos "evoluir".
// O segundo parâmetro chamamos de action, que altera o estado da aplicação para a nova versão, a partir desta ação, que tem um tipo (ou nome). A partir do tipo da ação podemos saber como alterar esse estado.
export function reducer(state, action) {
    switch (action.type) {
        case "numberAdd2":
            return { ...state, number: state.number + 2 };
        case "login_fixo":
            return { ...state, user: { name: "Gabriel Lacerda" } };
        case "login_dinamico":
            return { ...state, user: { name: action.payload } }
        case "mult7":
            return { ...state, number: state.number * 7 }
        case "div25":
            return { ...state, number: Math.floor(state.number / 25) }
        case "customAdd":
            return { ...state, number: state.number + Number(action.payload) }
        default:
            return state;
    }
}