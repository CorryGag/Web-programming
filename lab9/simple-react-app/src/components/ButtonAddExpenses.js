import React, { useState } from 'react';
import AddExpenses from './AddExpenses';

const ButtonAddExpenses = (props) => {
    const [isEditing, setEditing] = useState(false);

    const startEditing = () => setEditing(true);
    const stopEditing = () => setEditing(false);

    const saveExpense = (addExpense) => {
        const expenseData = {
            ...addExpense,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    return (
        <div className="newExpenseButton">
            {!isEditing && <button className="buttonAddExpense" onClick={startEditing}>Add New Expense</button>}
            {isEditing && (
                <AddExpenses
                    onSaveExpenseData={saveExpense}
                    onCancel={stopEditing}
                />
            )}
        </div>
    );
};

export default ButtonAddExpenses;
