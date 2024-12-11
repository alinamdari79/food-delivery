const Card = ({ food }:any) => {
  return (
    <div className="flex flex-col p-6 border-solid border-1 border-[grey] rounded-md bg-white shadow-lg h-[350px]">
      <img
        className="h-48 w-11/12 rounded-md mb-2 mx-auto"
        src={`${food.image}`}
      />
      <h2 className="font-bold text-lg mb-2 mx-auto">{food.name}</h2>
      <p className="font-normal text-base text-slate-700 mb-2 mx-auto">
        {food.explanation}
      </p>
      <div className="mr-8">
        <span className="font-semibold text-base text-orange-500 mb-2">
          {food.prize}
        </span>
      </div>
    </div>
  );
};

export default Card;
