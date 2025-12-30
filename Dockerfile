FROM node:24-alpine as builder
WORKDIR /builder
COPY . .

RUN npm i
ARG BACKEND_URL
RUN npm run build

FROM node:24-alpine
WORKDIR /app
EXPOSE 80
COPY --from=builder /builder/dist/bilhete-mixuruca/browser/ .
RUN npm i http-server

ENTRYPOINT ["npx", "http-server", "-a", "0.0.0.0", "-p", "80"]