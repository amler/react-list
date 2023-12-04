import { useState } from "react";

function ShoppingListForm({onSubmit}) {
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
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(formData);
        setFormData({
            product: '',
            quantity: 0,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Enter Item </label>
            <input 
                type="text" 
                name="product" 
                id="product"
                placeholder="product name"
                onChange={handleChange} 
                value={formData.product}/>
            <br/>
            <label htmlFor="quantity">Enter amount </label>
            <input 
                type="number" 
                name="quantity" 
                id="quantity"
                placeholder="Amount"
                onChange={handleChange}
                value={formData.quantity}/>
            <br/>
            <button>Add Item</button>
        </form>
    );
};

export default ShoppingListForm;