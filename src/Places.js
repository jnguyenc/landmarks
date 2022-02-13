import React from 'react';
import './Places.scss';
//import imagesData from './imgs/imgs.json';

export default function ImageBoard() {
    const data = [
        { path: 'pexels-aleksandar-pasaric-325185.jpg' },
        { path: 'pexels-asad-photo-maldives-3293148.jpg' },
        { path: 'pexels-errin-casano-2356045.jpg' },
        { path: 'pexels-francesco-ungaro-2835436.jpg' },
        { path: 'pexels-irina-iriser-1408221.jpg' },
        { path: 'pexels-luis-del-río-15286.jpg' },
        { path: 'pexels-maxime-francis-2246476.jpg' },
    ];

    const elements = data.map((e) => {
        // let i = `./imgs/${e.path}`;
        // return <img alt="" className="image" src={i} />;
        return <img alt="" className="image" src={`./imgs/${e.path}`} />;
    });

    return (
        <>
            <h2 className="imageBoard-Header">Most Beautiful Places on Earth</h2>
            <p>
                <em>Resize the browser's width to see the effects</em>
            </p>
            <div className="imageBoard">{elements}</div>
            <div>
                To do:
                <ul>
                    <li>Turn the list of paths to a json file. Why it is not working? Need a loader or something?</li>
                    <li>Create a restful API with Java Springboot to supply a list of places</li>
                </ul>
            </div>
        </>
    );
}
