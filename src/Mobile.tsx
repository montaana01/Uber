import React from 'react';

function Mobile() {
    return React.createElement('section', {className:'mobile'},[
        React.createElement('div', {className:'container'},[
            React.createElement('div',{className:'label'}, ['opportunities']),
            React.createElement('h2', {className:'title'}, ['babble mobile app']),
            React.createElement('div', {className:'subtitle'}, ['Make an order, take a trip and +' +
            'pay the cost using your mobile phone']),
            React.createElement('div', {className:'row'}, [
                React.createElement('div',{className:'col-md-4'}, [
                    React.createElement('div',{className:'mobile_item mobile_item_1'}, [
                        React.createElement('div', {className:'mobile_item_subtitle'}, ['one-tap ordering'])
                    ])
                ]),
                React.createElement('div',{className:'col-md-4'}, [
                    React.createElement('div',{className:'mobile_item mobile_item_2'}, [
                        React.createElement('div', {className:'mobile_item_subtitle'}, ['reliable supply'])
                    ])
                ]),
                React.createElement('div',{className:'col-md-4'}, [
                    React.createElement('div',{className:'mobile_item mobile_item_3'}, [
                        React.createElement('div', {className:'mobile_item_subtitle'}, ['clear prices'])
                    ])
                ]),
                React.createElement('div',{className:'col-md-4'}, [
                    React.createElement('div',{className:'mobile_item mobile_item_4'}, [
                        React.createElement('div', {className:'mobile_item_subtitle'}, ['cashless payment'])
                    ])
                ]),
                React.createElement('div',{className:'col-md-4'}, [
                    React.createElement('div',{className:'mobile_item mobile_item_5'}, [
                        React.createElement('div', {className:'mobile_item_subtitle'}, ['Feedback'])
                    ])
                ]),
                React.createElement('div',{className:'col-md-4'}, [
                    React.createElement('div',{className:'mobile_item mobile_item_6'}, [
                        React.createElement('div', {className:'mobile_item_subtitle'}, ['split the cost of the trip'])
                    ])
                ])
            ])
        ])
    ]);
}

export default Mobile;