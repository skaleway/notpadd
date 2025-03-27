
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Space
 * 
 */
export type Space = $Result.DefaultSelection<Prisma.$SpacePayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model AuthorizedAccessCredentials
 * 
 */
export type AuthorizedAccessCredentials = $Result.DefaultSelection<Prisma.$AuthorizedAccessCredentialsPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  Draft: 'Draft',
  Published: 'Published',
  Archived: 'Archived'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const MemberRole: {
  Owner: 'Owner',
  Member: 'Member',
  Moderator: 'Moderator',
  Editor: 'Editor'
};

export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole]


export const UserRole: {
  Admin: 'Admin',
  User: 'User'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AccountType: {
  Free: 'Free',
  Basic: 'Basic',
  Premium: 'Premium',
  Enterprise: 'Enterprise'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type MemberRole = $Enums.MemberRole

export const MemberRole: typeof $Enums.MemberRole

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.space`: Exposes CRUD operations for the **Space** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spaces
    * const spaces = await prisma.space.findMany()
    * ```
    */
  get space(): Prisma.SpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorizedAccessCredentials`: Exposes CRUD operations for the **AuthorizedAccessCredentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorizedAccessCredentials
    * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.findMany()
    * ```
    */
  get authorizedAccessCredentials(): Prisma.AuthorizedAccessCredentialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    Member: 'Member',
    Space: 'Space',
    Article: 'Article',
    AuthorizedAccessCredentials: 'AuthorizedAccessCredentials',
    Subscription: 'Subscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "team" | "member" | "space" | "article" | "authorizedAccessCredentials" | "subscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Space: {
        payload: Prisma.$SpacePayload<ExtArgs>
        fields: Prisma.SpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findFirst: {
            args: Prisma.SpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          findMany: {
            args: Prisma.SpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          create: {
            args: Prisma.SpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          createMany: {
            args: Prisma.SpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          delete: {
            args: Prisma.SpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          update: {
            args: Prisma.SpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          deleteMany: {
            args: Prisma.SpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>[]
          }
          upsert: {
            args: Prisma.SpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpacePayload>
          }
          aggregate: {
            args: Prisma.SpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpace>
          }
          groupBy: {
            args: Prisma.SpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpaceCountArgs<ExtArgs>
            result: $Utils.Optional<SpaceCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      AuthorizedAccessCredentials: {
        payload: Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>
        fields: Prisma.AuthorizedAccessCredentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorizedAccessCredentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorizedAccessCredentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>
          }
          findFirst: {
            args: Prisma.AuthorizedAccessCredentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorizedAccessCredentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>
          }
          findMany: {
            args: Prisma.AuthorizedAccessCredentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>[]
          }
          create: {
            args: Prisma.AuthorizedAccessCredentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>
          }
          createMany: {
            args: Prisma.AuthorizedAccessCredentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorizedAccessCredentialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>[]
          }
          delete: {
            args: Prisma.AuthorizedAccessCredentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>
          }
          update: {
            args: Prisma.AuthorizedAccessCredentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>
          }
          deleteMany: {
            args: Prisma.AuthorizedAccessCredentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorizedAccessCredentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorizedAccessCredentialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>[]
          }
          upsert: {
            args: Prisma.AuthorizedAccessCredentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizedAccessCredentialsPayload>
          }
          aggregate: {
            args: Prisma.AuthorizedAccessCredentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorizedAccessCredentials>
          }
          groupBy: {
            args: Prisma.AuthorizedAccessCredentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorizedAccessCredentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorizedAccessCredentialsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorizedAccessCredentialsCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    team?: TeamOmit
    member?: MemberOmit
    space?: SpaceOmit
    article?: ArticleOmit
    authorizedAccessCredentials?: AuthorizedAccessCredentialsOmit
    subscription?: SubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    member: number
    spaces: number
    AuthorizedAccessCredentials: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | UserCountOutputTypeCountMemberArgs
    spaces?: boolean | UserCountOutputTypeCountSpacesArgs
    AuthorizedAccessCredentials?: boolean | UserCountOutputTypeCountAuthorizedAccessCredentialsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthorizedAccessCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizedAccessCredentialsWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    Space: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    Space?: boolean | TeamCountOutputTypeCountSpaceArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountSpaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
  }


  /**
   * Count Type SpaceCountOutputType
   */

  export type SpaceCountOutputType = {
    AuthorizedAccessCredentials: number
    articles: number
  }

  export type SpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthorizedAccessCredentials?: boolean | SpaceCountOutputTypeCountAuthorizedAccessCredentialsArgs
    articles?: boolean | SpaceCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpaceCountOutputType
     */
    select?: SpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountAuthorizedAccessCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizedAccessCredentialsWhereInput
  }

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    imageUrl: string | null
    accounttype: $Enums.AccountType | null
    role: $Enums.UserRole | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    imageUrl: string | null
    accounttype: $Enums.AccountType | null
    role: $Enums.UserRole | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    imageUrl: number
    accounttype: number
    role: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    imageUrl?: true
    accounttype?: true
    role?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    imageUrl?: true
    accounttype?: true
    role?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    imageUrl?: true
    accounttype?: true
    role?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    name: string | null
    imageUrl: string | null
    accounttype: $Enums.AccountType
    role: $Enums.UserRole
    craetedAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    accounttype?: boolean
    role?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    member?: boolean | User$memberArgs<ExtArgs>
    spaces?: boolean | User$spacesArgs<ExtArgs>
    AuthorizedAccessCredentials?: boolean | User$AuthorizedAccessCredentialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    accounttype?: boolean
    role?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    accounttype?: boolean
    role?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    accounttype?: boolean
    role?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "name" | "imageUrl" | "accounttype" | "role" | "craetedAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | User$memberArgs<ExtArgs>
    spaces?: boolean | User$spacesArgs<ExtArgs>
    AuthorizedAccessCredentials?: boolean | User$AuthorizedAccessCredentialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>[]
      spaces: Prisma.$SpacePayload<ExtArgs>[]
      AuthorizedAccessCredentials: Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      email: string
      name: string | null
      imageUrl: string | null
      accounttype: $Enums.AccountType
      role: $Enums.UserRole
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends User$memberArgs<ExtArgs> = {}>(args?: Subset<T, User$memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    spaces<T extends User$spacesArgs<ExtArgs> = {}>(args?: Subset<T, User$spacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    AuthorizedAccessCredentials<T extends User$AuthorizedAccessCredentialsArgs<ExtArgs> = {}>(args?: Subset<T, User$AuthorizedAccessCredentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly accounttype: FieldRef<"User", 'AccountType'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly craetedAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.member
   */
  export type User$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * User.spaces
   */
  export type User$spacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    cursor?: SpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * User.AuthorizedAccessCredentials
   */
  export type User$AuthorizedAccessCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    where?: AuthorizedAccessCredentialsWhereInput
    orderBy?: AuthorizedAccessCredentialsOrderByWithRelationInput | AuthorizedAccessCredentialsOrderByWithRelationInput[]
    cursor?: AuthorizedAccessCredentialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorizedAccessCredentialsScalarFieldEnum | AuthorizedAccessCredentialsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    membersLifeTimeCount: number | null
  }

  export type TeamSumAggregateOutputType = {
    membersLifeTimeCount: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    creatorId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
    membersLifeTimeCount: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    creatorId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
    membersLifeTimeCount: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    creatorId: number
    craetedAt: number
    updatedAt: number
    membersLifeTimeCount: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    membersLifeTimeCount?: true
  }

  export type TeamSumAggregateInputType = {
    membersLifeTimeCount?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    craetedAt?: true
    updatedAt?: true
    membersLifeTimeCount?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    craetedAt?: true
    updatedAt?: true
    membersLifeTimeCount?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    craetedAt?: true
    updatedAt?: true
    membersLifeTimeCount?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    creatorId: string
    craetedAt: Date
    updatedAt: Date
    membersLifeTimeCount: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    membersLifeTimeCount?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    Space?: boolean | Team$SpaceArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    membersLifeTimeCount?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    membersLifeTimeCount?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    creatorId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    membersLifeTimeCount?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "creatorId" | "craetedAt" | "updatedAt" | "membersLifeTimeCount", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    Space?: boolean | Team$SpaceArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$MemberPayload<ExtArgs>[]
      Space: Prisma.$SpacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      creatorId: string
      craetedAt: Date
      updatedAt: Date
      membersLifeTimeCount: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Space<T extends Team$SpaceArgs<ExtArgs> = {}>(args?: Subset<T, Team$SpaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly creatorId: FieldRef<"Team", 'String'>
    readonly craetedAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly membersLifeTimeCount: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Team.Space
   */
  export type Team$SpaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    cursor?: SpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    role: $Enums.MemberRole | null
    userId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    role: $Enums.MemberRole | null
    userId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    teamId: number
    role: number
    userId: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    teamId?: true
    role?: true
    userId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    teamId?: true
    role?: true
    userId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    teamId?: true
    role?: true
    userId?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    teamId: string
    role: $Enums.MemberRole
    userId: string
    craetedAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    role?: boolean
    userId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    role?: boolean
    userId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    role?: boolean
    userId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    teamId?: boolean
    role?: boolean
    userId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "role" | "userId" | "craetedAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      role: $Enums.MemberRole
      userId: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly teamId: FieldRef<"Member", 'String'>
    readonly role: FieldRef<"Member", 'MemberRole'>
    readonly userId: FieldRef<"Member", 'String'>
    readonly craetedAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Space
   */

  export type AggregateSpace = {
    _count: SpaceCountAggregateOutputType | null
    _avg: SpaceAvgAggregateOutputType | null
    _sum: SpaceSumAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  export type SpaceAvgAggregateOutputType = {
    articlecount: number | null
  }

  export type SpaceSumAggregateOutputType = {
    articlecount: number | null
  }

  export type SpaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    articlecount: number | null
  }

  export type SpaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    articlecount: number | null
  }

  export type SpaceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    teamId: number
    createdAt: number
    updatedAt: number
    userId: number
    articlecount: number
    _all: number
  }


  export type SpaceAvgAggregateInputType = {
    articlecount?: true
  }

  export type SpaceSumAggregateInputType = {
    articlecount?: true
  }

  export type SpaceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    articlecount?: true
  }

  export type SpaceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    articlecount?: true
  }

  export type SpaceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    articlecount?: true
    _all?: true
  }

  export type SpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Space to aggregate.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spaces
    **/
    _count?: true | SpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceMaxAggregateInputType
  }

  export type GetSpaceAggregateType<T extends SpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpace[P]>
      : GetScalarType<T[P], AggregateSpace[P]>
  }




  export type SpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpaceWhereInput
    orderBy?: SpaceOrderByWithAggregationInput | SpaceOrderByWithAggregationInput[]
    by: SpaceScalarFieldEnum[] | SpaceScalarFieldEnum
    having?: SpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceCountAggregateInputType | true
    _avg?: SpaceAvgAggregateInputType
    _sum?: SpaceSumAggregateInputType
    _min?: SpaceMinAggregateInputType
    _max?: SpaceMaxAggregateInputType
  }

  export type SpaceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    teamId: string
    createdAt: Date
    updatedAt: Date
    userId: string
    articlecount: number
    _count: SpaceCountAggregateOutputType | null
    _avg: SpaceAvgAggregateOutputType | null
    _sum: SpaceSumAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  type GetSpaceGroupByPayload<T extends SpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceGroupByOutputType[P]>
        }
      >
    >


  export type SpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    articlecount?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    AuthorizedAccessCredentials?: boolean | Space$AuthorizedAccessCredentialsArgs<ExtArgs>
    User?: boolean | Space$UserArgs<ExtArgs>
    articles?: boolean | Space$articlesArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    articlecount?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    User?: boolean | Space$UserArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    articlecount?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    User?: boolean | Space$UserArgs<ExtArgs>
  }, ExtArgs["result"]["space"]>

  export type SpaceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    articlecount?: boolean
  }

  export type SpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "teamId" | "createdAt" | "updatedAt" | "userId" | "articlecount", ExtArgs["result"]["space"]>
  export type SpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    AuthorizedAccessCredentials?: boolean | Space$AuthorizedAccessCredentialsArgs<ExtArgs>
    User?: boolean | Space$UserArgs<ExtArgs>
    articles?: boolean | Space$articlesArgs<ExtArgs>
    _count?: boolean | SpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    User?: boolean | Space$UserArgs<ExtArgs>
  }
  export type SpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    User?: boolean | Space$UserArgs<ExtArgs>
  }

  export type $SpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Space"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      AuthorizedAccessCredentials: Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
      articles: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      teamId: string
      createdAt: Date
      updatedAt: Date
      userId: string
      articlecount: number
    }, ExtArgs["result"]["space"]>
    composites: {}
  }

  type SpaceGetPayload<S extends boolean | null | undefined | SpaceDefaultArgs> = $Result.GetResult<Prisma.$SpacePayload, S>

  type SpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpaceCountAggregateInputType | true
    }

  export interface SpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Space'], meta: { name: 'Space' } }
    /**
     * Find zero or one Space that matches the filter.
     * @param {SpaceFindUniqueArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpaceFindUniqueArgs>(args: SelectSubset<T, SpaceFindUniqueArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Space that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpaceFindUniqueOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, SpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpaceFindFirstArgs>(args?: SelectSubset<T, SpaceFindFirstArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Space that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, SpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spaces
     * const spaces = await prisma.space.findMany()
     * 
     * // Get first 10 Spaces
     * const spaces = await prisma.space.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceWithIdOnly = await prisma.space.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpaceFindManyArgs>(args?: SelectSubset<T, SpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Space.
     * @param {SpaceCreateArgs} args - Arguments to create a Space.
     * @example
     * // Create one Space
     * const Space = await prisma.space.create({
     *   data: {
     *     // ... data to create a Space
     *   }
     * })
     * 
     */
    create<T extends SpaceCreateArgs>(args: SelectSubset<T, SpaceCreateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Spaces.
     * @param {SpaceCreateManyArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpaceCreateManyArgs>(args?: SelectSubset<T, SpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spaces and returns the data saved in the database.
     * @param {SpaceCreateManyAndReturnArgs} args - Arguments to create many Spaces.
     * @example
     * // Create many Spaces
     * const space = await prisma.space.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, SpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Space.
     * @param {SpaceDeleteArgs} args - Arguments to delete one Space.
     * @example
     * // Delete one Space
     * const Space = await prisma.space.delete({
     *   where: {
     *     // ... filter to delete one Space
     *   }
     * })
     * 
     */
    delete<T extends SpaceDeleteArgs>(args: SelectSubset<T, SpaceDeleteArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Space.
     * @param {SpaceUpdateArgs} args - Arguments to update one Space.
     * @example
     * // Update one Space
     * const space = await prisma.space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpaceUpdateArgs>(args: SelectSubset<T, SpaceUpdateArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Spaces.
     * @param {SpaceDeleteManyArgs} args - Arguments to filter Spaces to delete.
     * @example
     * // Delete a few Spaces
     * const { count } = await prisma.space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpaceDeleteManyArgs>(args?: SelectSubset<T, SpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpaceUpdateManyArgs>(args: SelectSubset<T, SpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces and returns the data updated in the database.
     * @param {SpaceUpdateManyAndReturnArgs} args - Arguments to update many Spaces.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spaces and only return the `id`
     * const spaceWithIdOnly = await prisma.space.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, SpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Space.
     * @param {SpaceUpsertArgs} args - Arguments to update or create a Space.
     * @example
     * // Update or create a Space
     * const space = await prisma.space.upsert({
     *   create: {
     *     // ... data to create a Space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Space we want to update
     *   }
     * })
     */
    upsert<T extends SpaceUpsertArgs>(args: SelectSubset<T, SpaceUpsertArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceCountArgs} args - Arguments to filter Spaces to count.
     * @example
     * // Count the number of Spaces
     * const count = await prisma.space.count({
     *   where: {
     *     // ... the filter for the Spaces we want to count
     *   }
     * })
    **/
    count<T extends SpaceCountArgs>(
      args?: Subset<T, SpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpaceAggregateArgs>(args: Subset<T, SpaceAggregateArgs>): Prisma.PrismaPromise<GetSpaceAggregateType<T>>

    /**
     * Group by Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceGroupByArgs['orderBy'] }
        : { orderBy?: SpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Space model
   */
  readonly fields: SpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    AuthorizedAccessCredentials<T extends Space$AuthorizedAccessCredentialsArgs<ExtArgs> = {}>(args?: Subset<T, Space$AuthorizedAccessCredentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    User<T extends Space$UserArgs<ExtArgs> = {}>(args?: Subset<T, Space$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    articles<T extends Space$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Space$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Space model
   */ 
  interface SpaceFieldRefs {
    readonly id: FieldRef<"Space", 'String'>
    readonly name: FieldRef<"Space", 'String'>
    readonly description: FieldRef<"Space", 'String'>
    readonly teamId: FieldRef<"Space", 'String'>
    readonly createdAt: FieldRef<"Space", 'DateTime'>
    readonly updatedAt: FieldRef<"Space", 'DateTime'>
    readonly userId: FieldRef<"Space", 'String'>
    readonly articlecount: FieldRef<"Space", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Space findUnique
   */
  export type SpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findUniqueOrThrow
   */
  export type SpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space findFirst
   */
  export type SpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findFirstOrThrow
   */
  export type SpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Space to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     */
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space findMany
   */
  export type SpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter, which Spaces to fetch.
     */
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     */
    orderBy?: SpaceOrderByWithRelationInput | SpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spaces.
     */
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     */
    skip?: number
    distinct?: SpaceScalarFieldEnum | SpaceScalarFieldEnum[]
  }

  /**
   * Space create
   */
  export type SpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Space.
     */
    data: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
  }

  /**
   * Space createMany
   */
  export type SpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Space createManyAndReturn
   */
  export type SpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to create many Spaces.
     */
    data: SpaceCreateManyInput | SpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space update
   */
  export type SpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Space.
     */
    data: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
    /**
     * Choose, which Space to update.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space updateMany
   */
  export type SpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
  }

  /**
   * Space updateManyAndReturn
   */
  export type SpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * The data used to update Spaces.
     */
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Space upsert
   */
  export type SpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Space to update in case it exists.
     */
    where: SpaceWhereUniqueInput
    /**
     * In case the Space found by the `where` argument doesn't exist, create a new Space with this data.
     */
    create: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
    /**
     * In case the Space was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
  }

  /**
   * Space delete
   */
  export type SpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    /**
     * Filter which Space to delete.
     */
    where: SpaceWhereUniqueInput
  }

  /**
   * Space deleteMany
   */
  export type SpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spaces to delete
     */
    where?: SpaceWhereInput
    /**
     * Limit how many Spaces to delete.
     */
    limit?: number
  }

  /**
   * Space.AuthorizedAccessCredentials
   */
  export type Space$AuthorizedAccessCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    where?: AuthorizedAccessCredentialsWhereInput
    orderBy?: AuthorizedAccessCredentialsOrderByWithRelationInput | AuthorizedAccessCredentialsOrderByWithRelationInput[]
    cursor?: AuthorizedAccessCredentialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorizedAccessCredentialsScalarFieldEnum | AuthorizedAccessCredentialsScalarFieldEnum[]
  }

  /**
   * Space.User
   */
  export type Space$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Space.articles
   */
  export type Space$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Space without action
   */
  export type SpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    spaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    spaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    status: number
    content: number
    spaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    status?: true
    spaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    status?: true
    spaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    status?: true
    content?: true
    spaceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string | null
    status: $Enums.ProjectStatus
    content: JsonValue | null
    spaceId: string
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    content?: boolean
    spaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "description" | "status" | "content" | "spaceId" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    space?: boolean | SpaceDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      space: Prisma.$SpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string | null
      status: $Enums.ProjectStatus
      content: Prisma.JsonValue | null
      spaceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    space<T extends SpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpaceDefaultArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */ 
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly slug: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly description: FieldRef<"Article", 'String'>
    readonly status: FieldRef<"Article", 'ProjectStatus'>
    readonly content: FieldRef<"Article", 'Json'>
    readonly spaceId: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model AuthorizedAccessCredentials
   */

  export type AggregateAuthorizedAccessCredentials = {
    _count: AuthorizedAccessCredentialsCountAggregateOutputType | null
    _min: AuthorizedAccessCredentialsMinAggregateOutputType | null
    _max: AuthorizedAccessCredentialsMaxAggregateOutputType | null
  }

  export type AuthorizedAccessCredentialsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    spaceId: string | null
    next_notpadd_userId: string | null
    next_notpadd_spaceId: string | null
    secretkey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorizedAccessCredentialsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    spaceId: string | null
    next_notpadd_userId: string | null
    next_notpadd_spaceId: string | null
    secretkey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorizedAccessCredentialsCountAggregateOutputType = {
    id: number
    userId: number
    spaceId: number
    next_notpadd_userId: number
    next_notpadd_spaceId: number
    secretkey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorizedAccessCredentialsMinAggregateInputType = {
    id?: true
    userId?: true
    spaceId?: true
    next_notpadd_userId?: true
    next_notpadd_spaceId?: true
    secretkey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorizedAccessCredentialsMaxAggregateInputType = {
    id?: true
    userId?: true
    spaceId?: true
    next_notpadd_userId?: true
    next_notpadd_spaceId?: true
    secretkey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorizedAccessCredentialsCountAggregateInputType = {
    id?: true
    userId?: true
    spaceId?: true
    next_notpadd_userId?: true
    next_notpadd_spaceId?: true
    secretkey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorizedAccessCredentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorizedAccessCredentials to aggregate.
     */
    where?: AuthorizedAccessCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedAccessCredentials to fetch.
     */
    orderBy?: AuthorizedAccessCredentialsOrderByWithRelationInput | AuthorizedAccessCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorizedAccessCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedAccessCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedAccessCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorizedAccessCredentials
    **/
    _count?: true | AuthorizedAccessCredentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorizedAccessCredentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorizedAccessCredentialsMaxAggregateInputType
  }

  export type GetAuthorizedAccessCredentialsAggregateType<T extends AuthorizedAccessCredentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorizedAccessCredentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorizedAccessCredentials[P]>
      : GetScalarType<T[P], AggregateAuthorizedAccessCredentials[P]>
  }




  export type AuthorizedAccessCredentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizedAccessCredentialsWhereInput
    orderBy?: AuthorizedAccessCredentialsOrderByWithAggregationInput | AuthorizedAccessCredentialsOrderByWithAggregationInput[]
    by: AuthorizedAccessCredentialsScalarFieldEnum[] | AuthorizedAccessCredentialsScalarFieldEnum
    having?: AuthorizedAccessCredentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorizedAccessCredentialsCountAggregateInputType | true
    _min?: AuthorizedAccessCredentialsMinAggregateInputType
    _max?: AuthorizedAccessCredentialsMaxAggregateInputType
  }

  export type AuthorizedAccessCredentialsGroupByOutputType = {
    id: string
    userId: string
    spaceId: string
    next_notpadd_userId: string
    next_notpadd_spaceId: string
    secretkey: string
    createdAt: Date
    updatedAt: Date
    _count: AuthorizedAccessCredentialsCountAggregateOutputType | null
    _min: AuthorizedAccessCredentialsMinAggregateOutputType | null
    _max: AuthorizedAccessCredentialsMaxAggregateOutputType | null
  }

  type GetAuthorizedAccessCredentialsGroupByPayload<T extends AuthorizedAccessCredentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorizedAccessCredentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorizedAccessCredentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorizedAccessCredentialsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorizedAccessCredentialsGroupByOutputType[P]>
        }
      >
    >


  export type AuthorizedAccessCredentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    next_notpadd_userId?: boolean
    next_notpadd_spaceId?: boolean
    secretkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | AuthorizedAccessCredentials$UserArgs<ExtArgs>
    Space?: boolean | AuthorizedAccessCredentials$SpaceArgs<ExtArgs>
  }, ExtArgs["result"]["authorizedAccessCredentials"]>

  export type AuthorizedAccessCredentialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    next_notpadd_userId?: boolean
    next_notpadd_spaceId?: boolean
    secretkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | AuthorizedAccessCredentials$UserArgs<ExtArgs>
    Space?: boolean | AuthorizedAccessCredentials$SpaceArgs<ExtArgs>
  }, ExtArgs["result"]["authorizedAccessCredentials"]>

  export type AuthorizedAccessCredentialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    next_notpadd_userId?: boolean
    next_notpadd_spaceId?: boolean
    secretkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | AuthorizedAccessCredentials$UserArgs<ExtArgs>
    Space?: boolean | AuthorizedAccessCredentials$SpaceArgs<ExtArgs>
  }, ExtArgs["result"]["authorizedAccessCredentials"]>

  export type AuthorizedAccessCredentialsSelectScalar = {
    id?: boolean
    userId?: boolean
    spaceId?: boolean
    next_notpadd_userId?: boolean
    next_notpadd_spaceId?: boolean
    secretkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthorizedAccessCredentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "spaceId" | "next_notpadd_userId" | "next_notpadd_spaceId" | "secretkey" | "createdAt" | "updatedAt", ExtArgs["result"]["authorizedAccessCredentials"]>
  export type AuthorizedAccessCredentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AuthorizedAccessCredentials$UserArgs<ExtArgs>
    Space?: boolean | AuthorizedAccessCredentials$SpaceArgs<ExtArgs>
  }
  export type AuthorizedAccessCredentialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AuthorizedAccessCredentials$UserArgs<ExtArgs>
    Space?: boolean | AuthorizedAccessCredentials$SpaceArgs<ExtArgs>
  }
  export type AuthorizedAccessCredentialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AuthorizedAccessCredentials$UserArgs<ExtArgs>
    Space?: boolean | AuthorizedAccessCredentials$SpaceArgs<ExtArgs>
  }

  export type $AuthorizedAccessCredentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorizedAccessCredentials"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Space: Prisma.$SpacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      spaceId: string
      next_notpadd_userId: string
      next_notpadd_spaceId: string
      secretkey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authorizedAccessCredentials"]>
    composites: {}
  }

  type AuthorizedAccessCredentialsGetPayload<S extends boolean | null | undefined | AuthorizedAccessCredentialsDefaultArgs> = $Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload, S>

  type AuthorizedAccessCredentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorizedAccessCredentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorizedAccessCredentialsCountAggregateInputType | true
    }

  export interface AuthorizedAccessCredentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorizedAccessCredentials'], meta: { name: 'AuthorizedAccessCredentials' } }
    /**
     * Find zero or one AuthorizedAccessCredentials that matches the filter.
     * @param {AuthorizedAccessCredentialsFindUniqueArgs} args - Arguments to find a AuthorizedAccessCredentials
     * @example
     * // Get one AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorizedAccessCredentialsFindUniqueArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsFindUniqueArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AuthorizedAccessCredentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorizedAccessCredentialsFindUniqueOrThrowArgs} args - Arguments to find a AuthorizedAccessCredentials
     * @example
     * // Get one AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorizedAccessCredentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AuthorizedAccessCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedAccessCredentialsFindFirstArgs} args - Arguments to find a AuthorizedAccessCredentials
     * @example
     * // Get one AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorizedAccessCredentialsFindFirstArgs>(args?: SelectSubset<T, AuthorizedAccessCredentialsFindFirstArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AuthorizedAccessCredentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedAccessCredentialsFindFirstOrThrowArgs} args - Arguments to find a AuthorizedAccessCredentials
     * @example
     * // Get one AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorizedAccessCredentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorizedAccessCredentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AuthorizedAccessCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedAccessCredentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.findMany()
     * 
     * // Get first 10 AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorizedAccessCredentialsWithIdOnly = await prisma.authorizedAccessCredentials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorizedAccessCredentialsFindManyArgs>(args?: SelectSubset<T, AuthorizedAccessCredentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AuthorizedAccessCredentials.
     * @param {AuthorizedAccessCredentialsCreateArgs} args - Arguments to create a AuthorizedAccessCredentials.
     * @example
     * // Create one AuthorizedAccessCredentials
     * const AuthorizedAccessCredentials = await prisma.authorizedAccessCredentials.create({
     *   data: {
     *     // ... data to create a AuthorizedAccessCredentials
     *   }
     * })
     * 
     */
    create<T extends AuthorizedAccessCredentialsCreateArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsCreateArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AuthorizedAccessCredentials.
     * @param {AuthorizedAccessCredentialsCreateManyArgs} args - Arguments to create many AuthorizedAccessCredentials.
     * @example
     * // Create many AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorizedAccessCredentialsCreateManyArgs>(args?: SelectSubset<T, AuthorizedAccessCredentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthorizedAccessCredentials and returns the data saved in the database.
     * @param {AuthorizedAccessCredentialsCreateManyAndReturnArgs} args - Arguments to create many AuthorizedAccessCredentials.
     * @example
     * // Create many AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthorizedAccessCredentials and only return the `id`
     * const authorizedAccessCredentialsWithIdOnly = await prisma.authorizedAccessCredentials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorizedAccessCredentialsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorizedAccessCredentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AuthorizedAccessCredentials.
     * @param {AuthorizedAccessCredentialsDeleteArgs} args - Arguments to delete one AuthorizedAccessCredentials.
     * @example
     * // Delete one AuthorizedAccessCredentials
     * const AuthorizedAccessCredentials = await prisma.authorizedAccessCredentials.delete({
     *   where: {
     *     // ... filter to delete one AuthorizedAccessCredentials
     *   }
     * })
     * 
     */
    delete<T extends AuthorizedAccessCredentialsDeleteArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsDeleteArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AuthorizedAccessCredentials.
     * @param {AuthorizedAccessCredentialsUpdateArgs} args - Arguments to update one AuthorizedAccessCredentials.
     * @example
     * // Update one AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorizedAccessCredentialsUpdateArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsUpdateArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AuthorizedAccessCredentials.
     * @param {AuthorizedAccessCredentialsDeleteManyArgs} args - Arguments to filter AuthorizedAccessCredentials to delete.
     * @example
     * // Delete a few AuthorizedAccessCredentials
     * const { count } = await prisma.authorizedAccessCredentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorizedAccessCredentialsDeleteManyArgs>(args?: SelectSubset<T, AuthorizedAccessCredentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorizedAccessCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedAccessCredentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorizedAccessCredentialsUpdateManyArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorizedAccessCredentials and returns the data updated in the database.
     * @param {AuthorizedAccessCredentialsUpdateManyAndReturnArgs} args - Arguments to update many AuthorizedAccessCredentials.
     * @example
     * // Update many AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthorizedAccessCredentials and only return the `id`
     * const authorizedAccessCredentialsWithIdOnly = await prisma.authorizedAccessCredentials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorizedAccessCredentialsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AuthorizedAccessCredentials.
     * @param {AuthorizedAccessCredentialsUpsertArgs} args - Arguments to update or create a AuthorizedAccessCredentials.
     * @example
     * // Update or create a AuthorizedAccessCredentials
     * const authorizedAccessCredentials = await prisma.authorizedAccessCredentials.upsert({
     *   create: {
     *     // ... data to create a AuthorizedAccessCredentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorizedAccessCredentials we want to update
     *   }
     * })
     */
    upsert<T extends AuthorizedAccessCredentialsUpsertArgs>(args: SelectSubset<T, AuthorizedAccessCredentialsUpsertArgs<ExtArgs>>): Prisma__AuthorizedAccessCredentialsClient<$Result.GetResult<Prisma.$AuthorizedAccessCredentialsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AuthorizedAccessCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedAccessCredentialsCountArgs} args - Arguments to filter AuthorizedAccessCredentials to count.
     * @example
     * // Count the number of AuthorizedAccessCredentials
     * const count = await prisma.authorizedAccessCredentials.count({
     *   where: {
     *     // ... the filter for the AuthorizedAccessCredentials we want to count
     *   }
     * })
    **/
    count<T extends AuthorizedAccessCredentialsCountArgs>(
      args?: Subset<T, AuthorizedAccessCredentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorizedAccessCredentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorizedAccessCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedAccessCredentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorizedAccessCredentialsAggregateArgs>(args: Subset<T, AuthorizedAccessCredentialsAggregateArgs>): Prisma.PrismaPromise<GetAuthorizedAccessCredentialsAggregateType<T>>

    /**
     * Group by AuthorizedAccessCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizedAccessCredentialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorizedAccessCredentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorizedAccessCredentialsGroupByArgs['orderBy'] }
        : { orderBy?: AuthorizedAccessCredentialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorizedAccessCredentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorizedAccessCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorizedAccessCredentials model
   */
  readonly fields: AuthorizedAccessCredentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorizedAccessCredentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorizedAccessCredentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends AuthorizedAccessCredentials$UserArgs<ExtArgs> = {}>(args?: Subset<T, AuthorizedAccessCredentials$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Space<T extends AuthorizedAccessCredentials$SpaceArgs<ExtArgs> = {}>(args?: Subset<T, AuthorizedAccessCredentials$SpaceArgs<ExtArgs>>): Prisma__SpaceClient<$Result.GetResult<Prisma.$SpacePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthorizedAccessCredentials model
   */ 
  interface AuthorizedAccessCredentialsFieldRefs {
    readonly id: FieldRef<"AuthorizedAccessCredentials", 'String'>
    readonly userId: FieldRef<"AuthorizedAccessCredentials", 'String'>
    readonly spaceId: FieldRef<"AuthorizedAccessCredentials", 'String'>
    readonly next_notpadd_userId: FieldRef<"AuthorizedAccessCredentials", 'String'>
    readonly next_notpadd_spaceId: FieldRef<"AuthorizedAccessCredentials", 'String'>
    readonly secretkey: FieldRef<"AuthorizedAccessCredentials", 'String'>
    readonly createdAt: FieldRef<"AuthorizedAccessCredentials", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthorizedAccessCredentials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthorizedAccessCredentials findUnique
   */
  export type AuthorizedAccessCredentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorizedAccessCredentials to fetch.
     */
    where: AuthorizedAccessCredentialsWhereUniqueInput
  }

  /**
   * AuthorizedAccessCredentials findUniqueOrThrow
   */
  export type AuthorizedAccessCredentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorizedAccessCredentials to fetch.
     */
    where: AuthorizedAccessCredentialsWhereUniqueInput
  }

  /**
   * AuthorizedAccessCredentials findFirst
   */
  export type AuthorizedAccessCredentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorizedAccessCredentials to fetch.
     */
    where?: AuthorizedAccessCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedAccessCredentials to fetch.
     */
    orderBy?: AuthorizedAccessCredentialsOrderByWithRelationInput | AuthorizedAccessCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorizedAccessCredentials.
     */
    cursor?: AuthorizedAccessCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedAccessCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedAccessCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorizedAccessCredentials.
     */
    distinct?: AuthorizedAccessCredentialsScalarFieldEnum | AuthorizedAccessCredentialsScalarFieldEnum[]
  }

  /**
   * AuthorizedAccessCredentials findFirstOrThrow
   */
  export type AuthorizedAccessCredentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorizedAccessCredentials to fetch.
     */
    where?: AuthorizedAccessCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedAccessCredentials to fetch.
     */
    orderBy?: AuthorizedAccessCredentialsOrderByWithRelationInput | AuthorizedAccessCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorizedAccessCredentials.
     */
    cursor?: AuthorizedAccessCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedAccessCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedAccessCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorizedAccessCredentials.
     */
    distinct?: AuthorizedAccessCredentialsScalarFieldEnum | AuthorizedAccessCredentialsScalarFieldEnum[]
  }

  /**
   * AuthorizedAccessCredentials findMany
   */
  export type AuthorizedAccessCredentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorizedAccessCredentials to fetch.
     */
    where?: AuthorizedAccessCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorizedAccessCredentials to fetch.
     */
    orderBy?: AuthorizedAccessCredentialsOrderByWithRelationInput | AuthorizedAccessCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorizedAccessCredentials.
     */
    cursor?: AuthorizedAccessCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorizedAccessCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorizedAccessCredentials.
     */
    skip?: number
    distinct?: AuthorizedAccessCredentialsScalarFieldEnum | AuthorizedAccessCredentialsScalarFieldEnum[]
  }

  /**
   * AuthorizedAccessCredentials create
   */
  export type AuthorizedAccessCredentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorizedAccessCredentials.
     */
    data: XOR<AuthorizedAccessCredentialsCreateInput, AuthorizedAccessCredentialsUncheckedCreateInput>
  }

  /**
   * AuthorizedAccessCredentials createMany
   */
  export type AuthorizedAccessCredentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorizedAccessCredentials.
     */
    data: AuthorizedAccessCredentialsCreateManyInput | AuthorizedAccessCredentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorizedAccessCredentials createManyAndReturn
   */
  export type AuthorizedAccessCredentialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * The data used to create many AuthorizedAccessCredentials.
     */
    data: AuthorizedAccessCredentialsCreateManyInput | AuthorizedAccessCredentialsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorizedAccessCredentials update
   */
  export type AuthorizedAccessCredentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorizedAccessCredentials.
     */
    data: XOR<AuthorizedAccessCredentialsUpdateInput, AuthorizedAccessCredentialsUncheckedUpdateInput>
    /**
     * Choose, which AuthorizedAccessCredentials to update.
     */
    where: AuthorizedAccessCredentialsWhereUniqueInput
  }

  /**
   * AuthorizedAccessCredentials updateMany
   */
  export type AuthorizedAccessCredentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorizedAccessCredentials.
     */
    data: XOR<AuthorizedAccessCredentialsUpdateManyMutationInput, AuthorizedAccessCredentialsUncheckedUpdateManyInput>
    /**
     * Filter which AuthorizedAccessCredentials to update
     */
    where?: AuthorizedAccessCredentialsWhereInput
    /**
     * Limit how many AuthorizedAccessCredentials to update.
     */
    limit?: number
  }

  /**
   * AuthorizedAccessCredentials updateManyAndReturn
   */
  export type AuthorizedAccessCredentialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * The data used to update AuthorizedAccessCredentials.
     */
    data: XOR<AuthorizedAccessCredentialsUpdateManyMutationInput, AuthorizedAccessCredentialsUncheckedUpdateManyInput>
    /**
     * Filter which AuthorizedAccessCredentials to update
     */
    where?: AuthorizedAccessCredentialsWhereInput
    /**
     * Limit how many AuthorizedAccessCredentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorizedAccessCredentials upsert
   */
  export type AuthorizedAccessCredentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorizedAccessCredentials to update in case it exists.
     */
    where: AuthorizedAccessCredentialsWhereUniqueInput
    /**
     * In case the AuthorizedAccessCredentials found by the `where` argument doesn't exist, create a new AuthorizedAccessCredentials with this data.
     */
    create: XOR<AuthorizedAccessCredentialsCreateInput, AuthorizedAccessCredentialsUncheckedCreateInput>
    /**
     * In case the AuthorizedAccessCredentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorizedAccessCredentialsUpdateInput, AuthorizedAccessCredentialsUncheckedUpdateInput>
  }

  /**
   * AuthorizedAccessCredentials delete
   */
  export type AuthorizedAccessCredentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
    /**
     * Filter which AuthorizedAccessCredentials to delete.
     */
    where: AuthorizedAccessCredentialsWhereUniqueInput
  }

  /**
   * AuthorizedAccessCredentials deleteMany
   */
  export type AuthorizedAccessCredentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorizedAccessCredentials to delete
     */
    where?: AuthorizedAccessCredentialsWhereInput
    /**
     * Limit how many AuthorizedAccessCredentials to delete.
     */
    limit?: number
  }

  /**
   * AuthorizedAccessCredentials.User
   */
  export type AuthorizedAccessCredentials$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuthorizedAccessCredentials.Space
   */
  export type AuthorizedAccessCredentials$SpaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Space
     */
    select?: SpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Space
     */
    omit?: SpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpaceInclude<ExtArgs> | null
    where?: SpaceWhereInput
  }

  /**
   * AuthorizedAccessCredentials without action
   */
  export type AuthorizedAccessCredentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizedAccessCredentials
     */
    select?: AuthorizedAccessCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorizedAccessCredentials
     */
    omit?: AuthorizedAccessCredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizedAccessCredentialsInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    plan: string | null
    price: number | null
    currency: string | null
    interval: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    plan: string | null
    price: number | null
    currency: string | null
    interval: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    plan: number
    price: number
    currency: number
    interval: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    price?: true
  }

  export type SubscriptionSumAggregateInputType = {
    price?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    plan?: true
    price?: true
    currency?: true
    interval?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    plan?: true
    price?: true
    currency?: true
    interval?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    plan?: true
    price?: true
    currency?: true
    interval?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    plan: string
    price: number
    currency: string
    interval: string
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    price?: boolean
    currency?: boolean
    interval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    price?: boolean
    currency?: boolean
    interval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    price?: boolean
    currency?: boolean
    interval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    plan?: boolean
    price?: boolean
    currency?: boolean
    interval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan" | "price" | "currency" | "interval" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plan: string
      price: number
      currency: string
      interval: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'String'>
    readonly price: FieldRef<"Subscription", 'Float'>
    readonly currency: FieldRef<"Subscription", 'String'>
    readonly interval: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    accounttype: 'accounttype',
    role: 'role',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creatorId: 'creatorId',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt',
    membersLifeTimeCount: 'membersLifeTimeCount'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    role: 'role',
    userId: 'userId',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const SpaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    articlecount: 'articlecount'
  };

  export type SpaceScalarFieldEnum = (typeof SpaceScalarFieldEnum)[keyof typeof SpaceScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    status: 'status',
    content: 'content',
    spaceId: 'spaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const AuthorizedAccessCredentialsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    spaceId: 'spaceId',
    next_notpadd_userId: 'next_notpadd_userId',
    next_notpadd_spaceId: 'next_notpadd_spaceId',
    secretkey: 'secretkey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorizedAccessCredentialsScalarFieldEnum = (typeof AuthorizedAccessCredentialsScalarFieldEnum)[keyof typeof AuthorizedAccessCredentialsScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    price: 'price',
    currency: 'currency',
    interval: 'interval',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MemberRole'
   */
  export type EnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole'>
    


  /**
   * Reference to a field of type 'MemberRole[]'
   */
  export type ListEnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    accounttype?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    craetedAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    member?: MemberListRelationFilter
    spaces?: SpaceListRelationFilter
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    accounttype?: SortOrder
    role?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByRelationAggregateInput
    spaces?: SpaceOrderByRelationAggregateInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    accounttype?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    craetedAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    member?: MemberListRelationFilter
    spaces?: SpaceListRelationFilter
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    accounttype?: SortOrder
    role?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    accounttype?: EnumAccountTypeWithAggregatesFilter<"User"> | $Enums.AccountType
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    craetedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    creatorId?: StringFilter<"Team"> | string
    craetedAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    membersLifeTimeCount?: IntFilter<"Team"> | number
    members?: MemberListRelationFilter
    Space?: SpaceListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    membersLifeTimeCount?: SortOrder
    members?: MemberOrderByRelationAggregateInput
    Space?: SpaceOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    creatorId?: StringFilter<"Team"> | string
    craetedAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    membersLifeTimeCount?: IntFilter<"Team"> | number
    members?: MemberListRelationFilter
    Space?: SpaceListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    membersLifeTimeCount?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    creatorId?: StringWithAggregatesFilter<"Team"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    membersLifeTimeCount?: IntWithAggregatesFilter<"Team"> | number
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    teamId?: StringFilter<"Member"> | string
    role?: EnumMemberRoleFilter<"Member"> | $Enums.MemberRole
    userId?: StringFilter<"Member"> | string
    craetedAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    teamId?: StringFilter<"Member"> | string
    role?: EnumMemberRoleFilter<"Member"> | $Enums.MemberRole
    userId?: StringFilter<"Member"> | string
    craetedAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    teamId?: StringWithAggregatesFilter<"Member"> | string
    role?: EnumMemberRoleWithAggregatesFilter<"Member"> | $Enums.MemberRole
    userId?: StringWithAggregatesFilter<"Member"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type SpaceWhereInput = {
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    id?: StringFilter<"Space"> | string
    name?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    teamId?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    userId?: StringFilter<"Space"> | string
    articlecount?: IntFilter<"Space"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    articles?: ArticleListRelationFilter
  }

  export type SpaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    articlecount?: SortOrder
    team?: TeamOrderByWithRelationInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    articles?: ArticleOrderByRelationAggregateInput
  }

  export type SpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpaceWhereInput | SpaceWhereInput[]
    OR?: SpaceWhereInput[]
    NOT?: SpaceWhereInput | SpaceWhereInput[]
    name?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    teamId?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    userId?: StringFilter<"Space"> | string
    articlecount?: IntFilter<"Space"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    articles?: ArticleListRelationFilter
  }, "id">

  export type SpaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    articlecount?: SortOrder
    _count?: SpaceCountOrderByAggregateInput
    _avg?: SpaceAvgOrderByAggregateInput
    _max?: SpaceMaxOrderByAggregateInput
    _min?: SpaceMinOrderByAggregateInput
    _sum?: SpaceSumOrderByAggregateInput
  }

  export type SpaceScalarWhereWithAggregatesInput = {
    AND?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    OR?: SpaceScalarWhereWithAggregatesInput[]
    NOT?: SpaceScalarWhereWithAggregatesInput | SpaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Space"> | string
    name?: StringWithAggregatesFilter<"Space"> | string
    description?: StringNullableWithAggregatesFilter<"Space"> | string | null
    teamId?: StringWithAggregatesFilter<"Space"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Space"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Space"> | Date | string
    userId?: StringWithAggregatesFilter<"Space"> | string
    articlecount?: IntWithAggregatesFilter<"Space"> | number
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    description?: StringNullableFilter<"Article"> | string | null
    status?: EnumProjectStatusFilter<"Article"> | $Enums.ProjectStatus
    content?: JsonNullableFilter<"Article">
    spaceId?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    content?: SortOrderInput | SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    space?: SpaceOrderByWithRelationInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    slug_spaceId?: ArticleSlugSpaceIdCompoundUniqueInput
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    description?: StringNullableFilter<"Article"> | string | null
    status?: EnumProjectStatusFilter<"Article"> | $Enums.ProjectStatus
    content?: JsonNullableFilter<"Article">
    spaceId?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    space?: XOR<SpaceScalarRelationFilter, SpaceWhereInput>
  }, "id" | "slug" | "slug_spaceId">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    content?: SortOrderInput | SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    slug?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    description?: StringNullableWithAggregatesFilter<"Article"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Article"> | $Enums.ProjectStatus
    content?: JsonNullableWithAggregatesFilter<"Article">
    spaceId?: StringWithAggregatesFilter<"Article"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type AuthorizedAccessCredentialsWhereInput = {
    AND?: AuthorizedAccessCredentialsWhereInput | AuthorizedAccessCredentialsWhereInput[]
    OR?: AuthorizedAccessCredentialsWhereInput[]
    NOT?: AuthorizedAccessCredentialsWhereInput | AuthorizedAccessCredentialsWhereInput[]
    id?: StringFilter<"AuthorizedAccessCredentials"> | string
    userId?: StringFilter<"AuthorizedAccessCredentials"> | string
    spaceId?: StringFilter<"AuthorizedAccessCredentials"> | string
    next_notpadd_userId?: StringFilter<"AuthorizedAccessCredentials"> | string
    next_notpadd_spaceId?: StringFilter<"AuthorizedAccessCredentials"> | string
    secretkey?: StringFilter<"AuthorizedAccessCredentials"> | string
    createdAt?: DateTimeFilter<"AuthorizedAccessCredentials"> | Date | string
    updatedAt?: DateTimeFilter<"AuthorizedAccessCredentials"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Space?: XOR<SpaceNullableScalarRelationFilter, SpaceWhereInput> | null
  }

  export type AuthorizedAccessCredentialsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    next_notpadd_userId?: SortOrder
    next_notpadd_spaceId?: SortOrder
    secretkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Space?: SpaceOrderByWithRelationInput
  }

  export type AuthorizedAccessCredentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    next_notpadd_spaceId?: string
    AND?: AuthorizedAccessCredentialsWhereInput | AuthorizedAccessCredentialsWhereInput[]
    OR?: AuthorizedAccessCredentialsWhereInput[]
    NOT?: AuthorizedAccessCredentialsWhereInput | AuthorizedAccessCredentialsWhereInput[]
    userId?: StringFilter<"AuthorizedAccessCredentials"> | string
    spaceId?: StringFilter<"AuthorizedAccessCredentials"> | string
    next_notpadd_userId?: StringFilter<"AuthorizedAccessCredentials"> | string
    secretkey?: StringFilter<"AuthorizedAccessCredentials"> | string
    createdAt?: DateTimeFilter<"AuthorizedAccessCredentials"> | Date | string
    updatedAt?: DateTimeFilter<"AuthorizedAccessCredentials"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Space?: XOR<SpaceNullableScalarRelationFilter, SpaceWhereInput> | null
  }, "id" | "id" | "next_notpadd_spaceId">

  export type AuthorizedAccessCredentialsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    next_notpadd_userId?: SortOrder
    next_notpadd_spaceId?: SortOrder
    secretkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthorizedAccessCredentialsCountOrderByAggregateInput
    _max?: AuthorizedAccessCredentialsMaxOrderByAggregateInput
    _min?: AuthorizedAccessCredentialsMinOrderByAggregateInput
  }

  export type AuthorizedAccessCredentialsScalarWhereWithAggregatesInput = {
    AND?: AuthorizedAccessCredentialsScalarWhereWithAggregatesInput | AuthorizedAccessCredentialsScalarWhereWithAggregatesInput[]
    OR?: AuthorizedAccessCredentialsScalarWhereWithAggregatesInput[]
    NOT?: AuthorizedAccessCredentialsScalarWhereWithAggregatesInput | AuthorizedAccessCredentialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthorizedAccessCredentials"> | string
    userId?: StringWithAggregatesFilter<"AuthorizedAccessCredentials"> | string
    spaceId?: StringWithAggregatesFilter<"AuthorizedAccessCredentials"> | string
    next_notpadd_userId?: StringWithAggregatesFilter<"AuthorizedAccessCredentials"> | string
    next_notpadd_spaceId?: StringWithAggregatesFilter<"AuthorizedAccessCredentials"> | string
    secretkey?: StringWithAggregatesFilter<"AuthorizedAccessCredentials"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthorizedAccessCredentials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthorizedAccessCredentials"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    price?: FloatFilter<"Subscription"> | number
    currency?: StringFilter<"Subscription"> | string
    interval?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    plan?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: StringFilter<"Subscription"> | string
    price?: FloatFilter<"Subscription"> | number
    currency?: StringFilter<"Subscription"> | string
    interval?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: StringWithAggregatesFilter<"Subscription"> | string
    price?: FloatWithAggregatesFilter<"Subscription"> | number
    currency?: StringWithAggregatesFilter<"Subscription"> | string
    interval?: StringWithAggregatesFilter<"Subscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    member?: MemberCreateNestedManyWithoutUserInput
    spaces?: SpaceCreateNestedManyWithoutUserInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    member?: MemberUncheckedCreateNestedManyWithoutUserInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutUserInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateManyWithoutUserNestedInput
    spaces?: SpaceUpdateManyWithoutUserNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUncheckedUpdateManyWithoutUserNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutUserNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    creatorId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    membersLifeTimeCount?: number
    members?: MemberCreateNestedManyWithoutTeamInput
    Space?: SpaceCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    creatorId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    membersLifeTimeCount?: number
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
    Space?: SpaceUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
    members?: MemberUpdateManyWithoutTeamNestedInput
    Space?: SpaceUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
    Space?: SpaceUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    creatorId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    membersLifeTimeCount?: number
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
  }

  export type MemberCreateInput = {
    id?: string
    role?: $Enums.MemberRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMemberInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    teamId: string
    role?: $Enums.MemberRole
    userId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemberNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    userId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyInput = {
    id?: string
    teamId: string
    role?: $Enums.MemberRole
    userId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    userId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceCreateInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articlecount?: number
    team: TeamCreateNestedOneWithoutSpaceInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsCreateNestedManyWithoutSpaceInput
    User?: UserCreateNestedOneWithoutSpacesInput
    articles?: ArticleCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    articlecount?: number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutSpaceInput
    articles?: ArticleUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutSpaceNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUpdateManyWithoutSpaceNestedInput
    User?: UserUpdateOneWithoutSpacesNestedInput
    articles?: ArticleUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    articlecount?: IntFieldUpdateOperationsInput | number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedUpdateManyWithoutSpaceNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceCreateManyInput = {
    id: string
    name: string
    description?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    articlecount?: number
  }

  export type SpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
  }

  export type SpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    articlecount?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCreateInput = {
    id: string
    slug: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    space: SpaceCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateInput = {
    id: string
    slug: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    spaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    space?: SpaceUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    spaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyInput = {
    id: string
    slug: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    spaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    spaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizedAccessCredentialsCreateInput = {
    id?: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutAuthorizedAccessCredentialsInput
    Space?: SpaceCreateNestedOneWithoutAuthorizedAccessCredentialsInput
  }

  export type AuthorizedAccessCredentialsUncheckedCreateInput = {
    id?: string
    userId: string
    spaceId: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizedAccessCredentialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutAuthorizedAccessCredentialsNestedInput
    Space?: SpaceUpdateOneWithoutAuthorizedAccessCredentialsNestedInput
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizedAccessCredentialsCreateManyInput = {
    id?: string
    userId: string
    spaceId: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizedAccessCredentialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan: string
    price: number
    currency: string
    interval: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    plan: string
    price: number
    currency: string
    interval: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    plan: string
    price: number
    currency: string
    interval: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type SpaceListRelationFilter = {
    every?: SpaceWhereInput
    some?: SpaceWhereInput
    none?: SpaceWhereInput
  }

  export type AuthorizedAccessCredentialsListRelationFilter = {
    every?: AuthorizedAccessCredentialsWhereInput
    some?: AuthorizedAccessCredentialsWhereInput
    none?: AuthorizedAccessCredentialsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorizedAccessCredentialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    accounttype?: SortOrder
    role?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    accounttype?: SortOrder
    role?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    accounttype?: SortOrder
    role?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    membersLifeTimeCount?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    membersLifeTimeCount?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    membersLifeTimeCount?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    membersLifeTimeCount?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    membersLifeTimeCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    articlecount?: SortOrder
  }

  export type SpaceAvgOrderByAggregateInput = {
    articlecount?: SortOrder
  }

  export type SpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    articlecount?: SortOrder
  }

  export type SpaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    articlecount?: SortOrder
  }

  export type SpaceSumOrderByAggregateInput = {
    articlecount?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SpaceScalarRelationFilter = {
    is?: SpaceWhereInput
    isNot?: SpaceWhereInput
  }

  export type ArticleSlugSpaceIdCompoundUniqueInput = {
    slug: string
    spaceId: string
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    content?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    spaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SpaceNullableScalarRelationFilter = {
    is?: SpaceWhereInput | null
    isNot?: SpaceWhereInput | null
  }

  export type AuthorizedAccessCredentialsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    next_notpadd_userId?: SortOrder
    next_notpadd_spaceId?: SortOrder
    secretkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorizedAccessCredentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    next_notpadd_userId?: SortOrder
    next_notpadd_spaceId?: SortOrder
    secretkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorizedAccessCredentialsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    spaceId?: SortOrder
    next_notpadd_userId?: SortOrder
    next_notpadd_spaceId?: SortOrder
    secretkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MemberCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type SpaceCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type AuthorizedAccessCredentialsCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutUserInput, AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput> | AuthorizedAccessCredentialsCreateWithoutUserInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput | AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput[]
    createMany?: AuthorizedAccessCredentialsCreateManyUserInputEnvelope
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type SpaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutUserInput, AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput> | AuthorizedAccessCredentialsCreateWithoutUserInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput | AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput[]
    createMany?: AuthorizedAccessCredentialsCreateManyUserInputEnvelope
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type MemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutUserInput | MemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutUserInput | MemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutUserInput | MemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type SpaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutUserInput | SpaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutUserInput | SpaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutUserInput | SpaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type AuthorizedAccessCredentialsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutUserInput, AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput> | AuthorizedAccessCredentialsCreateWithoutUserInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput | AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput[]
    upsert?: AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutUserInput | AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthorizedAccessCredentialsCreateManyUserInputEnvelope
    set?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    disconnect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    delete?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    update?: AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutUserInput | AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthorizedAccessCredentialsUpdateManyWithWhereWithoutUserInput | AuthorizedAccessCredentialsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthorizedAccessCredentialsScalarWhereInput | AuthorizedAccessCredentialsScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutUserInput | MemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutUserInput | MemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutUserInput | MemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type SpaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput> | SpaceCreateWithoutUserInput[] | SpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutUserInput | SpaceCreateOrConnectWithoutUserInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutUserInput | SpaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpaceCreateManyUserInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutUserInput | SpaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutUserInput | SpaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutUserInput, AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput> | AuthorizedAccessCredentialsCreateWithoutUserInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput | AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput[]
    upsert?: AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutUserInput | AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthorizedAccessCredentialsCreateManyUserInputEnvelope
    set?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    disconnect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    delete?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    update?: AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutUserInput | AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthorizedAccessCredentialsUpdateManyWithWhereWithoutUserInput | AuthorizedAccessCredentialsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthorizedAccessCredentialsScalarWhereInput | AuthorizedAccessCredentialsScalarWhereInput[]
  }

  export type MemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type SpaceCreateNestedManyWithoutTeamInput = {
    create?: XOR<SpaceCreateWithoutTeamInput, SpaceUncheckedCreateWithoutTeamInput> | SpaceCreateWithoutTeamInput[] | SpaceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutTeamInput | SpaceCreateOrConnectWithoutTeamInput[]
    createMany?: SpaceCreateManyTeamInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type SpaceUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<SpaceCreateWithoutTeamInput, SpaceUncheckedCreateWithoutTeamInput> | SpaceCreateWithoutTeamInput[] | SpaceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutTeamInput | SpaceCreateOrConnectWithoutTeamInput[]
    createMany?: SpaceCreateManyTeamInputEnvelope
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutTeamInput | MemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutTeamInput | MemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutTeamInput | MemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type SpaceUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SpaceCreateWithoutTeamInput, SpaceUncheckedCreateWithoutTeamInput> | SpaceCreateWithoutTeamInput[] | SpaceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutTeamInput | SpaceCreateOrConnectWithoutTeamInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutTeamInput | SpaceUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SpaceCreateManyTeamInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutTeamInput | SpaceUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutTeamInput | SpaceUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput> | MemberCreateWithoutTeamInput[] | MemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutTeamInput | MemberCreateOrConnectWithoutTeamInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutTeamInput | MemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MemberCreateManyTeamInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutTeamInput | MemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutTeamInput | MemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type SpaceUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SpaceCreateWithoutTeamInput, SpaceUncheckedCreateWithoutTeamInput> | SpaceCreateWithoutTeamInput[] | SpaceUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SpaceCreateOrConnectWithoutTeamInput | SpaceCreateOrConnectWithoutTeamInput[]
    upsert?: SpaceUpsertWithWhereUniqueWithoutTeamInput | SpaceUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SpaceCreateManyTeamInputEnvelope
    set?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    disconnect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    delete?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    connect?: SpaceWhereUniqueInput | SpaceWhereUniqueInput[]
    update?: SpaceUpdateWithWhereUniqueWithoutTeamInput | SpaceUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SpaceUpdateManyWithWhereWithoutTeamInput | SpaceUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMemberInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type EnumMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.MemberRole
  }

  export type UserUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput
    upsert?: UserUpsertWithoutMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemberInput, UserUpdateWithoutMemberInput>, UserUncheckedUpdateWithoutMemberInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamCreateNestedOneWithoutSpaceInput = {
    create?: XOR<TeamCreateWithoutSpaceInput, TeamUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSpaceInput
    connect?: TeamWhereUniqueInput
  }

  export type AuthorizedAccessCredentialsCreateNestedManyWithoutSpaceInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput> | AuthorizedAccessCredentialsCreateWithoutSpaceInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput | AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput[]
    createMany?: AuthorizedAccessCredentialsCreateManySpaceInputEnvelope
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSpacesInput = {
    create?: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpacesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleCreateNestedManyWithoutSpaceInput = {
    create?: XOR<ArticleCreateWithoutSpaceInput, ArticleUncheckedCreateWithoutSpaceInput> | ArticleCreateWithoutSpaceInput[] | ArticleUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutSpaceInput | ArticleCreateOrConnectWithoutSpaceInput[]
    createMany?: ArticleCreateManySpaceInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput> | AuthorizedAccessCredentialsCreateWithoutSpaceInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput | AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput[]
    createMany?: AuthorizedAccessCredentialsCreateManySpaceInputEnvelope
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutSpaceInput = {
    create?: XOR<ArticleCreateWithoutSpaceInput, ArticleUncheckedCreateWithoutSpaceInput> | ArticleCreateWithoutSpaceInput[] | ArticleUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutSpaceInput | ArticleCreateOrConnectWithoutSpaceInput[]
    createMany?: ArticleCreateManySpaceInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutSpaceNestedInput = {
    create?: XOR<TeamCreateWithoutSpaceInput, TeamUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSpaceInput
    upsert?: TeamUpsertWithoutSpaceInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutSpaceInput, TeamUpdateWithoutSpaceInput>, TeamUncheckedUpdateWithoutSpaceInput>
  }

  export type AuthorizedAccessCredentialsUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput> | AuthorizedAccessCredentialsCreateWithoutSpaceInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput | AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput[]
    upsert?: AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutSpaceInput | AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: AuthorizedAccessCredentialsCreateManySpaceInputEnvelope
    set?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    disconnect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    delete?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    update?: AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutSpaceInput | AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: AuthorizedAccessCredentialsUpdateManyWithWhereWithoutSpaceInput | AuthorizedAccessCredentialsUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: AuthorizedAccessCredentialsScalarWhereInput | AuthorizedAccessCredentialsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutSpacesNestedInput = {
    create?: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpacesInput
    upsert?: UserUpsertWithoutSpacesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpacesInput, UserUpdateWithoutSpacesInput>, UserUncheckedUpdateWithoutSpacesInput>
  }

  export type ArticleUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<ArticleCreateWithoutSpaceInput, ArticleUncheckedCreateWithoutSpaceInput> | ArticleCreateWithoutSpaceInput[] | ArticleUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutSpaceInput | ArticleCreateOrConnectWithoutSpaceInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutSpaceInput | ArticleUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: ArticleCreateManySpaceInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutSpaceInput | ArticleUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutSpaceInput | ArticleUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<AuthorizedAccessCredentialsCreateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput> | AuthorizedAccessCredentialsCreateWithoutSpaceInput[] | AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput | AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput[]
    upsert?: AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutSpaceInput | AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: AuthorizedAccessCredentialsCreateManySpaceInputEnvelope
    set?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    disconnect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    delete?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    connect?: AuthorizedAccessCredentialsWhereUniqueInput | AuthorizedAccessCredentialsWhereUniqueInput[]
    update?: AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutSpaceInput | AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: AuthorizedAccessCredentialsUpdateManyWithWhereWithoutSpaceInput | AuthorizedAccessCredentialsUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: AuthorizedAccessCredentialsScalarWhereInput | AuthorizedAccessCredentialsScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutSpaceNestedInput = {
    create?: XOR<ArticleCreateWithoutSpaceInput, ArticleUncheckedCreateWithoutSpaceInput> | ArticleCreateWithoutSpaceInput[] | ArticleUncheckedCreateWithoutSpaceInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutSpaceInput | ArticleCreateOrConnectWithoutSpaceInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutSpaceInput | ArticleUpsertWithWhereUniqueWithoutSpaceInput[]
    createMany?: ArticleCreateManySpaceInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutSpaceInput | ArticleUpdateWithWhereUniqueWithoutSpaceInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutSpaceInput | ArticleUpdateManyWithWhereWithoutSpaceInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type SpaceCreateNestedOneWithoutArticlesInput = {
    create?: XOR<SpaceCreateWithoutArticlesInput, SpaceUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutArticlesInput
    connect?: SpaceWhereUniqueInput
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type SpaceUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<SpaceCreateWithoutArticlesInput, SpaceUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutArticlesInput
    upsert?: SpaceUpsertWithoutArticlesInput
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutArticlesInput, SpaceUpdateWithoutArticlesInput>, SpaceUncheckedUpdateWithoutArticlesInput>
  }

  export type UserCreateNestedOneWithoutAuthorizedAccessCredentialsInput = {
    create?: XOR<UserCreateWithoutAuthorizedAccessCredentialsInput, UserUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthorizedAccessCredentialsInput
    connect?: UserWhereUniqueInput
  }

  export type SpaceCreateNestedOneWithoutAuthorizedAccessCredentialsInput = {
    create?: XOR<SpaceCreateWithoutAuthorizedAccessCredentialsInput, SpaceUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutAuthorizedAccessCredentialsInput
    connect?: SpaceWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuthorizedAccessCredentialsNestedInput = {
    create?: XOR<UserCreateWithoutAuthorizedAccessCredentialsInput, UserUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthorizedAccessCredentialsInput
    upsert?: UserUpsertWithoutAuthorizedAccessCredentialsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthorizedAccessCredentialsInput, UserUpdateWithoutAuthorizedAccessCredentialsInput>, UserUncheckedUpdateWithoutAuthorizedAccessCredentialsInput>
  }

  export type SpaceUpdateOneWithoutAuthorizedAccessCredentialsNestedInput = {
    create?: XOR<SpaceCreateWithoutAuthorizedAccessCredentialsInput, SpaceUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutAuthorizedAccessCredentialsInput
    upsert?: SpaceUpsertWithoutAuthorizedAccessCredentialsInput
    disconnect?: SpaceWhereInput | boolean
    delete?: SpaceWhereInput | boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<XOR<SpaceUpdateToOneWithWhereWithoutAuthorizedAccessCredentialsInput, SpaceUpdateWithoutAuthorizedAccessCredentialsInput>, SpaceUncheckedUpdateWithoutAuthorizedAccessCredentialsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.MemberRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    role?: $Enums.MemberRole
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberCreateOrConnectWithoutUserInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberCreateManyUserInputEnvelope = {
    data: MemberCreateManyUserInput | MemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpaceCreateWithoutUserInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articlecount?: number
    team: TeamCreateNestedOneWithoutSpaceInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsCreateNestedManyWithoutSpaceInput
    articles?: ArticleCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutUserInput = {
    id: string
    name: string
    description?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articlecount?: number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutSpaceInput
    articles?: ArticleUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutUserInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput>
  }

  export type SpaceCreateManyUserInputEnvelope = {
    data: SpaceCreateManyUserInput | SpaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthorizedAccessCredentialsCreateWithoutUserInput = {
    id?: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Space?: SpaceCreateNestedOneWithoutAuthorizedAccessCredentialsInput
  }

  export type AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput = {
    id?: string
    spaceId: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizedAccessCredentialsCreateOrConnectWithoutUserInput = {
    where: AuthorizedAccessCredentialsWhereUniqueInput
    create: XOR<AuthorizedAccessCredentialsCreateWithoutUserInput, AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput>
  }

  export type AuthorizedAccessCredentialsCreateManyUserInputEnvelope = {
    data: AuthorizedAccessCredentialsCreateManyUserInput | AuthorizedAccessCredentialsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
  }

  export type MemberUpdateManyWithWhereWithoutUserInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutUserInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    teamId?: StringFilter<"Member"> | string
    role?: EnumMemberRoleFilter<"Member"> | $Enums.MemberRole
    userId?: StringFilter<"Member"> | string
    craetedAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type SpaceUpsertWithWhereUniqueWithoutUserInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutUserInput, SpaceUncheckedUpdateWithoutUserInput>
    create: XOR<SpaceCreateWithoutUserInput, SpaceUncheckedCreateWithoutUserInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutUserInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutUserInput, SpaceUncheckedUpdateWithoutUserInput>
  }

  export type SpaceUpdateManyWithWhereWithoutUserInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutUserInput>
  }

  export type SpaceScalarWhereInput = {
    AND?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    OR?: SpaceScalarWhereInput[]
    NOT?: SpaceScalarWhereInput | SpaceScalarWhereInput[]
    id?: StringFilter<"Space"> | string
    name?: StringFilter<"Space"> | string
    description?: StringNullableFilter<"Space"> | string | null
    teamId?: StringFilter<"Space"> | string
    createdAt?: DateTimeFilter<"Space"> | Date | string
    updatedAt?: DateTimeFilter<"Space"> | Date | string
    userId?: StringFilter<"Space"> | string
    articlecount?: IntFilter<"Space"> | number
  }

  export type AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthorizedAccessCredentialsWhereUniqueInput
    update: XOR<AuthorizedAccessCredentialsUpdateWithoutUserInput, AuthorizedAccessCredentialsUncheckedUpdateWithoutUserInput>
    create: XOR<AuthorizedAccessCredentialsCreateWithoutUserInput, AuthorizedAccessCredentialsUncheckedCreateWithoutUserInput>
  }

  export type AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthorizedAccessCredentialsWhereUniqueInput
    data: XOR<AuthorizedAccessCredentialsUpdateWithoutUserInput, AuthorizedAccessCredentialsUncheckedUpdateWithoutUserInput>
  }

  export type AuthorizedAccessCredentialsUpdateManyWithWhereWithoutUserInput = {
    where: AuthorizedAccessCredentialsScalarWhereInput
    data: XOR<AuthorizedAccessCredentialsUpdateManyMutationInput, AuthorizedAccessCredentialsUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthorizedAccessCredentialsScalarWhereInput = {
    AND?: AuthorizedAccessCredentialsScalarWhereInput | AuthorizedAccessCredentialsScalarWhereInput[]
    OR?: AuthorizedAccessCredentialsScalarWhereInput[]
    NOT?: AuthorizedAccessCredentialsScalarWhereInput | AuthorizedAccessCredentialsScalarWhereInput[]
    id?: StringFilter<"AuthorizedAccessCredentials"> | string
    userId?: StringFilter<"AuthorizedAccessCredentials"> | string
    spaceId?: StringFilter<"AuthorizedAccessCredentials"> | string
    next_notpadd_userId?: StringFilter<"AuthorizedAccessCredentials"> | string
    next_notpadd_spaceId?: StringFilter<"AuthorizedAccessCredentials"> | string
    secretkey?: StringFilter<"AuthorizedAccessCredentials"> | string
    createdAt?: DateTimeFilter<"AuthorizedAccessCredentials"> | Date | string
    updatedAt?: DateTimeFilter<"AuthorizedAccessCredentials"> | Date | string
  }

  export type MemberCreateWithoutTeamInput = {
    id?: string
    role?: $Enums.MemberRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutTeamInput = {
    id?: string
    role?: $Enums.MemberRole
    userId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberCreateOrConnectWithoutTeamInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
  }

  export type MemberCreateManyTeamInputEnvelope = {
    data: MemberCreateManyTeamInput | MemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type SpaceCreateWithoutTeamInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articlecount?: number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsCreateNestedManyWithoutSpaceInput
    User?: UserCreateNestedOneWithoutSpacesInput
    articles?: ArticleCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutTeamInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    articlecount?: number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutSpaceInput
    articles?: ArticleUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutTeamInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutTeamInput, SpaceUncheckedCreateWithoutTeamInput>
  }

  export type SpaceCreateManyTeamInputEnvelope = {
    data: SpaceCreateManyTeamInput | SpaceCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutTeamInput, MemberUncheckedUpdateWithoutTeamInput>
    create: XOR<MemberCreateWithoutTeamInput, MemberUncheckedCreateWithoutTeamInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutTeamInput, MemberUncheckedUpdateWithoutTeamInput>
  }

  export type MemberUpdateManyWithWhereWithoutTeamInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type SpaceUpsertWithWhereUniqueWithoutTeamInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutTeamInput, SpaceUncheckedUpdateWithoutTeamInput>
    create: XOR<SpaceCreateWithoutTeamInput, SpaceUncheckedCreateWithoutTeamInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutTeamInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutTeamInput, SpaceUncheckedUpdateWithoutTeamInput>
  }

  export type SpaceUpdateManyWithWhereWithoutTeamInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutMemberInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    spaces?: SpaceCreateNestedManyWithoutUserInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemberInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    spaces?: SpaceUncheckedCreateNestedManyWithoutUserInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    creatorId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    membersLifeTimeCount?: number
    Space?: SpaceCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    creatorId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    membersLifeTimeCount?: number
    Space?: SpaceUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMemberInput = {
    update: XOR<UserUpdateWithoutMemberInput, UserUncheckedUpdateWithoutMemberInput>
    create: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemberInput, UserUncheckedUpdateWithoutMemberInput>
  }

  export type UserUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: SpaceUpdateManyWithoutUserNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaces?: SpaceUncheckedUpdateManyWithoutUserNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
    Space?: SpaceUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
    Space?: SpaceUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutSpaceInput = {
    id?: string
    name: string
    creatorId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    membersLifeTimeCount?: number
    members?: MemberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutSpaceInput = {
    id?: string
    name: string
    creatorId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    membersLifeTimeCount?: number
    members?: MemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutSpaceInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSpaceInput, TeamUncheckedCreateWithoutSpaceInput>
  }

  export type AuthorizedAccessCredentialsCreateWithoutSpaceInput = {
    id?: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutAuthorizedAccessCredentialsInput
  }

  export type AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput = {
    id?: string
    userId: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizedAccessCredentialsCreateOrConnectWithoutSpaceInput = {
    where: AuthorizedAccessCredentialsWhereUniqueInput
    create: XOR<AuthorizedAccessCredentialsCreateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput>
  }

  export type AuthorizedAccessCredentialsCreateManySpaceInputEnvelope = {
    data: AuthorizedAccessCredentialsCreateManySpaceInput | AuthorizedAccessCredentialsCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSpacesInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    member?: MemberCreateNestedManyWithoutUserInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpacesInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    member?: MemberUncheckedCreateNestedManyWithoutUserInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
  }

  export type ArticleCreateWithoutSpaceInput = {
    id: string
    slug: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateWithoutSpaceInput = {
    id: string
    slug: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutSpaceInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutSpaceInput, ArticleUncheckedCreateWithoutSpaceInput>
  }

  export type ArticleCreateManySpaceInputEnvelope = {
    data: ArticleCreateManySpaceInput | ArticleCreateManySpaceInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutSpaceInput = {
    update: XOR<TeamUpdateWithoutSpaceInput, TeamUncheckedUpdateWithoutSpaceInput>
    create: XOR<TeamCreateWithoutSpaceInput, TeamUncheckedCreateWithoutSpaceInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutSpaceInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutSpaceInput, TeamUncheckedUpdateWithoutSpaceInput>
  }

  export type TeamUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
    members?: MemberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membersLifeTimeCount?: IntFieldUpdateOperationsInput | number
    members?: MemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type AuthorizedAccessCredentialsUpsertWithWhereUniqueWithoutSpaceInput = {
    where: AuthorizedAccessCredentialsWhereUniqueInput
    update: XOR<AuthorizedAccessCredentialsUpdateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedUpdateWithoutSpaceInput>
    create: XOR<AuthorizedAccessCredentialsCreateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedCreateWithoutSpaceInput>
  }

  export type AuthorizedAccessCredentialsUpdateWithWhereUniqueWithoutSpaceInput = {
    where: AuthorizedAccessCredentialsWhereUniqueInput
    data: XOR<AuthorizedAccessCredentialsUpdateWithoutSpaceInput, AuthorizedAccessCredentialsUncheckedUpdateWithoutSpaceInput>
  }

  export type AuthorizedAccessCredentialsUpdateManyWithWhereWithoutSpaceInput = {
    where: AuthorizedAccessCredentialsScalarWhereInput
    data: XOR<AuthorizedAccessCredentialsUpdateManyMutationInput, AuthorizedAccessCredentialsUncheckedUpdateManyWithoutSpaceInput>
  }

  export type UserUpsertWithoutSpacesInput = {
    update: XOR<UserUpdateWithoutSpacesInput, UserUncheckedUpdateWithoutSpacesInput>
    create: XOR<UserCreateWithoutSpacesInput, UserUncheckedCreateWithoutSpacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpacesInput, UserUncheckedUpdateWithoutSpacesInput>
  }

  export type UserUpdateWithoutSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateManyWithoutUserNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUncheckedUpdateManyWithoutUserNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleUpsertWithWhereUniqueWithoutSpaceInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutSpaceInput, ArticleUncheckedUpdateWithoutSpaceInput>
    create: XOR<ArticleCreateWithoutSpaceInput, ArticleUncheckedCreateWithoutSpaceInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutSpaceInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutSpaceInput, ArticleUncheckedUpdateWithoutSpaceInput>
  }

  export type ArticleUpdateManyWithWhereWithoutSpaceInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutSpaceInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    description?: StringNullableFilter<"Article"> | string | null
    status?: EnumProjectStatusFilter<"Article"> | $Enums.ProjectStatus
    content?: JsonNullableFilter<"Article">
    spaceId?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type SpaceCreateWithoutArticlesInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articlecount?: number
    team: TeamCreateNestedOneWithoutSpaceInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsCreateNestedManyWithoutSpaceInput
    User?: UserCreateNestedOneWithoutSpacesInput
  }

  export type SpaceUncheckedCreateWithoutArticlesInput = {
    id: string
    name: string
    description?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    articlecount?: number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutArticlesInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutArticlesInput, SpaceUncheckedCreateWithoutArticlesInput>
  }

  export type SpaceUpsertWithoutArticlesInput = {
    update: XOR<SpaceUpdateWithoutArticlesInput, SpaceUncheckedUpdateWithoutArticlesInput>
    create: XOR<SpaceCreateWithoutArticlesInput, SpaceUncheckedCreateWithoutArticlesInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutArticlesInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutArticlesInput, SpaceUncheckedUpdateWithoutArticlesInput>
  }

  export type SpaceUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutSpaceNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUpdateManyWithoutSpaceNestedInput
    User?: UserUpdateOneWithoutSpacesNestedInput
  }

  export type SpaceUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    articlecount?: IntFieldUpdateOperationsInput | number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type UserCreateWithoutAuthorizedAccessCredentialsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    member?: MemberCreateNestedManyWithoutUserInput
    spaces?: SpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthorizedAccessCredentialsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    imageUrl?: string | null
    accounttype?: $Enums.AccountType
    role?: $Enums.UserRole
    craetedAt?: Date | string
    updatedAt?: Date | string
    member?: MemberUncheckedCreateNestedManyWithoutUserInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthorizedAccessCredentialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthorizedAccessCredentialsInput, UserUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
  }

  export type SpaceCreateWithoutAuthorizedAccessCredentialsInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articlecount?: number
    team: TeamCreateNestedOneWithoutSpaceInput
    User?: UserCreateNestedOneWithoutSpacesInput
    articles?: ArticleCreateNestedManyWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutAuthorizedAccessCredentialsInput = {
    id: string
    name: string
    description?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    articlecount?: number
    articles?: ArticleUncheckedCreateNestedManyWithoutSpaceInput
  }

  export type SpaceCreateOrConnectWithoutAuthorizedAccessCredentialsInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutAuthorizedAccessCredentialsInput, SpaceUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
  }

  export type UserUpsertWithoutAuthorizedAccessCredentialsInput = {
    update: XOR<UserUpdateWithoutAuthorizedAccessCredentialsInput, UserUncheckedUpdateWithoutAuthorizedAccessCredentialsInput>
    create: XOR<UserCreateWithoutAuthorizedAccessCredentialsInput, UserUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthorizedAccessCredentialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthorizedAccessCredentialsInput, UserUncheckedUpdateWithoutAuthorizedAccessCredentialsInput>
  }

  export type UserUpdateWithoutAuthorizedAccessCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateManyWithoutUserNestedInput
    spaces?: SpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthorizedAccessCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUncheckedUpdateManyWithoutUserNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpaceUpsertWithoutAuthorizedAccessCredentialsInput = {
    update: XOR<SpaceUpdateWithoutAuthorizedAccessCredentialsInput, SpaceUncheckedUpdateWithoutAuthorizedAccessCredentialsInput>
    create: XOR<SpaceCreateWithoutAuthorizedAccessCredentialsInput, SpaceUncheckedCreateWithoutAuthorizedAccessCredentialsInput>
    where?: SpaceWhereInput
  }

  export type SpaceUpdateToOneWithWhereWithoutAuthorizedAccessCredentialsInput = {
    where?: SpaceWhereInput
    data: XOR<SpaceUpdateWithoutAuthorizedAccessCredentialsInput, SpaceUncheckedUpdateWithoutAuthorizedAccessCredentialsInput>
  }

  export type SpaceUpdateWithoutAuthorizedAccessCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutSpaceNestedInput
    User?: UserUpdateOneWithoutSpacesNestedInput
    articles?: ArticleUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutAuthorizedAccessCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    articlecount?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type MemberCreateManyUserInput = {
    id?: string
    teamId: string
    role?: $Enums.MemberRole
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpaceCreateManyUserInput = {
    id: string
    name: string
    description?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articlecount?: number
  }

  export type AuthorizedAccessCredentialsCreateManyUserInput = {
    id?: string
    spaceId: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutSpaceNestedInput
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUpdateManyWithoutSpaceNestedInput
    articles?: ArticleUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedUpdateManyWithoutSpaceNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorizedAccessCredentialsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Space?: SpaceUpdateOneWithoutAuthorizedAccessCredentialsNestedInput
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyTeamInput = {
    id?: string
    role?: $Enums.MemberRole
    userId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpaceCreateManyTeamInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    articlecount?: number
  }

  export type MemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    userId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    userId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpaceUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articlecount?: IntFieldUpdateOperationsInput | number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUpdateManyWithoutSpaceNestedInput
    User?: UserUpdateOneWithoutSpacesNestedInput
    articles?: ArticleUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    articlecount?: IntFieldUpdateOperationsInput | number
    AuthorizedAccessCredentials?: AuthorizedAccessCredentialsUncheckedUpdateManyWithoutSpaceNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    articlecount?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorizedAccessCredentialsCreateManySpaceInput = {
    id?: string
    userId: string
    next_notpadd_userId: string
    next_notpadd_spaceId?: string
    secretkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateManySpaceInput = {
    id: string
    slug: string
    title: string
    description?: string | null
    status?: $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizedAccessCredentialsUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutAuthorizedAccessCredentialsNestedInput
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizedAccessCredentialsUncheckedUpdateManyWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_userId?: StringFieldUpdateOperationsInput | string
    next_notpadd_spaceId?: StringFieldUpdateOperationsInput | string
    secretkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}