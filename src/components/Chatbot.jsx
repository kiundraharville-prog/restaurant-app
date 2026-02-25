import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

function Chatbot() {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");
const [menuText, setMenuText] = useState("");


useEffect(() => {
async function getMenu() {
const { data } = await supabase
.from("menu_items")
.select("*");

if (data) {

const formattedMenu = data
.map(
(item) =>
`${item.name} - $${item.price} (${item.category})`
)
.join("\n");

setMenuText(formattedMenu);
}
}

getMenu();
}, []);

async function sendMessage() {
if (!input) return;

const updatedMessages = [
...messages,
{ role: "user", text: input }
];

setMessages(updatedMessages);
setInput("");

try {
const response = await fetch(
import.meta.env.VITE_GEMINI_URL,
{
method: "POST",
headers: {
"Content-Type": "application/json",
"x-goog-api-key":
import.meta.env.VITE_GEMINI_KEY,
},
body: JSON.stringify({
systemInstruction: {
role: "system",
parts: [
{
text: `
You are a restaurant waiter.

Here is the official menu:
${menuText}

You may ONLY answer questions using items from this menu.
If someone asks about something not listed, politely say:
"I'm sorry, that item is not on our menu."
`
}
],
},
contents: updatedMessages.map((msg) => ({
role: msg.role === "user" ? "user" : "model",
parts: [{ text: msg.text }],
})),
}),
}
);

const data = await response.json();

const reply =
data.candidates?.[0]?.content?.parts?.[0]?.text ||
"Sorry, I couldn't answer that.";

setMessages([
...updatedMessages,
{ role: "model", text: reply },
]);
} catch (error) {
console.error("Gemini error:", error);
}
}

return (
<div>
<h1>Restaurant Chatbot</h1>

<div
style={{
border: "1px solid black",
height: "250px",
overflowY: "auto",
padding: "10px",
marginBottom: "10px",
}}
>
{messages.map((msg, index) => (
<p key={index}>
<strong>{msg.role}:</strong> {msg.text}
</p>
))}
</div>

<input
type="text"
placeholder="Ask about the menu..."
value={input}
onChange={(e) =>
setInput(e.target.value)
}
/>

<button onClick={sendMessage}>
Send
</button>
</div>
);
}

export default Chatbot;