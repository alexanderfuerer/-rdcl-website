# Use official Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json only
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install a simple static server globally
RUN npm install -g serve

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Start the server
CMD ["serve", "-s", "dist", "-l", "8080"]
