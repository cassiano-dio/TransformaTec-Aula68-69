import React, {useState, useCallback} from 'react'
import CryptoTile from './CryptoTile'
import BuyForm from './BuyForm'
import Transactions from './Transactions'
import bitcoin from '../assets/bitcoin.png'
import ethereum from '../assets/ethereum.png'
import litecoin from '../assets/litecoin.png'

const Home = () => {

    const tiles = [
        {id: 1, icon: bitcoin, name: 'BTC', price: 128000 },
        {id: 2, icon: ethereum, name: 'ETH', price: 8000 },
        {id: 3, icon: litecoin, name: 'LTC', price: 200 }
    ]

    const [selectedTile, setSelectedTile] = useState(tiles[0])

    const [list, setList] = useState([])

    const handleSelect = (data) => {
        setSelectedTile(data)
    }

    const buildList = (list) => {
        setList(list)
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        {
                            tiles.map(
                                (coin) => {
                                    <CryptoTile
                                        key={coin.id}
                                        data={coin}
                                        onClick={handleSelect}
                                        selectedTile={coin.id === selectedTile.id} //resposta da comparação
                                    />
                                }
                            )
                        }
                    </div>
                </div>
                <BuyForm 
                    data={selectedTile}
                    onPurchase={buildList}
                />
                <div>
                    <Transactions list={list} />
                </div>
            </div>
        </div>
    )

}

export default Home
