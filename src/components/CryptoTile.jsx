import React from 'react';

const CryptoTile = ({data, selectedTile, onClick}) => {

    const {name, rate, icon} = data;

    const handleClick = () => onClick(data)

    return(

        <div
            className={`card ${selectedTile && 'selected'}`}
            onClick={handleClick}
        >

            <div>
                <img className="coin-icon" src={icon} alt="icon" />
                <div>
                    {name}
                    {rate}
                </div>
            </div>

        </div>
    )

}

export default CryptoTile