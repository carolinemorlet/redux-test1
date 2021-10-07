const initialState = {
    description : [{
    id : 1,
    modèle : "Samsung S8",
    marque : "Samsung",
    couleur : "blue"
},
{
    id : 2,
    modèle : "Samsung S8",
    marque : "Samsung",
    couleur : "black"
},
{
    id : 3,
    modèle : "Samsung S8",
    marque : "Samsung",
    couleur : "white"
},
{
    id : 4,
    modèle : "Samsung S8",
    marque : "Samsung",
    couleur : "red"
}]
}

const RootReducer = (state = initialState, action) => {
    return state;
}

export default RootReducer;