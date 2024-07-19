import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
