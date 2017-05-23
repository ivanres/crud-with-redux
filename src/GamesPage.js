import React from 'react';
import GamesList from './GamesList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GamesPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1>Games List</h1>
      	<GamesList  games={this.props.games} />
      </div>
    );
  }
}

GamesPage.propTypes = {
	games: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		games: state.games
	}
}

export default connect(mapStateToProps)(GamesPage);