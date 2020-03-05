# mock-mongo
Mocks a Mongo Replica Set, using [`mongodb-memory-server`](https://www.npmjs.com/package/mongodb-memory-server).

## Motivation
There are many motivations in life for building packages, this one was simple. We use the mock DB everywhere, and we needed to prove that we could publish libraries in a nice simple concise manner. So here we are.

## Usage
In your test file, import `MockMongo`:
```
import { MockMongo } from '@lyvly/mock-mongo
```

To start the db:
```
await MockMongo.start([options])
```
By default, we use the following `mongodb-memory-server` [options](https://github.com/nodkz/mongodb-memory-server/blob/master/README.md#available-options-for-mongomemoryserver):
```
  debug: false,
  replSet: {
    storageEngine: 'wiredTiger',
  },
```
You can override this by passing your own options to `start`.

`start` returns the mongo memory server instance.

To get the connection uri:
```
await MockMongo.getUri()
```

To stop the DB:
```
await MockMongo.stop()
```

To get a native mongo collection to test against:
```
await MockMongo.getCollection(databaseName, collectionName)
```

To get the mongo memory server instance
```
MockMongo.get()
```

To set a new mongo memory server instance
```
MockMongo.set(mongoInstance)
```