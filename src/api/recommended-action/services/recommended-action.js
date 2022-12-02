'use strict';

/**
 * recommended-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended-action.recommended-action');
