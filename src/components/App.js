import React, {Component} from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com/artist';

class App extends Component {
    state = { artist: null, tracks: [] };


    componentDidMount() {
        this.searchArtist('onerepublic');
    }

    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/${artistQuery}`)
            .then(response => response.json())
            .then(json => {
                if (json.artists.total > 0) {
                    this.setState({ artist: json.artists.items[0] })

                    fetch(`${API_ADDRESS}/${this.state.artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({ tracks: json.tracks }))
                        .catch(error => alert(error.message));
                }
            })
            .catch(error => alert(error.message));

    }

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist}/>
                <Tracks tracks={this.state.tracks}/>
            </div>
        )
    }
}

export default App;