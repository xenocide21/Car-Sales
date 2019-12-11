import { BUY_ITEM, REMOVE_FEATURE } from '../actions/actions.js'

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ITEM:
            console.log('buy item firing')
            return{
                ...state,
                car:{
                    ...state.car,
                    features: [...state.car.features, action.payload],
                    price: state.car.price + action.payload.price
                },
                store: state.store.filter(feature=>{
                    return feature.id !== action.payload.id
                })
            }

        case REMOVE_FEATURE:
            return{
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature => {
                        return feature.id !== action.payload.id
                    }),
                    price: state.car.price - action.payload.price
                },
                store: [...state.store, action.payload]

            }
        default: return state
    }
}

export default reducer