import React, { useContext } from 'react'
import DataContext from '../data/DataContext'

export default function Page2() {
    let context = useContext(DataContext)

    function increment() {
        context.setState({
            ...context.state,
            number: context.state.number + 1
        })
    }

    return (
        <div>
            <h1>Alterando um valor do objeto de contexto</h1>
            <p>Valor de número atual: {context.state.number}</p>
            <button onClick={increment}>Incrementar</button>
            <br/>
            <br/>
            <p>Dessa forma, o contexto é alterado, inclusive em todas as rotas, e só volta ao estado inicial se atualizada a página.</p>
        </div>
    )
}