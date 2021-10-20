import React from "react";
import "./TrelloList.css";
import { Paper, CssBaseline } from "@mui/material";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardorList";
import { Draggable, Droppable } from "react-beautiful-dnd";

const TrelloList = ({ list, index }) => {
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ marginBottom: "auto" }}
                >
                    <Paper className="trellolist">
                        <CssBaseline />
                        <ListTitle title={list.title} listId={list.id} />

                        <Droppable droppableId={list.id} type="card">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {list.cards.map((card, index) => (
                                        <TrelloCard
                                            card={card}
                                            listId={list.id}
                                            key={card.id}
                                            index={index}
                                        />
                                    ))}

                                    {provided.placeholder}
                                    <AddCardorList
                                        type="card"
                                        listId={list.id}
                                    />
                                </div>
                            )}
                        </Droppable>
                    </Paper>
                </div>
            )}
        </Draggable>
    );
};

export default TrelloList;
