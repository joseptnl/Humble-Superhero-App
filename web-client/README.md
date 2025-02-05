# Web Client

Web Client made in **React** to play with API endpoints.

## Build & Run

The development has been carried out using nodejs `v22.13.1`. Hence, the ideal version to use if you don't want to worry about dependecy issues is that one.

First you must run:

```bash
$ npm install
```

Once all dependencies are installed you can run in **dev** environment executing:

```bash
$ npm run dev
```

If everything went alright, you must be able to see the app at http://localhost:5173/. Check the command output to see exactly the port the application is running on.

**Note**: Do not forget to run API too, otherwise client won't be able to call the endpoints. You can find API project in the root folder of the same monorepo where web-client is located.

## Shadcn & Tailwind

The components used in the app are built upon Shadcn components like cards, inputs & buttons. Tailwind is also used to avoid css styles headaches.
