import React, {Component} from "react";
import {connect} from "react-redux";
import { clearAll } from '../../actions/totalListActions';
import { deleteItem } from '../../actions/totalListActions';
import { bindActionCreators } from 'redux';

/**
 * Подсчет стоимости
 */

class TotalBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSum: 0,
        };
        this.showTotalItem = this.showTotalItem.bind(this);
        this.countTotalSumm = this.countTotalSumm.bind(this);
        this.getTotalList = this.getTotalList.bind(this);
    }

/*** Получить все чекнутые модули*/
    getTotalList(){
        const setItems = this.props.itemModuls.setItems;
        const singleItem = this.props.itemModuls.singleItem;
        let totalItems = [];

        for (let key in singleItem) {
            let value = singleItem[key];
            if(value.chboxChecked) {
                totalItems.push(value);
            }
        }
        for (let key in setItems) {
            let value = setItems[key];
            if(value.chboxChecked) {
                totalItems.push(value);
            }
        }
        return totalItems;
    };

/*** Отрисовать все чекнутые модули*/
    showTotalItem(){
       const totalItems = this.getTotalList();
       return totalItems.map((item, i)=> {
            return (
                <div className="total-item" key={'total-item'+i}>
                    <div className="delbat" onClick={()=> this.props.deleteItem(item.id)}>x</div>
                    <div className="item-name">{item.itemName}</div><span>шт</span>
                    <div className="item-count">{item.itemCount}</div>
                    <div className="item-price hidden">{item.itemPrice}</div>
                </div>
            )
       })
    };

/*** Сумма чекнутых модулей*/
    countTotalSumm(){
        const totalItems = this.getTotalList();
        let totalSum = 0;
        for (let i=0; i<totalItems.length; i++){
            totalSum = totalSum + (totalItems[i].itemPrice*totalItems[i].itemCount);
        }
        totalSum = totalSum.toFixed(3);
        return this.setState({totalSum: totalSum});
    };

    render() {
        const totalItems = this.getTotalList();
        return (
            <div className="col-4 tot-nav">
                <div className="title-block calc-title">
                    <div className="title">Рассчет стоимости</div>
                    <div className="line0"/>
                    <div className="sub-title">модульные изделия</div>
                </div>
                <div className="total-items" id="total-area">
                    <div className="total-item">
                        <div className="item-title">Выбранные элементы</div>
                    </div>
                    {this.showTotalItem()}
                </div>

                <div className="price">
                    <span>предварительная стоимость:</span>
                    <input id="tot-sum" value={this.state.totalSum} size="6"/> pуб.
                </div>

                <div className="total-btns">
                    <div className={`black-btn ${totalItems.length ? '' : 'disabled' }`}
                        onClick={()=>{
                            this.props.clearAll();
                            this.setState({totalSum: 0});
                        }}
                    >Сбросить</div>
                    <div className={`black-btn ${totalItems.length ?  '' : 'disabled' }`}
                        onClick={()=> this.countTotalSumm()}
                    >Рассчитать</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        itemModuls: state.itemModuls
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearAll: clearAll,
        deleteItem: deleteItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalBlock);