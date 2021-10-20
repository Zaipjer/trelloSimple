import {
    SET_LISTS,
    UPDATE_LIST_TITLE,
    UPDATE_CARD_TITLE,
    ADD_CARD,
    ADD_LIST,
    MOVE_LIST,
    MOVE_CARD_SAME,
    MOVE_CARD_OTHER_LIST,
} from "../types";

// Colocar toda la lista al reducer
export function setListsAction(lists) {
    return async (dispatch) => {
        dispatch(setLists(lists));
    };
}

const setLists = (lists) => ({
    type: SET_LISTS,
    payload: lists,
});

// Actualizar el titulo de una lista
export function updateListTitleAction(newTitle, listId) {
    return async (dispatch) => {
        dispatch(updateListTitle(newTitle, listId));
    };
}

const updateListTitle = (newTitle, listId) => ({
    type: UPDATE_LIST_TITLE,
    payload: newTitle,
    id: listId,
});

// Actualizar el titulo del card
export function updateCardTitleAction(newTitle, listId, cardId, cardIndex) {
    return async (dispatch) => {
        dispatch(updateCarTitle(newTitle, listId, cardId, cardIndex));
    };
}

const updateCarTitle = (newTitle, listId, cardId, cardIndex) => ({
    type: UPDATE_CARD_TITLE,
    payload: newTitle,
    listId: listId,
    cardId: cardId,
    cardIndex: cardIndex,
});

// Agregar un card a una lista
export function addCardAction(card, listId) {
    return async (dispatch) => {
        dispatch(addCard(card, listId));
    };
}

const addCard = (card, listId) => ({
    type: ADD_CARD,
    payload: card,
    id: listId,
});

// Agregar una lista
export function addListAction(titlelist, newlistId) {
    return async (dispatch) => {
        dispatch(addList(titlelist, newlistId));
    };
}

const addList = (titlelist, newlistId) => ({
    type: ADD_LIST,
    payload: titlelist,
    id: newlistId,
});

// Mover una lista
export function moveListAction(sourceIndex, destIndex, draggableId) {
    return async (dispatch) => {
        dispatch(moveList(sourceIndex, destIndex, draggableId));
    };
}

const moveList = (sourceIndex, destIndex, draggableId) => ({
    type: MOVE_LIST,
    sourceIndex: sourceIndex,
    destIndex: destIndex,
    draggableId: draggableId,
});

// Mover un card en la misma lista
export function moveCardAction(
    sourcedroppableId,
    destdroppableId,
    draggableId,
    sourceIndex,
    destIndex
) {
    return async (dispatch) => {
        dispatch(
            moveCard(
                sourcedroppableId,
                destdroppableId,
                draggableId,
                sourceIndex,
                destIndex
            )
        );
    };
}

const moveCard = (
    sourcedroppableId,
    destdroppableId,
    draggableId,
    sourceIndex,
    destIndex
) => ({
    type: MOVE_CARD_SAME,
    sourcedroppableId: sourcedroppableId,
    destdroppableId: destdroppableId,
    draggableId: draggableId,
    sourceIndex: sourceIndex,
    destIndex: destIndex,
});

// Mover un card a otra lista
export function moveCardOtherListAction(
    sourcedroppableId,
    destdroppableId,
    draggableId,
    sourceIndex,
    destIndex
) {
    return async (dispatch) => {
        dispatch(
            moveCardOtherList(
                sourcedroppableId,
                destdroppableId,
                draggableId,
                sourceIndex,
                destIndex
            )
        );
    };
}

const moveCardOtherList = (
    sourcedroppableId,
    destdroppableId,
    draggableId,
    sourceIndex,
    destIndex
) => ({
    type: MOVE_CARD_OTHER_LIST,
    sourcedroppableId: sourcedroppableId,
    destdroppableId: destdroppableId,
    draggableId: draggableId,
    sourceIndex: sourceIndex,
    destIndex: destIndex,
});
