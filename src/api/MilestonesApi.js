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
    define(['ApiClient', 'model/Milestone', 'model/UpdateMilestone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Milestone'), require('../model/UpdateMilestone'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.MilestonesApi = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.Milestone, root.TractionToolsApiV1.UpdateMilestone);
  }
}(this, function(ApiClient, Milestone, UpdateMilestone) {
  'use strict';

  /**
   * Milestones service.
   * @module api/MilestonesApi
   * @version v1
   */

  /**
   * Constructs a new MilestonesApi. 
   * @alias module:api/MilestonesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the milestonesGetMilestones operation.
     * @callback module:api/MilestonesApi~milestonesGetMilestonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a particular milestone
     * @param {Number} MILESTONE_ID Milestone ID
     * @param {module:api/MilestonesApi~milestonesGetMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */
    this.milestonesGetMilestones = function(MILESTONE_ID, callback) {
      var postBody = null;

      // verify the required parameter 'MILESTONE_ID' is set
      if (MILESTONE_ID === undefined || MILESTONE_ID === null) {
        throw new Error("Missing the required parameter 'MILESTONE_ID' when calling milestonesGetMilestones");
      }


      var pathParams = {
        'MILESTONE_ID': MILESTONE_ID
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
      var returnType = Milestone;

      return this.apiClient.callApi(
        '/api/v1/milestones/{MILESTONE_ID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the milestonesRemoveMilestones operation.
     * @callback module:api/MilestonesApi~milestonesRemoveMilestonesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a milestone
     * @param {Number} MILESTONE_ID Milestone ID
     * @param {module:api/MilestonesApi~milestonesRemoveMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.milestonesRemoveMilestones = function(MILESTONE_ID, callback) {
      var postBody = null;

      // verify the required parameter 'MILESTONE_ID' is set
      if (MILESTONE_ID === undefined || MILESTONE_ID === null) {
        throw new Error("Missing the required parameter 'MILESTONE_ID' when calling milestonesRemoveMilestones");
      }


      var pathParams = {
        'MILESTONE_ID': MILESTONE_ID
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/milestones/{MILESTONE_ID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the milestonesUpdateMilestones operation.
     * @callback module:api/MilestonesApi~milestonesUpdateMilestonesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a milestone
     * @param {Number} MILESTONE_ID Milestone ID
     * @param {module:model/UpdateMilestone} body 
     * @param {module:api/MilestonesApi~milestonesUpdateMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.milestonesUpdateMilestones = function(MILESTONE_ID, body, callback) {
      var postBody = body;

      // verify the required parameter 'MILESTONE_ID' is set
      if (MILESTONE_ID === undefined || MILESTONE_ID === null) {
        throw new Error("Missing the required parameter 'MILESTONE_ID' when calling milestonesUpdateMilestones");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling milestonesUpdateMilestones");
      }


      var pathParams = {
        'MILESTONE_ID': MILESTONE_ID
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
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/milestones/{MILESTONE_ID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
