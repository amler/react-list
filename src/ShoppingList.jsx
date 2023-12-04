import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {
    const [items, setItems] = useState([
        {
            id: uuidv4(),
            product: 'Avocados',
            quantity: 4,
        },
    ]);
    const addItem = (item) => {
        setItems(currentItems => {
            return [
                ...currentItems,
                {...item, id: uuidv4()}
            ]
        })
    }
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
            <ShoppingListForm onSubmit={addItem} />
        </div>
    );
}

export default ShoppingList;