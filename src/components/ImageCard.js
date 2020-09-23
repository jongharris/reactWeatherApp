import React from 'react';

const ImageCard = ({weatherConfig}) => {
        return (
            <div style = {{width: '100px', height: '100px', marginBottom: '40px'}}>
                <img 
                src = {"./icons/" + weatherConfig.icon} 
                alt = "Weather Icon"
                style = {{width: '100px', height: '100px'}}
                />
            </div>
        )
}

export default ImageCard;