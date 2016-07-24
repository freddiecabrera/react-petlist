import React from 'react';
const { func } = React.PropTypes;

const Main = props => (
  <div>{props.children}</div>
);

Main.propTypes = {
  children: func.isRequired
};

export default Main;
