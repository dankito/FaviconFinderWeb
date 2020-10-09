import React from "react";
import SearchFieldComponent from "./SearchFieldComponent.js"
import "./App.css";


const BaseUrl = "http://localhost:8080/favicons"


class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            favicons: []
        }
    }

    findFavicons(url) {
        var request = new XMLHttpRequest()

        request.open("GET", BaseUrl + "?url=" + url + "&sortedBy=size_ascending", true)

        const app = this

        request.onload = function () {
            const favicons = JSON.parse(this.response)

            app.setState( { favicons: favicons })
        }

        request.send()
    }

    render() {
        return (
            <div>
                <SearchFieldComponent
                    findFavicons={ (url) => this.findFavicons(url) }
                />

                <div>{this.state.searchTerm}</div>

                { this.state.favicons.map( (favicon, index) =>
                    <div key={ favicon.url + "_" + index }>
                        <img src={ favicon.url } alt={ favicon.url } />
                        <div style={{ marginBottom: "16px" }}>
                            { favicon.iconType } { favicon.size ? ( " (" + favicon.size.displayText + ")" ) : ""}
                        </div>
                    </div>
                ) }
            </div>
        )
    }

}

export default App;
