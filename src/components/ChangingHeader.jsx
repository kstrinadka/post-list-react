import React, {useState} from 'react';

const ChangingHeader = () => {

    const [value, setValue] = useState(null);

    return (
        <div>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default ChangingHeader;
