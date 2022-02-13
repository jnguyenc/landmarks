import React from 'react';
import './Places.scss';
import jsonData from './imgs/images.json';
//const jsonData = require('./imgs/images.json'); // use either import or require

const places = jsonData.places;

export default function ImageBoard() {
    const elements = places.map((e) => {
        return <img alt="" key={e.path} className="image" src={`./imgs/${e.path}`} />;
    });

    return (
        <>
            <h2 className="imageBoard-Header">Most Beautiful Places on Earth</h2>
            <p>
                <em>Resize the browser's width to see the effects</em>
            </p>
            <div className="imageBoard">{elements}</div>
        </>
    );
}
