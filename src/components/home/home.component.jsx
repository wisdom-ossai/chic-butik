import React from 'react';
import './home.component.scss';

const HomeComponent = () => (
    <div className="Home">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">HATS</h2>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">JACKETS</h2>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">SNEAKERS</h2>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">MEN</h2>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">WOMEN</h2>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomeComponent;