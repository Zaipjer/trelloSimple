const mockdata = {
    lists: {
        "01list": {
            id: "01list",
            title: "Lista de tareas",
            cards: [
                {
                    id: "01card",
                    title: "Comprar lechuga",
                },
                {
                    id: "02card",
                    title: "Comprar tomates",
                },
                {
                    id: "03card",
                    title: "Comprar pan",
                },
            ],
        },
        "02list": {
            id: "02list",
            title: "En proceso",
            cards: [],
        },
        "03list": {
            id: "03list",
            title: "Hecho",
            cards: [],
        },
    },
    listIds: ["01list", "02list", "03list"],
};

export default mockdata;
