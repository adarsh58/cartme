export const DBConfig = {
    name: "CartMe",
    version: 1,
    objectStoresMeta: [
      {
        store: "cart",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "name", keypath: "name", options: { unique: false } },
          { name: "pid", keypath: "pid", options: { unique: false } },
        ],
      },
    ],
  }