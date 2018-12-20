# .AdminusersApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpdateUsersUsingPUT**](AdminusersApi.md#bulkUpdateUsersUsingPUT) | **PUT** /enterprise/admin/users | Bulk update a list of users
[**createNewUserUsingPOST**](AdminusersApi.md#createNewUserUsingPOST) | **POST** /enterprise/admin/users | Create a user
[**getUserUsingGET**](AdminusersApi.md#getUserUsingGET) | **GET** /enterprise/admin/users/{userId} | Get a user
[**getUsersUsingGET**](AdminusersApi.md#getUsersUsingGET) | **GET** /enterprise/admin/users | Query users
[**updateUserDetailsUsingPUT**](AdminusersApi.md#updateUserDetailsUsingPUT) | **PUT** /enterprise/admin/users/{userId} | Update a user


<a name="bulkUpdateUsersUsingPUT"></a>
# **bulkUpdateUsersUsingPUT**
> bulkUpdateUsersUsingPUT(update)

Bulk update a list of users

### Example
```javascript
import AdminusersApi from 'AdminusersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminusersApi = new AdminusersApi(this.alfrescoApi);


adminusersApi.bulkUpdateUsersUsingPUT(update).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update** | [**BulkUserUpdateRepresentation**](BulkUserUpdateRepresentation.md)| update | 

### Return type

null (empty response body)

<a name="createNewUserUsingPOST"></a>
# **createNewUserUsingPOST**
> UserRepresentation createNewUserUsingPOST(userRepresentation)

Create a user

### Example
```javascript
import AdminusersApi from 'AdminusersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminusersApi = new AdminusersApi(this.alfrescoApi);


adminusersApi.createNewUserUsingPOST(userRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> AbstractUserRepresentation getUserUsingGET(userIdopts)

Get a user

### Example
```javascript
import AdminusersApi from 'AdminusersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminusersApi = new AdminusersApi(this.alfrescoApi);

let opts = { 
  'summary': true //  | summary
};

adminusersApi.getUserUsingGET(userIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**AbstractUserRepresentation**](AbstractUserRepresentation.md)

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> ResultListDataRepresentationAbstractUserRepresentation getUsersUsingGET(opts)

Query users

### Example
```javascript
import AdminusersApi from 'AdminusersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminusersApi = new AdminusersApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example //  | filter
  'status': status_example //  | status
  'accountType': accountType_example //  | accountType
  'sort': sort_example //  | sort
  'company': company_example //  | company
  'start': 56 //  | start
  'page': 56 //  | page
  'size': 56 //  | size
  'groupId': 789 //  | groupId
  'tenantId': 789 //  | tenantId
  'summary': true //  | summary
};

adminusersApi.getUsersUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| filter | [optional] 
 **status** | **string**| status | [optional] 
 **accountType** | **string**| accountType | [optional] 
 **sort** | **string**| sort | [optional] 
 **company** | **string**| company | [optional] 
 **start** | **number**| start | [optional] 
 **page** | **number**| page | [optional] 
 **size** | **number**| size | [optional] 
 **groupId** | **number**| groupId | [optional] 
 **tenantId** | **number**| tenantId | [optional] 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**ResultListDataRepresentationAbstractUserRepresentation**](ResultListDataRepresentationAbstractUserRepresentation.md)

<a name="updateUserDetailsUsingPUT"></a>
# **updateUserDetailsUsingPUT**
> updateUserDetailsUsingPUT(userIduserRepresentation)

Update a user

### Example
```javascript
import AdminusersApi from 'AdminusersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminusersApi = new AdminusersApi(this.alfrescoApi);


adminusersApi.updateUserDetailsUsingPUT(userIduserRepresentation).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

null (empty response body)
