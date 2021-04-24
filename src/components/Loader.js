import React from 'react';

function Loader() {

    const style = {
        // position: "absolute",
        // width: "100vw",
        height: "45vh",
        border: "none"
    };

    return (
        <div class="ui segment" style={style}>
            <div class="ui active inverted dimmer">
                <div class="ui huge text loader">Retriving API list</div>
            </div>
        </div>
    );
}

export default Loader;