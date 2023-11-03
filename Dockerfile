# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Docusaurus and its dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Docusaurus project
RUN npm run build

# Expose the port that the Docusaurus development server will run on
EXPOSE 3000

# Start the Docusaurus development server when the container starts
CMD ["npm", "run", "start"]