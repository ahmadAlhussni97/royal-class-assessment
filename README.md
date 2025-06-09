# Royal Class Assessment

This repository contains a microservices example consisting of two NestJS services (`service-a` and `service-b`) communicating via Redis.  
The services demonstrate basic request handling and inter-service messaging using Redis and NestJS microservices.

**************************************************************************************************************************

# clone project:

https://github.com/ahmadAlhussni97/royal-class-assessment.git


**************************************************************************************************************************
# Project structure

royal-class-assessment/
├── service-a/
│   ├── src/
│   │   ├── app.controller.ts  → handles /double/:num
│   │   ├── app.service.ts     → sends message to service-b
│   │   └── main.ts            → starts HTTP + Redis client
│   └── test/                  → Jest tests
│
├── service-b/
│   ├── src/
│   │   ├── app.controller.ts  → handles /square/:num
│   │   ├── app.service.ts     → processes 'double' job
│   │   └── main.ts            → starts HTTP + Redis server
│   └── test/                  → Jest tests
│
├── docker-compose.yml         → runs Redis
└── README.md                  → setup + usage


# Install Application

cd service-a && npm install
cd service-b && npm install

**************************************************************************************************************************
# Run Application :

# 1- Run For Development

# Run Redis
docker-compose up -d

# Terminal 1
cd service-a && npm run start:dev

# Terminal 2
cd service-b && npm run start:dev


# 2- Run for Testing
npm run test

**************************************************************************************************************************

# Api:
  service-a -> service-b : http://localhost:3000/double/2
  service-b -> http://localhost:3001/square/7

