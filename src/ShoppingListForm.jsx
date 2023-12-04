import { useState } from "react";

function ShoppingListForm({onSubmit}) {
    const [formData, setFormData] = useState({
        product: '',
        quantity: 0,
    });
    const [productIsValid, setProductIsValid] = useState(false);
    
    const validate = (product) => {
        if (product.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }
    const handleChange = (evt) => {
        if (evt.target.name === 'product') {
            validate(evt.target.value);
        }
        setFormData(currentData => {
            return {
                ...currentData,
                [evt.target.name]: evt.target.value,
            };
        });
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (productIsValid) {
            onSubmit(formData);
            setFormData({
                product: '',
                quantity: 0,
            });
        }
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
            { !productIsValid && (
                <p style={{color: 'red'}}>Item cannot be empty.</p>
            )}
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