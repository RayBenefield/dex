#! /usr/bin/env node
import { Observable } from 'rxjs';
import configureEntry from './flows/entry';
import * as print from './print'; // eslint-disable-line import/no-unresolved, import/extensions

const entry = configureEntry();

// eslint-disable-next-line no-console
console.log();

print.divider();
print.banner();
print.divider();
print.instructions();
print.divider();

Observable
    .of({})
    .mergeMap(entry)
    .subscribe(console.log); // eslint-disable-line no-console

// eslint-disable-next-line no-console
console.log();
