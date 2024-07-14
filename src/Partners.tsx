import React from 'react';

function Partners() {
    return React.createElement('section', {className:'partners'},[
        React.createElement('div', {className:'container'},[
            React.createElement('row',{}, [
                React.createElement('div', {className:'col-md-12 offset-md-0 col-lg-10 offset-lg-1'}, [
                    React.createElement('h1', {className:'partners_title'}, ['BABBLE PARTNERS COMPANY!']),
                    React.createElement('h2', {className:'partners_description'}, ['WE INVITE DRIVERS! IN YOUR OWN CAR!']),
                    React.createElement('div', {className:'partners_subtitle'},
                                    ['BABBLE is a dynamically developing company. The company is a leader in the taxi market.'
                                    + ' The company is absolutely transparent, you can control all processes in your personal account.'
                                    + 'Bonus system. In addition to the work done on orders, the company awards bonuses for peak times.'
                                    + ' We are one of the partners and have established ourselves as one of the best teams in the world.'
                                    + 'Our drivers earn from $800 - $1200 per month.']),
                    React.createElement('button', {className:'partners_btn'},['SEND A REQUEST!'])
                ])
            ])
        ])
    ]);
}

export default Partners;