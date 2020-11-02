import React from "react";
import "./AirTickets.css";

const json = require('./simple1.json');
const tickets = JSON.parse(JSON.stringify(json));
const month = {
    "01": "янв.",
    "02": "фев.",
    "03": "мар.",
    "04": "апр.",
    "05": "май",
    "06": "июн.",
    "07": "июл.",
    "08": "авг.",
    "09": "сен.",
    "10": "окт.",
    "11": "ноя.",
    "12": "дек."
}

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
                                <img src="polish.jpg" alt={tickets.flight.carrier.caption} />
                                <article className="header__price-for-one">
                                    <p className="price-for-one__number">{tickets.flight.price.passengerPrices[0].total['amount']} Р</p>
                                    <p className="price-for-one__context">Стоимость билета для одного взрослого пассажира</p>
                                </article>
                            </section>
                            <section className="selected-ticket__selected-ticket-1">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">{tickets.flight.legs.[0].segments[0].departureCity.caption}, {tickets.flight.legs[0].segments[0].departureAirport.caption} <span className="start__abbreviation">({tickets.flight.legs[0].segments[0].departureAirport.uid})</span></p>
                                    <p className="destination__end">{tickets.flight.legs.[0].segments[0].arrivalCity.caption}, {tickets.flight.legs.[0].segments[0].arrivalAirport.caption} <span className="end__abbreviation">({tickets.flight.legs.[0].segments[0].arrivalAirport.uid})</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">{tickets.flight.legs.[0].segments[0].departureDate.split('').splice(11, 5).join('')} <span className="start__date">{tickets.flight.legs.[0].segments[0].departureDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[0].segments[0].departureDate.split('').splice(5, 2).join('')]}</span></p>
                                    <p className="timing__duration">{
                                        tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[0].segments[0].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[0].segments[0].departureDate.split('').splice(11, 2).join('') : 
                                        tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[0].segments[0].departureDate.split('').splice(11, 2).join('') - 1} ч {
                                        tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[0].segments[0].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[0].segments[0].departureDate.split('').splice(14, 2).join('') :
                                        tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[0].segments[0].departureDate.split('').splice(14, 2).join('') + 60
                                        } мин</p>
                                    <p className="timing__end"><span className="end__date">{tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(5, 2).join('')]} </span> {tickets.flight.legs.[0].segments[0].arrivalDate.split('').splice(11, 5).join('')}</p>
                                </section>
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[0].segments[0].stops == '0' ? '0 пересадок' : tickets.flight.legs.[0].segments[0].stops == '1' ? '1 пересадка' : '2 пересадки' }</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">{tickets.flight.legs.[0].segments[0].airline.caption}</span></p>
                            </section>
                            <section className="selected-ticket__selected-ticket-2">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">{tickets.flight.legs.[0].segments[1].departureCity.caption}, {tickets.flight.legs[0].segments[1].departureAirport.caption} <span className="start__abbreviation">({tickets.flight.legs[0].segments[1].departureAirport.uid})</span></p>
                                    <p className="destination__end">{tickets.flight.legs.[0].segments[1].arrivalCity.caption}, {tickets.flight.legs.[0].segments[1].arrivalAirport.caption} <span className="end__abbreviation">({tickets.flight.legs.[0].segments[1].arrivalAirport.uid})</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">{tickets.flight.legs.[0].segments[1].departureDate.split('').splice(11, 5).join('')} <span className="start__date">{tickets.flight.legs.[0].segments[1].departureDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[0].segments[1].departureDate.split('').splice(5, 2).join('')]}</span></p>
                                    <p className="timing__duration">{
                                        tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[0].segments[1].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[0].segments[1].departureDate.split('').splice(11, 2).join('') : 
                                        tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[0].segments[1].departureDate.split('').splice(11, 2).join('') - 1} ч {
                                        tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[0].segments[1].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[0].segments[1].departureDate.split('').splice(14, 2).join('') :
                                        tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[0].segments[1].departureDate.split('').splice(14, 2).join('') + 60
                                        } мин</p>
                                    <p className="timing__end"><span className="end__date">{tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(5, 2).join('')]} </span> {tickets.flight.legs.[0].segments[1].arrivalDate.split('').splice(11, 5).join('')}</p>
                                </section>
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[0].segments[1].stops == '0' ? '0 пересадок' : tickets.flight.legs.[0].segments[1].stops == '1' ? '1 пересадка' : '2 пересадки' }</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">{tickets.flight.legs.[0].segments[1].airline.caption}</span></p>
                            </section>
                            <button className="selected-ticket__chouse">Выбрать</button>
                        </li>
                        <li className="selected-tickets__selected-ticket">
                            <section className="selected-ticket__header">
                                <img src="polish.jpg" alt={tickets.flight.carrier.caption} />
                                <article className="header__price-for-one">
                                    <p className="price-for-one__number">{tickets.flight.price.passengerPrices[0].total['amount']} Р</p>
                                    <p className="price-for-one__context">Стоимость билета для одного взрослого пассажира</p>
                                </article>
                            </section>
                            <section className="selected-ticket__selected-ticket-1">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">{tickets.flight.legs.[1].segments[0].departureCity.caption}, {tickets.flight.legs[1].segments[0].departureAirport.caption} <span className="start__abbreviation">({tickets.flight.legs[1].segments[0].departureAirport.uid})</span></p>
                                    <p className="destination__end">{tickets.flight.legs.[1].segments[0].arrivalCity.caption}, {tickets.flight.legs.[1].segments[0].arrivalAirport.caption} <span className="end__abbreviation">({tickets.flight.legs.[1].segments[0].arrivalAirport.uid})</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">{tickets.flight.legs.[1].segments[0].departureDate.split('').splice(11, 5).join('')} <span className="start__date">{tickets.flight.legs.[1].segments[0].departureDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[1].segments[0].departureDate.split('').splice(5, 2).join('')]}</span></p>
                                    <p className="timing__duration">{
                                        tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[1].segments[0].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[1].segments[0].departureDate.split('').splice(11, 2).join('') : 
                                        tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[1].segments[0].departureDate.split('').splice(11, 2).join('') - 1} ч {
                                        tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[1].segments[0].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[1].segments[0].departureDate.split('').splice(14, 2).join('') :
                                        tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[1].segments[0].departureDate.split('').splice(14, 2).join('') + 60
                                        } мин</p>
                                    <p className="timing__end"><span className="end__date">{tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(5, 2).join('')]} </span> {tickets.flight.legs.[1].segments[0].arrivalDate.split('').splice(11, 5).join('')}</p>
                                </section>
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[1].segments[0].stops == '0' ? '0 пересадок' : tickets.flight.legs.[1].segments[0].stops == '1' ? '1 пересадка' : '2 пересадки' }</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">{tickets.flight.legs.[1].segments[0].airline.caption}</span></p>
                            </section>
                            <section className="selected-ticket__selected-ticket-2">
                                <section className="selected-ticket__destination">
                                    <p className="destination__start">{tickets.flight.legs.[1].segments[1].departureCity.caption}, {tickets.flight.legs[1].segments[1].departureAirport.caption} <span className="start__abbreviation">({tickets.flight.legs[1].segments[1].departureAirport.uid})</span></p>
                                    <p className="destination__end">{tickets.flight.legs.[1].segments[1].arrivalCity.caption}, {tickets.flight.legs.[1].segments[1].arrivalAirport.caption} <span className="end__abbreviation">({tickets.flight.legs.[1].segments[1].arrivalAirport.uid})</span></p>
                                </section>
                                <section className="selected-ticket__timing">
                                    <p className="timing__start">{tickets.flight.legs.[1].segments[1].departureDate.split('').splice(11, 5).join('')} <span className="start__date">{tickets.flight.legs.[1].segments[1].departureDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[1].segments[1].departureDate.split('').splice(5, 2).join('')]}</span></p>
                                    <p className="timing__duration">{
                                        tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[1].segments[1].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[1].segments[1].departureDate.split('').splice(11, 2).join('') : 
                                        tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(11, 2).join('') - tickets.flight.legs.[1].segments[1].departureDate.split('').splice(11, 2).join('') - 1} ч {
                                        tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(14, 2).join('') >= tickets.flight.legs.[1].segments[1].departureDate.split('').splice(14, 2).join('') ? 
                                        tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[1].segments[1].departureDate.split('').splice(14, 2).join('') :
                                        tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(14, 2).join('') - tickets.flight.legs.[1].segments[1].departureDate.split('').splice(14, 2).join('') + 60
                                        } мин</p>
                                    <p className="timing__end"><span className="end__date">{tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(8, 2).join('')} {month[tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(5, 2).join('')]} </span> {tickets.flight.legs.[1].segments[1].arrivalDate.split('').splice(11, 5).join('')}</p>
                                </section>
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[1].segments[1].stops == '0' ? '0 пересадок' : tickets.flight.legs.[1].segments[1].stops == '1' ? '1 пересадка' : '2 пересадки' }</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">{tickets.flight.legs.[1].segments[1].airline.caption}</span></p>
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
