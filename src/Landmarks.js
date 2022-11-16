import React from 'react';
import { useState, useEffect } from 'react';
import './Landmarks.scss';
import jsonData from './landmarks_data.json';
//const jsonData = require('./landmarks_data.json'); // use either import (above) or require

const useAPI = false; // Set to false to use local json file.  Set to true when the API backend is ready

export default function Landmarks() {
    const [landmarks, setLandmarks] = useState([]);
    //Springboot Restful API
    const apiUrl = 'http://127.0.0.1:8080/landmarks';
    const fetchData = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setLandmarks(data.landmarks);
    };
    useEffect(() => fetchData(), []);
    //console.log(landmarks);

    const landmarksData = useAPI ? landmarks : jsonData.landmarks;

    //converts landmarks data from json to html elements
    const elements = landmarksData.map((e) => {
        const imageURL = e.imageURL.startsWith('http') ? e.imageURL : './imgs/'.concat(e.imageURL);
        //return <img alt={e.name} key={e.imageURL} className="landmarkImage" src={`./imgs/${e.imageURL}`} />;
        return <img alt={e.name} key={e.imageURL} className="landmarkImage" src={imageURL} />;
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
