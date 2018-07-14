import c04 from '../containers/Calcpage/img/c04.jpg';
import c03 from '../containers/Calcpage/img/c03.jpg';
import c02 from '../containers/Calcpage/img/c02.jpg';
import c1 from '../containers/Calcpage/img/c1.png';
import c2 from '../containers/Calcpage/img/c2.png';
import c3 from '../containers/Calcpage/img/c3.png';
import c4 from '../containers/Calcpage/img/c4.png';
import c5 from '../containers/Calcpage/img/c5.png';
import c6 from '../containers/Calcpage/img/c6.png';

/*** Модули для калькулятора (одиночные + групповые)*/
const initialState = {
    singleItem: {
        tabouret: {
            Id: 1,
            itemName: 'Табурет',
            itemInfo: '410х450х480 см',
            itemPrice: '5.400',
            chboxValue: 'tabouret',
            chboxChecked: false,
            itemCount: 0,
            itemPic: c1
        },
        chair: {
            id: 2,
            itemName: 'Стул',
            itemInfo: '410х490х900 см',
            itemPrice: '9.500',
            chboxValue: 'chair',
            chboxChecked: false,
            itemCount: 0,
            itemPic: c2
        },
        couch: {
            id: 3,
            itemName: 'Кушетка',
            itemInfo: '1060х490х900 см',
            itemPrice: '14.900',
            chboxValue: 'couch',
            chboxChecked: false,
            itemCount: 0,
            itemPic: c4
        },
        banquet: {
            id: 4,
            itemName: 'Банкетка',
            itemInfo: '1060х450х480 см',
            itemPrice: '9.500',
            chboxValue: 'banquet',
            chboxChecked: false,
            itemCount: 0,
            itemPic: c3
        },
        corner: {
            id: 5,
            itemName: 'Уголок',
            itemInfo: '1100х1550х900 см',
            itemPrice: '29.700',
            chboxValue: 'corner',
            chboxChecked: false,
            itemCount: 0,
            itemPic: c5
        },
        pillow: {
            id: 6,
            itemName: 'Подушка',
            itemInfo: '50х50 см',
            itemPrice: '1.200',
            chboxValue: 'pillow',
            chboxChecked: false,
            itemCount: 0,
            itemPic: c6
        },
},
    setItems: {
        set1: {
            id: 7,
            itemName: "Кушетка + уголок + табурет",
            itemPrice: "47.000",
            chboxChecked: false,
            itemCount: 0,
            itemPic: c04
        },
        set2: {
            id: 8,
            itemName: "Банкетка + уголок",
            itemPrice: "36.000",
            chboxChecked: false,
            itemCount: 0,
            itemPic: c02
        },
        set3: {
            id: 9,
            itemName: "Кушетка + уголок + стул",
            itemPrice: "45.000",
            chboxChecked: false,
            itemCount: 0,
            itemPic: c03
        }
    }
};

const ItemModuls = (state = initialState, action) => {
    let singleItems = undefined;
    let setItems = undefined;

    switch (action.type) {

        /*** Чекнуть групповой модуль*/
        case 'CHECK_ITEM':
            setItems = JSON.parse(JSON.stringify(state.setItems)); //клон части стейта
            setItems[action.payload.item].chboxChecked = action.payload.checked;
            setItems[action.payload.item].itemCount = action.payload.checked++;
            return Object.assign({}, state, {setItems: setItems});

        /*** Чекнуть одиночный модуль*/
        case 'CHECK_MODULE':
            singleItems = JSON.parse(JSON.stringify(state.singleItem));
            singleItems[action.payload.item].chboxChecked = action.payload.checked;
            singleItems[action.payload.item].itemCount = action.payload.checked++;
            return Object.assign({}, state,  {singleItem: singleItems});

        /*** Увеличение количества одиночного модуля*/
        case 'COUNT_PLUS':
            singleItems = JSON.parse(JSON.stringify(state.singleItem));
            let item = singleItems[action.payload.item];
            if(item.chboxChecked){
               item.itemCount++
            } else if(!(item.chboxChecked)){
                item.chboxChecked = true;
                item.itemCount++
            }
            return Object.assign({}, state,  {singleItem: singleItems});

        /*** Уменьшение количества одиночного модуля*/
        case 'COUNT_MINUS':
            singleItems = JSON.parse(JSON.stringify(state.singleItem));
            let item1 = singleItems[action.payload.item];
            if(item1.itemCount>1){
                item1.itemCount--;
            } else {
                item1.itemCount=0;
                item1.chboxChecked = false;
            }
            return Object.assign({}, state,  {singleItem: singleItems});

        /*** Сбросить все пользовательские изменения*/
        case 'CLEAR_ALL':
            return initialState;

        /*** Удалить модуль из списка*/
        case 'DELETE_ITEM':
            let _state = JSON.parse(JSON.stringify(state)); //клон всего стейта
            let allItems = Object.values(_state.setItems).concat(Object.values(_state.singleItem));
            for(let i=0; i<allItems.length; i++) {
               if (allItems[i].id === action.payload.id){
                   allItems[i].chboxChecked = false;
                   allItems[i].itemCount = 0;
               }
            }
            return _state;

        default:
            return state;
    }
};

export default ItemModuls;