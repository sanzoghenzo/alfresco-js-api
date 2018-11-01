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

import { GroupRepresentation } from './groupRepresentation';
import { LightAppRepresentation } from './lightAppRepresentation';

export class UserRepresentation {
    apps?: any;
    capabilities?: any;
    company?: string;
    created?: Date;
    email?: string;
    externalId?: string;
    firstName?: string;
    fullname?: string;
    groups?: any;
    id?: number;
    lastName?: string;
    lastUpdate?: Date;
    latestSyncTimeStamp?: Date;
    password?: string;
    pictureId?: number;
    primaryGroup?: GroupRepresentation;
    status?: string;
    tenantId?: number;
    tenantName?: string;
    tenantPictureId?: number;
    type?: string;
}
