# @mike-north/types

[![Build Status](https://travis-ci.org/mike-north/types.svg?branch=master)](https://travis-ci.org/mike-north/types)
[![Version](https://img.shields.io/npm/v/@mike-north/types.svg)](https://www.npmjs.com/package/@mike-north/types)

TypeScript `type`s, `interface`s and `class`es I often use.

## Types

- **[`Deferred`](https://github.com/mike-north/types/blob/master/src/async.ts)** - An abstraction of "work in progress". An inverted promise
- **[`ConstructorArgs`](https://github.com/mike-north/types/blob/master/src/classes.ts)** - Extract the arguments from a class constructor
- **[`AsyncMethodReturns`](https://github.com/mike-north/types/blob/master/src/functions.ts)** - Promisify the return values of all methods on an object
- **[`ExtractPropertyNamesOfType<T>`](https://github.com/mike-north/types/blob/master/src/object.ts)** - Create a string literal type, representing the names of all properties on a type T whose values are assignable to S
- **[`RequiredProps`](https://github.com/mike-north/types/blob/master/src/object.ts)** - Make some or all properties on an object required
- **[`OptionalProps`](https://github.com/mike-north/types/blob/master/src/object.ts)** - Make some or all properties on an object optional

(c) 2018 Mike North