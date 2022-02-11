import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../store/index";
import { customAdd, div25, mult7, numberAdd2 } from "../store/actions/number";
import { loginDinamico, loginFixo } from "../store/actions/user";

export default function Page1() {
    // Aqui no useReducer, passamos como parâmetro a função responsável por "evoluir" o estado, e o estado inicial em si.
    const [state, dispatch] = useReducer(reducer, initialState);

    // Estado do botão
    const [inputNumber, setInputNumber] = useState(0);
    function handleInputNumber(e) {
        setInputNumber(e.target.value);
    }

    return (
        <div>
            <h1>useReducer</h1>
            <p>
                O valor number do estado inicial é: <b>{state.number}</b>.
            </p>
            <p>O botão abaixo incrementa o valor em 2.</p>
            {/* O objeto passado por parâmetro abaixo é a chamada action. A função dispatch não chama a função reducer diretamente. Ela dispara a ação que internamente chama a função reducer que retorna a nova versão do estado. */}
            <button onClick={() => numberAdd2(dispatch)}>Incrementar</button>
            <br />
            <br />
            <p>O valor user do estado inicial é: {state.user.name}.</p>
            <p>O botão abaixo loga com um usuário.</p>
            <button onClick={() => loginFixo(dispatch)}>
                Logar como Gabriel
            </button>
            {/* Além do type, podemos passar uma segunda propriedade no objeto para ser usada para manipular o valor que queremos atribuír. Costumamos chamar de payload. Este valor pode ser obtido de um input ou do retorno de uma requisição, por exemplo. */}
            <button onClick={() => loginDinamico(dispatch, "Gabriel Dinâmico")}>
                Logar com nome dinâmico
            </button>
            <br />
            <br />
            <p>
                Abaixo algumas operações (actions) com o estado <b>number</b>:
            </p>
            <p>
                O número atual é <b>{state.number}</b>
            </p>
            <p>Ao clicar neste botão, multiplicamos o número por 7.</p>
            <button onClick={() => mult7(dispatch)}>Multiplicar por 7</button>
            <p>
                Ao clicar neste botão, dividimos o número por 25, e arredondamos
                ele.
            </p>
            <button onClick={() => div25(dispatch)}>Dividir por 25</button>
            <br />
            <input
                type="number"
                value={inputNumber}
                onChange={handleInputNumber}
            />
            <p>
                Ao clicar neste botão, adicionamos so <b>number</b> o valor do
                input.
            </p>
            <button onClick={() => customAdd(dispatch, inputNumber)}>
                Adicionar ao number
            </button>
        </div>
    );
}
