import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const OrderForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [orderText, setOrderText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url =
  import.meta.env.VITE_SUPABASE_URL + "/rest/v1/orders";

    const token = import.meta.env.VITE_SUPABASE_ANON_KEY;

    const order = {
      customer_name: name,
      order_details: orderText,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: token,
          Authorization: `Bearer ${token}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        setResult("Order Created");
        setName("");
        setOrderText("");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setResult("Error creating order");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Order</label>
          <textarea
            className="form-control"
            value={orderText}
            onChange={(e) => setOrderText(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Send Order
        </button>
      </form>

      <p className="mt-3">{result}</p>
    </>
  );
};