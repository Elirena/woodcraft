import React, {Component} from "react";

/**
 * Групповой модуль
 */

class GroupModule extends Component {

    render() {
        const {
            value,
            checkedFn,
            changeFn,
            pic
        } = this.props;

        return (
            <div className="ready-item">
                <label>
                    <input type="checkbox"
                           hidden={true}
                           value={value}
                           checked ={checkedFn}
                           onChange={changeFn}
                    />
                    <span/>
                </label>
                <img className="cacl-img" alt='set_modules'
                     src={pic}/>
            </div>
        )
    }
}

export default GroupModule;