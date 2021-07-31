# realtime-chat

It's an simple chat application socket.io based. The front-end is not the focus so it's applied and template from [SamimOnline's](https://bootsnipp.com/SamimOnline).

At now the system can serve static multiple connected front-ends. When a message is sent, another users receive it and print in your message card.

### The system use: 

* `Socket.io` to real time updates
* _soon_ `mongoose` to save messages into a MongoDB Database

<h2 align="center"> 
	🚧  realtime-chat 🚀 Under construction...  🚧
</h2>


## Getting started

### System requirements

Before start, check if you have installed and configured the following tools:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* _soon_ [MongoDB](https://www.mongodb.com/)

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

The script will start the application at the port setted on the `.env` file.

#### As development environment:

```bash
  npm run dev
```

### Access the chat page

This can be found by access <a href="http://localhost:3000" target="blank">localhost:`PORT`<a>

_The `PORT` is that you setted into the `.env` file. Default value is 3000_

---

## License

MIT License © [Ian Miranda](https://github.com/IanMiranda43)