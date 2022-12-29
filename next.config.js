const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'pampam',
                mongodb_password: 'dZ5qAusaempN',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev' // folder (collection) for development
            }
        };
    };

    return {
        env: {
            mongodb_username: 'pampam',
            mongodb_password: 'dZ5qAusaempN',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'        // folder (collection) for production
        }
    } ;
};