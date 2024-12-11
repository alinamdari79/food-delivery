import { useState } from 'react'

const Card = ({ food }: any) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col p-4 border-solid border-1 border-[grey] rounded-md bg-white shadow-lg h-[380px]">
      <img
        className="h-48 w-11/12 rounded-md mb-2 mx-auto"
        src={`${food.image}`}
      />
      <h2 className="font-bold text-lg mb-2 mx-auto">{food.name}</h2>
      <p className="font-normal text-base text-slate-700 mb-2 mx-auto">
        {food.explanation}
      </p>
      <div className="mr-8 flex flex-row gap-24 mt-2">
        <span className="font-semibold text-base text-orange-500 mb-2">
          {food.prize}
        </span>
        <div className="border-2 border-zinc-500 w-[100px] rounded-md flex justify-between">
          <button onClick={() => setCount((count) => count - 1)} className="bg-slate-500 h-full w-8">-</button>
          <span>{count}</span>
          <button onClick={() => setCount((count) => count + 1)} className="bg-orange-500 h-full w-8">+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
