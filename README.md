# SkateHub

<p align="center">
  <a href="#gear-build-setup">Build setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#memo-changelog">Changelog</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#memo-changelog">Strapi documentation</a>
</p>

## SkateHub Backend powered by Strapi

The project requires [Node.js](https://nodejs.org), [Docker](https://www.docker.com) and [Strapi](https://strapi.io) to run locally.

## :gear: Build setup

Welcome! Here's a quick guide to getting started with `SkateHub Backend`. Let's dive in:

### 👣 Step 1: Clone the repository

First things first, let's clone the repository onto your local machine. If you're not sure how to do this, no worries! Here's a simple command you can run in your terminal:

```bash
# clone the repository

git clone https://github.com/jpcmf/Backend-GraduateProgram-FullStack-2023.git
```

### 👣 Step 2: Navigate to the project directory

Once the repository is cloned, navigate into the project directory using the cd command in your terminal:

```bash
# navigate to the project directory

cd Backend-GraduateProgram-FullStack-2023
```

### 👣 Step 3: Switch to the develop branch

Our development work usually happens in the develop branch. Make sure you're on the right branch by executing the following command:

```bash
# switch to the develop branch

git checkout develop
```

### 👣 Step 4: Configure environment variables

Before running the project, you'll need to configure the environment variables. This typically involves setting up database credentials and other configurations. Locate the `.env.example` file in the project root directory, and create a new file named `.env` with your configurations. You may need to consult the project documentation for the required variables.

```bash
# configure environment variables

cp .env.example .env
```

### 👣 Step 5: Run MySQL in Docker

If you're using Docker for your database, you'll need to run MySQL in Docker. Ensure Docker is installed on your machine, and then run the following command:

```bash
# run mysql in docker

docker run --name cms-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=admin -d mysql
```

```bash
# pull mysql in docker

docker pull mysql:5.7
```

### 👣 Step 6: Install dependencies

Now that you're in the project directory and on the correct branch, it's time to install all the dependencies. Simply run:

```bash
# install dependencies
npm install
```

### 👣 Step 7: Run the project

You're almost there! To start the application in development mode, just type the following command:

```bash
# run at localhost:1337
npm run development
```

And that's it! Your `SkateHub Backend` should now be up and running locally on your machine.

### 👣 Step 8: Create an admin user in Strapi

Before you can start using Strapi as your backend, you need to create an admin user. Open this url [http://localhost:1337/admin](http://localhost:1337/admin) in your web browser and follow the prompts to set up your admin user.

## :memo: Changelog

### 2024

- 2024-03-17 - Add MySQL2 to handle with database [#4](https://github.com/jpcmf/Backend-GraduateProgram-FullStack-2023/pull/4) _(v0.1.1)_

### 2023

- 2023-10-11 - Add files to the repository [#1](https://github.com/jpcmf/Backend-GraduateProgram-FullStack-2023/pull/1) _(v0.1.0)_

## :rocket: Strapi documentation

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

Made with 💙 by João Paulo Fricks
