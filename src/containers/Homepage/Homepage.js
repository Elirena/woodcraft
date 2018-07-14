import React, {Component} from 'react';
import PopularBlock from "../../components/PopularBlock/PopularBlock";
import FurnitureBlock from "../../components/FurnitureBlock/FurnitureBlock";
import TopBlock from "../../components/TopBlock/TopBlock";

/**
 * Главная страница
 */

class Homepage extends Component {

    render() {
        return (
            <div>
                <TopBlock/>
                <PopularBlock/>
                <FurnitureBlock/>
            </div>
        );
    }
}

export default Homepage;