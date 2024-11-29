#!/bin/bash

# This script is used to setup the environment for the project


# Create Directory Structure
echo "Creating directory structure..."
mkdir -p models routes middleware config

# Create Files
echo "Creating files..."
touch app.js
touch config/dbConfig.js
touch routes/index.js
touch routes/users.js
touch middleware/auth.js
touch models/user.js
touch routes/auth.js
touch middleware/authMiddleware.js
touch routes/protectedRoute.js
touch .env


