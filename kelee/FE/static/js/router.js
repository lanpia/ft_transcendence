'use strict'

import { rootPage, hookDOMRootPage } from '../views/Root(Login).js';
import { mainPage } from '../views/Main.js';
import { gamePage } from '../views/Game.js';


document.addEventListener("DOMContentLoaded", () => {
    function hookByID(id, event, middlefunc, endfunc) {
        document.getElementById(id).addEventListener(event, function() {
            if(middlefunc) middlefunc();
            endfunc();
        });
    }
    
    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.head.appendChild(script);
        window.gameEndCallback = () => {
            navigateTo('/FE/main');
        };
    }

    const contentDiv = document.getElementById('main-content');

    const routes = {
        '/FE/index.html': { content : rootPage, event: () => {hookByID('login-form', 'submit', hookDOMRootPage, () => navigateTo('/FE/main'));}},
        '/FE/main': { content : mainPage, event: () => {hookByID('single-play-btn', 'click', null, () => navigateTo('/FE/game'))} },
        '/FE/game': { content : gamePage, event: () => {loadScript('static/js/pong.js', () => {navigateTo('/FE/main')});} }
    };
    
    function router() {
        const path = window.location.pathname;
        // console.log(path);
        const content = routes[path].content || '<h1>404 - Page Not Found</h1>';
        contentDiv.innerHTML = content;
        if(routes[path].event) routes[path].event();
    }

    function navigateTo(path) {
        // console.log(path);
        window.history.pushState(null, null, path);
        router()
    }
    

    window.addEventListener('popstate', router);
    router(); // 초기 페이지 로드 시 라우팅

    // window.addEventListener('hashchange', router);
    // window.addEventListener('popstate', router);
    // window.addEventListener('load', router);
});
