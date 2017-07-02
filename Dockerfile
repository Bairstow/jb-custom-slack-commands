FROM mhart/alpine-node:base-6
WORKDIR /src
ADD . .
EXPOSE 3200
RUN npm install
CMD ["node", "server.js"]
