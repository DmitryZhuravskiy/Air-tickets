import React from "react";
import "./AirTickets.css";

const json = require('./simple1.json');
const tickets = JSON.parse(JSON.stringify(json));

const json2 = require('./simple2.json');
const tickets2 = JSON.parse(JSON.stringify(json2));
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
    constructor(props) {
        super(props);
        this.state = {
            firstSelect: 'price-up',
            transferLess: false,
            transferOne: false,
            price_min: '0',
            price_max: '10000',
            polish: false,
            aeroFlot: false,
            turkish: false
        }
        this.handleFirstSelect = this.handleFirstSelect.bind(this);
        this.handleTransferLess = this.handleTransferLess.bind(this);
        this.handleTransferOne = this.handleTransferOne.bind(this);
        this.onChangePriceMin = this.onChangePriceMin.bind(this);
        this.onChangePriceMax = this.onChangePriceMax.bind(this);
        this.handleAviaCompanyPolish = this.handleAviaCompanyPolish.bind(this);
        this.handleAviaCompanyAeroflot = this.handleAviaCompanyAeroflot.bind(this);
        this.handleAviaCompanyTurkish = this.handleAviaCompanyTurkish.bind(this);
    }

    handleFirstSelect(e) {
        this.setState({
            firstSelect: e.target.value
        })
    }

    handleTransferLess() {
        if (document.getElementById("transfer0").checked == true) {
            this.setState({
                transferLess: false
            })
        } else {
            this.setState({
                transferLess: true
            })
        }
    }

    handleTransferOne() {
        if (document.getElementById("transfer1").checked == true) {
            this.setState({
                transferOne: false
            })
        } else {
            this.setState({
                transferOne: true
            })
        }
    }

    onChangePriceMin(e) {
        this.setState({
            price_min: e.target.value
        })
    }

    onChangePriceMax(e) {
        this.setState({
            price_max: e.target.value
        })
    }

    handleAviaCompanyPolish() {
        if (document.getElementById("polish").checked == true) {
            this.setState({
                polish: false
            })
        } else {
            this.setState({
                polish: true
            })
        }
    }

    handleAviaCompanyTurkish() {
        if (document.getElementById("turkish").checked == true) {
            this.setState({
                turkish: false
            })
        } else {
            this.setState({
                turkish: true
            })
        }
    }

    handleAviaCompanyAeroflot() {
        if (document.getElementById("aeroFlot").checked == true) {
            this.setState({
                aeroFlot: false
            })
        } else {
            this.setState({
                aeroFlot: true
            })
        }
    }

    render() {
        return (
            <div className="select-block">
                <form className="select">
                    <div className="select-price-time-in-way">
                        <p className="select-price-time-in-way__title">Сортировать</p>{" "}
                        <input className="select-price-time-in-way__price-up" name="first-select" type="radio" id="radio1" onClick={this.handleFirstSelect} value="prise-up" />
                        <label className="select-price-time-in-way__price-label" htmlFor="radio1">  - по возрастанию цены</label><br />
                        <input className="select-price-time-in-way__price-down" name="first-select" type="radio" id="radio2" onClick={this.handleFirstSelect} value="prise-down" />
                        <label className="select-price-time-in-way__price-label" htmlFor="radio2">  - по убыванию в цене</label><br />
                        <input className="select-price-time-in-way__time-in-way" name="first-select" type="radio" id="radio3" onClick={this.handleFirstSelect} value="time-in-way" />
                        <label className="select-price-time-in-way__price-label" htmlFor="radio3">  - по времени в пути</label><br />
                    </div>
                    <div className="select-transfer">
                        <p className="select-transfer__title">Фильтровать</p>
                        <input className="select-transfer__input" type="checkbox" id="transfer1" name="scales" /><label className="select-transfer__label" htmlFor="transfer1"
                            onClick={this.handleTransferOne} >- 1 пересадка</label>
                        <input className="select-transfer__input" type="checkbox" id="transfer0" name="scales" /><label className="select-transfer__label" htmlFor="transfer0"
                            onClick={this.handleTransferLess}>- без пересадок</label>
                    </div>
                    <div className="select-price">
                        <p className="select-price__title">Цена</p>
                        <label className="select-price__label" htmlFor='price-min'>От</label><input className="select-price__input" type='number' id="price-min" value={this.state.price_min}
                            onChange={this.onChangePriceMin}
                        />
                        <label className="select-price__label" htmlFor='price-max'>До</label><input className="select-price__input" type='number' id="price-max" value={this.state.price_max}
                            onChange={this.onChangePriceMax}
                        />
                    </div>
                    <div className="select-aircompany">
                        <p className="select-aircompany__title">Авиакомпании</p>
                        <input className="select-aircompany__input" type="checkbox" id="polish" name="scales" /><label className="select-aircompany__label" htmlFor="polish"
                            onClick={this.handleAviaCompanyTurkish}>- Turk Hava Yollari A.O. от 21049 р.</label>
                        <input className="select-aircompany__input" type="checkbox" id="aeroFlot" name="scales" /><label className="select-aircompany__label" htmlFor="aeroFlot"
                            onClick={this.handleAviaCompanyAeroflot}>- Аэрофлот - рос... от 31733 р.</label>
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
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[0].segments[0].stops == '0' ? '0 пересадок' : tickets.flight.legs.[0].segments[0].stops == '1' ? '1 пересадка' : '2 пересадки'}</p>
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
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[0].segments[1].stops == '0' ? '0 пересадок' : tickets.flight.legs.[0].segments[1].stops == '1' ? '1 пересадка' : '2 пересадки'}</p>
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
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[1].segments[0].stops == '0' ? '0 пересадок' : tickets.flight.legs.[1].segments[0].stops == '1' ? '1 пересадка' : '2 пересадки'}</p>
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
                                <p className="selected-ticket__transfer-count">{tickets.flight.legs.[1].segments[1].stops == '0' ? '0 пересадок' : tickets.flight.legs.[1].segments[1].stops == '1' ? '1 пересадка' : '2 пересадки'}</p>
                                <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">{tickets.flight.legs.[1].segments[1].airline.caption}</span></p>
                            </section>
                            <button className="selected-ticket__chouse">Выбрать</button>
                        </li>
                    </ul>
                    <button className="see-more">Показать ещё</button>
                    <ul>
                        {tickets2["flights"].sort(function (a, b) { // сортируем по возрастанию цены, убыванию или длине перелета
                            if (this.state.firstSelect == 'price-up') {
                                return a.flight.price.total.amount - b.flight.price.total.amount;
                            } else if (this.state.firstSelect == 'price-down') {
                                return b.flight.price.total.amount - a.flight.price.total.amount;
                            } else if (this.state.firstSelect == 'time-in-way') {
                                return a.flight.legs[0].duration - b.flight.legs[0].duration;
                            }
                        }).filter(
                            function notHaveTransfer(flightOne) { //если не поставлена галочка на "без пересадок", то не показываем без пересадок
                                if (this.state.transferLess == false) {
                                    return flightOne.flight.legs[0].segments[0].stops !== "0" || flightOne.flight.legs[0].segments[1].stops !== "0" || flightOne.flight.legs[1].segments[0].stops !== "0" || flightOne.flight.legs[1].segments[1].stops !== "0";
                                }
                            }
                        ).filter(
                            function haveOneTransfer(flightOne) { //если не поставлена галочка на "с одной посадкой", то не показываем с одной посадкой
                                if (this.state.transferOne == false) {
                                    return flightOne.flight.legs[0].segments[0].stops !== "1" || flightOne.flight.legs[0].segments[1].stops !== "1" || flightOne.flight.legs[1].segments[0].stops !== "1" || flightOne.flight.legs[1].segments[1].stops !== "1";
                                }
                            }
                        ).filter(ticket => (ticket.flight.price.total.amount >= this.state.price_min && ticket.flight.price.total.amount <= this.state.price_max) //фильтруем по максимальнойй и минимальной цене
                        ).filter(
                            function haveAeroFlot(flightOne) { //если не поставлена галочка на аэрофлоте, то не показываем
                                if (this.state.aeroFlot == false) {
                                    return flightOne.flight.carrier.uid !== "SU1";
                                }
                            }
                        ).filter(
                            function haveTurkish(flightOne) { // если не поставлена галочка на турецких авиалиниях, то не показываем
                                if (this.state.turkish == false) {
                                    return flightOne.flight.carrier.uid !== "TK";
                                }
                            }
                        ).map(element => (
                            <li className="selected-tickets__selected-ticket">
                                <section className="selected-ticket__header">
                                    <img src="polish.jpg" alt={element.flight.carrier.caption} />
                                    <article className="header__price-for-one">
                                        <p className="price-for-one__number">{element.flight.price.passengerPrices[0].total['amount']} Р</p>
                                        <p className="price-for-one__context">Стоимость билета для одного взрослого пассажира</p>
                                    </article>
                                </section>
                                <section className="selected-ticket__selected-ticket-1">
                                    <section className="selected-ticket__destination">
                                        <p className="destination__start">{element.flight.legs[0].segments[0].departureCity.caption}, {element.flight.legs[0].segments[0].departureAirport.caption} <span className="start__abbreviation">({element.flight.legs[0].segments[0].departureAirport.uid})</span></p>
                                        <p className="destination__end">{element.flight.legs[0].segments[0].arrivalCity.caption}, {element.flight.legs[0].segments[0].arrivalAirport.caption} <span className="end__abbreviation">({element.flight.legs[0].segments[0].arrivalAirport.uid})</span></p>
                                    </section>
                                    <section className="selected-ticket__timing">
                                        <p className="timing__start">{element.flight.legs[0].segments[0].departureDate.split('').splice(11, 5).join('')} <span className="start__date">{element.flight.legs[0].segments[0].departureDate.split('').splice(8, 2).join('')} {month[element.flight.legs[0].segments[0].departureDate.split('').splice(5, 2).join('')]}</span></p>
                                        <p className="timing__duration">{
                                            element.flight.legs[0].segments[0].arrivalDate.split('').splice(14, 2).join('') >= element.flight.legs[0].segments[0].departureDate.split('').splice(14, 2).join('') ?
                                                element.flight.legs[0].segments[0].arrivalDate.split('').splice(11, 2).join('') - element.flight.legs[0].segments[0].departureDate.split('').splice(11, 2).join('') :
                                                element.flight.legs[0].segments[0].arrivalDate.split('').splice(11, 2).join('') - element.flight.legs[0].segments[0].departureDate.split('').splice(11, 2).join('') - 1} ч {
                                                element.flight.legs[0].segments[0].arrivalDate.split('').splice(14, 2).join('') >= element.flight.legs[0].segments[0].departureDate.split('').splice(14, 2).join('') ?
                                                    element.flight.legs[0].segments[0].arrivalDate.split('').splice(14, 2).join('') - element.flight.legs[0].segments[0].departureDate.split('').splice(14, 2).join('') :
                                                    element.flight.legs[0].segments[0].arrivalDate.split('').splice(14, 2).join('') - element.flight.legs[0].segments[0].departureDate.split('').splice(14, 2).join('') + 60
                                            } мин</p>
                                        <p className="timing__end"><span className="end__date">{element.flight.legs[0].segments[0].arrivalDate.split('').splice(8, 2).join('')} {month[element.flight.legs[0].segments[0].arrivalDate.split('').splice(5, 2).join('')]} </span> {element.flight.legs[0].segments[0].arrivalDate.split('').splice(11, 5).join('')}</p>
                                    </section>
                                    <p className="selected-ticket__transfer-count">{element.flight.legs[0].segments[0].stops == '0' ? '0 пересадок' : element.flight.legs[0].segments[0].stops == '1' ? '1 пересадка' : '2 пересадки'}</p>
                                    <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">{element.flight.legs[0].segments[0].airline.caption}</span></p>
                                </section>
                                <section className="selected-ticket__selected-ticket-2">
                                    <section className="selected-ticket__destination">
                                        <p className="destination__start">{element.flight.legs[0].segments[1].departureCity.caption}, {element.flight.legs[0].segments[1].departureAirport.caption} <span className="start__abbreviation">({element.flight.legs[0].segments[1].departureAirport.uid})</span></p>
                                        <p className="destination__end">{element.flight.legs[0].segments[1].arrivalCity.caption}, {element.flight.legs[0].segments[1].arrivalAirport.caption} <span className="end__abbreviation">({element.flight.legs[0].segments[1].arrivalAirport.uid})</span></p>
                                    </section>
                                    <section className="selected-ticket__timing">
                                        <p className="timing__start">{element.flight.legs[0].segments[1].departureDate.split('').splice(11, 5).join('')} <span className="start__date">{element.flight.legs[0].segments[1].departureDate.split('').splice(8, 2).join('')} {month[element.flight.legs[0].segments[1].departureDate.split('').splice(5, 2).join('')]}</span></p>
                                        <p className="timing__duration">{
                                            element.flight.legs[0].segments[1].arrivalDate.split('').splice(14, 2).join('') >= element.flight.legs[0].segments[1].departureDate.split('').splice(14, 2).join('') ?
                                                element.flight.legs[0].segments[1].arrivalDate.split('').splice(11, 2).join('') - element.flight.legs[0].segments[1].departureDate.split('').splice(11, 2).join('') :
                                                element.flight.legs[0].segments[1].arrivalDate.split('').splice(11, 2).join('') - element.flight.legs[0].segments[1].departureDate.split('').splice(11, 2).join('') - 1} ч {
                                                element.flight.legs[0].segments[1].arrivalDate.split('').splice(14, 2).join('') >= element.flight.legs[0].segments[1].departureDate.split('').splice(14, 2).join('') ?
                                                    element.flight.legs[0].segments[1].arrivalDate.split('').splice(14, 2).join('') - element.flight.legs[0].segments[1].departureDate.split('').splice(14, 2).join('') :
                                                    element.flight.legs[0].segments[1].arrivalDate.split('').splice(14, 2).join('') - element.flight.legs[0].segments[1].departureDate.split('').splice(14, 2).join('') + 60
                                            } мин</p>
                                        <p className="timing__end"><span className="end__date">{element.flight.legs[0].segments[1].arrivalDate.split('').splice(8, 2).join('')} {month[element.flight.legs[0].segments[1].arrivalDate.split('').splice(5, 2).join('')]} </span> {element.flight.legs[0].segments[1].arrivalDate.split('').splice(11, 5).join('')}</p>
                                    </section>
                                    <p className="selected-ticket__transfer-count">{element.flight.legs[0].segments[1].stops == '0' ? '0 пересадок' : element.flight.legs[0].segments[1].stops == '1' ? '1 пересадка' : '2 пересадки'}</p>
                                    <p className="selected-ticket__shipper">Рейс выполняет: <span className="shipper__name">{element.flight.legs[0].segments[1].airline.caption}</span></p>
                                </section>
                                <button className="selected-ticket__chouse">Выбрать</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AirTickets;
