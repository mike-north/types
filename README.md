# @mike-north/types

![Node.js CI (master)](https://github.com/mike-north/types/workflows/Node.js%20CI%20(master)/badge.svg)
[![Version](https://img.shields.io/npm/v/@mike-north/types.svg)](https://www.npmjs.com/package/@mike-north/types)

TypeScript `type`s, `interface`s and `class`es I often use.

## Types

- **[`Deferred<T>`](https://github.com/mike-north/types/blob/master/src/async.ts)** - An abstraction of "work in progress". An inverted `Promise<T>`
- **[`ConstructorArgs<T>`](https://github.com/mike-north/types/blob/master/src/classes.ts)** - Extract the arguments from a class constructor
- **[`AsyncMethodReturns<T>`](https://github.com/mike-north/types/blob/master/src/functions.ts)** - Promisify the return values of all methods on a type <T>
- **[`ExtractPropertyNamesOfType<T, S>`](https://github.com/mike-north/types/blob/master/src/objects.ts)** - Create a string literal type, representing the names of all properties on a type T whose values are assignable to S
- **[`RequiredProps<T, S>`](https://github.com/mike-north/types/blob/master/src/objects.ts)** - Make properties whose names are assignable to S on object T required
- **[`OptionalProps<T, S>`](https://github.com/mike-north/types/blob/master/src/objecst.ts)** - Make properties whose names are assignable to S on object T optional
- **[`OptionalPropertyNamesOf<T>`](https://github.com/mike-north/types/blob/master/src/objects.ts)** - Get the names of optional properties of T
- **[`RequiredPropertyNamesOf<T>`](https://github.com/mike-north/types/blob/master/src/objects.ts)** - Get the names of required properties of T

(c) 2018 Mike North
