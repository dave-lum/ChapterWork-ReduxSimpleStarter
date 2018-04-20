import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Lodash from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyBSBEGc5qKM-6QJyJG19uGX77NgxmTUjwY';

// Create a new component
// Should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: undefined
    };

    this.searchVideos('surfboards');
  }

  searchVideos(searchTerm) {
    YTSearch({key: YOUTUBE_API_KEY, term: searchTerm}, videos => this.setState({
      videos: videos,
      selectedVideo: videos[0]
    }));
  }
  
  render() {
    const videoSearchCallback = Lodash.debounce((searchTerm) => this.searchVideos(searchTerm), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearchCallback}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
          />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App/>, document.querySelector('.container'));
