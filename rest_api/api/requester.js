/**
 * Api service configured to work with the Experiment API
 *
 * Largely influenced by Restangular
 *
 * Usage:
 * ====================================================================
 * var api = require('services/api');
 * var project = api().one('projects', 4001)
 * project.get().then(function(data) {
 *   data.name = 'new name';
 *   // updates the project entity by performing a PUT request
 *   project.put(data);
 * });
 *
 * var experiments = project.all('experiments');
 * experiments.get(function(experiments) {
 *   // experiments is an Array.<Object> of experiment data
 * });
 *
 * ========== or =============
 *
 * var experiments = api().one('projects', 4001').all('experiments')
 * experiments.get().then(function(experiments) {
 *   // experiments is an Array.<Object> of experiment data
 * });
 *
 * @author Jordan Garcia (jordan@optimizely.com)
 */
var requesterFactory = require('./requester_factory');
var config = require('atomic-config')

module.exports = requesterFactory.create({
  baseUrl: config.get('api.baseUrl', '/api/v1'),
});
