FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install --only=production

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Expose the necessary ports
EXPOSE 80
EXPOSE 443

# Start the application
CMD ["npm", "start"]

LABEL Name=my-accounting Version=v1