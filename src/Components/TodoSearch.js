import React from 'react';
import '../Styles/TodoSearch.css';

export default function TodoSearch({ search, setSearch }) {
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
