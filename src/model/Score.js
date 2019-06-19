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
    root.TractionToolsApiV1.Score = factory(root.TractionToolsApiV1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Score model module.
   * @module model/Score
   * @version v1
   */

  /**
   * Constructs a new <code>Score</code>.
   * @alias module:model/Score
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Score</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Score} obj Optional instance to populate.
   * @return {module:model/Score} The populated <code>Score</code> instance.
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
      if (data.hasOwnProperty('ForWeek')) {
        obj['ForWeek'] = ApiClient.convertToType(data['ForWeek'], 'Number');
      }
      if (data.hasOwnProperty('Week')) {
        obj['Week'] = ApiClient.convertToType(data['Week'], 'Date');
      }
      if (data.hasOwnProperty('MeasurableId')) {
        obj['MeasurableId'] = ApiClient.convertToType(data['MeasurableId'], 'Number');
      }
      if (data.hasOwnProperty('DateEntered')) {
        obj['DateEntered'] = ApiClient.convertToType(data['DateEntered'], 'Date');
      }
      if (data.hasOwnProperty('Measured')) {
        obj['Measured'] = ApiClient.convertToType(data['Measured'], 'Number');
      }
      if (data.hasOwnProperty('Disabled')) {
        obj['Disabled'] = ApiClient.convertToType(data['Disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('Direction')) {
        obj['Direction'] = ApiClient.convertToType(data['Direction'], 'String');
      }
      if (data.hasOwnProperty('Target')) {
        obj['Target'] = ApiClient.convertToType(data['Target'], 'Number');
      }
      if (data.hasOwnProperty('AltTarget')) {
        obj['AltTarget'] = ApiClient.convertToType(data['AltTarget'], 'Number');
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
   * @member {Number} ForWeek
   */
  exports.prototype['ForWeek'] = undefined;
  /**
   * @member {Date} Week
   */
  exports.prototype['Week'] = undefined;
  /**
   * @member {Number} MeasurableId
   */
  exports.prototype['MeasurableId'] = undefined;
  /**
   * @member {Date} DateEntered
   */
  exports.prototype['DateEntered'] = undefined;
  /**
   * @member {Number} Measured
   */
  exports.prototype['Measured'] = undefined;
  /**
   * @member {Boolean} Disabled
   */
  exports.prototype['Disabled'] = undefined;
  /**
   * @member {module:model/Score.DirectionEnum} Direction
   */
  exports.prototype['Direction'] = undefined;
  /**
   * @member {Number} Target
   */
  exports.prototype['Target'] = undefined;
  /**
   * @member {Number} AltTarget
   */
  exports.prototype['AltTarget'] = undefined;


  /**
   * Allowed values for the <code>Direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "LessThanOrEqual"
     * @const
     */
    "LessThanOrEqual": "LessThanOrEqual",
    /**
     * value: "LessThan"
     * @const
     */
    "LessThan": "LessThan",
    /**
     * value: "GreaterThan"
     * @const
     */
    "GreaterThan": "GreaterThan",
    /**
     * value: "EqualTo"
     * @const
     */
    "EqualTo": "EqualTo",
    /**
     * value: "GreaterThanNotEqual"
     * @const
     */
    "GreaterThanNotEqual": "GreaterThanNotEqual",
    /**
     * value: "Between"
     * @const
     */
    "Between": "Between"  };


  return exports;
}));

