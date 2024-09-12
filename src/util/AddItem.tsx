import axios from 'axios';
import React, { useState, FormEvent } from 'react';
import { InputGroup, InputBox, SubmitButton } from '../theme/styles.ts'; // Using the styled components

interface AddItemProps {
    customPostRoute: string;
}

export const AddItem: React.FC<AddItemProps> = ({ customPostRoute }) => {
    const [newItem, setNewItem] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(customPostRoute, { newItem });
            window.location.reload();
        } catch (error) {
            console.log('Error adding item:', error);
        }
    };

    const hasLetters = /[a-zA-Z]/.test(newItem);

    return (
        <InputGroup component="form" onSubmit={handleSubmit}>
            <InputBox
                type="text"
                name="newItem"
                autoComplete="off"
                autoFocus
                placeholder="Type here"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            {hasLetters && (
                <SubmitButton type="submit">Add</SubmitButton>
            )}
        </InputGroup>
    );
};