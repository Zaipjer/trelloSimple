import React, { useState } from "react";
import "./ListTitle.css";
import { IconButton, Typography, InputBase } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Redux
import { useDispatch } from "react-redux";
import { updateListTitleAction } from "../actions/listsAction";

const ListTitle = ({ title, listId }) => {
    // Utilizar useDispatch y te crea una función
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleBlur = () => {
        dispatch(updateListTitleAction(newTitle, listId));
        setOpen(false);
    };

    return (
        <>
            {open ? (
                <InputBase
                    multiline
                    value={newTitle}
                    onBlur={handleBlur}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="titleinput"
                    autoFocus
                />
            ) : (
                <div className="title">
                    <Typography
                        className="title__text"
                        onClick={() => setOpen(true)}
                    >
                        {title}
                    </Typography>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            )}
        </>
    );
};

export default ListTitle;
