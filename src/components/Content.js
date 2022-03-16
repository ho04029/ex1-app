import React from 'react';

const Content = ({onAdd}) => {
    return (
        <div className='content'>
            Content영역입니다.
            <button onClick={onAdd}>+</button>
        </div>
    );
};

export default Content;