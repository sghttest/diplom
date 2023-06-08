import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return ( 
        <select
            value={value}
            onChange={event=> onChange(event.target.value)}
        >
            <option disabled>{defaultValue}</option>
            {options.map(option=>
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>    
            )}
        </select>
    );
}
 
export default MySelect;