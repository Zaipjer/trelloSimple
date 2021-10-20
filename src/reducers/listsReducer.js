import {
    SET_LISTS,
    UPDATE_LIST_TITLE,
    ADD_CARD,
    ADD_LIST,
    MOVE_LIST,
    MOVE_CARD_SAME,
    MOVE_CARD_OTHER_LIST,
    UPDATE_CARD_TITLE,
} from "../types";

// Cada reducer tiene su propio state
const initialState = {
    lists: null,
};

export default function listsReducer(state = initialState, action) {
    var list = null;
    var sourceList = null;
    var destinationList = null;
    var draggingCard = null;

    switch (action.type) {
        case SET_LISTS:
            return {
                ...state,
                lists: action.payload,
            };
        case UPDATE_LIST_TITLE:
            list = state.lists.lists[action.id];
            list.title = action.payload;
            return {
                ...state,
                lists: {
                    ...state.lists,
                    lists: {
                        ...state.lists.lists,
                        [action.id]: list,
                    },
                },
            };
        case UPDATE_CARD_TITLE:
            const cards = state.lists.lists[action.listId].cards;
            cards[action.cardIndex].title = action.payload;

            return {
                ...state,
                lists: {
                    ...state.lists,
                    lists: {
                        ...state.lists.lists,
                        [action.listId]: {
                            ...state.lists.lists[action.listId],
                            cards: cards,
                        },
                    },
                },
            };
        case ADD_CARD:
            list = state.lists.lists[action.id];
            list.cards = [...list.cards, action.payload];
            return {
                ...state,
                lists: {
                    ...state.lists,
                    lists: {
                        ...state.lists.lists,
                        [action.id]: list,
                    },
                },
            };
        case ADD_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    listIds: [...state.lists.listIds, action.id],
                    lists: {
                        ...state.lists.lists,
                        [action.id]: {
                            id: action.id,
                            title: action.payload,
                            cards: [],
                        },
                    },
                },
            };
        case MOVE_LIST:
            const newListIds = state.lists.listIds;
            newListIds.splice(action.sourceIndex, 1);
            newListIds.splice(action.destIndex, 0, action.draggableId);
            return {
                ...state,
                lists: {
                    ...state.lists,
                    listIds: newListIds,
                },
            };
        case MOVE_CARD_SAME:
            sourceList = state.lists.lists[action.sourcedroppableId];
            destinationList = state.lists.lists[action.destdroppableId];
            draggingCard = sourceList.cards.filter(
                (card) => card.id === action.draggableId
            );

            sourceList.cards.splice(action.sourceIndex, 1);
            destinationList.cards.splice(action.destIndex, 0, draggingCard[0]);

            return {
                ...state,
                lists: {
                    ...state.lists,
                    lists: {
                        ...state.lists.lists,
                        [action.destdroppableId]: destinationList,
                    },
                },
            };
        case MOVE_CARD_OTHER_LIST:
            sourceList = state.lists.lists[action.sourcedroppableId];
            destinationList = state.lists.lists[action.destdroppableId];
            draggingCard = sourceList.cards.filter(
                (card) => card.id === action.draggableId
            );

            sourceList.cards.splice(action.sourceIndex, 1);
            destinationList.cards.splice(action.destIndex, 0, draggingCard[0]);

            return {
                ...state,
                lists: {
                    ...state.lists,
                    lists: {
                        ...state.lists.lists,
                        [action.sourcedroppableId]: sourceList,
                        [action.destdroppableId]: destinationList,
                    },
                },
            };

        default:
            return state;
    }
}
