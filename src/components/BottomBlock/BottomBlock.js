import React, {Component} from 'react';
import map1 from './map1.jpg';

/**
 * Блок контактов и обратная связь
 */

class BottomBlock extends Component {

    render() {
        return (
            <div className="bottom container">
                <a name="f5"> </a>
                <div className="main-contacts row">
                    <div className="feedback-info col-6">
                       <span>
                           <b className="tit">Контакты для юр. лиц и дилеров</b><br/>
                           Компания ООО "Комфорт-Диван"<br/>
                           Торговая марка WOODCRAFT<br/>
                           <b>Адрес офиса:</b> Россия<br/>
                           117623 Москва, Южное Бутово,<br/>
                           Варшавское шоссе вл.248 стр.8<br/>
                           <b>Телефон:</b> 8(495)712-55-09<br/>
                           <b>E-mail:</b> info@mf-woodcraft.ru<br/>
                       </span>
                    </div>
                    <div className="feedback col-5">
                        <input type="text" name="name" id="name" required="" defaultValue="Имя"/>
                        <input type="text" name="email" id="email" required="" defaultValue="Email"/>
                        <textarea name="mess" id="mess" required="" defaultValue="Сообщение"/>
                        <div className="cat-btn1">Отправить</div>
                    </div>
                </div>

                <div className="row map-cont">
                    <div className="map col-12">
                        <img src={map1} width="" height="120" alt="factory"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BottomBlock;