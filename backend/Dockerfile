# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# Expose the port NestJS will run on
EXPOSE 8001

# Command to run the app
CMD ["node", "dist/main"]

