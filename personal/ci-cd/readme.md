# GitHubCiCdPipeline.yml
* Insturctions to create a CI-CD Pipeline with GitHub for a specified branch (TriggerBranch parameter)
* Assumes secret key in Secrets Manager with the **name**: `github_secrets` and **key**: `AWS_CI_CD_GITHUB` 


# MultiStepCiCdPipeline.yml
* Uses GitHubCiCdPipeline.yml to create CI-CD Pipeline for qa and master branches
* dev, qa and master branches have PR checks
* master branch has manual approval


## Deployment example
```
    aws cloudformation deploy --template-file GitHubCiCdPipeline.yml --stack-name my-pipeline --capabilities CAPABILITY_NAMED_IAM \
    --parameter-overrides ProjectName=nadar-ci-cd GitHubRepo=ci-cd-test GitHubOwner=nadar-pandologic TriggerBranch=master
```
