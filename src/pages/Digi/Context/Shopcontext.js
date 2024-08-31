import { useState, createContext, useMemo } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [cardItems, setCardItems] = useState([]);

  const AddToCart = (itemId) => {
    setCardItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemId);
      if (existingItem) {
        return prevItems;
      } else {
        return [...prevItems, { id: itemId, count: 1 }];
      }
    });
  };

  const IncrementItem = (itemId) => {
    setCardItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, count: item.count + 1 } : item)));
  };

  const RemoveFromCart = (itemId) => {
    setCardItems((prevItems) => prevItems.map((item) => (item.id === itemId && item.count > 0 ? { ...item, count: item.count - 1 } : item)).filter((item) => item.count > 0));
  };

  // اضافه کردن متد جدید برای خالی کردن سبد خرید
  const clearCart = () => {
    setCardItems([]);
  };

  const uniqueItemsCount = useMemo(() => {
    return cardItems.length;
  }, [cardItems]);

  const ContextValue = {
    cardItems,
    AddToCart,
    IncrementItem,
    RemoveFromCart,
    clearCart, // متد جدید
    uniqueItemsCount,
  };

  return <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>;
};
