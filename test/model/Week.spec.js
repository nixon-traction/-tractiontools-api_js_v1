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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TractionToolsApiV1);
  }
}(this, function(expect, TractionToolsApiV1) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TractionToolsApiV1.Week();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Week', function() {
    it('should create an instance of Week', function() {
      // uncomment below and update the code to test Week
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be.a(TractionToolsApiV1.Week);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "Key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

    it('should have the property forWeekNumber (base name: "ForWeekNumber")', function() {
      // uncomment below and update the code to test the property forWeekNumber
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

    it('should have the property forWeek (base name: "ForWeek")', function() {
      // uncomment below and update the code to test the property forWeek
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

    it('should have the property displayDate (base name: "DisplayDate")', function() {
      // uncomment below and update the code to test the property displayDate
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

    it('should have the property localDate (base name: "LocalDate")', function() {
      // uncomment below and update the code to test the property localDate
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

    it('should have the property isCurrentWeek (base name: "IsCurrentWeek")', function() {
      // uncomment below and update the code to test the property isCurrentWeek
      //var instance = new TractionToolsApiV1.Week();
      //expect(instance).to.be();
    });

  });

}));
