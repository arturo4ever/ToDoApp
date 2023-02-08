import React from 'react';
import '../Styles/TodoList.css';

export default function TodoList(props) {
    return (
        <section>    
            <ul>
                {props.children}
            </ul>
        </section>
    )
}
