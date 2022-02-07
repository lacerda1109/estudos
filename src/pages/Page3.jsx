import React, { useContext } from "react";
import { AppContext } from "../data/Store";

export default function Page3() {
    let context = useContext(AppContext)
    // Podemos pegar o contexto através de destructuring, como no exemplo na linha abaixo:
    // let {number, setNumber, text, setText} = useContext(AppContext)

    function changeNumber() {
        context.setNumber(5555)
    }

    function changeText() {
        context.setText('Valor de texto alterado')
    }

    return (
        <div>
            <h1>Contexto encapsulado</h1>
            <p>Os valores descritos abaixos foram fornecidos através do contexto de um componente (Store), e através do objeto passado podemos ainda  modificar seus valores.</p>
            <br/>
            <br/>
            <p>O número que pode ser acessado é: {context.number}.</p>
            <p>Ao clicar no botão abaixo, alteramos seu valor para "5555".</p>
            <button onClick={changeNumber}>Alterar</button>
            <br/>
            <br/>
            <p>O texto que pode ser acessado é: "{context.text}".</p>
            <p>Ao clicar no botão abaixo, alteramos seu valor para "Valor de texto alterado".</p>
            <button onClick={changeText}>Alterar</button>
        </div>
    );
}
