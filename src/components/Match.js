import React from "react";

function Match(props) {
  return (
<article className="Match">
{props.winner && <h2>{props.winner} is the winner by {props.scoreDifference}!</h2>}
{!props.winner && <h2>No winners yet!</h2>}
</article>
  );
}
export default Match;