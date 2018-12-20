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

import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';
import { UserInfo } from '../../content-rest-api/model/userInfo';

export class AuditEntry {
    id: string;
    auditApplicationId: string;
    createdByUser: UserInfo;
    createdAt: DateAlfresco;
    values?: { [key: string]: string; };

    constructor(input?: any) {

        Object.assign(this, input);
        this.createdByUser = input.createdByUser ? new UserInfo(input.createdByUser) : undefined;
        this.createdAt = input.createdAt ? new DateAlfresco(input.createdAt) : undefined;
    }

}