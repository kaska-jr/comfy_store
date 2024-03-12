import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* CART ITEMS LIST */}
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>

        {/* CART TOTALS */}
        <div className="lg:col-span-4">
          <CartTotals />

          {/* REDIRECTS THE USER ACCORDING TO AUTHENTICATION */}
          {user ? (
            <Link to={"/checkout"} className="btn btn-primary btn-block mt-8">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to={"/login"} className="btn btn-primary btn-block mt-8">
              Please login to checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
