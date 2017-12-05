# CRM Onboarding

## API

### Identificacao
https://pismo.docs.apiary.io/#reference/vip-api/validation-code-vip/check-cpf
https://pismo.docs.apiary.io/#reference/vip-api/validation-code-vip/generate-validation-code

### SMS/Validacao
https://pismo.docs.apiary.io/#reference/users/pre-approved-account-authentication/vip-token-validation

Case invalid:
https://realtimeboard.com/app/board/o9J_k0FKQA4=/?moveToWidget=3074457345882908086

### Uploads
For uploading the images, the app needs the application id. 
This can be obtained by opening a registration with the 
acquisitions API (with parameter "submit" set to "false"):  
http://docs.pismo.apiary.io/#reference/acquisitions/client-application/application-registration

Multipart upload
https://pismo.docs.apiary.io/#reference/uploads/image/multipart-upload

### CardConditions/DueDate
1) Acquire programId
https://pismo.docs.apiary.io/#reference/vip-api/vip/retrieve-vip-user-info

2) Using programId to obtain due dates:
https://pismo.docs.apiary.io/#reference/program/programs-due-dates/get-program-due-dates

### CardCondition/Limit
To retrieve the user's pre approved limit:  
http://docs.pismo.apiary.io/#reference/vip-api/vip/retrieve-vip-user-info

### Registration upload
Registration upload with field "submit" set to "true" for immediate processing. 
http://docs.pismo.apiary.io/#reference/acquisitions/application-actions/application-update