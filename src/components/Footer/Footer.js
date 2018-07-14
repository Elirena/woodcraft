import React, {Component} from 'react';
import BottomBlock from "../BottomBlock/BottomBlock";
import './Footer.css';

/**
 * Блок футера
 */

/*** модуль ссылки*/
class FooterLinks extends Component {

    render() {
        const {
            title,
            links,
        } = this.props;
        return (
            <div className="footer-nav col-2">
                <ul>
                    <li className="tit">{title}</li>
                    {
                        links.map((links, index) => <li key={'footer'+index}><a href="">{links.name}</a></li>)
                    }
                </ul>
            </div>
        )
    }
}

/*** футер*/
class Footer extends Component {

    render() {
        const footerLinks = {
            about: [
                {name:'Наша мебель'},
                {name:'О фабрике'},
                {name:'Категории товаров'},
                {name:'Производство'},
                {name:'Контакты'}
            ],
            furniture: [
                {name:'Для кухни'},
                {name:'Диваны'},
                {name:'Кушетки'},
                {name:'Дачная мебель'},
                {name:'Кресла'}
            ],
            communication: [
                {name:'Каталог тканей'},
                {name:'Дилерам'},
                {name:'Образцы дерева'},
                {name:'Доставка и оплата'},
                {name:'Цены'}
            ]};
        return (
            <div>
                <BottomBlock />
                    <footer className="page-footer container">
                        <div className="row foot-row">
                            <FooterLinks
                                title="О нас"
                                links={footerLinks.about}
                            />
                            <FooterLinks
                                title="Категории мебели"
                                links={footerLinks.furniture}
                            />
                            <FooterLinks
                                title="Сотрудничество"
                                links={footerLinks.communication}
                            />
                            <div className="contacts col-4">
                                <div className="tit">Контакты:</div>
                                Телефон: 8(495)712-55-09, 8(495)712-57-07<br/>
                                E-mail: info@mf-woodcraft.ru<br/>
                                Адрес производства: Калужская обл. г. Кременки.<br/>
                                Отдел оптовых продаж: <span>8(495)712-55-09</span><br/>
                                Отдел заказов <span>E:mail zakaz@mf-woodcraft.ru</span>
                            </div>
                        </div>
                    </footer>
            </div>
        );
    }
}

export default Footer;

