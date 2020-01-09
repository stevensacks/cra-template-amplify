export const compose = (f, g) => (...fns) => f(g(...fns));

export const tryCatch = fn => {
    try {
        return {result: fn()};
    } catch (error) {
        return {error};
    }
};

export const noop = () => {};
