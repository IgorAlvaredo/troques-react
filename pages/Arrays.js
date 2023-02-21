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
        settestePSFilter(tempPush)
    }

    //splice
    function handleChangeDelete(index) {
        let tempPush = [...testePS]
        tempPush.splice(index, 1)
        settestePS(tempPush)
    }

    //filter
    function handleChangeFilter() {
        const lowerSearch = search.toLowerCase()
        if (lowerSearch !== '') {
            settestePSFilter(testePS.filter((item) => item.toLowerCase().includes(lowerSearch)))
        } else {
            settestePSFilter(testePS)
        }
    }

    //find e findIndex
    function handleChangeFind(item) {
        //OBJETO
        let foundFind = testePS.find((element) => element === item)
        //INDEX DO OBJETO NO ARRAY
        let foundFindIndex = testePS.findIndex((element) => element === item)
        console.log("FIND:", foundFind)
        console.log("FIND INDEX:", foundFindIndex)

    }

    //map esse serve para listagem, ou manipulação de dados, esta na parte de HTML

    return (
        <div style={{
           width:'80%', margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column'
        }}>
            <button style={{ margin: '10px' }} onClick={() => setShowArrays(!showArrays)}>{showArrays ? 'Tirar Arrays' : 'Mostrar Arrays'}</button>
            <div>
                <input value={name} onChange={(event) => setName(event.target.value)}></input>
                <button style={{ margin: '10px' }} onClick={() => pushNameArray()}>Adicionar ao array</button>
                {showArrays ?
                    <div style={{ margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'row' }}>
                        <div>
                            {testePS.map((item, index) =>
                                <div style={{
                                    margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', 
                                    flexDirection: 'row'
                                }}>
                                    <label style={{ margin: '10px' , width:"100px"}}>{item}</label>
                                    <button style={{ margin: '10px' , width:"100px"}} onClick={() => handleChangeDelete(index)}>Deletar</button>
                                    <button style={{ margin: '10px' , width:"100px"}} onClick={() => handleChangeFind(item)}>Usar os find</button>
                                </div>
                            )}
                        </div>


                        <div style={{ margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column' }}>
                            <div style={{ margin: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'row' }}>
                            <label style={{ margin: '10px' }}>Teste Filter: </label>
                            <input style={{ margin: '10px' }} value={search} onChange={(event) => setSearch(event.target.value)}></input>
                            <button style={{ margin: '10px' }} onClick={() => handleChangeFilter()}>Filtrar</button>
                            </div>

                            <div style={{
                                margin: '10%', display: 'flex',// justifyContent: 'center', alignItems: 'center', alignContent: 'center', 
                                flexDirection: 'column'
                            }}>
                                {testePSFilter.map((item) =>
                                    <label style={{ margin: '10px' }}>{item}</label>
                                )}
                            </div>
                        </div>
                    </div>
                    :
                    <h1>Não irá mostrar os arrays!</h1>
                }
            </div>
        </div>
    )
}