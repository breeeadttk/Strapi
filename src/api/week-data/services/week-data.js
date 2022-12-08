'use strict';

/**
 * week-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::week-data.week-data');
