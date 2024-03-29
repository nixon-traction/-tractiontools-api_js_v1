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
    define(['ApiClient', 'model/LocalDateTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalDateTime'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.Week = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.LocalDateTime);
  }
}(this, function(ApiClient, LocalDateTime) {
  'use strict';




  /**
   * The Week model module.
   * @module model/Week
   * @version v1
   */

  /**
   * Constructs a new <code>Week</code>.
   * @alias module:model/Week
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Week</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Week} obj Optional instance to populate.
   * @return {module:model/Week} The populated <code>Week</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
      if (data.hasOwnProperty('ForWeekNumber')) {
        obj['ForWeekNumber'] = ApiClient.convertToType(data['ForWeekNumber'], 'Number');
      }
      if (data.hasOwnProperty('ForWeek')) {
        obj['ForWeek'] = ApiClient.convertToType(data['ForWeek'], 'Date');
      }
      if (data.hasOwnProperty('DisplayDate')) {
        obj['DisplayDate'] = ApiClient.convertToType(data['DisplayDate'], 'Date');
      }
      if (data.hasOwnProperty('LocalDate')) {
        obj['LocalDate'] = LocalDateTime.constructFromObject(data['LocalDate']);
      }
      if (data.hasOwnProperty('IsCurrentWeek')) {
        obj['IsCurrentWeek'] = ApiClient.convertToType(data['IsCurrentWeek'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} Key
   */
  exports.prototype['Key'] = undefined;
  /**
   * @member {Number} ForWeekNumber
   */
  exports.prototype['ForWeekNumber'] = undefined;
  /**
   * @member {Date} ForWeek
   */
  exports.prototype['ForWeek'] = undefined;
  /**
   * @member {Date} DisplayDate
   */
  exports.prototype['DisplayDate'] = undefined;
  /**
   * @member {module:model/LocalDateTime} LocalDate
   */
  exports.prototype['LocalDate'] = undefined;
  /**
   * @member {Boolean} IsCurrentWeek
   */
  exports.prototype['IsCurrentWeek'] = undefined;



  return exports;
}));


