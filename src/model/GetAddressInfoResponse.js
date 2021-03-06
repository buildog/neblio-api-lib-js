/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetAddressInfoResponseUtxos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAddressInfoResponseUtxos'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.GetAddressInfoResponse = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.GetAddressInfoResponseUtxos);
  }
}(this, function(ApiClient, GetAddressInfoResponseUtxos) {
  'use strict';




  /**
   * The GetAddressInfoResponse model module.
   * @module model/GetAddressInfoResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetAddressInfoResponse</code>.
   * @alias module:model/GetAddressInfoResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetAddressInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressInfoResponse} obj Optional instance to populate.
   * @return {module:model/GetAddressInfoResponse} The populated <code>GetAddressInfoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('utxos')) {
        obj['utxos'] = ApiClient.convertToType(data['utxos'], [GetAddressInfoResponseUtxos]);
      }
    }
    return obj;
  }

  /**
   * The Neblio Address
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Array of UTXOs held at this address.
   * @member {Array.<module:model/GetAddressInfoResponseUtxos>} utxos
   */
  exports.prototype['utxos'] = undefined;



  return exports;
}));


