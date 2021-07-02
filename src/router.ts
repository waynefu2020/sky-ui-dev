import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import RadioDemo from './components/RadioDemo.vue';
import InputDemo from './components/InputDemo.vue'
import {h} from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/getStarted.md';


const history = createWebHashHistory();
const md = string => h(Markdown, {content: string, key: string});
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc',
            component: Doc,
            children: [
                {path: '', redirect: '/doc/intro'},
                {path: 'intro', component: md(intro)},
                {path: 'get-started', component: md(getStarted)},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo},
                {path: 'radio', component: RadioDemo},
                {path: 'input', component: InputDemo}
            ]
        }
    ]
});
router.afterEach(() => {

});