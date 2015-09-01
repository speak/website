#!/usr/bin/env bash

echo "Deploying to $1"
ENVIRONMENT=$1

DEFAULT="speak"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=speak-${ENVIRONMENT}-site
DIR=_site/
aws  s3  sync $DIR s3://$BUCKET/ --profile "$PROFILE"
