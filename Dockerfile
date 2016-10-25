# set base image
FROM mhart/alpine-node

WORKDIR /src
ADD . .
EXPOSE 3200
CMD ["npm", "install"]
CMD ["node", "index.js"]
