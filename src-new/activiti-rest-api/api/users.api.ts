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

import { ResetPasswordRepresentation } from '../model/resetPasswordRepresentation';
import { ResultListDataRepresentationLightUserRepresentation } from '../model/resultListDataRepresentationLightUserRepresentation';
import { UserActionRepresentation } from '../model/userActionRepresentation';
import { UserRepresentation } from '../model/userRepresentation';
import { BaseApi } from './base.api';

/**
* Users service.
* @module UsersApi
*/
export class UsersApi extends BaseApi {
    /**
    * Execute an action for a specific user
    * 
    * Typical action is updating/reset password
    * @param userId userId
    * @param actionRequest actionRequest
    */
    executeActionUsingPOST(userId: number, actionRequest: UserActionRepresentation): Promise<{}> {

        let postBody = actionRequest;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in executeActionUsingPOST");
        }

        if (actionRequest === undefined || actionRequest === null) {
            throw new Error("Required param 'actionRequest' in executeActionUsingPOST");
        }

        let pathParams = {
            'userId': userId
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
            '/enterprise/users/{userId}', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Stream user profile picture
        * 
        * 
        * @param userId userId
        */
    getProfilePictureUsingGET1(userId: number): Promise<{}> {

        let postBody = null;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in getProfilePictureUsingGET1");
        }

        let pathParams = {
            'userId': userId
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
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/enterprise/users/{userId}/picture', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a user
        * 
        * 
        * @param userId userId
        */
    getUserUsingGET1(userId: number): Promise<UserRepresentation> {

        let postBody = null;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in getUserUsingGET1");
        }

        let pathParams = {
            'userId': userId
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
            '/enterprise/users/{userId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query users
        * 
        * A common use case is that a user wants to select another user (eg. when assigning a task) or group.
        * @param filter filter
        * @param email email
        * @param externalId externalId
        * @param externalIdCaseInsensitive externalIdCaseInsensitive
        * @param excludeTaskId excludeTaskId
        * @param excludeProcessId excludeProcessId
        * @param groupId groupId
        * @param tenantId tenantId
        */
    getUsersUsingGET1(opts: any): Promise<ResultListDataRepresentationLightUserRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
            'filter': opts['filter'],
            'email': opts['email'],
            'externalId': opts['externalId'],
            'externalIdCaseInsensitive': opts['externalIdCaseInsensitive'],
            'excludeTaskId': opts['excludeTaskId'],
            'excludeProcessId': opts['excludeProcessId'],
            'groupId': opts['groupId'],
            'tenantId': opts['tenantId'],
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
            '/enterprise/users', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Request a password reset
        * 
        * 
        * @param resetPassword resetPassword
        */
    requestPasswordResetUsingPOST(resetPassword: ResetPasswordRepresentation): Promise<{}> {

        let postBody = resetPassword;

        if (resetPassword === undefined || resetPassword === null) {
            throw new Error("Required param 'resetPassword' in requestPasswordResetUsingPOST");
        }

        let pathParams = {

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
            '/enterprise/idm/passwords', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a user
        * 
        * 
        * @param userId userId
        * @param userRequest userRequest
        */
    updateUserUsingPUT(userId: number, userRequest: UserRepresentation): Promise<UserRepresentation> {

        let postBody = userRequest;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in updateUserUsingPUT");
        }

        if (userRequest === undefined || userRequest === null) {
            throw new Error("Required param 'userRequest' in updateUserUsingPUT");
        }

        let pathParams = {
            'userId': userId
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
            '/enterprise/users/{userId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
