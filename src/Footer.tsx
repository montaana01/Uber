import React from 'react';
import AppStore from './assets/images/footer/app_store.svg';
import GooglePlay from './assets/images/footer/google_play.svg';
import WindowsStore from './assets/images/footer/windows_store.svg';

function Footer() {
    return React.createElement('footer', {className:'footer'},[
        React.createElement('div', {className:'footer_divider'},[]),
        React.createElement('div',{className:'footer_wrapper'},[
            React.createElement('div',{},[
                React.createElement('div',{className:'footer_social'},[
                    React.createElement('a',{className:'footer_social_item', href:'https://example.com'},[
                        React.createElement('i',{className:'fa-brands fa-facebook-f'},[])
                    ]),
                    React.createElement('a',{className:'footer_social_item', href:'https://example.com'},[
                        React.createElement('i',{className:'fa-brands fa-twitter'},[])
                    ]),
                    React.createElement('a',{className:'footer_social_item', href:'https://example.com'},[
                        React.createElement('i',{className:'fa-brands fa-linkedin'},[])
                    ]),
                    React.createElement('a',{className:'footer_social_item', href:'https://example.com'},[
                        React.createElement('i',{className:'fa-brands fa-instagram'},[])
                    ])
                ])
            ]),
            React.createElement('div',{},[
                React.createElement('div',{className:'footer_links'},[
                    React.createElement('div',{className:'footer_links_main'},[
                        React.createElement('a',{href:'https://babble.yakovlevdev.com'},['Main']),
                        React.createElement('a',{href:'https://example.com'},['cities']),
                        React.createElement('a',{href:'https://example.com'},['for drivers']),
                    ]),
                    React.createElement('div',{className:'footer_links_sub'},[
                        React.createElement('a',{href:'https://example.com'},['support']),
                        React.createElement('a',{href:'https://example.com'},['jobs']),
                        React.createElement('a',{href:'https://example.com'},['developers']),
                        React.createElement('a',{href:'https://example.com'},['blog']),
                        React.createElement('a',{href:'https://example.com'},['about us']),
                    ]),
                    React.createElement('a',{className:'footer_links_lang', href:'https://footer.com'},['english'])
                ])
            ]),
            React.createElement('div',{},[
                React.createElement('div',{className:'footer_mobile'},[
                    React.createElement('a',{href:'https://example.com'},[
                        React.createElement('img',{src: AppStore, alt:'Apple Store'})
                    ]),
                    React.createElement('a',{href:'https://example.com'},[
                        React.createElement('img',{src: GooglePlay, alt:'Google Play'})
                    ]),
                    React.createElement('a',{href:'https://example.com'},[
                        React.createElement('img',{src: WindowsStore, alt:'Windows Store'})
                    ])
                ])
            ])
        ])
    ]);
}

export default Footer;