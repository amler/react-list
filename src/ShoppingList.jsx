import { useState } from "react";

function ShoppingList() {
    const [items, setItems] = useState([
        {
            id: 12345,
            product: 'Avocados',
            quantity: 4,
        },
    ]);
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;