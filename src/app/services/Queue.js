const kue = require('kue')
const redisConfig = require('../../config/redis')
const Queue = kue.createQueue({ redis: redisConfig })
module.exports = Queue
