import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectModule} from "../../actions/totalListActions";
import {countPlus, countMinus} from "../../actions/totalListActions";

/**
 * Блок одиночного модуля
 */

/*** счетчик количества единиц модуля*/
class ItemCounter extends Component {
    render() {
        const {
            itemId,
        } = this.props;

        return (
            <div className="count">
                <input type="button"
                       className="minus"
                       defaultValue="-"
                       onClick={()=> this.props.countMinus(itemId)}
                />
                <input value={this.props.itemCount}
                       className="result"
                       size="1"
                />
                <input type="button"
                       className="plus"
                       defaultValue="+"
                       onClick={()=> this.props.countPlus(itemId)}
                />
            </div>
        )
    }
}

function mapStateToPropsPlus(state){
    return {
        itemModuls: state.itemModuls
    }
}

function mapDispatchToPropsPlus(dispatch) {
    return bindActionCreators({
        countPlus: countPlus,
        countMinus: countMinus
    }, dispatch)
}

ItemCounter = connect(mapStateToPropsPlus, mapDispatchToPropsPlus)(ItemCounter);

/*** одиночный модуль*/
class ItemModule extends Component {

    render() {
        const {
            itemName,
            itemInfo,
            itemPrice,
            itemPic,
            chboxValue,
            chboxChecked,
            itemCount
        } = this.props;

        const {
            singleItem
        } = this.props.itemModuls;

        return (
            <div className="calc-item">
                <label>
                    <input type="checkbox"
                           hidden={true}
                           value={chboxValue}
                           checked ={chboxChecked}
                           onChange={()=> this.props.selectModule(chboxValue, !singleItem[chboxValue].chboxChecked)}
                    /><span/>
                    <span className="name-it">{itemName}</span>
                </label>
                <img src={itemPic} width="" height="60" alt="item-pic"/>
                <div className="calc-info">{itemInfo}</div>
                <div className="pr">{itemPrice}</div>

                <ItemCounter itemCount={itemCount} itemId={chboxValue}/>
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
        selectModule: selectModule
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemModule);


