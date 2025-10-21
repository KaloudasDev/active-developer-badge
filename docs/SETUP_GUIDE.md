# Setup Guide

## Prerequisites

- Node.js 16.0 or higher
- Discord Developer Account
- Discord server with appropriate permissions

## Step 1: Create Discord Application

1. Navigate to [Discord Developer Portal](https://discord.com/developers/applications)
2. Select "New Application"
3. Provide application name and confirm creation

## Step 2: Configure Bot

1. Access the "Bot" section within your application
2. Select "Add Bot" to create bot instance
3. Enable required privileged gateway intents:
   - PRESENCE INTENT
   - SERVER MEMBERS INTENT  
   - MESSAGE CONTENT INTENT

## Step 3: Retrieve Credentials

1. Copy bot token from "Bot" section
2. Copy application ID from "General Information"
3. Store credentials securely for environment configuration

## Step 4: Environment Configuration

1. Navigate to bot directory: `cd bot`
2. Install project dependencies: `npm install`
3. Create environment file: `cp .env.example .env`
4. Update environment variables with your credentials

## Step 5: Bot Invitation

1. Access "OAuth2" → "URL Generator"
2. Select required scopes:
   - bot
   - applications.commands
3. Configure bot permissions:
   - Send Messages
   - Use Slash Commands
4. Use generated URL for server invitation

## Step 6: Bot Execution

```bash
npm start
```

## Step 7: Command Verification

1. Allow 1-2 minutes for command registration
2. Execute `/badge` command in any server channel
3. Verify successful command response

![Command](https://i.imgur.com/vZyym96.png)

## Step 8: Badge Claim Process

1. Wait 24 hours following successful command execution
2. Visit [Active Developer Portal](https://discord.com/developers/active-developer)
3. Complete badge claim procedure

## Verification Requirements

- Successful slash command execution
- Continuous bot operation during 24-hour period
- Single command execution satisfies requirements
