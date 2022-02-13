import React from 'react';
import './Places.scss';
import jsonData from './images.json';
//const jsonData = require('./images.json'); // use either import or require

const places = jsonData.places;

export default function ImageBoard() {
    const elements = places.map((e) => {
        return <img alt="" key={e.path} className="image" src={`./imgs/${e.path}`} />;
    });

    return (
        <>
            <div className="imageBoard-Header">
                <h2>Most Beautiful Places on Earth</h2>
                <p>
                    <em>Resize browser's width to see the effects of flexbox</em>
                </p>
            </div>
            <div className="imageBoard">{elements}</div>
        </>
    );
}
