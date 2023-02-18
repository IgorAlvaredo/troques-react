import React, { useEffect, useState } from 'react';

export default function OperdorTernario() {
    const [teste, setTeste] = useState()
    const [showTeste, setShowTeste] = useState(false)

    useEffect(() => {
        console.log("Pagina aberta")
        setTeste('Abriu o app')
    }, [])

    useEffect(() => {
        console.log(teste)
    }, [teste])

    //Operador ternario
    //{condição ? Se for verdadeiro : Se for falso}

    return (
        <div style={{
            margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column'
        }}>
            <div>
                <label>Input: </label>
                <input value={teste} onChange={(event) => setTeste(event.target.value)}></input>
            </div>
            <button style={{ margin: '10px' }} onClick={() => setShowTeste(!showTeste)}>{showTeste ? 'Tirar variavel' : 'Mostrar variavel'}</button>
            <div>
                {showTeste ?
                    <>
                        <h1 >Foi salvo na variavel: {teste}</h1>
                    </>
                    :
                    <h1>Não irá mostrar a variavel!</h1>
                }
            </div>
        </div>
    )
}