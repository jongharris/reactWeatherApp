import React from 'react';

const ImageCard = ({icon}) => {
        return (
            <div style = {{width: '100px', height: '100px', marginBottom: '40px'}}>
                <img 
                src = {"./icons/" + icon} 
                alt = "Weather Icon"
                style = {{width: '100px', height: '100px'}}
                />
            </div>
        )
}

export default ImageCard;