import React, { useState } from 'react';

const MKhome = () => {

    const [isChanged, setIsChanged] = useState(false);

    return <div>
        <div class="jumbotron">
            <h1 class="display-4">{isChanged ? 'Mykhailo' : 'Hello'}, world!</h1>
            <hr class="my-4" />
                <p class="lead">
                    <button onClick={() => setIsChanged(!isChanged)} class="btn btn-primary btn-lg" role="button">Change</button>
                </p>
        </div>
    </div>
}

export default MKhome;