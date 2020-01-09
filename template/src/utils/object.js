import {detailedDiff} from 'deep-object-diff';
import {isEqual} from 'lodash';
import SparkMD5 from 'spark-md5';

export const diff = (base, draft) => {
    const obj = detailedDiff(base, draft);
    return Object.keys(obj).reduce((acc, key) => {
        if (!isEqual(obj[key], {})) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};

export const md5 = obj => SparkMD5.hash(JSON.stringify(obj));
