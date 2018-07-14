import React, {Component} from 'react';
import FurnitureTypeBlock from "../../components/FurnitureTypeBlock/FurnitureTypeBlock";
import FactoryBlock from "../../components/FactoryBlock/FactoryBlock";

/**
 * Страница о компании
 */

class Aboutpage extends Component {

    render() {
        return (
            <div>
                <FurnitureTypeBlock/>
                <FactoryBlock/>
            </div>
        );
    }
}

export default Aboutpage;
