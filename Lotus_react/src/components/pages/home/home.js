import React from 'react';
import ReactDOM from 'react-dom';
import '../parts/header/header.js';
import '../parts/header/header.css';
import './content.js';
import './content.css';
import '../parts/footer/footer.js';
import '../parts/footer/footer.css';

class Home extends React.Component {
  render() {
    return (
      <Header />
      <Content />
      <Footer />
    );
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
