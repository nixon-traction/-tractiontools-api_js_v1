/**
 * Traction Tools API - V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Week'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Week'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.Week_Api = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.Week);
  }
}(this, function(ApiClient, Week) {
  'use strict';

  /**
   * Week_ service.
   * @module api/Week_Api
   * @version v1
   */

  /**
   * Constructs a new Week_Api. 
   * @alias module:api/Week_Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the weekGet operation.
     * @callback module:api/Week_Api~weekGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Week} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current week
     * @param {module:api/Week_Api~weekGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Week}
     */
    this.weekGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = Week;

      return this.apiClient.callApi(
        '/api/v1/weeks/current', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));