"use strict";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "You liked this" : "Like"}
    </button>
  );
}

let domContainer = document.querySelector("#like-button-container");
ReactDOM.render(<LikeButton />, domContainer);

// npx babel [--watch] react-components --out-dir scripts --presets react-app/prod
