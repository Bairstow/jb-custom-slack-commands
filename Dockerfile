FROM mhart/alpine-node:6
WORKDIR /src
ADD . .
EXPOSE 3200
RUN npm install
CMD ["node", "server.js"]
