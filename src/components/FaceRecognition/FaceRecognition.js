import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div>
                    {
                        boxes.map((user, i) => {
                            return (
                                <div 
                                    key = {i}
                                    className='bounding-box' 
                                    style={{top: boxes[i].topRow, right: boxes[i].rightCol, bottom: boxes[i].bottomRow, left: boxes[i].leftCol}}>
                                </div>
                            )
                        })
                    }
                    
                </div>
                
            </div>
        </div>
    );
}

export default FaceRecognition;