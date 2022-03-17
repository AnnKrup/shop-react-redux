import React from 'react';

const MainBtn = ({btn, goToLink}) => {
    return (
        <div>
            {goToLink
                ?
                <button onClick={() => goToLink()}>{btn}</button>
                :
                <button>{btn}</button>
            }
        </div>
    );
};

export default MainBtn;