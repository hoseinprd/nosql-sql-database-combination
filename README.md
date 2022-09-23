# Repository Pattern


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
