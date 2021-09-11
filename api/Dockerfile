FROM node:lts

WORKDIR /usr/app

COPY package.json ./

#RUN ls
#RUN npm config set registry http://registry.npmjs.org

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start:dev"]
