import React from 'react';
import './directory.component.scss';
import MenuItemComponent from '../menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data';

class DirectoryComponent extends React.Component {

    constructor() {
        super();

        this.state = {
          menuList: []
        };
  }
  
  componentDidMount() {
    this.setState({menuList: DIRECTORY_DATA})
  }

    render() {
        return (
          <div className="directory-menu">
            {
              this.state.menuList.map(({id, ...otherProps}) => (
              <MenuItemComponent key={id} {...otherProps} />
              ))
            }
          </div>
        );
    }
}

export default DirectoryComponent;