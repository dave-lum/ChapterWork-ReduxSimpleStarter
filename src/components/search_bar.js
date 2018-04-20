import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input/>;
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
  }
  
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }
}

export default SearchBar;
