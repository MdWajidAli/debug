// global.d.ts
declare global {
  var _mongoClientPromise: Promise<any> | undefined; // Declare the type for _mongoClientPromise
}

export {}; // Make this file a module
