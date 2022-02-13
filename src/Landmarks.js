import React from 'react';
import './Landmarks.scss';
import jsonData from './landmarks_data.json';
//const jsonData = require('./landmarks_data.json'); // use either import (above) or require

const landmarks = jsonData.landmarks;

export default function Landmarks() {
    //converts landmarks data from json to html elements
    const elements = landmarks.map((e) => {
        return <img alt="" key={e.imageURL} className="image" src={`./imgs/${e.imageURL}`} />;
    });

    return (
        <>
            <div className="landmarksBoard-Header">
                <h2>Most Beautiful Places on Earth</h2>
                <p>
                    <em>Resize browser's width to see the effects of flexbox</em>
                </p>
            </div>
            <div className="landmarksBoard">{elements}</div>
        </>
    );
}
