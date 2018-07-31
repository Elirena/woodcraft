import React, {Component} from "react";
import './FurnitureTypeBlock.css';

/**
 * Блок типы мебели
 */

/*** один таб*/
class FurnitureTab extends Component {

    render() {
        const {
            picClass,
            description,
        } = this.props;

        return (
            <div className="type-furniture row tabContent">
                <div className={`type-pic-container col-6 ${picClass}`}>
                    <div className="black-btn bottom-btn">Смотреть коллекцию</div>
                </div>
                <div className="type-pic-info col-6">
                    <div className="title-block">
                        <div className="title">Категории товаров</div>
                    </div>
                    <div className="type-text">{description}</div>
                </div>
            </div>
        )
    }
}

/*** все табы*/
class FurnitureTypeBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'sofaType'
        };
    }

    render() {
        const activeTab = this.state.activeTab;
        return (
            <div className="type-furniture-container row flex-right">
                <div className='col-6 tab-line'>
                    <div className={`tab ${activeTab === 'sofaType' ? 'whiteborder' : ''}`}
                         onClick={() => this.setState({activeTab: 'sofaType'})}
                    >диваны</div>
                    <div className={`tab ${activeTab === 'gardenType' ? 'whiteborder' : ''}`}
                         onClick={() => this.setState({activeTab: 'gardenType'})}
                    >дачная мебель</div>
                    <div className={`tab ${activeTab === 'kitchenType' ? 'whiteborder' : ''}`}
                         onClick={() => this.setState({activeTab: 'kitchenType'})}
                    >кухонные уголки</div>
                    <div className={`tab ${activeTab === 'loungeType' ? 'whiteborder' : ''}`}
                         onClick={() => this.setState({activeTab: 'loungeType'})}
                    >кушетки</div>
                </div>

                {
                    activeTab === 'sofaType'
                    &&  (
                        <FurnitureTab
                            picClass="pic1"
                            description={<React.Fragment>
                                <span>Диваны аккордеон с ортопедическим основанием – конек Woodсraft.
                                    Стили модельного ряда в которых выполнены модели: от минимализма до
                                    строгого классического</span>
                            </React.Fragment>}
                        />
                    )
                }

                {
                    activeTab === 'gardenType'
                    && (
                        <FurnitureTab
                            picClass="pic2"
                            description={<React.Fragment>
                                 <span> Диван кларк и шезлонги, кресла, пуфы,
                                    диваны-книжки, диван-кровати</span>
                            </React.Fragment>}
                        />
                    )
                }

                {
                    activeTab === 'kitchenType'
                    && (
                        <FurnitureTab
                            picClass="pic3"
                            description={<React.Fragment>
                                <span>Мебель для кухни проста и  функциональна.
                                    Столы идеально вписываются в интерьер.</span>
                            </React.Fragment>}
                        />
                    )
                }

                {
                    activeTab === 'loungeType'
                    && (
                        <FurnitureTab
                            picClass="pic4"
                            description={<React.Fragment>
                                <span> Кушетка являет собой неотъемлемый атрибут
                                    аристократического интерьера.
                                    Идеальна для кухни, детской комнаты, гостиной</span>
                            </React.Fragment>}
                        />
                    )
                }

            </div>
        )
    }
}

export default FurnitureTypeBlock;