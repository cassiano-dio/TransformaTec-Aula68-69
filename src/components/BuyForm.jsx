import React, {useState, useEffect, useCallback} from 'react'
import InputBase from './InputBase'

const BuyForm = ({data, onPurchase}) => {

    const {name, rate} = data

    const initForm = {amount: 0, converted: 0}

    const [exchange, setExchange] = useState(initForm)

    const [transactions, setTransactions] = useState([])

    useEffect(() =>{
        setExchange({
            ...exchange,
            converted: Number(exchange.amount / rate).toFixed(8)
        })
    },[name])

    useEffect(() =>{
        onPurchase(transactions)
    },[transactions])

    const generateId = (prefix) => Math.random().toString().replace('0.', prefix)

    const handleChange = ({target: {value, name}}) => {

        const val = Number(value.trim())

        const converted = (val/rate).toFixed(8)

        setExchange({
            [name]:value,
            rate: rate,
            converted: converted
        })
        
    }

    const makePurchase = useCallback(
        (event) => {

            event.preventDefault()

            if(!exchange.amount){
                alert("Valor inválido!")
            }

            const payload = {
                ...exchange,
                name:name,
                id: generateId("txid_")
            }

            setTransactions(
                [...transactions, payload]
            )
        },[exchange, transactions]
    )

    return(
        <div>
            <form onSubmit={makePurchase}>
                <div>
                    <InputBase
                        name="amount" label="BRL" onChange={handleChange}
                    />
                    <InputBase
                        label={name} value={exchange.converted} disabled
                    />
                </div>
                <input type="submit" value="Comprar"/>
            </form>
        </div>
    )
}

export default BuyForm