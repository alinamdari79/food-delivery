const Card = ({ food }) => {
  return (
    <div
      className="flex flex-col p-6 border-solid border-1 border-[grey] rounded-md bg-white"
      key={food.id}
    >
      <h2>{food.name}</h2>
      <p>{food.explanation}</p>
      <span>{food.prize}</span>
    </div>
  );
};

export default Card;
