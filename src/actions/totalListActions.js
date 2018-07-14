/***Набор экшенов для страницы модулей (калькулятор)*/

/**
 *Выбор группового сета
 */

export const selectItem = (item, checked) => {
    return {
        type: 'CHECK_ITEM',
        payload: {
            item: item,
            checked: checked
        }
    }
};

/**
 *Выбор одиночного модуля
 */

export const selectModule = (item, checked) => {
    return {
        type: 'CHECK_MODULE',
        payload: {
            item: item,
            checked: checked
        }
    }
};

/**
 * Сбросить все модули из списка
 */

export const clearAll = () => {
    return {
        type: 'CLEAR_ALL',
    }
};

/**
 * Удалить модуль из списка
 */

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload:  {
            id: id
        }
    }
};

/**
 * Количество итемов+
 */

export const countPlus = (item) => {
    return {
        type: 'COUNT_PLUS',
        payload: {
            item: item
        }
    }
};

/**
 * Количество итемов-
 */

export const countMinus = (item) => {
    return {
        type: 'COUNT_MINUS',
        payload: {
            item: item,
        }
    }
};