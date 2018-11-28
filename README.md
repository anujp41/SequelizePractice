# Repo created to practice different relations between SQL tables

**App only has backend in SQL using Sequelize as ORM; api routes tested using Postman**

App has two tables:

- User: allows to record users
- Kudos: users can send kudos between one another

Branches establish different ways to generate relations between the two tables

## List of branches:

1. **_belongsTo_**: Kudos belongs to User as Sender/Receiver; `GET` requests to kudos also include users (both to and from); on deleting users, the deletion cascades into Users as well
1. **_hasMany_**: Users can send predefined Kudos to any other user; join table will record the users that sent the kudos to other users (TO WORK ON NEXT)

To work on:

- Join table that lists all notes created by user

> Seed folder contains seed data for two tables: Kudos & Users
