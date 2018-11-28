## Repo created to practice different relations between SQL tables

**App only has backend in SQL using Sequelize as ORM; api routes tested using Postman**

App has two tables:

- User: allows to record users
- Kudos: users can send kudos between one another

Branches establish different ways to generate relations between the two tables

> List of branches:

1. belongsTo: Kudos belongs to User; `GET` requests to kudos also include users (both to and from); on deleting users, the deletion cascades into Users as well

To work on:

- Eager loading (almost done)
- Cascading delete
- Join table that lists all notes created by user
