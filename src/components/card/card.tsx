const Card = ({ food }) => {
  return (
    <div
      className="flex flex-col p-6 border-solid border-1 border-[grey] rounded-md bg-white shadow-lg h-[350px]"
    >
      <img className="h-44 w-full rounded-md mb-2" src={(`${food.image}`)} />
      <h2 className="font-bold text-lg mb-2">{food.name}</h2>
      <p className="font-normal text-base text-slate-700 mb-2">{food.explanation}</p>
      <span className="font-semibold text-base text-orange-500 mb-2">
        {food.prize}
      </span>
    </div>
  );
};

export default Card;
