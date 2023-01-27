On the server side were implemented CRUD operations, for the work used GraphQL and MongoDB database.
Custom errors were described in the error folder, the configuration for connecting to the database was described in config/dbConnection, the main schemas were described in schema and models were described in model. Communication logic was described through services and repositories. The input point is index.ts in the root of the src folder.
The entire api is available at /graphql . By default graphi is enabled for tests. The creation, fetching, editing, and deleting of user entries is implemented.

On the client side, an interface was implemented to interact with the apollo-based server api, styled with chakra ui. The apollo folder contains the default server config, the api describes quests and mutations.
