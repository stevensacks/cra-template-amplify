import platform from 'platform';

if (platform.os.family === 'OS X') {
    document.documentElement.classList.add('osx');
} else if (platform.os.family === 'iOS') {
    document.documentElement.classList.add('ios');
} else if (platform.name === 'IE' && platform.version.indexOf('11.') === 0) {
    document.documentElement.classList.add('ie-11');
}

if (platform.name === 'Firefox') {
    document.documentElement.classList.add('moz');
}
