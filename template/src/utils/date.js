import {addMinutes, format, formatDistanceToNow, startOfDay} from 'date-fns';
import {formatToTimeZone} from 'date-fns-timezone';

export const prettyDate = date => format(date, 'EEE M/d/y, h:mm aa');
export const prettyTime = date =>
    formatToTimeZone(date, 'h:mm aa z', {timeZone: 'America/New_York'});
export const prettyLocalTime = date => format(date, 'HH:mm:ss');
export const distanceDate = date =>
    formatDistanceToNow(date, {addSuffix: true});

export const getTimeValues = (interval, date = new Date()) =>
    Array(~~(24 / interval))
        .fill(startOfDay(date))
        .map((date, i) => {
            const value = prettyTime(addMinutes(date, i * 60 * interval));
            return {label: value, value};
        });

export const hms = secs => {
    const hours = ~~(secs / 3600);
    const minutes = ~~(secs / 60) % 60;
    const seconds = secs % 60;
    const arr = hours > 0 ? [hours, minutes, seconds] : [minutes, seconds];
    return arr.map((v, i) => (v < 10 && i > 0 ? `0${v}` : v)).join(':');
};
