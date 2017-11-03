#! /usr/bin/env node
import { Observable } from 'rxjs';
import configureEntry from './flows/entry';
import configureMenu from './flows/menu';
import * as print from './print'; // eslint-disable-line import/no-unresolved, import/extensions

const entry = configureEntry();
const menu = configureMenu();

// eslint-disable-next-line no-console
console.log();

print.divider();
print.banner();
print.divider();
print.instructions();
print.divider();

let state = {};

Observable
    .of(state)
    .map(() => state)
    .mergeMap(entry)
    .do((currentState) => { state = currentState; })
    .mergeMap(menu)
    .do(() => process.stdout.write('\r\x1b[K'))
    .repeat()
    .subscribe(({ action }) => {
        if (action === 'quit') process.exit(0);
    }); // eslint-disable-line no-console

// eslint-disable-next-line no-console
console.log();
