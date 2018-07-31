import React, {Component} from "react";
import {connect} from "react-redux";
import './PopularBlock.css';

/**
 * Блок популярное
 */

class PopularBlock extends Component {
    constructor(props) {
        super(props);

        this.compareRandom = this.compareRandom.bind(this);
        this.showItem = this.showItem.bind(this);
        this.interval = undefined;
    }

    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), 2000);
    };

    compareRandom() {
        return Math.random() - 0.5;
    }

    /*** Выводим рандомные модели*/
    showItem() {
        const popularItemArr = this.props.popularItem;
        const randomItems = popularItemArr.sort(this.compareRandom);

        return randomItems.map((popularItem, i) => {
            return (
                i < 5 && (
                    <div className="pop-item" key={'pop-item' + i}>
                        <img src={popularItem.img} width="auto" height="100" alt='popular'/>
                        <div className="pop-info">{popularItem.name}
                            <p>{popularItem.price.toFixed(3) + popularItem.currency}</p>
                            <div className="hid">в магазин</div>
                        </div>
                    </div>
                )
            )
        });
    }

    render() {
        return (
            <div className="popular-pics-container container">
                <div className="row">
                    <div className="col-3 popular-title">
                        <div className="title-block">
                            <div className="title">Популярные модели</div>
                            <div className="line0"/>
                            <div className="sub-title">изделия в наличии</div>
                        </div>
                    </div>

                    <div className="popular-pics col-9">
                        {this.showItem()}
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount (){
        clearInterval(this.interval)
    }
}

function mapStateToProps(state){
    return {
        popularItem: state.popularItems.popularItem
    }
}

export default connect(mapStateToProps)(PopularBlock);