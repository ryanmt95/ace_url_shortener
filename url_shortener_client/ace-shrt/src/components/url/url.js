import React from 'react'
import axios from 'axios'
import './url.css';

const SERVER = "https://ace-shrt-server.herokuapp.com"

class URL extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            shortURL: "",
            url: ""
        }
    }

    render() {
        return (
            <div className="container">
                <form>
                    <input
                        placeholder="Insert URL here"
                        type="text"
                        name="url"
                        onChange={this.handleChange}
                    />
                    <button type="button" onClick={this.getShortURL}>
                        Make URL
                    </button>
                </form>
                <div>
                    {this.state.shortURL}
                </div>
            </div >
        )
    }

    handleChange = (e) => {
        this.setState({ url: e.target.value })
    }

    getShortURL = async () => {
        var request = "/shortenURL"
        var shortURL = await axios.post(SERVER + request, { url: this.state.url })
            .then(res => {
                return SERVER + "/url/" + res.data.hashedURL
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({ shortURL: shortURL })
    }
}

export default URL