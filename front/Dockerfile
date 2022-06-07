# The first instruction is what image we want to base our container on
# We Use an official Node version 10 image as a parent image
FROM node:16.10.0-alpine 

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .

# Install any needed packages
RUN npm i


# Bundle app source
COPY . .

# Build app
RUN npm run build

EXPOSE 4200

CMD [ "npm", "start" ]