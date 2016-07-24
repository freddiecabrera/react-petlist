import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { SEARCH } from '../endpoints';
import SearchBar from 'components/SearchBar';
import Loader from 'components/Loader';
import Cards from 'components/Cards';

class Search extends Component {

  componentWillMount() {
    this.props.fetchData(SEARCH);
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <SearchBar fetchData={this.props.fetchData} />
        {this.props.fetching ? <Loader /> : <Cards list={this.props.response || [] } />}
      </div>
    );
  }
};

Search.propTypes = {
  fetchData: React.PropTypes.func.isRequired,
  searchResponse: React.PropTypes.arrayOf(React.PropTypes.object),
  fetching: React.PropTypes.bool
};

const mapStateToProps = state => ({
  fetching: state.UIReducer.fetching,
  response: state.Request.data
});

export default connect(mapStateToProps, actions)(Search);
