import React from 'react';
import ReactDOM from 'react-dom';

class Carusel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_src: "pic.jpg",
      alt: "Flower"
    };
  }
  render() {
    return (
      <div class="container">
        <img src="{this.state.img_src}" alt="{this.state.alt}"/>
      </div>
    );
  }
}

export default Carusel;
