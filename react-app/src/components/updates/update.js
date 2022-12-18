import React from 'react'
import UpdateLarge from './UpdateLarge';
import UpdateBottom from './UpdateBottom';
import UpdateLargeBottom from './UpdateLargeBottom';

const Update = () => {
    return (
        <div>
            <div className='quick-select__container1'>
                <UpdateLarge />
                <UpdateLargeBottom />
            </div>
            <div>
                <UpdateBottom />
            </div>
        </div>
    )
}

export default Update;
