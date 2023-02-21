import React, { useEffect, useState } from 'react';

export default function OperdorTernario() {
    const [testePS, settestePS] = useState([])
    const [testePSFilter, settestePSFilter] = useState([])
    const [name, setName] = useState('')
    const [search, setSearch] = useState('')
    const [showArrays, setShowArrays] = useState(false)

    //push
    function pushNameArray() {
        let tempPush = [...testePS]
        tempPush.push(name)
        settestePS(tempPush)
    }

    //splice

    //filter

    //find e findIndex

    //map

    return (
        <div style={{
            margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column'
        }}>
            <button style={{ margin: '10px' }} onClick={() => setShowArrays(!showArrays)}>{showArrays ? 'Tirar Arrays' : 'Mostrar Arrays'}</button>
            <div>
                <input value={name} onChange={(event) => setName(event.target.value)}></input>
                <button style={{ margin: '10px' }} onClick={() => setShowArrays(!showArrays)}>Adicionar ao array</button>
                {showArrays ?
                    <div style={{ margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'row' }}>
                        <div>
                            {testePS.map((item, index) => {
                                <div style={{
                                    margin: '10%', display: 'flex',// justifyContent: 'center', alignItems: 'center', alignContent: 'center', 
                                    flexDirection: 'row'
                                }}>
                                    <label>{item}</label> 
                                    <button onClick={() => handleChangeDelete(index)}>Deletar</button>
                                </div>
                            })}
                        </div>


                        <div>
                            <label>Teste Filter: </label>
                            <input value={search} onChange={(event) => setSearch(event.target.value)}></input>

                            {testePSFilter.map((item) => {
                                <div style={{
                                    margin: '10%', display: 'flex',// justifyContent: 'center', alignItems: 'center', alignContent: 'center', 
                                    flexDirection: 'column'
                                }}>
                                    {item}
                                </div>
                            })}
                        </div>
                    </div>
                    :
                    <h1>Não irá mostrar os arrays!</h1>
                }
            </div>
        </div>
    )
}