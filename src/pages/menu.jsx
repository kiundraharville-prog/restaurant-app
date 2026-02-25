import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

function Menu() {
const [items, setItems] = useState([]);

useEffect(() => {
async function getMenu() {
const { data } = await supabase
.from("menu_items")
.select("*");

setItems(data);
}

getMenu();
}, []);

const breakfast = items.filter(item => item.category === "Breakfast");
const lunch = items.filter(item => item.category === "Lunch");
const dinner = items.filter(item => item.category === "Dinner");
const drinks = items.filter(item => item.category === "Drinks");

return (
<div>
<h1>Menu</h1>

<h2>Breakfast</h2>
{breakfast.map(item => (
<div key={item.id}>
<img src={item.image_url} width="120" />
<p>{item.name} - ${item.price}</p>
</div>
))}

<h2>Lunch</h2>
{lunch.map(item => (
<div key={item.id}>
<img src={item.image_url} width="120" />
<p>{item.name} - ${item.price}</p>
</div>
))}

<h2>Dinner</h2>
{dinner.map(item => (
<div key={item.id}>
<img src={item.image_url} width="120" />
<p>{item.name} - ${item.price}</p>
</div>
))}

<h2>Beverages & Drinks</h2>
{drinks.map(item => (
<div key={item.id}>
<img src={item.image_url} width="120" />
<p>{item.name} - ${item.price}</p>
</div>
))}
</div>
);
}

export default Menu;