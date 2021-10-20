import { Button, IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import "./AddCardorListText.css";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useDispatch } from "react-redux";
import { addCardAction, addListAction } from "../actions/listsAction";
import uuid from "react-uuid";

const AddCardorListText = ({ type, setOpen, listId }) => {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleAddCardorList = () => {
        if (title !== "") {
            if (type === "card") {
                // Crear un id unico para el nuevo card
                const newCardId = uuid();
                //crear el card nuevo
                const newCard = {
                    id: newCardId,
                    title: title,
                };
                dispatch(addCardAction(newCard, listId));
            } else {
                // Crear un id unico para la nueva lista
                const newListId = uuid();
                dispatch(addListAction(title, newListId));
            }
        }
        setTitle("");
        setOpen(false);
    };

    return (
        <>
            <Paper className="card">
                <InputBase
                    multiline
                    fullWidth
                    value={title}
                    onBlur={() => setOpen(false)}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={
                        type === "card"
                            ? "Enter a title for this card ..."
                            : "Enter list title ..."
                    }
                    sx={{ margin: "0.5rem" }}
                />
            </Paper>
            <div className="confirm">
                <div className="confirm__options">
                    <Button
                        className="confirm__optionsbtnConfirm"
                        onClick={handleAddCardorList}
                    >
                        {type === "card" ? "Add card" : "Add list"}
                    </Button>
                    <IconButton onClick={() => setOpen(false)}>
                        <ClearIcon />
                    </IconButton>
                </div>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            </div>
        </>
    );
};

export default AddCardorListText;
