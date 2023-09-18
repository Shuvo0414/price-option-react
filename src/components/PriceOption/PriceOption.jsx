import Proptypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className=" flex flex-col bg-black rounded-xl text-white p-5">
      <h1 className=" text-center">
        <span className=" text-5xl font-extrabold">{price}</span>
      </h1>
      <h4 className=" text-2xl text-center my-7">{name}</h4>
      <div className=" pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className=" bg-blue-500 mt-12 w-full py-2 font-bold rounded-lg hover:bg-blue-900">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: Proptypes.object,
};

export default PriceOption;
