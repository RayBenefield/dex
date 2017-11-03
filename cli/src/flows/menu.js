import chalk from 'chalk';
import transmute from 'transmutation';
import { prompt, Separator, ui } from 'inquirer';
import * as prompts from '../prompts'; // eslint-disable-line import/no-unresolved, import/extensions

const bar = new ui.BottomBar();
bar.rl.output.mute();

let menuOn = false;
setInterval(() => {
    let updated = true;
    if (menuOn) {
        updated = false;
        bar.rl.output.unmute();
        bar.updateBottomBar(chalk.gray('───'));
    }
    if (!menuOn && !updated) {
        updated = true;
        bar.rl.output.mute();
    }
}, 1);

bar.toggleOff = (p) => {
    menuOn = false;
    return p;
};

bar.toggleOn = (p) => {
    menuOn = true;
    return p;
};

const bottom = new Separator();
const menu = prompts.menu;
menu[0].choices.push(bottom);

export default () => transmute()
    .do(() => bar.toggleOn())
    .extend(() => prompt(menu));
