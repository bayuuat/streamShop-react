# Stream Shop Client using React JS and Vite

## Overview

Welcome to the Stream Shop project repository, created by Bayu Aditya Triwibowo (GG3FSGP0293), for the **Generasi GIGIH 3.0** final test. This repository contains the code and resources for a project developed using the React JavaScript library and the Vite build tool. The project aims to showcase my understanding of building web applications using these technologies. This project is the client side from [stream shop server](https://github.com/bayuuat/streamShop-express). Deployed using vercel also pushed to docker hub.

## Deployed Link

- Vercel : https://stream-shop.vercel.app/
- Docker Hub : https://hub.docker.com/r/bayuuat/stream-shop-client

## Features

1. **Video List**
2. **Video Detail**
3. **Comments**
4. **Product list**

## Bonus Features

1. **Search video**
2. **Live Comment using Socket.io**

## How to Run Locally

### Running directly via terminal (npm)

#### Step to Run
1. Clone the repo to your local machine
   ```
   git clone git@github.com:bayuuat/streamShop-react.git
   cd streamShop-react
   ```
2. Create a `.env` file by running 
   ```
   cp .env.example .env
   ```
3. Set the URL in .env
   ```
   VITE_API_URL=type_your_server_url
   ```
4. Install dependencies and start the development server
   ```
   npm install
   npm run dev
   ```
5. Finally, it can be accessed on `http://localhost:5173`

### Running via Pull Docker Image

#### Step to Run
1. Pull the docker image to your local machine
   ```
   docker pull bayuuat/stream-shop-client
   ```
2. Create a container
   ```
   docker run -d -p 5173:5173 --name stream-shop-client bayuuat/stream-shop-client
   ```
3. Finally, it can be accessed on `http://localhost:5173`

## Sneakpeek

![image](https://github.com/bayuuat/streamShop-react/assets/68576415/08e95f5c-8298-47bd-8c46-0cc8a729838d)

![image](https://github.com/bayuuat/streamShop-react/assets/68576415/d8351614-0263-46a3-8973-2d31dc97aa21)
