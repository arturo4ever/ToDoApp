import React from 'react';
import '../Styles/TodoSearch.css';
import { TodoContext } from '../ToDoContext/ToDoContext';

export default function TodoSearch() {
    const { search, setSearch } = React.useContext(TodoContext);
    const [] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    return (
        <input 
            className='TodoSearch' 
            placeholder='Task...' 
            onChange={onSearchValueChange}
            value={search}
        />
    )
}
