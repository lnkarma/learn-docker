import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { createClient } from "redis";

console.log(process.env.REDIS_HOST);
const app = express();
const client = createClient({
  url: "redis://redis:6379",
});

client.on("error", (err) => console.log(err));

async function main() {
  await client.connect();

  await client.set("key", "value");
  const value = await client.get("key");
  await client.disconnect();
  AppDataSource.initialize()
    .then(async () => {
      console.log("Inserting a new user into the database...");
      const user = new User();
      user.firstName = "Timber";
      user.lastName = "Saw";
      user.age = 25;
      await AppDataSource.manager.save(user);
      console.log("Saved a new user with id: " + user.id);

      console.log("Loading users from the database...");
      const users = await AppDataSource.manager.find(User);
      console.log("Loaded users: ", users);

      console.log(
        "Here you can setup and run express / fastify / any other framework."
      );
      app.listen(8000, () => {
        console.log("server listening on port 8000");
      });
    })
    .catch((error) => console.log(error));
}

main();

app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});
