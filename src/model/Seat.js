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
    define(['ApiClient', 'model/AccountabilityGroup', 'model/Seat', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountabilityGroup'), require('./Seat'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.Seat = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.AccountabilityGroup, root.TractionToolsApiV1.Seat, root.TractionToolsApiV1.User);
  }
}(this, function(ApiClient, AccountabilityGroup, Seat, User) {
  'use strict';




  /**
   * The Seat model module.
   * @module model/Seat
   * @version v1
   */

  /**
   * Constructs a new <code>Seat</code>.
   * @alias module:model/Seat
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Seat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Seat} obj Optional instance to populate.
   * @return {module:model/Seat} The populated <code>Seat</code> instance.
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
      if (data.hasOwnProperty('Group')) {
        obj['Group'] = AccountabilityGroup.constructFromObject(data['Group']);
      }
      if (data.hasOwnProperty('User')) {
        obj['User'] = User.constructFromObject(data['User']);
      }
      if (data.hasOwnProperty('Children')) {
        obj['Children'] = ApiClient.convertToType(data['Children'], [Seat]);
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
   * @member {module:model/AccountabilityGroup} Group
   */
  exports.prototype['Group'] = undefined;
  /**
   * @member {module:model/User} User
   */
  exports.prototype['User'] = undefined;
  /**
   * @member {Array.<module:model/Seat>} Children
   */
  exports.prototype['Children'] = undefined;



  return exports;
}));


