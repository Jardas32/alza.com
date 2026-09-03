import { createContext, useContext, useState, useEffect, useRef } from "react";
import { allProducts } from "../data/data";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([...allProducts.products]);
  const [category, setCategory] = useState([...allProducts.category]);
  const [selectCategory, setSelectCategory] = useState([]);

  const [infoproduct, setInfoproduct] = useState(() => {
    const getProduct = localStorage.getItem("infoproduct");
    return getProduct ? JSON.parse(getProduct) : [];
  });

  const [oblibene, setOblibene] = useState(() => {
    const savedOblibene = localStorage.getItem("oblibene");
    return savedOblibene ? JSON.parse(savedOblibene) : [];
  });

  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const opensearchRef = useRef();

  useEffect(() => {
    if (!search.trim()) {
      setSearchResult(products.slice(0, 6));
      return;
    }

    const result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(result);
  }, [search, products]);

  useEffect(() => {
    const openSearchResultRef = (e) => {
      if (opensearchRef.current && !opensearchRef.current.contains(e.target)) {
        setOpenSearchResult(false);
      }
    };

    window.addEventListener("mousedown", openSearchResultRef);

    return () => window.removeEventListener("mousedown", openSearchResultRef);
  }, [openSearchResult]);

  useEffect(() => {
    if (!openSearchResult) {
      setSearch("");
    }
  }, [openSearchResult]);

  // User
  const [user, setUser] = useState(() => {
    const getUser = localStorage.getItem("currentUser");
    return getUser ? JSON.parse(getUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  // addUser
  const registration = () => {
    setUser({
      id: crypto.randomUUID(),
      username: "Alex Duglas",
      email: "duglasalex@gmail.com",
      img: "./alex_duglasuser.png",
    });
  };

  const logOut = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  const handleInfoProduct = (product) => {
    setInfoproduct(product);
  };

  useEffect(() => {
    localStorage.setItem("infoproduct", JSON.stringify(infoproduct));
  }, [infoproduct]);

  // useEffect(() => {

  //   async function getProducts() {
  //     try {
  //       const res = await fetch("http://localhost:4000/products");

  //       const response = await fetch("http://localhost:4000/category");

  //       const data = await res.json();
  //       setProducts(data);

  //       const dataCategory = await response.json();

  //       setCategory(dataCategory);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   getProducts();
  // }, []);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("oblibene", JSON.stringify(oblibene));
  }, [oblibene]);

  const handleAddOblibene = (id) => {
    setOblibene((prevOb) => {
      if (prevOb.some((p) => p.id === id)) return prevOb;
      const product = products.find((p) => p.id === id);

      return product ? [...prevOb, product] : prevOb;
    });
  };

  const handleAddtoCart = (product) => {
    const findProduct = cart.find((p) => p.id === product.id);

    setCart((prevCart) => {
      const existProduct = prevCart.find((p) => p.id === product.id);

      if (existProduct) {
        if (existProduct.quantity >= findProduct.skladem) {
          return prevCart;
        }

        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevCart, product];
    });
  };

  const inCart = (id) => {
    return cart.some((p) => p.id === id);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalProduct = cart.reduce(
    (prev, product) => prev + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (prev, product) => prev + product.price * product.quantity,
    0
  );

  const quantityPlus = (id) => {
    const fountProductCart = cart.find((p) => p.id === id);
    const fountProductOblidene = oblibene.find((p) => p.id === id);

    if (fountProductCart) {
      if (fountProductCart.quantity >= fountProductCart.skladem) {
        alert(`Skladem: ${fountProductCart.skladem} ks`);
        return;
      }

      setCart(
        cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
      );
    } else if (fountProductOblidene) {
      if (fountProductOblidene.quantity >= fountProductOblidene.skladem) {
        alert(`Skladem: ${fountProductOblidene.skladem} ks`);
        return;
      }

      setOblibene(
        oblibene.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    }
  };

  const quantityMainus = (id) => {
    const fountProductCart = cart.some((p) => p.id === id);
    const fountProductOblidene = oblibene.some((p) => p.id === id);

    if (fountProductCart) {
      setCart(
        cart.map((p) =>
          p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
        )
      );
    } else if (fountProductOblidene) {
      setOblibene(
        oblibene.map((p) =>
          p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
        )
      );
    }
  };

  const deleteProductCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const deleteProductOblibene = (id) => {
    setOblibene((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalProduct,
        totalPrice,
        handleAddtoCart,
        products,
        category,
        setProducts,
        infoproduct,
        setInfoproduct,
        handleInfoProduct,
        oblibene,
        handleAddOblibene,
        quantityMainus,
        quantityPlus,
        deleteProductCart,
        deleteProductOblibene,
        inCart,
        selectCategory,
        setSelectCategory,
        user,
        registration,
        logOut,
        openSearchResult,
        setOpenSearchResult,
        opensearchRef,
        searchResult,
        setSearchResult,
        search,
        setSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
