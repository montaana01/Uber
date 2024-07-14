import React from 'react';
import Payment from './assets/images/icons_work/payment_icon.png';
import Bonus from './assets/images/icons_work/bonus.png';
import Profit from './assets/images/icons_work/profit.png';
import Schedule from './assets/images/icons_work/schedule.png';
import Connection from './assets/images/icons_work/connection.png';
import Map from './assets/images/icons_work/map.png';
import Support from './assets/images/icons_work/support.png';
import Exterior from './assets/images/icons_work/exterior.png';


function Reasons() {
    return React.createElement('section', {className:'reasons'},[
        React.createElement('div', {className:'container'}, [
            React.createElement('div', {className:'label'}, ['Benefits']),
            React.createElement('h2', {className:'title'}, ['8 reasons to start working with us']),
            React.createElement('div', {className:'row'}, [<>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Payment} alt="Payment"/></div>
                        <div className="advantage_descr">
                            <span>No cash, payment is automatic</span>
                            <br/>The cost of the trip is paid by the passenger with the attached
                            bank card, i.e. there are no risks associated with transportation
                            cash for both the passenger and the driver, you do not need
                            look for small money for change.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Bonus} alt="Bonus"/>
                        </div>
                        <div className="advantage_descr">
                            <span>Commission 8% + BONUSES</span> <br/>We have a minimum
                            commission and we pay bonuses for each trip, some
                            of our competitors keep the bonuses for themselves. We work honestly and with
                            us drivers earn more!
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Profit} alt="Profit"/>
                        </div>
                        <div className="advantage_descr">
                            <span>High income with guaranteed payments</span> <br/>We
                            pay wages to the driver's personal bank card!
                            You do not need to register an LLC, individual entrepreneur, pay taxes,
                            file a declaration, pay for accounting services and maintaining a bank account.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Schedule} alt="Schedule"/>
                        </div>
                        <div className="advantage_descr">
                            <span>Work at a convenient time, no schedules</span> <br/>
                            You simply press the go online button to start working,
                            and when you decide to finish, press go off line.
                            You can work only in the morning, evening, weekends, or holidays!
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Connection} alt="Connection"/>
                        </div>
                        <div className="advantage_descr">
                            <span>Comfortable, transparent and simple connection</span>
                            <br/>We connect remotely and for free, you do not need to come to us!
                            You send us copies of your documents, we register you and send you
                            the data for connection, in 1-2 days you can start working!
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Map} alt="Map"/>
                        </div>
                        <div className="advantage_descr">
                            <span>Always a lot of orders</span> <br/>The application
                            shows where there are currently the most orders and where
                            increased rates apply. You will not have downtime and empty runs.
                            Our passengers are always pleasant and absolutely non-conflict people, who are pleasant to drive.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Support} alt="Support"/>
                        </div>
                        <div className="advantage_descr">
                            <span>24 hour support</span> <br/>Babble has 24/7 driver support via email.
                            If you have any questions, you can always ask via On-line consultation.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="advantage_block">
                        <div className="payment_circle">
                            <img src={Exterior} alt="Exterior"/>
                        </div>
                        <div className="advantage_descr">
                            <span>No checkers or stickers</span> <br/>You don't need to change the color,
                            install "checkers" on the car and cover it with stickers.
                        </div>
                    </div>
                </div>
            </>])
        ])
    ]);
}

export default Reasons;