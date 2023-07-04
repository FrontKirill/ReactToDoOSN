import React from 'react';

const SelectSort = ({options, defaultOption, value, onChange}) => {
    return (
        <select
            style={{marginLeft: "40px"}}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultOption}</option>
            console.log('')
            {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
        </select>
    );
};

export default SelectSort;