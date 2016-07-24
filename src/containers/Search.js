import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { SEARCH } from '../endpoints';
import SearchBar from 'components/SearchBar';
import Loader from 'components/Loader';
import Cards from 'components/Cards';
const { func, arrayOf, object, bool } = React.PropTypes;

class Search extends Component {

  componentWillMount() {
    this.props.fetchData(SEARCH);
  }

  render() {
    return (
      <div>
        <SearchBar fetchData={this.props.fetchData} />
        {this.props.fetching ? <Loader /> : <Cards list={this.props.response || [] } />}
      </div>
    );
  }
};

Search.propTypes = {
  fetchData: func.isRequired,
  response: arrayOf(React.PropTypes.object),
  fetching: bool
};

const mapStateToProps = state => ({
  fetching: state.UIReducer.fetching,
  response: state.Request.data
});

export default connect(mapStateToProps, actions)(Search);
