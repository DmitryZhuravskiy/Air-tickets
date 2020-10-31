import React from "react";
import "./AirTickets.css";

class AirTickets extends React.Component {

    render() {
        return (
            <div className="select-block">
                <form className="select">
                    <div className="select-price-time-in-way">
                        <p className="select-price-time-in-way__title">Сортировать</p>{" "}
                        <input className="select-price-time-in-way__price-up" type="radio" id="radio1" />
                        <label className="select-price-time-in-way__price-label" htmlFor="radio1">  - по возрастанию цены</label><br />
                        <input className="select-price-time-in-way__price-down" type="radio" id="radio2" />
                        <label className="select-price-time-in-way__price-label" htmlFor="radio2">  - по убыванию в цене</label><br />
                        <input className="select-price-time-in-way__time-in-way" type="radio" id="radio3" />
                        <label className="select-price-time-in-way__price-label" htmlFor="radio3">  - по времени в пути</label><br />
                    </div>
                    <div className="select-transfer">
                        <p className="select-transfer__title">Фильтровать</p>
                        <input className="select-transfer__input" type="checkbox" id="transfer1" name="scales" /><label className="select-transfer__label" htmlFor="transfer1">- 1 пересадка</label>
                        <input className="select-transfer__input" type="checkbox" id="transfer0" name="scales" /><label className="select-transfer__label" htmlFor="transfer0">- без пересадок</label>
                    </div>
                    <div className="select-price">
                        <p className="select-price__title">Цена</p>
                        <label className="select-price__label" htmlFor='price-min'>От</label><input className="select-price__input" type='number' id="price-min" value="0" />
                        <label className="select-price__label" htmlFor='price-max'>До</label><input className="select-price__input" type='number' id="price-max" value="10000" />
                    </div>
                    <div className="select-aircompany">
                        <p className="select-aircompany__title">Авиакомпании</p>
                        <input className="select-aircompany__input" type="checkbox" id="transfer1" name="scales" checked /><label className="select-aircompany__label" htmlFor="transfer1">- LOT Polish Airlines от 21049 р.</label>
                        <input className="select-aircompany__input" type="checkbox" id="transfer0" name="scales" checked /><label className="select-aircompany__label" htmlFor="transfer0">- Аэрофлот - рос... от 31733 р.</label>
                    </div>
                    <input className="select__submit" type="submit" value="Найти рейс" />
                </form>
                <div className="selected-tickets">
                    <ul>
                        <li className="selected-tickets__selected-ticket">
                            <section className="selected-ticket__header">
                                <img src="polish.jpg" alt="Polish Airlines" />
                                <article className="header__price-for-one">
                                    <p className="price-for-one__number">21 049Р</p>
                                    <p className="price-for-one__context">Стоимость билета для одного взрослого пассажира</p>
                                </article>
                            </section>
                            <section className="selected-ticket__selected-ticket-1">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">Москва, Шереметьево <span className="start__abbreviation">(SVO)</span></p>
                                    <p className="destination__end">ЛОНДОН, Лондон, Хитроу <span className="end__abbreviation">(LHR)</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">20:40 <span className="start__date">18 авг. вт</span></p>
                                    <p className="timing__duration">14ч 45мин</p>
                                    <p className="timing__end"><span className="end__date">19 авг. ср </span> 09:25</p>
                                </section>
                                <p className="selected-ticket__transfer-count">1 пересадка</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">Lot Polish Airlines</span></p>
                            </section>
                            <section className="selected-ticket__selected-ticket-2">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">ЛОНДОН, Лондон, Хитроу <span className="start__abbreviation">(LHR)</span></p>
                                    <p className="destination__end">Москва, Шереметьево <span className="end__abbreviation">(SVO)</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">18:10 <span className="start__date">19 авг. ср</span></p>
                                    <p className="timing__duration">23ч 35мин</p>
                                    <p className="timing__end"><span className="end__date">20 авг. чт </span> 19:45</p>
                                </section>
                                <p className="selected-ticket__transfer-count">1 пересадка</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">Lot Polish Airlines</span></p>
                            </section>
                            <button className="selected-ticket__chouse">Выбрать</button>
                        </li>
                        <li className="selected-tickets__selected-ticket">
                            <section className="selected-ticket__header">
                                <img src="airfloot.jpg" alt="Аэрофлот" />
                                <article className="header__price-for-one">
                                    <p className="price-for-one__number">31 733Р</p>
                                    <p className="price-for-one__context">Стоимость билета для одного взрослого пассажира</p>
                                </article>
                            </section>
                            <section className="selected-ticket__selected-ticket-1">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">Москва, Шереметьево <span className="start__abbreviation">(SVO)</span></p>
                                    <p className="destination__end">ЛОНДОН, Лондон, Хитроу <span className="end__abbreviation">(LHR)</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">07:05 <span className="start__date">18 авг. вт</span></p>
                                    <p className="timing__duration">4ч 25мин</p>
                                    <p className="timing__end"><span className="end__date">18 авг. ср </span> 09:30</p>
                                </section>
                                <p className="selected-ticket__transfer-count">1 пересадка</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">Аэрофлот - российские авиалинии</span></p>
                            </section>
                            <section className="selected-ticket__selected-ticket-2">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">ЛОНДОН, Лондон, Гатвик <span className="start__abbreviation">(LGW)</span></p>
                                    <p className="destination__end">Москва, Внуково <span className="end__abbreviation">(VKO)</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">17:10 <span className="start__date">19 авг. ср</span></p>
                                    <p className="timing__duration">15ч 25мин</p>
                                    <p className="timing__end"><span className="end__date">20 авг. чт </span> 10:35</p>
                                </section>
                                <p className="selected-ticket__transfer-count">1 пересадка</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">ГТК Россия</span></p>
                            </section>
                            <button className="selected-ticket__chouse">Выбрать</button>
                        </li>
                    </ul>
                    <button className="see-more">Показать ещё</button>
                </div>
            </div>
        );
    }
}

export default AirTickets;
