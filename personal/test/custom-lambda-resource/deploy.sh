#!/bin/sh

zip -r lambda.zip ./
aws s3 cp lambda.zip s3://pandologic-public/lambda/

echo "uploaded"