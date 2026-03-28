---
id: aws-bedrock-cost-allocation-tagging
title: "Adopt AWS Bedrock cost allocation tagging for usage tracking"
status: inbox
priority: medium
created: 2026-03-23
updated: 2026-03-23
tags:
  - work-item
  - kanban
  - upstream
  - cost
  - aws
owner: 
---

# Adopt AWS Bedrock cost allocation tagging for usage tracking

## Summary

Pi 0.62.0 adds `requestMetadata` on `BedrockOptions` that forwards key-value pairs to the Bedrock Converse API for AWS Cost Explorer split cost allocation.

If we use or plan to use AWS Bedrock models, we can now tag requests with metadata (e.g. chat JID, user, workspace) for per-chat or per-user cost attribution in AWS Cost Explorer.

## Scope

- Determine if we use AWS Bedrock provider (check keychain / model config)
- If so, wire `requestMetadata` with useful dimensions (chat JID, timestamp, session ID)
- Validate tags appear in AWS Cost Explorer

## Updates

### 2026-03-23
- Identified as opportunity from pi 0.62.0 changelog

## Notes

- Only relevant if AWS Bedrock is in the provider lineup
- Tags flow through to AWS Cost Explorer split cost allocation

## Links
- Pi 0.62.0 changelog: "AWS Bedrock cost allocation tagging"
