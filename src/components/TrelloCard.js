import { InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import "./TrelloCard.css";
import { Draggable } from "react-beautiful-dnd";

// Redux
import { useDispatch } from "react-redux";
import { updateCardTitleAction } from "../actions/listsAction";

const TrelloCard = ({ card, index, listId }) => {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(card.title);

    const dispatch = useDispatch();

    const handleBlur = () => {
        dispatch(updateCardTitleAction(newTitle, listId, card.id, index));
        setOpen(false);
    };

    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
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
                        <Paper
                            className="trellocard"
                            onClick={() => setOpen(true)}
                        >
                            {card.title}
                        </Paper>
                    )}
                </div>
            )}
        </Draggable>
    );
};

export default TrelloCard;
