import { useEffect } from "react";
import "./App.css";
import AddCardorList from "./components/AddCardorList";
import TrelloList from "./components/TrelloList";
import mockdata from "./mockdata";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
    setListsAction,
    moveListAction,
    moveCardAction,
    moveCardOtherListAction,
} from "./actions/listsAction";

function App() {
    // Utilizar useDispatch y te crea una función
    const dispatch = useDispatch();

    const data = useSelector((state) => state.lists.lists);

    useEffect(() => {
        dispatch(setListsAction(mockdata));
        // eslint-disable-next-line
    }, []);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const {
            destination: { droppableId: destdroppableId, index: destIndex },
            source: { droppableId: sourcedroppableId, index: sourceIndex },
            draggableId,
            type,
        } = result;

        /*console.table([
            {
                sourcedroppableId,
                destdroppableId,
                draggableId,
            },
        ]);
        console.table([
            {
                type,
                sourceIndex,
                destIndex,
            },
        ]);*/

        if (type === "list") {
            dispatch(moveListAction(sourceIndex, destIndex, draggableId));
            return;
        }

        if (sourcedroppableId === destdroppableId) {
            dispatch(
                moveCardAction(
                    sourcedroppableId,
                    destdroppableId,
                    draggableId,
                    sourceIndex,
                    destIndex
                )
            );
        } else {
            dispatch(
                moveCardOtherListAction(
                    sourcedroppableId,
                    destdroppableId,
                    draggableId,
                    sourceIndex,
                    destIndex
                )
            );
        }
    };

    return (
        <div className="app">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                    droppableId="list"
                    type="list"
                    direction="horizontal"
                >
                    {(provided) => (
                        <div
                            className="app__container"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {data?.listIds.map((listId, index) => {
                                //Javascript
                                const list = data.lists[listId];

                                return (
                                    <TrelloList
                                        list={list}
                                        key={list.id}
                                        index={index}
                                    />
                                );
                            })}

                            {provided.placeholder}
                            <div>
                                <AddCardorList type="list" />
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default App;
