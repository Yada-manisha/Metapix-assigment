import React from 'react';

const Box2 = ({ container }) => {
    return (
        <div>
            {container && (
                <div className="container">
                    {container}
                </div>
            )}
        </div>
    );
};

export default Box2;
