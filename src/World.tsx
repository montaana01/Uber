import React from 'react';

function World() {
    return React.createElement('section', {className:'world'},[
        React.createElement('div', {className:'container'},[
            React.createElement('div',{className:'label label_white'}, ['cities']),
            React.createElement('h2', {className:'title title_white'}, ['all over the world']),
            React.createElement('div', {className:'subtitle subtitle_white'}, ['We are in your city and all over the world']),
            React.createElement('a', {href: 'https://maps.google.com',className:'world_link'}, ['look all cities'])
        ])
    ]);
}

export default World;