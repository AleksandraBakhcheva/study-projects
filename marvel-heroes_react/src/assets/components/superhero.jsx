import "../styles/superhero.css";

function SuperheroCard(props) {
  return (
    <div className="superhero__card">
      <img className="picture" src={props.picture} alt={props.name} />
      <h3>{props.name}</h3>
      <>
        <div>{props.universe}</div>
        <div>{props.alter}</div>
        <div>{props.occupation}</div>
        <div>{props.friends}</div>
        <div>{props.superpowers}</div>
        <div>{props.description}</div>
      </>
    </div>
  );
}

export default SuperheroCard;
