import React, {Component} from "react";
import './FurnitureBlock.css';

/**
 * Блок мебель
 */

/*** модуль одного изделия*/
class FurnitureItem extends Component {

    render() {
        const {
            className,
            itemClass,
            title,
            itemName,
            description,
            white
        } = this.props;

        return (
            <div className={className}>
                <div className= {`fur-item btn-navy btn-border-rev-o ${itemClass}`}>
                    <div className={"item-info-title "+ white}>{title}<p>{itemName}</p></div>
                    <div className={"item-info "+ white}>{description}</div>
                </div>
            </div>
        )
    }
}

/*** блок всей мебели*/
class FurnitureBlock extends Component {

    render() {
        return (
            <div className="furniture container">
                <div className="row furniture-1">
                    <div className="col-4">
                        <div className="title-block furniture-titles">
                            <div className="title">Наша мебель</div>
                            <div className="line0"/>
                            <div className="sub-title">последние изделия</div>

                            <div className="all-btns-an black-btn">каталог товаров</div>
                        </div>
                    </div>

                    <FurnitureItem
                        className="col-3"
                        itemClass="item1"
                        title="Кресло и пуф"
                        itemName="Леон"
                        description={<React.Fragment>
                            <div><b>Декор:</b> мягкий текстиль</div>
                            <div><b>Габариты: </b> 127х106х94 см</div>
                            <div><b>Каркас:</b> массив бука</div>
                        </React.Fragment>}
                    />
                    <FurnitureItem
                        className="col-2"
                        itemClass="item2"
                        title="Шезлонг"
                        itemName="Клаус"
                        description={<React.Fragment>
                            <div><b>Габариты:</b> 208х76х70см</div>
                            <div><b>Каркас:</b> массив бука</div>
                        </React.Fragment>}
                    />
                    <FurnitureItem
                        className="col-3"
                        itemClass="item3"
                        title="Кресло и пуф"
                        itemName="Кельн"
                        description={<React.Fragment>
                            <div><b>Габариты:</b> 71х110х95см</div>
                            <div><b>Каркас:</b> массив бука</div>
                        </React.Fragment>}
                    />
                </div>

                <div className="row furniture-2">
                    <FurnitureItem
                        className="col-3"
                        itemClass="item4"
                        title="Кушетка"
                        white="whit"
                        itemName="Соло"
                        description={<React.Fragment>
                            <div><b>Габариты:</b> 71х110х95см</div>
                            <div><b>Каркас:</b> массив бука</div>
                        </React.Fragment>}
                    />
                    <FurnitureItem
                        className="col-3"
                        itemClass="item5"
                        title="Диван"
                        itemName="Осака"
                        description={<React.Fragment>
                            <div><b>Габариты:</b> 73х200х85 см</div>
                            <div><b>Каркас:</b> массив бука</div>
                        </React.Fragment>}
                    />
                    <FurnitureItem
                        className="col-3"
                        itemClass="item6"
                        title="Кресло"
                        itemName="Сити"
                        description={<React.Fragment>
                            <div><b>Габариты:</b> 76х204х82см</div>
                            <div><b>Спальное место:</b> 73х204</div>
                            <div><b>Каркас:</b> массив бука</div>
                        </React.Fragment>}
                    />
                    <FurnitureItem
                        className="col-3"
                        itemClass="item7"
                        title="Кушетка"
                        itemName="Лаура"
                        description={<React.Fragment>
                            <div><b>Декор:</b> Joy 8</div>
                            <div><b>Габариты:</b> 100х80х97см</div>
                            <div><b>Каркас:</b> орех</div>
                        </React.Fragment>}
                    />
                </div>
            </div>
        )
    }
}

export default FurnitureBlock;