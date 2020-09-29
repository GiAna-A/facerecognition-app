import React from 'react';
import './ImageLinkForm.css';
/*better use destruction than props */
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This App will detect face in your pictures'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    {/*onChange from react: how to behave when input event happens */}
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    {/*pass functionality what happens onClick*/}
                    <button className='w-30 grow f4 link ph3 pv2 ib white bg-light-purple'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;