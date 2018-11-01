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

import { DeclassificationDate } from '../model/declassificationDate';
import { ModelError } from '../model/modelError';
import { BaseApi } from './base.api';

/**
* Defaultclassificationvalues service.
* @module DefaultclassificationvaluesApi
*/
export class DefaultclassificationvaluesApi extends BaseApi {
    /**
    * Calculate the default declassification date
    * 
    * Calculates the default declassification date for **nodeId** based on the properties of the node and the current declassification time frame.
    * @param nodeId The identifier of a node.
    */
    calculateDefaultDeclassificationDate(nodeId: string): Promise<DeclassificationDate> {

        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in calculateDefaultDeclassificationDate");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/default-classification-values/{nodeId}/calculate-declassification-date', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
