import React from 'react';
import './APIPanel.css'

function APICard({ api }) {
    const https = api.HTTPS ?
                <i className="fas fa-check-circle"></i> :
                <i className="fas fa-times-circle"></i>

    return (
        <div className="api-card">
            <div className="card-header">
                <div>{api.API}</div>
            </div>
            <div className="card-content">
                <div className="description">{api.Description}</div>
                <div className="meta">
                    <div className="https-verified">HTTPS {https}</div>
                    <div className="auth-type">Auth: <b>{api.Auth==="" ? "None" : api.Auth}</b></div>
                </div>
            </div>
            <div>
                <a href={api.Link} className="api-button" target="_blank" rel="noreferrer">Let's Go</a>
            </div>
        </div>
    );
}

function APIPanel({ apis, category }) {
    
    const filterApis = (category !== null) ?
        apis.filter(item => item.Category === category) :
        apis;
    
    const mapApis = filterApis.map((api, index) => <APICard api={api} key={api.API+index.toString()} />);
    
    return (
        <div className="api-panel">
            <h3>Category: { category ? category : "All"}</h3>
            <div class="api-wrapper">
                {mapApis}
            </div>
        </div>
    );
}

export default APIPanel;