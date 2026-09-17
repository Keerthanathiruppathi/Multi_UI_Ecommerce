import { useEffect, useMemo, useState } from 'react';
import { WishlistContext } from './WishlistContextValue';

const WISHLIST_STORAGE_KEY = 'northstar-wishlist';

const getStoredWishlist = () => {
  try {
    const item = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
};

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => getStoredWishlist());

  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((currentWishlist) => {
      if (currentWishlist.some((item) => item.id === product.id)) {
        return currentWishlist;
      }

      return [...currentWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((currentWishlist) => currentWishlist.filter((item) => item.id !== productId));
  };

  const moveToCart = (product, addToCart) => {
    removeFromWishlist(product.id);
    addToCart(product, 1);
  };

  const wishlistCount = useMemo(() => wishlist.length, [wishlist]);

  const value = {
    wishlist,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    moveToCart
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

