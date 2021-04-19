import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      (this.props.item.level == 1)?
      (<li class="{this.props.item.li_class}">
        <a href="{this.props.item.url}">
          {this.props.item.name}
        </a>
      </li>):
      (<li class="{this.props.item.li_class}">
        <a href="{this.props.item.url}">
          gfdhgkjdhf
        </a>
      </li>)
    );
  }
}

export default ListItem
