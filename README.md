# Repository Pattern

## Not completed yet

![UML Overall Diagram](/assets/Repository.jpg)



## Repository Folder structure
```
src/common/
└── repository/
    ├── context/
    │   ├── postgres
    │   └── mongodb/
    │       └── mongodb.generic.repository.ts
    ├── interface/
    │   └── generic.repository.interface.ts
    ├── models (schema + entity)/
    │   ├── users/
    │   │   ├── schema/
    │   │   │   └── user.schema.ts
    │   │   └── user.repository.ts
    │   └── index.ts
    ├── services/
    │   ├── repository.service.ts
    │   └── repository.service.spec.ts
    ├── repository.abstract.ts
    └── repository.module.ts``
```



## Usage

### Step 1
```
npm run install
```

If there is `docker + docker` compose available to you:

Connecting to database:

```
docker compose up -d
```

then

```
npm run dev
```

if there is no docker and docker compose:

first run your own db:

and modify dev as scripts in `package.json`

```
DB_HOST=your_mongodb_uri nest start --watch
```


then

```
npm run dev
```


