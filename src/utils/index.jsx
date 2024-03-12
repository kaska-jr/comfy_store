import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

//price
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return dollarsAmount;
};

//options
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, i) => {
    const amount = i + 1;
    return (
      <option value={amount} key={amount}>
        {amount}
      </option>
    );
  });
};
