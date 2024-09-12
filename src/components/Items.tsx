import React, { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import { CheckBox } from "../util/CheckBox";
import axios from "axios";
import { ItemContainer, ItemRow, CheckboxLabel, ItemBox, ItemText } from "../theme/styles.ts";

interface Item {
    _id: string;
    title: string;
}

interface ItemsProps {
    getRequest: string;
}

export const Items: React.FC<ItemsProps> = ({ getRequest }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const mockItems: Item[] = [
        { _id: "1", title: "The quick brown fox jumped over the lazy dog 1" },
        { _id: "2", title: "The quick brown fox jumped over the lazy dog 2" },
        { _id: "3", title: "The quick brown fox jumped over the lazy dog 3" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/${getRequest}`);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchData();
    }, [getRequest]);

    const handleCheckboxChange = async (itemId: string) => {
        try {
            await axios.delete(`/api/${getRequest}/${itemId}`);
            setCheckedItems((prevChecked) => ({
                ...prevChecked,
                [itemId]: !prevChecked[itemId],
            }));
            setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <Grid2 container sx={{ pt: 1 }}>
            <ItemContainer>
                {mockItems.map((item) => (
                    <ItemBox key={item._id}>
                        <ItemRow>
                            {/*<CheckboxLabel>*/}
                            {/*    <input*/}
                            {/*        type="checkbox"*/}
                            {/*        checked={!checkedItems[item._id]}*/}
                            {/*        onChange={() => handleCheckboxChange(item._id)}*/}
                            {/*    />*/}
                            {/*    <CheckBox />*/}
                                <ItemText>{item.title}</ItemText>
                        {/*    </CheckboxLabel>*/}
                        </ItemRow>
                    </ItemBox>
                ))}
            </ItemContainer>
        </Grid2>
    );
};