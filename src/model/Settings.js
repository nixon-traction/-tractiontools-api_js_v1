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
    root.TractionToolsApiV1.Settings = factory(root.TractionToolsApiV1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Settings model module.
   * @module model/Settings
   * @version v1
   */

  /**
   * Constructs a new <code>Settings</code>.
   * @alias module:model/Settings
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Settings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Settings} obj Optional instance to populate.
   * @return {module:model/Settings} The populated <code>Settings</code> instance.
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
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('TeamType')) {
        obj['TeamType'] = ApiClient.convertToType(data['TeamType'], 'String');
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
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {module:model/Settings.TeamTypeEnum} TeamType
   */
  exports.prototype['TeamType'] = undefined;


  /**
   * Allowed values for the <code>TeamType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TeamTypeEnum = {
    /**
     * value: "LeadershipTeam"
     * @const
     */
    "LeadershipTeam": "LeadershipTeam",
    /**
     * value: "DepartmentalTeam"
     * @const
     */
    "DepartmentalTeam": "DepartmentalTeam",
    /**
     * value: "SamePageMeeting"
     * @const
     */
    "SamePageMeeting": "SamePageMeeting",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"  };


  return exports;
}));


