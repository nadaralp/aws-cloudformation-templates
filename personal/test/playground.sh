#!/bin/sh


# aws cloudformation deploy --template-file CustomResource.yml --stack-name nadar-testing-custom --capabilities CAPABILITY_NAMED_IAM

aws cloudformation update-stack --template-body file://CustomResource.yml --stack-name nadar-testing-custom #--capabilities CAPABILITY_NAMED_IAM

# aws s3 cp todo.txt s3://nadar-custom-testing-bucket