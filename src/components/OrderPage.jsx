import { useState } from "react";
import supabase from "../supabaseClient";

function OrderPage() {
const [name, setName] = useState("");
const [order, setOrder] = useState("");
const [message, setMessage] = useState("");

async function handleSubmit(e) {
e.preventDefault();

await supabase.from("orders").insert([
{
customer_name: name,
order_details: order,
},
]);

setMessage("Order saved!");
setName("");
setOrder("");
}

return (
<div>
<h1>Order Page</h1>

<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<br /><br />

<textarea
placeholder="What would you like?"
value={order}
onChange={(e) => setOrder(e.target.value)}
/>

<br /><br />

<button type="submit">Submit</button>
</form>

<p>{message}</p>
</div>
);
}

export default OrderPage;
