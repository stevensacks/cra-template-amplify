export const toPrecision = (base, value, parse) => {
    const precision =
        base +
        (value < 1
            ? 1
            : value < 10
            ? 2
            : value < 100
            ? 3
            : value < 1000
            ? 4
            : 5);
    const result = value.toPrecision(precision);
    return parse ? parseFloat(result) : result;
};

const ORDINALS = ['th'].concat(['st', 'nd', 'rd']).concat(Array(6).fill('th'));

export const toOrdinal = value => {
    const str = String(value);
    return `${value}${ORDINALS[Number(str[str.length - 1])]}`;
};
