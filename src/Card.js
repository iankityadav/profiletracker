import Data from "./Data";

function Card(props) {
    return (
        <div>
            {props.profile}
            {Data(props.profile).xp}
        </div>
    )
}

export default Card;