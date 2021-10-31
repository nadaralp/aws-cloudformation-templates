#!/bin/sh

# Exampe of deploying with multiple parameter overrides
aws cloudformation deploy --template-file GitHubCiCdPipeline.yml --stack-name cicd-pipeline --capabilities CAPABILITY_NAMED_IAM \
--parameter-overrides ProjectName=nadar-ci-cd GitHubRepo=ci-cd-test GitHubOwner=nadar-pandologic TriggerBranch=master IsManualApprovalStepActive=true ENVNAME=qa

