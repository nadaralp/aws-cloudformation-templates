#!/bin/sh

aws s3 cp ./GitHubCiCdPipeline.yml s3://pandologic-public/cloudformation/ci-cd/

# Deployment of multi-branch CI-CD
aws cloudformation deploy --template-file MultiStepCiCdPipeline.yml --stack-name full-integration-9 --capabilities CAPABILITY_NAMED_IAM \
--parameter-overrides GitHubRepo=ci-cd-test GitHubOwner=nadar-pandologic



#Object path: http://{bucket-name}.s3.amazonaws.com/{key}