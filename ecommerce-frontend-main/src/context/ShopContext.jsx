import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "₹";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // ✅ NEW: Orders state
  const [orders, setOrders] = useState([]);

  // ✅ Load orders from localStorage
  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  // ✅ Save orders
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);



  // ✅ Add to Cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to cart 🛒");
  };



  // ✅ Cart Count
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          totalCount += cartItems[items][size];
        }
      }
    }
    return totalCount;
  };



  // ✅ Update Quantity
  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };



  // ✅ Cart Amount
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      const itemInfo = products.find(p => p._id === items);

      if (itemInfo) {
        for (const size in cartItems[items]) {
          if (cartItems[items][size] > 0) {
            totalAmount += itemInfo.price * cartItems[items][size];
          }
        }
      }
    }

    return totalAmount;
  };



  // ✅ NEW: Add Order
 const addOrder = (items) => {

  const newOrder = {
    id: Date.now(),
    items: items,
    date: new Date(),
    paymentMethod: "COD",
    status: "Order Placed",
    progress: 1
  };

  const updatedOrders = [...orders, newOrder];

  setOrders(updatedOrders);

  // ✅ SAVE WITH STATUS
  localStorage.setItem("orders", JSON.stringify(updatedOrders));

  setCartItems({});

  toast.success("Order Placed Successfully 🎉");
};
  useEffect(() => {
    console.log("Cart Updated:", cartItems);
  }, [cartItems]);



  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,

    // ✅ NEW
    orders,
    addOrder
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;