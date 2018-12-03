#!/bin/sh
set -eux

aws s3 cp build s3://tech-when-service --recursive
