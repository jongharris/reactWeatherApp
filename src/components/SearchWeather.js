import React from 'react';


class SearchWeather extends React.Component {
    state = {term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
        console.log(this.state.term);
    }

    render() {
        return (
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <input
                            type = "text"
                            onChange = {(event) => {this.setState({term: event.target.value});}}
                        />
                    </div>
                 </form>
            </div>
        )
    }
};

export default SearchWeather;