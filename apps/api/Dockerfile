# Use an official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Set environment variables
ENV DATABASE_URL="postgresql://postgres:postgres@db:5432/music-app"

# Build the application
RUN npm run build

# Start the server
CMD ["npm", "run", "start"]
