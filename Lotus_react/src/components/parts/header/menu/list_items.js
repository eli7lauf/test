import React from 'react';
import ReactDOM from 'react-dom';
import ListItem
import myJSON

class ListItems extends React.Component {
  render() {
    const listItems = myJSON.map((jsonPart) =>
    <ListItem item="{jsonPart}" />
);
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default ListItems
