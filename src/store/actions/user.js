export function loginFixo(dispatch) {
    dispatch({ type: "login_fixo" });
}

export function loginDinamico(dispatch, nome) {
    dispatch({ type: "login_dinamico", payload: nome });
}
