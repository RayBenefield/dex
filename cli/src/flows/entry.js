import { prompt } from 'inquirer';
import transmute from 'transmutation';
import * as prompts from '../prompts'; // eslint-disable-line import/no-unresolved, import/extensions

export default () => transmute()
    .extend(() => prompt(prompts.entry))
    .extend(() => prompt(prompts.login));
