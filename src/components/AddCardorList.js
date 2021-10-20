import React, { useState } from "react";
import "./AddCardorList.css";
import { Collapse, Paper, Typography } from "@mui/material";
import AddCardorListText from "./AddCardorListText";

const AddCardorList = ({ type, listId }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="addcardorlist">
            <Collapse in={open}>
                <AddCardorListText
                    type={type}
                    setOpen={setOpen}
                    listId={listId}
                />
            </Collapse>
            <Collapse in={!open}>
                <Paper
                    className="addcardorlist__text"
                    onClick={() => setOpen(true)}
                >
                    <Typography>
                        {type === "card"
                            ? "+ Add a card"
                            : "+ Add another list"}
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    );
};

export default AddCardorList;
