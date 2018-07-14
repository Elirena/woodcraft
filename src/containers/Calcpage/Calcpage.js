import React, {Component} from 'react';
import TotalBlock from "../../components/TotalBlock/TotalBlock";
import ItemsBlock from "../../components/ItemsBlock/ItemsBlock";

/**
 * Страница мебельных модулей (калькулятор)
 */

class Calcpage extends Component {

    render() {
        return (
            <div className="making container white_back">
                <div className="row max-wight">
                    <TotalBlock/>
                    <ItemsBlock />
                </div>
            </div>
        );
    }
}

export default Calcpage;


