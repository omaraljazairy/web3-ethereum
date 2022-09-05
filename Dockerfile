FROM node:16.17.0
WORKDIR /blockchain
RUN apt-get update
RUN apt-get install -y wget vim git zip unzip less sqlite3 bsdmainutils bc

# copy the react app to the container
COPY ./package.json /blockchain
RUN npm install