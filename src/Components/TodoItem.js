import React from 'react';
import '../Styles/TodoItem.css';


export default function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.name}
            </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}>
                X
            </span>
        </li>
    )
}
