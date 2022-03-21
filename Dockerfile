FROM node:14
WORKDIR   /isomorphic
ENV  PATH="./node_modules/.bin:$PATH"
COPY . .
EXPOSE 3002
CMD yarn run start:iso-cra


