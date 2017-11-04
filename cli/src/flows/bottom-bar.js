import chalk from 'chalk';
import { ui } from 'inquirer';

export default () => {
    const bar = new ui.BottomBar();
    bar.rl.output.mute();

    let text;
    let menuOn = false;
    setInterval(() => {
        let updated = true;
        if (menuOn) {
            updated = false;
            bar.rl.output.unmute();
            if (!text) {
                bar.updateBottomBar(chalk.gray('─────────────────'));
            } else {
                bar.updateBottomBar(chalk.gray(`─────${text}────────────`));
            }
        }
        if (!menuOn && !updated) {
            updated = true;
            bar.rl.output.mute();
        }
    }, 1);

    bar.setText = (t) => { text = t; };
    bar.removeText = () => { text = undefined; };

    bar.toggleOff = (p) => {
        menuOn = false;
        return p;
    };

    bar.toggleOn = (p) => {
        menuOn = true;
        return p;
    };

    return bar;
};
