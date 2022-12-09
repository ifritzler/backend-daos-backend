## Productos

id: string -> uuid
title: string
price: number
category: string

## Contenedores

### Metodos
- getAll(): Item[] || []
- create(product: object): Item
- getById(id: uuid): Item
- update(id: uuid, changes: object): Item
- delete(id: uuid): void

// Data access object# backend-daos-backend
