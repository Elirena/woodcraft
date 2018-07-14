import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './TopBlock.css';

/**
 * Шапка главной страницы
 */

class TopBlock extends Component {

    render() {
        return (
            <div className="page-top">
                <div className="row">
                    <div className="about col-8">
                        Мы производим сертифицированную мебель из отлично обработанного <br/>
                        натурального дерева высокой прочности и экологичности
                    </div>
                </div>

                <div className="row">
                    <div className="buttons_block col-10">
                        <div className="catalog-btn">каталог товаров</div>
                        <Link className='calculator-btn' to="/woodcraft/calculator">Калькулятор стоимости</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBlock;