# The first instruction is what image we want to base our container on
# We Use an official Node version 10 image as a parent image
FROM node:16.10.0-alpine

# Create an environment variable for MongoDB URI
ENV MONGODB_URI='mongodb://localhost:27017/final-project'

# Set working directory for the project to /usr/src/app
# NOTE: all the directives that follow in the Dockerfile will be executed
# in working directory.
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./


# Install any needed packages specified in package.json
RUN npm install

# Copy the contents of the project folder into the working directory of
# docker image
COPY . /usr/src/app/

EXPOSE 3000
 
CMD [ "npm", "start" ]