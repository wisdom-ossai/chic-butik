import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.component.scss';

const MenuItemComponent = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItemComponent);