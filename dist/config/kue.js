"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    watchStuckJobsInterval: 1000,
    removeOnComplete: true,
    shutdownTimeout: 5000,
    // Set client
    // magnet: 'ioredis', // Get from this.app.ioredis
    // or
    // https://github.com/Automattic/kue#redis-connection-settings
    redis: {
        host: 'localhost',
        port: 6379
    },
    ui: {
        title: '',
        basicAuth: {
            username: '',
            password: ''
        }
    }
};
//# sourceMappingURL=kue.js.map