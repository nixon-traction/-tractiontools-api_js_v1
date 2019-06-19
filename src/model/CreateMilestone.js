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
    root.TractionToolsApiV1.CreateMilestone = factory(root.TractionToolsApiV1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateMilestone model module.
   * @module model/CreateMilestone
   * @version v1
   */

  /**
   * Constructs a new <code>CreateMilestone</code>.
   * @alias module:model/CreateMilestone
   * @class
   * @param title {String} Milestone title
   * @param dueDate {Date} Milestone due date
   */
  var exports = function(title, dueDate) {
    var _this = this;

    _this['title'] = title;
    _this['dueDate'] = dueDate;
  };

  /**
   * Constructs a <code>CreateMilestone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateMilestone} obj Optional instance to populate.
   * @return {module:model/CreateMilestone} The populated <code>CreateMilestone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('dueDate')) {
        obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Milestone title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Milestone due date
   * @member {Date} dueDate
   */
  exports.prototype['dueDate'] = undefined;



  return exports;
}));

