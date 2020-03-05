import { MongoMemoryReplSet } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';

export const MockMongo = {
  mongo: null,
  get() {
    return this.mongo;
  },

  set(mongo) {
    this.mongo = mongo;
  },

  async start(options) {
    this.mongo = new MongoMemoryReplSet({
      debug: false,
      replSet: {
        storageEngine: 'wiredTiger',
      },
      ...options,
    });

    await this.mongo.waitUntilRunning();

    return this.mongo;
  },

  getUri() {
    return this.mongo.getUri();
  },

  stop() {
    return this.mongo.stop();
  },

  async getCollection(databaseName, collectionName) {
    const connections = await MongoClient.connect(await this.mongo.getConnectionString(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return connections.db(databaseName).collection(collectionName);
  },
};
