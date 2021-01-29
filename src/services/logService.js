// import Raven from "raven-js"

function init() {
//     Raven.config('https://6e23b348dfb64cd5a0e2ad309d9469eb@o512265.ingest.sentry.io/5611751', {
//     release: '1-0-0',
//     environment: 'development-test'
// }).install()
}

function log(error) {
    console.error(error)
    // Raven.captureException(error);
}

export default {
    init,
    log
} 