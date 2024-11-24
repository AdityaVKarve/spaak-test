Here's what my application does:
1. Sources data from the API link provided (https://oda.ft.dk/api/Sag)
2. Filters the data appropriately using OData (Filters applied to TypeID and PeriodeID)
3. Saves the data to a PostgreSQL database. The database is interfaced via the Prisma ORM (prisma/schema.prisma)
4. The data is made accesible via a REST API I defined via NextJS. I considered using tRPC but NextJS seemed quicker to deploy and 