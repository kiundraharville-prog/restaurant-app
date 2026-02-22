import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./Menu.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*");

      if (error) {
        console.error("Error fetching menu:", error);
      } else {
        setMenuItems(data);
      }
    };

    fetchMenu();
  }, []);


  const breakfastItems = menuItems.filter(
    (item) => item.category === "Breakfast"
  );

  const lunchItems = menuItems.filter(
    (item) => item.category === "Lunch"
  );

  const dinnerItems = menuItems.filter(
    (item) => item.category === "Dinner"
  );

  const drinkItems = menuItems.filter(
    (item) => item.category === "Drinks"
  );

  return (
  <div className="menu-container">
    <h1 className="menu-title">Menu</h1>

    {/* Breakfast */}
    <div className="category-section">
      <h2 className="category-title">Breakfast</h2>
      <div className="menu-grid">
        {breakfastItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Lunch */}
    <div className="category-section">
      <h2 className="category-title">Lunch</h2>
      <div className="menu-grid">
        {lunchItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Dinner */}
    <div className="category-section">
      <h2 className="category-title">Dinner</h2>
      <div className="menu-grid">
        {dinnerItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Drinks */}
    <div className="category-section">
      <h2 className="category-title">Drinks</h2>
      <div className="menu-grid">
        {drinkItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Menu;