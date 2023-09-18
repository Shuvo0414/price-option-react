import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Group fitness classes",
        "24/7 access",
        "Free WiFi",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: "$49.99/month",
      features: [
        "All Basic Membership benefits",
        "Access to personal trainers",
        "Sauna and steam room access",
        "Towel service",
        "Access to swimming pool",
        "Discounts on fitness apparel",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: "$79.99/month",
      features: [
        "Access for two adults and two children",
        "All Premium Membership benefits",
        "Childcare services",
        "Family fitness classes",
        "Access to racquetball courts",
        "Complimentary smoothie bar",
      ],
    },
  ];

  return (
    <div className=" m-12">
      <h2 className=" text-5xl font-extrabold text-center">
        Best Price in the town
      </h2>
      <div className=" grid md:grid-cols-3 gap-6 mt-8">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
