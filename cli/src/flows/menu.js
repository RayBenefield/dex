import _ from 'lodash';
import transmute from 'transmutation';
import { prompt, Separator } from 'inquirer';
import createBar from './bottom-bar';
import * as prompts from '../prompts'; // eslint-disable-line import/no-unresolved, import/extensions

let timer;

const bar = createBar();
const bottom = new Separator();
const menu = prompts.menu;
menu[0].choices.push(bottom);

export default () => transmute()
    .do(() => bar.toggleOn())
    .extend(() => {
        const modifiedMenu = [{
            ...menu[0],
            choices: timer
                ? _.filter(menu[0].choices, o => o.value !== 'start')
                : _.filter(menu[0].choices, o => o.value !== 'stop'),
        }];
        return prompt(modifiedMenu);
    })
    .switch('action', {
        start: transmute()
            .do(() => { timer = setInterval(() => bar.setText(Date.now()), 0); }),
        stop: transmute()
            .do(() => {
                bar.removeText();
                clearInterval(timer);
                timer = undefined;
            }),
    });
