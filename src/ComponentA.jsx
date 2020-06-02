import React from 'react';

function ComponentA(props) {

    return (
        <div>
            ComponentA =)
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentA;