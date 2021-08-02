
<h1 align="center"> 
	🚧  realtime-chat 🚀 Under construction...  🚧
</h1>

It's an simple chat application socket.io based. The front-end is not the focus so it's using an template based on an [SamimOnline's](https://bootsnipp.com/SamimOnline) work.

At now the system can serve static multiple connected front-ends. When a message is sent, another users receive it and print in your message card. An simple login system without authentication is in progress too.


### The system use: 

* `Socket.io` to real time updates
* `SQLite` as initial and simple DB
* `Sequelize` to manage SQL DB

## Getting started

### System requirements

Before start, check if you have installed and configured the following tools:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)

### Getting the repository

Clone this repository by running:

```bash
  git clone https://github.com/IanMiranda43/realtime-chat
```

### Configuring the project

Access the project folder and then set your server port in the `.env` file.

```env
  PORT=3000
```
_The `.env.example` file have this layout, just set your data there and remove the `.example` extension from it._

### Installing the dependencies:

In the project folder run de following code. This will create a `node_modules` folder and download and install all the project dependencies in there. 

```bash
  node install
```

### Start the server:

The script will start the application at the port setted on the `.env` file and run the DB migrations.

```bash
  npm run dev
```

### Access the chat page

This can be found by access [localhost:`PORT`](http://localhost:3000). There you will see the login page, make your register or login and is already to use (_If you doesn't have an account, just submit. The system will automatically sign in or make your register register_).

_The `PORT` is that you setted into the `.env` file. Default value is 3000_

---

## License

MIT License © [Ian Miranda](https://github.com/IanMiranda43)