import React from 'react';


class SearchFieldComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ url: event.target.value } );
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.findFavicons(this.state.url)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Url:
                    <input style={{ height: "20px", minWidth: "200px", marginLeft: "4px", marginRight: "8px" }} type="text" value={this.state.url} onChange={this.handleChange} />
                </label>
                <input style={{ height: "28px" }} type="submit" value="Find Favicons" />
            </form>
        );
    }
}

export default SearchFieldComponent;