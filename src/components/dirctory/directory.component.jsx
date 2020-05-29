import React from 'react';
import {connect} from 'react-redux';
import './directory.component.scss';
import MenuItemComponent from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { getDirectoryData } from '../../store/directory/directory.selectors';
import { StartFetchDirectoryData } from '../../store/directory/directory.actions';

class DirectoryComponent extends React.Component {

  componentDidMount() {
    this.props.dispatch(StartFetchDirectoryData());
  }

  render() {
    const { sectionList } = this.props;
    return (
      <div className="directory-menu">
        {
          sectionList.map(({ id, ...otherProps }) => (
            <MenuItemComponent key={id} {...otherProps} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sectionList: getDirectoryData 
})

export default connect(mapStateToProps)(DirectoryComponent);