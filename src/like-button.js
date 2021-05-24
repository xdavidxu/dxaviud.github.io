"use strict";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return "You liked this.";
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>Like</button>
        );
    }
}

let domContainer = document.querySelector("#like-button-container");
ReactDOM.render(<LikeButton />, domContainer);

// npx babel --watch src --out-dir . --presets react-app/prod