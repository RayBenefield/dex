/* eslint-disable no-console */
import chalk from 'chalk';

/*
Welcome to the DEX CLI. DEX is a platform for time tracking Pomodoro sessions.
From here you can accomplish everything you could possibly want with the DEX
Platform. Login/Register below to see what you can do.
*/

export default () => console.log(chalk.gray(`
Welcome to the ${chalk.white('DEX CLI')}. DEX is a platform for time tracking Pomodoro sessions.
From here you can accomplish everything you could possibly want with the DEX
Platform. ${chalk.white('Login')}/${chalk.white('Register')} below to see what you can do.
`));
