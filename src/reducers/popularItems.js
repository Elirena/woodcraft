import p1 from '../containers/Homepage/DATA/p1.png';
import p2 from '../containers/Homepage/DATA/p2.png';
import p3 from '../containers/Homepage/DATA/p3.png';
import p4 from '../containers/Homepage/DATA/p4.png';
import p5 from '../containers/Homepage/DATA/p5.png';
import p6 from '../containers/Homepage/DATA/p6.png';

/*** Модели для блока популярное*/
const initialState = {
    popularItem: [
        {
            img : p3,
            name : "Диван Турин",
            price : 40.000,
            currency: 'p'
        },
        {
            img : p2,
            name : "кушетка Соло",
            price : 24.000,
            currency: 'p'
        },
        {
            img : p1,
            name : "Уголок Орион",
            price : 39.600,
            currency: 'p'
        },
        {
            img : p5,
            name : "Кушетка Леон",
            price : 35.500,
            currency: 'p'
        },
        {
            img : p4,
            name : "Диван Гермес",
            price : 48.000,
            currency: 'p'
        },
        {
            img : p6,
            name : "Кушетка Сити",
            price : 37.700,
            currency: 'p'
        }
    ]
};


const popularItems = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default popularItems;