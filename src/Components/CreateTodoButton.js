import React from 'react';
import '../Styles/CreateTodoButton.css';

export default function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(!props.openModal);
    }
    return (
        <button 
        className='CreateTodoButton'
        onClick={onClickButton}
        >
            +
        
        </button>
        )
}