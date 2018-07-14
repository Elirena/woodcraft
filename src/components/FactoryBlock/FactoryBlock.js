import React, {Component} from "react";
import m1 from './m1.JPG';
import m2 from './m2.JPG';
import m3 from './m3.JPG';
import './FactoryBlock.css';

/**
 * Блок информации
 */

class FactoryInfo extends Component {

    render() {
        const {
            pic,
            title,
            description
        } = this.props;

        return (
            <div className="making-info">
                <div className="m-info row">
                    <img className="col-3 making-pic" src={pic} width="" height="150" alt='factory'/>
                    <div className="col-9 making-description">
                        <p>{title}</p>
                        <div className="text-inf">{description}</div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * Компонент о фабрике
 */

class FactoryBlock extends Component {

    render() {
        return (
            <div className="making-cont container white_back">
                <div className="row">
                    <div className="col-4">
                        <div className="title-block making-title">
                            <div className="title">Производство</div>
                            <div className="line0"/>
                            <div className="sub-title">наша фабрика</div>
                        </div>
                    </div>
                </div>

                <FactoryInfo
                    pic={m1}
                    title="Коллекции"
                    description={(<span>Мебельная <b>фабрика Woodcraft</b> основана в 2006 году. Сначала компания
                        работала по индивидуальным заказам, производя нестандартную мебель по чертежам дизайнеров
                        и эскизам заказчиков.<b> Ассортимент продукции </b>компании начал формироваться с двух моделей
                        диванов и кресел-кроватей, оснащенных механизмом трансформации «аккордеон» и они положили
                        начало целой коллекции чехловой мягкой мебели.</span>)}
                />
                <FactoryInfo
                    pic={m2}
                    title="Материалы"
                    description={(<span>С началом массового производства диванов компания получила статус производителя
                        качественной мебели из <b>экологически чистых</b> материалов и зарекомендовала себя на мебельном
                        рынке как надежный и взаимовыгодный партнер.Непреложное качество каждого изделия – главный
                        принцип работы WOODCRAFT. Мы уделяем огромное значение экологичности диванов – при их
                        изготовлении не используются ДСП, ЛДСП и иные формальдегидные составляющие, а лишь только
                        отлично обработанное натуральное дерево.</span>)}
                />
                <FactoryInfo
                    pic={m3}
                    title="Качество"
                    description={(<span>Продукция, которую реализует наша компания, принимает регулярное участие в
                        специализированных выставках и неоднократно получала сертификаты и грамоты <b>«цена, качество,
                        надежность»</b>. Мы проводим регулярные опросы и исследования целевой аудитории. Это позволяет
                        усовершенствовать продукцию и делать ее более востребованной. Правильный уход и эксплуатация
                        — гарантия исправности и надежности на протяжении всего срока службы. К каждой единице мебели
                        прилагается подробная инструкция по сборке.</span>)}
                />
            </div>
        )
    }
}

export default FactoryBlock;