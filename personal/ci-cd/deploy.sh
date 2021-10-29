#!/bin/sh

# Exampe of deploying with multiple parameter overrides
aws cloudformation deploy --template-file ci_cd.yml --stack-name please-worka --capabilities CAPABILITY_NAMED_IAM \
--parameter-overrides ProjectName=nadar-ci-cd GitHubRepo=ci-cd-test GitHubOwner=nadar-pandologic
