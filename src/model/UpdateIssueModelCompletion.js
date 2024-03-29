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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.UpdateIssueModelCompletion = factory(root.TractionToolsApiV1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateIssueModelCompletion model module.
   * @module model/UpdateIssueModelCompletion
   * @version v1
   */

  /**
   * Constructs a new <code>UpdateIssueModelCompletion</code>.
   * @alias module:model/UpdateIssueModelCompletion
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UpdateIssueModelCompletion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateIssueModelCompletion} obj Optional instance to populate.
   * @return {module:model/UpdateIssueModelCompletion} The populated <code>UpdateIssueModelCompletion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('complete')) {
        obj['complete'] = ApiClient.convertToType(data['complete'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Set the issue completion
   * @member {Boolean} complete
   */
  exports.prototype['complete'] = undefined;



  return exports;
}));


