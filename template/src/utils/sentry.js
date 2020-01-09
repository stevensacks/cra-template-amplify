import * as Sentry from '@sentry/browser';

if (process.env.NODE_ENV === 'production') {
    const environment = window.location.href.includes('staging.')
        ? 'staging'
        : window.location.href.includes('dev.')
        ? 'development'
        : window.location.href.includes(process.env.REACT_APP_SENTRY_PROD)
        ? 'production'
        : 'unknown';

    Sentry.init({
        dsn: process.env.REACT_APP_SENTRY_DSN,
        environment,
        release: process.env.REACT_APP_BUILD_SHA,
    });

    if (window.location.href.includes('staging.')) {
        window.testSentry = (msg = 'TEST ERROR') => {
            try {
                throw Error(msg);
            } catch (err) {
                Sentry.captureException(err);
            }
        };
    }
}

export default Sentry;
