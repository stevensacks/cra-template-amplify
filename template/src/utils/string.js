import {compose, tryCatch} from './function';
import {
    compressToEncodedURIComponent,
    decompressFromEncodedURIComponent,
} from 'lz-string';
import {isPlainObject, mapKeys, mapValues, snakeCase} from 'lodash';

const SMALL_WORDS = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
const ACRONYMS = /(\b(iam|ci)\b)/gi;
const SPECIAL = {
    macos: 'MacOS',
};

export const toTitleCase = str =>
    str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (match, index, title) => {
        if (SPECIAL[match]) return SPECIAL[match];

        if (match.search(ACRONYMS) > -1) return match.toUpperCase();

        if (
            index > 0 &&
            index + match.length !== title.length &&
            match.search(SMALL_WORDS) > -1 &&
            title.charAt(index - 2) !== ':' &&
            (title.charAt(index + match.length) !== '-' ||
                title.charAt(index - 1) === '-') &&
            title.charAt(index - 1).search(/[^\s-]/) < 0
        ) {
            return match.toLowerCase();
        }

        if (match.substr(1).search(/[A-Z]|\../) > -1) {
            return match;
        }

        return match.charAt(0).toUpperCase() + match.substr(1);
    });

export const unhyphenate = str => str.split('-').join(' ');

export const hyphenate = str => str.split(' ').join('-');

export const mapKeysDeep = (obj, cb) =>
    mapValues(mapKeys(obj, cb), val =>
        isPlainObject(val) ? mapKeysDeep(val, cb) : val
    );

export const toSnakeCase = obj =>
    obj ? mapKeysDeep(obj, (v, k) => snakeCase(k)) : obj;

export const fromPathToLabel = compose(unhyphenate, toTitleCase);

export const getQueryParams = (url, params) => {
    const snakeParams = toSnakeCase(params);
    const query = Object.keys(snakeParams)
        .map(key =>
            snakeParams[key]
                ? `${key}=${encodeURIComponent(snakeParams[key])}`
                : ''
        )
        .filter(Boolean)
        .join('&');
    return query ? `${url}?${query}` : url;
};

export const plural = num => (num === 1 ? '' : 's');

export const base64ToJson = base64 => {
    const {result} = tryCatch(() =>
        JSON.parse(decompressFromEncodedURIComponent(base64))
    );
    return result;
};

export const jsonToBase64 = json => {
    const {result} = tryCatch(() => compressToEncodedURIComponent(json));
    return result;
};
