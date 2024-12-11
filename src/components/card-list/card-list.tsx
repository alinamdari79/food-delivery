import FoodData from "../../../db.json";
import Card from "../card/card";

const CardList = () => (
  // const { monsters } = this.props;
  <div className="grid grid-cols-3 gap-5 my-5 mx-12">
    {FoodData.map((food) => {
      return <Card food={food} />;
    })}
  </div>
);

export default CardList;

// const CardList = () => {
//   return (
//     <div>
//       {FoodData.map((food) => (
//         <div className="">
//           <div key={food.id}>
//             <h2>{food.name}</h2>
//             <p>{food.explanation}</p>
//             <span>{food.prize}</span>
//             <img src="../../assets" />
//             <hr />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;
