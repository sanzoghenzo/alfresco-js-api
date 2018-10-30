/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { NodeAssocPaging } from '../model/nodeAssocPaging';
import { AssocTargetBody } from '../model/AssocTargetBody';
import { BaseApi } from './baseApi';

/**
 * Associations service.
 * @module api/AssociationsApi
 * @version 0.1.0
 */

/**
 * Constructs a new AssociationsApi.
 * @alias module:api/AssociationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class AssociationsApi extends BaseApi {

    private path: string = '/nodes';

    /**
     * Add node association
     * Add association, with given association type, between source and target node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {module:model/AssocTargetBody} assocTargetBody The target node id and assoc type.
     */
    addAssoc(sourceId: string, assocTargetBody?: AssocTargetBody): Promise<any> {
        let postBody = assocTargetBody;

        // verify the required parameter 'sourceId' is set
        if (sourceId == undefined || sourceId == null) {
            throw this.errorMessage('sourceId', 'addAssoc');
        }

        // verify the required parameter 'assocTargetBody' is set
        if (assocTargetBody == undefined || assocTargetBody == null) {
            throw  this.errorMessage('assocTargetBody', 'addAssoc');
        }


        let pathParams = {
            'sourceId': sourceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{sourceId}/targets', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts, returnType
        );
    }

    /**
     * List node associations
     * Returns a list of source nodes that point to (ie. are associated with) the current target node.\n
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    listSourceNodeAssociations(targetId: string, opts: any): Promise<NodeAssocPaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'targetId' is set
        if (targetId == undefined || targetId == null) {
            throw this.errorMessage('targetId', 'listSourceNodeAssociations');
        }


        let pathParams = {
            'targetId': targetId
        };
        let queryParams = {
            'where': opts['where'],
            'include': opts['include'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{targetId}/sources', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts
        );
    }

    /**
     * List node associations
     * Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    listTargetAssociations(sourceId: string, opts: any): Promise<NodeAssocPaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sourceId' is set
        if (sourceId == undefined || sourceId == null) {
            throw this.errorMessage('sourceId', 'listTargetAssociations');
        }


        let pathParams = {
            'sourceId': sourceId
        };
        let queryParams = {
            'where': opts['where'],
            'include': opts['include'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{sourceId}/targets', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts
        );
    }

    /**
     * Remove node association(s)
     * Remove association(s) between source and target node for given association type. \n\nIf association type is not specified then all associations between source and target are removed.\n
     * @param {String} sourceId The identifier of a node.
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    removeAssoc(sourceId: string, targetId: string, opts: any): Promise<any> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sourceId' is set
        if (sourceId == undefined || sourceId == null) {
            throw this.errorMessage('sourceId', 'removeAssoc');
        }

        // verify the required parameter 'targetId' is set
        if (targetId == undefined || targetId == null) {
            throw  this.errorMessage('targetId', 'removeAssoc');
        }


        let pathParams = {
            'sourceId': sourceId,
            'targetId': targetId
        };
        let queryParams = {
            'assocType': opts['assocType']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{sourceId}/targets/{targetId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }
}
