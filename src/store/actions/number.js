export function numberAdd2(dispatch) {
    // Podemos criar uma função mais complexa aqui, e chamar o dispatch no final.
    dispatch({ type: "numberAdd2" });
}

export function mult7(dispatch) {
    dispatch({ type: "mult7" });
}

export function div25(dispatch) {
    dispatch({ type: "div25" });
}

export function customAdd(dispatch, number) {
    dispatch({ type: "customAdd", payload: number });
}
