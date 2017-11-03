import { prompt } from 'inquirer';
import transmute from 'transmutation';
import * as prompts from '../prompts'; // eslint-disable-line import/no-unresolved, import/extensions

export default () => transmute()
    .ifNo('user', transmute()
        .extend(() => prompt(prompts.entry))
        .extend('user', () => prompt(prompts.login)
            .then(() => ({ first_name: 'Ray' }))));
