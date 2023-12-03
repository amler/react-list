import { useState } from "react";

function ShoppingListForm() {
    const [formData, setFormData] = useState({
        product: '',
        quantity: 0,
    });
    const handleChange = (evt) => {
        setFormData(currentData => {
            return {
                ...currentData,
                [evt.target.name]: evt.target.value,
            };
        });
    };
    return (
        <form action="">
            <label htmlFor="product">Enter Item </label>
            <input 
                type="text" 
                name="product" 
                id="product"
                placeholder="product name"
                onChange={handleChange} 
                value={formData.product}/>
            <label htmlFor="quantity">Enter amount </label>
            <input 
                type="number" 
                name="quantity" 
                id="quantity"
                placeholder="Amount"
                onChange={handleChange}
                value={formData.quantity}/>
            <button>Add Item</button>
        </form>
    );
};

export default ShoppingListForm;