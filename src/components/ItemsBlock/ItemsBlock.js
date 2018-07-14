import React, {Component} from "react";
import {connect} from "react-redux";
import ItemModule from "../ItemModule/ItemModule";
import GroupModule from "../GroupModule/GroupModule";
import { selectItem } from '../../actions/totalListActions';
import {bindActionCreators} from "redux";
import './ItemsBlock.css';

/**
 * Блок всех доступных модулей (группы + одиночные)
 */

class ItemsBlock extends Component {

    render() {
        const {
            setItems,
            singleItem
        } = this.props.itemModuls;

        return (
            <div className="col-8 tot-right">
                <div className="m-tit">готовые решения</div>
                <div className="ready-dis">
                    <GroupModule
                        value='set1'
                        checkedFn={setItems.set1.chboxChecked}
                        changeFn={()=> this.props.selectItem('set1', !setItems.set1.chboxChecked)}
                        pic={setItems.set1.itemPic}
                    />
                    <GroupModule
                        value='set2'
                        checkedFn={setItems.set2.chboxChecked}
                        changeFn={()=> this.props.selectItem('set2', !setItems.set2.chboxChecked)}
                        pic={setItems.set2.itemPic}
                    />
                    <GroupModule
                        value='set3'
                        checkedFn={setItems.set3.chboxChecked}
                        changeFn={()=> this.props.selectItem('set3', !setItems.set3.chboxChecked)}
                        pic={setItems.set3.itemPic}
                    />
                </div>

                <div className="m-tit">собрать по модулям</div>
                <div className="calc-items">
                    {
                        Object.keys(singleItem).map((itemKey,key) => (
                            <ItemModule key={`itemmodule-${key}`}
                                itemName={singleItem[itemKey].itemName}
                                itemInfo={singleItem[itemKey].itemInfo}
                                itemPrice={singleItem[itemKey].itemPrice}
                                itemPic={singleItem[itemKey].itemPic}
                                chboxChecked={singleItem[itemKey].chboxChecked}
                                itemCount={singleItem[itemKey].itemCount}
                                chboxValue={singleItem[itemKey].chboxValue}
                            />
                        ))
                    }
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
        selectItem: selectItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsBlock);
