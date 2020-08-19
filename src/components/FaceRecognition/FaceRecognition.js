import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div>
                    {
                        box.map((user, i) => {
                            return (
                                <div className='bounding-box' style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol}}></div>
                            )
                        })
                    }
                    
                </div>
                
            </div>
        </div>
    );
}

export default FaceRecognition;