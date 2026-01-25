---
layout: ../../layouts/BlogPost.astro
title: 'TypeScript Patterns I Use Every Day'
description: 'Practical TypeScript patterns that have improved my code quality and caught bugs before they reach production.'
pubDate: 2026-01-10
author: 'James Hawley'
category: 'tech'
---

After three years of writing TypeScript, I've developed a set of patterns that I reach for in almost every project. These aren't exotic type gymnastics—they're practical techniques that make code safer and more maintainable.

## Discriminated Unions for State

Instead of using optional fields and boolean flags, I model state transitions explicitly:

```typescript
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function handleRequest<T>(state: RequestState<T>) {
  switch (state.status) {
    case 'idle':
      return 'Press button to load';
    case 'loading':
      return 'Loading...';
    case 'success':
      return `Got ${state.data}`; // TypeScript knows data exists here
    case 'error':
      return `Error: ${state.error.message}`; // And error exists here
  }
}
```

This pattern eliminates an entire class of bugs where you forget to check if data is loaded before accessing it. The compiler enforces that you handle every case.

## The `satisfies` Operator

Added in TypeScript 4.9, `satisfies` lets you validate that a value matches a type while preserving its specific literal types:

```typescript
type Route = {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

const routes = {
  getUser: { path: '/users/:id', method: 'GET' },
  createUser: { path: '/users', method: 'POST' },
} satisfies Record<string, Route>;

// routes.getUser.method is typed as 'GET', not 'GET' | 'POST' | 'PUT' | 'DELETE'
```

Before `satisfies`, you'd have to choose between type safety (using a type annotation) and preserving literal types (using `as const`). Now you can have both.

## Branded Types for IDs

Primitive types like `string` and `number` don't prevent you from mixing up different kinds of IDs:

```typescript
function getUser(userId: string) { /* ... */ }
function getOrder(orderId: string) { /* ... */ }

const orderId = 'order-123';
getUser(orderId); // No error! But this is probably a bug.
```

Branded types add compile-time distinction:

```typescript
type UserId = string & { readonly brand: unique symbol };
type OrderId = string & { readonly brand: unique symbol };

function userId(id: string): UserId {
  return id as UserId;
}

function orderId(id: string): OrderId {
  return id as OrderId;
}

function getUser(id: UserId) { /* ... */ }

const myOrderId = orderId('order-123');
getUser(myOrderId); // Error! Type 'OrderId' is not assignable to type 'UserId'
```

This catches bugs at compile time that would otherwise slip through to runtime.

## Const Assertions for Configuration

When defining configuration objects, `as const` preserves literal types and makes the object deeply readonly:

```typescript
const config = {
  apiUrl: 'https://api.example.com',
  retryAttempts: 3,
  features: {
    darkMode: true,
    betaFeatures: false,
  },
} as const;

// config.apiUrl is typed as 'https://api.example.com', not string
// config.retryAttempts is typed as 3, not number
// The entire object is readonly
```

This is especially useful when the configuration values are used as discriminants elsewhere in your code.

## Type Guards That Return Useful Types

Instead of just returning `boolean`, type guards can narrow to specific types:

```typescript
function isNonNull<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

const values: (string | null)[] = ['hello', null, 'world'];
const filtered: string[] = values.filter(isNonNull);
// TypeScript knows filtered contains no nulls
```

## What I Avoid

Not every TypeScript feature is worth using. I generally avoid:

- **Complex conditional types** in application code—save them for library types
- **`any` and `as` casts**—they're escape hatches that hide bugs
- **Over-generic code**—if you need three type parameters, reconsider the design

TypeScript is at its best when it catches real bugs without getting in your way. These patterns hit that sweet spot for me.
