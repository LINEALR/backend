
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
 * Model t_accesorios
 * 
 */
export type t_accesorios = $Result.DefaultSelection<Prisma.$t_accesoriosPayload>
/**
 * Model t_areas_sistemas
 * 
 */
export type t_areas_sistemas = $Result.DefaultSelection<Prisma.$t_areas_sistemasPayload>
/**
 * Model t_articulo_sistemas
 * 
 */
export type t_articulo_sistemas = $Result.DefaultSelection<Prisma.$t_articulo_sistemasPayload>
/**
 * Model t_colaboradores
 * 
 */
export type t_colaboradores = $Result.DefaultSelection<Prisma.$t_colaboradoresPayload>
/**
 * Model t_consumibles
 * 
 */
export type t_consumibles = $Result.DefaultSelection<Prisma.$t_consumiblesPayload>
/**
 * Model t_dispositivos
 * 
 */
export type t_dispositivos = $Result.DefaultSelection<Prisma.$t_dispositivosPayload>
/**
 * Model t_factura
 * 
 */
export type t_factura = $Result.DefaultSelection<Prisma.$t_facturaPayload>
/**
 * Model t_historial_articulo
 * 
 */
export type t_historial_articulo = $Result.DefaultSelection<Prisma.$t_historial_articuloPayload>
/**
 * Model t_movimientos
 * 
 */
export type t_movimientos = $Result.DefaultSelection<Prisma.$t_movimientosPayload>
/**
 * Model t_propietario
 * 
 */
export type t_propietario = $Result.DefaultSelection<Prisma.$t_propietarioPayload>
/**
 * Model t_refacciones
 * 
 */
export type t_refacciones = $Result.DefaultSelection<Prisma.$t_refaccionesPayload>
/**
 * Model t_roles
 * 
 */
export type t_roles = $Result.DefaultSelection<Prisma.$t_rolesPayload>
/**
 * Model t_ubicacion_fisica
 * 
 */
export type t_ubicacion_fisica = $Result.DefaultSelection<Prisma.$t_ubicacion_fisicaPayload>
/**
 * Model t_usuario
 * 
 */
export type t_usuario = $Result.DefaultSelection<Prisma.$t_usuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more T_accesorios
 * const t_accesorios = await prisma.t_accesorios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more T_accesorios
   * const t_accesorios = await prisma.t_accesorios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.t_accesorios`: Exposes CRUD operations for the **t_accesorios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_accesorios
    * const t_accesorios = await prisma.t_accesorios.findMany()
    * ```
    */
  get t_accesorios(): Prisma.t_accesoriosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_areas_sistemas`: Exposes CRUD operations for the **t_areas_sistemas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_areas_sistemas
    * const t_areas_sistemas = await prisma.t_areas_sistemas.findMany()
    * ```
    */
  get t_areas_sistemas(): Prisma.t_areas_sistemasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_articulo_sistemas`: Exposes CRUD operations for the **t_articulo_sistemas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_articulo_sistemas
    * const t_articulo_sistemas = await prisma.t_articulo_sistemas.findMany()
    * ```
    */
  get t_articulo_sistemas(): Prisma.t_articulo_sistemasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_colaboradores`: Exposes CRUD operations for the **t_colaboradores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_colaboradores
    * const t_colaboradores = await prisma.t_colaboradores.findMany()
    * ```
    */
  get t_colaboradores(): Prisma.t_colaboradoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_consumibles`: Exposes CRUD operations for the **t_consumibles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_consumibles
    * const t_consumibles = await prisma.t_consumibles.findMany()
    * ```
    */
  get t_consumibles(): Prisma.t_consumiblesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_dispositivos`: Exposes CRUD operations for the **t_dispositivos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_dispositivos
    * const t_dispositivos = await prisma.t_dispositivos.findMany()
    * ```
    */
  get t_dispositivos(): Prisma.t_dispositivosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_factura`: Exposes CRUD operations for the **t_factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_facturas
    * const t_facturas = await prisma.t_factura.findMany()
    * ```
    */
  get t_factura(): Prisma.t_facturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_historial_articulo`: Exposes CRUD operations for the **t_historial_articulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_historial_articulos
    * const t_historial_articulos = await prisma.t_historial_articulo.findMany()
    * ```
    */
  get t_historial_articulo(): Prisma.t_historial_articuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_movimientos`: Exposes CRUD operations for the **t_movimientos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_movimientos
    * const t_movimientos = await prisma.t_movimientos.findMany()
    * ```
    */
  get t_movimientos(): Prisma.t_movimientosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_propietario`: Exposes CRUD operations for the **t_propietario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_propietarios
    * const t_propietarios = await prisma.t_propietario.findMany()
    * ```
    */
  get t_propietario(): Prisma.t_propietarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_refacciones`: Exposes CRUD operations for the **t_refacciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_refacciones
    * const t_refacciones = await prisma.t_refacciones.findMany()
    * ```
    */
  get t_refacciones(): Prisma.t_refaccionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_roles`: Exposes CRUD operations for the **t_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_roles
    * const t_roles = await prisma.t_roles.findMany()
    * ```
    */
  get t_roles(): Prisma.t_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_ubicacion_fisica`: Exposes CRUD operations for the **t_ubicacion_fisica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_ubicacion_fisicas
    * const t_ubicacion_fisicas = await prisma.t_ubicacion_fisica.findMany()
    * ```
    */
  get t_ubicacion_fisica(): Prisma.t_ubicacion_fisicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_usuario`: Exposes CRUD operations for the **t_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_usuarios
    * const t_usuarios = await prisma.t_usuario.findMany()
    * ```
    */
  get t_usuario(): Prisma.t_usuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    t_accesorios: 't_accesorios',
    t_areas_sistemas: 't_areas_sistemas',
    t_articulo_sistemas: 't_articulo_sistemas',
    t_colaboradores: 't_colaboradores',
    t_consumibles: 't_consumibles',
    t_dispositivos: 't_dispositivos',
    t_factura: 't_factura',
    t_historial_articulo: 't_historial_articulo',
    t_movimientos: 't_movimientos',
    t_propietario: 't_propietario',
    t_refacciones: 't_refacciones',
    t_roles: 't_roles',
    t_ubicacion_fisica: 't_ubicacion_fisica',
    t_usuario: 't_usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "t_accesorios" | "t_areas_sistemas" | "t_articulo_sistemas" | "t_colaboradores" | "t_consumibles" | "t_dispositivos" | "t_factura" | "t_historial_articulo" | "t_movimientos" | "t_propietario" | "t_refacciones" | "t_roles" | "t_ubicacion_fisica" | "t_usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      t_accesorios: {
        payload: Prisma.$t_accesoriosPayload<ExtArgs>
        fields: Prisma.t_accesoriosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_accesoriosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_accesoriosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload>
          }
          findFirst: {
            args: Prisma.t_accesoriosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_accesoriosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload>
          }
          findMany: {
            args: Prisma.t_accesoriosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload>[]
          }
          create: {
            args: Prisma.t_accesoriosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload>
          }
          createMany: {
            args: Prisma.t_accesoriosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_accesoriosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload>
          }
          update: {
            args: Prisma.t_accesoriosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload>
          }
          deleteMany: {
            args: Prisma.t_accesoriosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_accesoriosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_accesoriosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_accesoriosPayload>
          }
          aggregate: {
            args: Prisma.T_accesoriosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_accesorios>
          }
          groupBy: {
            args: Prisma.t_accesoriosGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_accesoriosGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_accesoriosCountArgs<ExtArgs>
            result: $Utils.Optional<T_accesoriosCountAggregateOutputType> | number
          }
        }
      }
      t_areas_sistemas: {
        payload: Prisma.$t_areas_sistemasPayload<ExtArgs>
        fields: Prisma.t_areas_sistemasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_areas_sistemasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_areas_sistemasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload>
          }
          findFirst: {
            args: Prisma.t_areas_sistemasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_areas_sistemasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload>
          }
          findMany: {
            args: Prisma.t_areas_sistemasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload>[]
          }
          create: {
            args: Prisma.t_areas_sistemasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload>
          }
          createMany: {
            args: Prisma.t_areas_sistemasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_areas_sistemasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload>
          }
          update: {
            args: Prisma.t_areas_sistemasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload>
          }
          deleteMany: {
            args: Prisma.t_areas_sistemasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_areas_sistemasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_areas_sistemasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_areas_sistemasPayload>
          }
          aggregate: {
            args: Prisma.T_areas_sistemasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_areas_sistemas>
          }
          groupBy: {
            args: Prisma.t_areas_sistemasGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_areas_sistemasGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_areas_sistemasCountArgs<ExtArgs>
            result: $Utils.Optional<T_areas_sistemasCountAggregateOutputType> | number
          }
        }
      }
      t_articulo_sistemas: {
        payload: Prisma.$t_articulo_sistemasPayload<ExtArgs>
        fields: Prisma.t_articulo_sistemasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_articulo_sistemasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_articulo_sistemasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload>
          }
          findFirst: {
            args: Prisma.t_articulo_sistemasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_articulo_sistemasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload>
          }
          findMany: {
            args: Prisma.t_articulo_sistemasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload>[]
          }
          create: {
            args: Prisma.t_articulo_sistemasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload>
          }
          createMany: {
            args: Prisma.t_articulo_sistemasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_articulo_sistemasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload>
          }
          update: {
            args: Prisma.t_articulo_sistemasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload>
          }
          deleteMany: {
            args: Prisma.t_articulo_sistemasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_articulo_sistemasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_articulo_sistemasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_articulo_sistemasPayload>
          }
          aggregate: {
            args: Prisma.T_articulo_sistemasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_articulo_sistemas>
          }
          groupBy: {
            args: Prisma.t_articulo_sistemasGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_articulo_sistemasGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_articulo_sistemasCountArgs<ExtArgs>
            result: $Utils.Optional<T_articulo_sistemasCountAggregateOutputType> | number
          }
        }
      }
      t_colaboradores: {
        payload: Prisma.$t_colaboradoresPayload<ExtArgs>
        fields: Prisma.t_colaboradoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_colaboradoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_colaboradoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload>
          }
          findFirst: {
            args: Prisma.t_colaboradoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_colaboradoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload>
          }
          findMany: {
            args: Prisma.t_colaboradoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload>[]
          }
          create: {
            args: Prisma.t_colaboradoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload>
          }
          createMany: {
            args: Prisma.t_colaboradoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_colaboradoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload>
          }
          update: {
            args: Prisma.t_colaboradoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload>
          }
          deleteMany: {
            args: Prisma.t_colaboradoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_colaboradoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_colaboradoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_colaboradoresPayload>
          }
          aggregate: {
            args: Prisma.T_colaboradoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_colaboradores>
          }
          groupBy: {
            args: Prisma.t_colaboradoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_colaboradoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_colaboradoresCountArgs<ExtArgs>
            result: $Utils.Optional<T_colaboradoresCountAggregateOutputType> | number
          }
        }
      }
      t_consumibles: {
        payload: Prisma.$t_consumiblesPayload<ExtArgs>
        fields: Prisma.t_consumiblesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_consumiblesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_consumiblesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload>
          }
          findFirst: {
            args: Prisma.t_consumiblesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_consumiblesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload>
          }
          findMany: {
            args: Prisma.t_consumiblesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload>[]
          }
          create: {
            args: Prisma.t_consumiblesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload>
          }
          createMany: {
            args: Prisma.t_consumiblesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_consumiblesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload>
          }
          update: {
            args: Prisma.t_consumiblesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload>
          }
          deleteMany: {
            args: Prisma.t_consumiblesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_consumiblesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_consumiblesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_consumiblesPayload>
          }
          aggregate: {
            args: Prisma.T_consumiblesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_consumibles>
          }
          groupBy: {
            args: Prisma.t_consumiblesGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_consumiblesGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_consumiblesCountArgs<ExtArgs>
            result: $Utils.Optional<T_consumiblesCountAggregateOutputType> | number
          }
        }
      }
      t_dispositivos: {
        payload: Prisma.$t_dispositivosPayload<ExtArgs>
        fields: Prisma.t_dispositivosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_dispositivosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_dispositivosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload>
          }
          findFirst: {
            args: Prisma.t_dispositivosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_dispositivosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload>
          }
          findMany: {
            args: Prisma.t_dispositivosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload>[]
          }
          create: {
            args: Prisma.t_dispositivosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload>
          }
          createMany: {
            args: Prisma.t_dispositivosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_dispositivosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload>
          }
          update: {
            args: Prisma.t_dispositivosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload>
          }
          deleteMany: {
            args: Prisma.t_dispositivosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_dispositivosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_dispositivosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_dispositivosPayload>
          }
          aggregate: {
            args: Prisma.T_dispositivosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_dispositivos>
          }
          groupBy: {
            args: Prisma.t_dispositivosGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_dispositivosGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_dispositivosCountArgs<ExtArgs>
            result: $Utils.Optional<T_dispositivosCountAggregateOutputType> | number
          }
        }
      }
      t_factura: {
        payload: Prisma.$t_facturaPayload<ExtArgs>
        fields: Prisma.t_facturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_facturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_facturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload>
          }
          findFirst: {
            args: Prisma.t_facturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_facturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload>
          }
          findMany: {
            args: Prisma.t_facturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload>[]
          }
          create: {
            args: Prisma.t_facturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload>
          }
          createMany: {
            args: Prisma.t_facturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_facturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload>
          }
          update: {
            args: Prisma.t_facturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload>
          }
          deleteMany: {
            args: Prisma.t_facturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_facturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_facturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_facturaPayload>
          }
          aggregate: {
            args: Prisma.T_facturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_factura>
          }
          groupBy: {
            args: Prisma.t_facturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_facturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_facturaCountArgs<ExtArgs>
            result: $Utils.Optional<T_facturaCountAggregateOutputType> | number
          }
        }
      }
      t_historial_articulo: {
        payload: Prisma.$t_historial_articuloPayload<ExtArgs>
        fields: Prisma.t_historial_articuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_historial_articuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_historial_articuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload>
          }
          findFirst: {
            args: Prisma.t_historial_articuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_historial_articuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload>
          }
          findMany: {
            args: Prisma.t_historial_articuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload>[]
          }
          create: {
            args: Prisma.t_historial_articuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload>
          }
          createMany: {
            args: Prisma.t_historial_articuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_historial_articuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload>
          }
          update: {
            args: Prisma.t_historial_articuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload>
          }
          deleteMany: {
            args: Prisma.t_historial_articuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_historial_articuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_historial_articuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_historial_articuloPayload>
          }
          aggregate: {
            args: Prisma.T_historial_articuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_historial_articulo>
          }
          groupBy: {
            args: Prisma.t_historial_articuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_historial_articuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_historial_articuloCountArgs<ExtArgs>
            result: $Utils.Optional<T_historial_articuloCountAggregateOutputType> | number
          }
        }
      }
      t_movimientos: {
        payload: Prisma.$t_movimientosPayload<ExtArgs>
        fields: Prisma.t_movimientosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_movimientosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_movimientosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload>
          }
          findFirst: {
            args: Prisma.t_movimientosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_movimientosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload>
          }
          findMany: {
            args: Prisma.t_movimientosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload>[]
          }
          create: {
            args: Prisma.t_movimientosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload>
          }
          createMany: {
            args: Prisma.t_movimientosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_movimientosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload>
          }
          update: {
            args: Prisma.t_movimientosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload>
          }
          deleteMany: {
            args: Prisma.t_movimientosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_movimientosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_movimientosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_movimientosPayload>
          }
          aggregate: {
            args: Prisma.T_movimientosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_movimientos>
          }
          groupBy: {
            args: Prisma.t_movimientosGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_movimientosGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_movimientosCountArgs<ExtArgs>
            result: $Utils.Optional<T_movimientosCountAggregateOutputType> | number
          }
        }
      }
      t_propietario: {
        payload: Prisma.$t_propietarioPayload<ExtArgs>
        fields: Prisma.t_propietarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_propietarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_propietarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload>
          }
          findFirst: {
            args: Prisma.t_propietarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_propietarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload>
          }
          findMany: {
            args: Prisma.t_propietarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload>[]
          }
          create: {
            args: Prisma.t_propietarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload>
          }
          createMany: {
            args: Prisma.t_propietarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_propietarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload>
          }
          update: {
            args: Prisma.t_propietarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload>
          }
          deleteMany: {
            args: Prisma.t_propietarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_propietarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_propietarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_propietarioPayload>
          }
          aggregate: {
            args: Prisma.T_propietarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_propietario>
          }
          groupBy: {
            args: Prisma.t_propietarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_propietarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_propietarioCountArgs<ExtArgs>
            result: $Utils.Optional<T_propietarioCountAggregateOutputType> | number
          }
        }
      }
      t_refacciones: {
        payload: Prisma.$t_refaccionesPayload<ExtArgs>
        fields: Prisma.t_refaccionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_refaccionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_refaccionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload>
          }
          findFirst: {
            args: Prisma.t_refaccionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_refaccionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload>
          }
          findMany: {
            args: Prisma.t_refaccionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload>[]
          }
          create: {
            args: Prisma.t_refaccionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload>
          }
          createMany: {
            args: Prisma.t_refaccionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_refaccionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload>
          }
          update: {
            args: Prisma.t_refaccionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload>
          }
          deleteMany: {
            args: Prisma.t_refaccionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_refaccionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_refaccionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_refaccionesPayload>
          }
          aggregate: {
            args: Prisma.T_refaccionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_refacciones>
          }
          groupBy: {
            args: Prisma.t_refaccionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_refaccionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_refaccionesCountArgs<ExtArgs>
            result: $Utils.Optional<T_refaccionesCountAggregateOutputType> | number
          }
        }
      }
      t_roles: {
        payload: Prisma.$t_rolesPayload<ExtArgs>
        fields: Prisma.t_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload>
          }
          findFirst: {
            args: Prisma.t_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload>
          }
          findMany: {
            args: Prisma.t_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload>[]
          }
          create: {
            args: Prisma.t_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload>
          }
          createMany: {
            args: Prisma.t_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload>
          }
          update: {
            args: Prisma.t_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload>
          }
          deleteMany: {
            args: Prisma.t_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_rolesPayload>
          }
          aggregate: {
            args: Prisma.T_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_roles>
          }
          groupBy: {
            args: Prisma.t_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<T_rolesCountAggregateOutputType> | number
          }
        }
      }
      t_ubicacion_fisica: {
        payload: Prisma.$t_ubicacion_fisicaPayload<ExtArgs>
        fields: Prisma.t_ubicacion_fisicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_ubicacion_fisicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_ubicacion_fisicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload>
          }
          findFirst: {
            args: Prisma.t_ubicacion_fisicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_ubicacion_fisicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload>
          }
          findMany: {
            args: Prisma.t_ubicacion_fisicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload>[]
          }
          create: {
            args: Prisma.t_ubicacion_fisicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload>
          }
          createMany: {
            args: Prisma.t_ubicacion_fisicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_ubicacion_fisicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload>
          }
          update: {
            args: Prisma.t_ubicacion_fisicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload>
          }
          deleteMany: {
            args: Prisma.t_ubicacion_fisicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_ubicacion_fisicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_ubicacion_fisicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_ubicacion_fisicaPayload>
          }
          aggregate: {
            args: Prisma.T_ubicacion_fisicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_ubicacion_fisica>
          }
          groupBy: {
            args: Prisma.t_ubicacion_fisicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_ubicacion_fisicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_ubicacion_fisicaCountArgs<ExtArgs>
            result: $Utils.Optional<T_ubicacion_fisicaCountAggregateOutputType> | number
          }
        }
      }
      t_usuario: {
        payload: Prisma.$t_usuarioPayload<ExtArgs>
        fields: Prisma.t_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload>
          }
          findFirst: {
            args: Prisma.t_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload>
          }
          findMany: {
            args: Prisma.t_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload>[]
          }
          create: {
            args: Prisma.t_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload>
          }
          createMany: {
            args: Prisma.t_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload>
          }
          update: {
            args: Prisma.t_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.t_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_usuarioPayload>
          }
          aggregate: {
            args: Prisma.T_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_usuario>
          }
          groupBy: {
            args: Prisma.t_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<T_usuarioCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    t_accesorios?: t_accesoriosOmit
    t_areas_sistemas?: t_areas_sistemasOmit
    t_articulo_sistemas?: t_articulo_sistemasOmit
    t_colaboradores?: t_colaboradoresOmit
    t_consumibles?: t_consumiblesOmit
    t_dispositivos?: t_dispositivosOmit
    t_factura?: t_facturaOmit
    t_historial_articulo?: t_historial_articuloOmit
    t_movimientos?: t_movimientosOmit
    t_propietario?: t_propietarioOmit
    t_refacciones?: t_refaccionesOmit
    t_roles?: t_rolesOmit
    t_ubicacion_fisica?: t_ubicacion_fisicaOmit
    t_usuario?: t_usuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model t_accesorios
   */

  export type AggregateT_accesorios = {
    _count: T_accesoriosCountAggregateOutputType | null
    _avg: T_accesoriosAvgAggregateOutputType | null
    _sum: T_accesoriosSumAggregateOutputType | null
    _min: T_accesoriosMinAggregateOutputType | null
    _max: T_accesoriosMaxAggregateOutputType | null
  }

  export type T_accesoriosAvgAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_accesoriosSumAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_accesoriosMinAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_accesoriosMaxAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_accesoriosCountAggregateOutputType = {
    id_dispositivos: number
    dispositivo: number
    descripcion_sistemas: number
    marca: number
    modelo: number
    num_serie: number
    id_visual: number
    num_sap: number
    status: number
    extras: number
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _all: number
  }


  export type T_accesoriosAvgAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_accesoriosSumAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_accesoriosMinAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_accesoriosMaxAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_accesoriosCountAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
    _all?: true
  }

  export type T_accesoriosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_accesorios to aggregate.
     */
    where?: t_accesoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_accesorios to fetch.
     */
    orderBy?: t_accesoriosOrderByWithRelationInput | t_accesoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_accesoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_accesorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_accesorios
    **/
    _count?: true | T_accesoriosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_accesoriosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_accesoriosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_accesoriosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_accesoriosMaxAggregateInputType
  }

  export type GetT_accesoriosAggregateType<T extends T_accesoriosAggregateArgs> = {
        [P in keyof T & keyof AggregateT_accesorios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_accesorios[P]>
      : GetScalarType<T[P], AggregateT_accesorios[P]>
  }




  export type t_accesoriosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_accesoriosWhereInput
    orderBy?: t_accesoriosOrderByWithAggregationInput | t_accesoriosOrderByWithAggregationInput[]
    by: T_accesoriosScalarFieldEnum[] | T_accesoriosScalarFieldEnum
    having?: t_accesoriosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_accesoriosCountAggregateInputType | true
    _avg?: T_accesoriosAvgAggregateInputType
    _sum?: T_accesoriosSumAggregateInputType
    _min?: T_accesoriosMinAggregateInputType
    _max?: T_accesoriosMaxAggregateInputType
  }

  export type T_accesoriosGroupByOutputType = {
    id_dispositivos: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _count: T_accesoriosCountAggregateOutputType | null
    _avg: T_accesoriosAvgAggregateOutputType | null
    _sum: T_accesoriosSumAggregateOutputType | null
    _min: T_accesoriosMinAggregateOutputType | null
    _max: T_accesoriosMaxAggregateOutputType | null
  }

  type GetT_accesoriosGroupByPayload<T extends t_accesoriosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_accesoriosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_accesoriosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_accesoriosGroupByOutputType[P]>
            : GetScalarType<T[P], T_accesoriosGroupByOutputType[P]>
        }
      >
    >


  export type t_accesoriosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
  }, ExtArgs["result"]["t_accesorios"]>



  export type t_accesoriosSelectScalar = {
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
  }

  export type t_accesoriosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dispositivos" | "dispositivo" | "descripcion_sistemas" | "marca" | "modelo" | "num_serie" | "id_visual" | "num_sap" | "status" | "extras" | "id_area" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura", ExtArgs["result"]["t_accesorios"]>

  export type $t_accesoriosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_accesorios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_dispositivos: number
      dispositivo: string
      descripcion_sistemas: string
      marca: string
      modelo: string
      num_serie: string
      id_visual: string
      num_sap: number
      status: string
      extras: string
      id_area: number
      num_control: number
      codigo_propietario: number
      codigo_ubicacion: number
      id_factura: number
    }, ExtArgs["result"]["t_accesorios"]>
    composites: {}
  }

  type t_accesoriosGetPayload<S extends boolean | null | undefined | t_accesoriosDefaultArgs> = $Result.GetResult<Prisma.$t_accesoriosPayload, S>

  type t_accesoriosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_accesoriosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_accesoriosCountAggregateInputType | true
    }

  export interface t_accesoriosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_accesorios'], meta: { name: 't_accesorios' } }
    /**
     * Find zero or one T_accesorios that matches the filter.
     * @param {t_accesoriosFindUniqueArgs} args - Arguments to find a T_accesorios
     * @example
     * // Get one T_accesorios
     * const t_accesorios = await prisma.t_accesorios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_accesoriosFindUniqueArgs>(args: SelectSubset<T, t_accesoriosFindUniqueArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_accesorios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_accesoriosFindUniqueOrThrowArgs} args - Arguments to find a T_accesorios
     * @example
     * // Get one T_accesorios
     * const t_accesorios = await prisma.t_accesorios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_accesoriosFindUniqueOrThrowArgs>(args: SelectSubset<T, t_accesoriosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_accesorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_accesoriosFindFirstArgs} args - Arguments to find a T_accesorios
     * @example
     * // Get one T_accesorios
     * const t_accesorios = await prisma.t_accesorios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_accesoriosFindFirstArgs>(args?: SelectSubset<T, t_accesoriosFindFirstArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_accesorios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_accesoriosFindFirstOrThrowArgs} args - Arguments to find a T_accesorios
     * @example
     * // Get one T_accesorios
     * const t_accesorios = await prisma.t_accesorios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_accesoriosFindFirstOrThrowArgs>(args?: SelectSubset<T, t_accesoriosFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_accesorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_accesoriosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_accesorios
     * const t_accesorios = await prisma.t_accesorios.findMany()
     * 
     * // Get first 10 T_accesorios
     * const t_accesorios = await prisma.t_accesorios.findMany({ take: 10 })
     * 
     * // Only select the `id_dispositivos`
     * const t_accesoriosWithId_dispositivosOnly = await prisma.t_accesorios.findMany({ select: { id_dispositivos: true } })
     * 
     */
    findMany<T extends t_accesoriosFindManyArgs>(args?: SelectSubset<T, t_accesoriosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_accesorios.
     * @param {t_accesoriosCreateArgs} args - Arguments to create a T_accesorios.
     * @example
     * // Create one T_accesorios
     * const T_accesorios = await prisma.t_accesorios.create({
     *   data: {
     *     // ... data to create a T_accesorios
     *   }
     * })
     * 
     */
    create<T extends t_accesoriosCreateArgs>(args: SelectSubset<T, t_accesoriosCreateArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_accesorios.
     * @param {t_accesoriosCreateManyArgs} args - Arguments to create many T_accesorios.
     * @example
     * // Create many T_accesorios
     * const t_accesorios = await prisma.t_accesorios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_accesoriosCreateManyArgs>(args?: SelectSubset<T, t_accesoriosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_accesorios.
     * @param {t_accesoriosDeleteArgs} args - Arguments to delete one T_accesorios.
     * @example
     * // Delete one T_accesorios
     * const T_accesorios = await prisma.t_accesorios.delete({
     *   where: {
     *     // ... filter to delete one T_accesorios
     *   }
     * })
     * 
     */
    delete<T extends t_accesoriosDeleteArgs>(args: SelectSubset<T, t_accesoriosDeleteArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_accesorios.
     * @param {t_accesoriosUpdateArgs} args - Arguments to update one T_accesorios.
     * @example
     * // Update one T_accesorios
     * const t_accesorios = await prisma.t_accesorios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_accesoriosUpdateArgs>(args: SelectSubset<T, t_accesoriosUpdateArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_accesorios.
     * @param {t_accesoriosDeleteManyArgs} args - Arguments to filter T_accesorios to delete.
     * @example
     * // Delete a few T_accesorios
     * const { count } = await prisma.t_accesorios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_accesoriosDeleteManyArgs>(args?: SelectSubset<T, t_accesoriosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_accesorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_accesoriosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_accesorios
     * const t_accesorios = await prisma.t_accesorios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_accesoriosUpdateManyArgs>(args: SelectSubset<T, t_accesoriosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_accesorios.
     * @param {t_accesoriosUpsertArgs} args - Arguments to update or create a T_accesorios.
     * @example
     * // Update or create a T_accesorios
     * const t_accesorios = await prisma.t_accesorios.upsert({
     *   create: {
     *     // ... data to create a T_accesorios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_accesorios we want to update
     *   }
     * })
     */
    upsert<T extends t_accesoriosUpsertArgs>(args: SelectSubset<T, t_accesoriosUpsertArgs<ExtArgs>>): Prisma__t_accesoriosClient<$Result.GetResult<Prisma.$t_accesoriosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_accesorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_accesoriosCountArgs} args - Arguments to filter T_accesorios to count.
     * @example
     * // Count the number of T_accesorios
     * const count = await prisma.t_accesorios.count({
     *   where: {
     *     // ... the filter for the T_accesorios we want to count
     *   }
     * })
    **/
    count<T extends t_accesoriosCountArgs>(
      args?: Subset<T, t_accesoriosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_accesoriosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_accesorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_accesoriosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_accesoriosAggregateArgs>(args: Subset<T, T_accesoriosAggregateArgs>): Prisma.PrismaPromise<GetT_accesoriosAggregateType<T>>

    /**
     * Group by T_accesorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_accesoriosGroupByArgs} args - Group by arguments.
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
      T extends t_accesoriosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_accesoriosGroupByArgs['orderBy'] }
        : { orderBy?: t_accesoriosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_accesoriosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_accesoriosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_accesorios model
   */
  readonly fields: t_accesoriosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_accesorios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_accesoriosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_accesorios model
   */
  interface t_accesoriosFieldRefs {
    readonly id_dispositivos: FieldRef<"t_accesorios", 'Int'>
    readonly dispositivo: FieldRef<"t_accesorios", 'String'>
    readonly descripcion_sistemas: FieldRef<"t_accesorios", 'String'>
    readonly marca: FieldRef<"t_accesorios", 'String'>
    readonly modelo: FieldRef<"t_accesorios", 'String'>
    readonly num_serie: FieldRef<"t_accesorios", 'String'>
    readonly id_visual: FieldRef<"t_accesorios", 'String'>
    readonly num_sap: FieldRef<"t_accesorios", 'Int'>
    readonly status: FieldRef<"t_accesorios", 'String'>
    readonly extras: FieldRef<"t_accesorios", 'String'>
    readonly id_area: FieldRef<"t_accesorios", 'Int'>
    readonly num_control: FieldRef<"t_accesorios", 'Int'>
    readonly codigo_propietario: FieldRef<"t_accesorios", 'Int'>
    readonly codigo_ubicacion: FieldRef<"t_accesorios", 'Int'>
    readonly id_factura: FieldRef<"t_accesorios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_accesorios findUnique
   */
  export type t_accesoriosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * Filter, which t_accesorios to fetch.
     */
    where: t_accesoriosWhereUniqueInput
  }

  /**
   * t_accesorios findUniqueOrThrow
   */
  export type t_accesoriosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * Filter, which t_accesorios to fetch.
     */
    where: t_accesoriosWhereUniqueInput
  }

  /**
   * t_accesorios findFirst
   */
  export type t_accesoriosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * Filter, which t_accesorios to fetch.
     */
    where?: t_accesoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_accesorios to fetch.
     */
    orderBy?: t_accesoriosOrderByWithRelationInput | t_accesoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_accesorios.
     */
    cursor?: t_accesoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_accesorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_accesorios.
     */
    distinct?: T_accesoriosScalarFieldEnum | T_accesoriosScalarFieldEnum[]
  }

  /**
   * t_accesorios findFirstOrThrow
   */
  export type t_accesoriosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * Filter, which t_accesorios to fetch.
     */
    where?: t_accesoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_accesorios to fetch.
     */
    orderBy?: t_accesoriosOrderByWithRelationInput | t_accesoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_accesorios.
     */
    cursor?: t_accesoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_accesorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_accesorios.
     */
    distinct?: T_accesoriosScalarFieldEnum | T_accesoriosScalarFieldEnum[]
  }

  /**
   * t_accesorios findMany
   */
  export type t_accesoriosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * Filter, which t_accesorios to fetch.
     */
    where?: t_accesoriosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_accesorios to fetch.
     */
    orderBy?: t_accesoriosOrderByWithRelationInput | t_accesoriosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_accesorios.
     */
    cursor?: t_accesoriosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_accesorios.
     */
    skip?: number
    distinct?: T_accesoriosScalarFieldEnum | T_accesoriosScalarFieldEnum[]
  }

  /**
   * t_accesorios create
   */
  export type t_accesoriosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * The data needed to create a t_accesorios.
     */
    data: XOR<t_accesoriosCreateInput, t_accesoriosUncheckedCreateInput>
  }

  /**
   * t_accesorios createMany
   */
  export type t_accesoriosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_accesorios.
     */
    data: t_accesoriosCreateManyInput | t_accesoriosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_accesorios update
   */
  export type t_accesoriosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * The data needed to update a t_accesorios.
     */
    data: XOR<t_accesoriosUpdateInput, t_accesoriosUncheckedUpdateInput>
    /**
     * Choose, which t_accesorios to update.
     */
    where: t_accesoriosWhereUniqueInput
  }

  /**
   * t_accesorios updateMany
   */
  export type t_accesoriosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_accesorios.
     */
    data: XOR<t_accesoriosUpdateManyMutationInput, t_accesoriosUncheckedUpdateManyInput>
    /**
     * Filter which t_accesorios to update
     */
    where?: t_accesoriosWhereInput
    /**
     * Limit how many t_accesorios to update.
     */
    limit?: number
  }

  /**
   * t_accesorios upsert
   */
  export type t_accesoriosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * The filter to search for the t_accesorios to update in case it exists.
     */
    where: t_accesoriosWhereUniqueInput
    /**
     * In case the t_accesorios found by the `where` argument doesn't exist, create a new t_accesorios with this data.
     */
    create: XOR<t_accesoriosCreateInput, t_accesoriosUncheckedCreateInput>
    /**
     * In case the t_accesorios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_accesoriosUpdateInput, t_accesoriosUncheckedUpdateInput>
  }

  /**
   * t_accesorios delete
   */
  export type t_accesoriosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
    /**
     * Filter which t_accesorios to delete.
     */
    where: t_accesoriosWhereUniqueInput
  }

  /**
   * t_accesorios deleteMany
   */
  export type t_accesoriosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_accesorios to delete
     */
    where?: t_accesoriosWhereInput
    /**
     * Limit how many t_accesorios to delete.
     */
    limit?: number
  }

  /**
   * t_accesorios without action
   */
  export type t_accesoriosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_accesorios
     */
    select?: t_accesoriosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_accesorios
     */
    omit?: t_accesoriosOmit<ExtArgs> | null
  }


  /**
   * Model t_areas_sistemas
   */

  export type AggregateT_areas_sistemas = {
    _count: T_areas_sistemasCountAggregateOutputType | null
    _avg: T_areas_sistemasAvgAggregateOutputType | null
    _sum: T_areas_sistemasSumAggregateOutputType | null
    _min: T_areas_sistemasMinAggregateOutputType | null
    _max: T_areas_sistemasMaxAggregateOutputType | null
  }

  export type T_areas_sistemasAvgAggregateOutputType = {
    id_area: number | null
    area_sistemas: number | null
  }

  export type T_areas_sistemasSumAggregateOutputType = {
    id_area: number | null
    area_sistemas: number | null
  }

  export type T_areas_sistemasMinAggregateOutputType = {
    id_area: number | null
    ceco_sap: string | null
    descripcion_ceco: string | null
    area_sistemas: number | null
  }

  export type T_areas_sistemasMaxAggregateOutputType = {
    id_area: number | null
    ceco_sap: string | null
    descripcion_ceco: string | null
    area_sistemas: number | null
  }

  export type T_areas_sistemasCountAggregateOutputType = {
    id_area: number
    ceco_sap: number
    descripcion_ceco: number
    area_sistemas: number
    _all: number
  }


  export type T_areas_sistemasAvgAggregateInputType = {
    id_area?: true
    area_sistemas?: true
  }

  export type T_areas_sistemasSumAggregateInputType = {
    id_area?: true
    area_sistemas?: true
  }

  export type T_areas_sistemasMinAggregateInputType = {
    id_area?: true
    ceco_sap?: true
    descripcion_ceco?: true
    area_sistemas?: true
  }

  export type T_areas_sistemasMaxAggregateInputType = {
    id_area?: true
    ceco_sap?: true
    descripcion_ceco?: true
    area_sistemas?: true
  }

  export type T_areas_sistemasCountAggregateInputType = {
    id_area?: true
    ceco_sap?: true
    descripcion_ceco?: true
    area_sistemas?: true
    _all?: true
  }

  export type T_areas_sistemasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_areas_sistemas to aggregate.
     */
    where?: t_areas_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_areas_sistemas to fetch.
     */
    orderBy?: t_areas_sistemasOrderByWithRelationInput | t_areas_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_areas_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_areas_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_areas_sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_areas_sistemas
    **/
    _count?: true | T_areas_sistemasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_areas_sistemasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_areas_sistemasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_areas_sistemasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_areas_sistemasMaxAggregateInputType
  }

  export type GetT_areas_sistemasAggregateType<T extends T_areas_sistemasAggregateArgs> = {
        [P in keyof T & keyof AggregateT_areas_sistemas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_areas_sistemas[P]>
      : GetScalarType<T[P], AggregateT_areas_sistemas[P]>
  }




  export type t_areas_sistemasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_areas_sistemasWhereInput
    orderBy?: t_areas_sistemasOrderByWithAggregationInput | t_areas_sistemasOrderByWithAggregationInput[]
    by: T_areas_sistemasScalarFieldEnum[] | T_areas_sistemasScalarFieldEnum
    having?: t_areas_sistemasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_areas_sistemasCountAggregateInputType | true
    _avg?: T_areas_sistemasAvgAggregateInputType
    _sum?: T_areas_sistemasSumAggregateInputType
    _min?: T_areas_sistemasMinAggregateInputType
    _max?: T_areas_sistemasMaxAggregateInputType
  }

  export type T_areas_sistemasGroupByOutputType = {
    id_area: number
    ceco_sap: string
    descripcion_ceco: string
    area_sistemas: number
    _count: T_areas_sistemasCountAggregateOutputType | null
    _avg: T_areas_sistemasAvgAggregateOutputType | null
    _sum: T_areas_sistemasSumAggregateOutputType | null
    _min: T_areas_sistemasMinAggregateOutputType | null
    _max: T_areas_sistemasMaxAggregateOutputType | null
  }

  type GetT_areas_sistemasGroupByPayload<T extends t_areas_sistemasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_areas_sistemasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_areas_sistemasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_areas_sistemasGroupByOutputType[P]>
            : GetScalarType<T[P], T_areas_sistemasGroupByOutputType[P]>
        }
      >
    >


  export type t_areas_sistemasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_area?: boolean
    ceco_sap?: boolean
    descripcion_ceco?: boolean
    area_sistemas?: boolean
  }, ExtArgs["result"]["t_areas_sistemas"]>



  export type t_areas_sistemasSelectScalar = {
    id_area?: boolean
    ceco_sap?: boolean
    descripcion_ceco?: boolean
    area_sistemas?: boolean
  }

  export type t_areas_sistemasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_area" | "ceco_sap" | "descripcion_ceco" | "area_sistemas", ExtArgs["result"]["t_areas_sistemas"]>

  export type $t_areas_sistemasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_areas_sistemas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_area: number
      ceco_sap: string
      descripcion_ceco: string
      area_sistemas: number
    }, ExtArgs["result"]["t_areas_sistemas"]>
    composites: {}
  }

  type t_areas_sistemasGetPayload<S extends boolean | null | undefined | t_areas_sistemasDefaultArgs> = $Result.GetResult<Prisma.$t_areas_sistemasPayload, S>

  type t_areas_sistemasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_areas_sistemasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_areas_sistemasCountAggregateInputType | true
    }

  export interface t_areas_sistemasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_areas_sistemas'], meta: { name: 't_areas_sistemas' } }
    /**
     * Find zero or one T_areas_sistemas that matches the filter.
     * @param {t_areas_sistemasFindUniqueArgs} args - Arguments to find a T_areas_sistemas
     * @example
     * // Get one T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_areas_sistemasFindUniqueArgs>(args: SelectSubset<T, t_areas_sistemasFindUniqueArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_areas_sistemas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_areas_sistemasFindUniqueOrThrowArgs} args - Arguments to find a T_areas_sistemas
     * @example
     * // Get one T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_areas_sistemasFindUniqueOrThrowArgs>(args: SelectSubset<T, t_areas_sistemasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_areas_sistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_areas_sistemasFindFirstArgs} args - Arguments to find a T_areas_sistemas
     * @example
     * // Get one T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_areas_sistemasFindFirstArgs>(args?: SelectSubset<T, t_areas_sistemasFindFirstArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_areas_sistemas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_areas_sistemasFindFirstOrThrowArgs} args - Arguments to find a T_areas_sistemas
     * @example
     * // Get one T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_areas_sistemasFindFirstOrThrowArgs>(args?: SelectSubset<T, t_areas_sistemasFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_areas_sistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_areas_sistemasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.findMany()
     * 
     * // Get first 10 T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.findMany({ take: 10 })
     * 
     * // Only select the `id_area`
     * const t_areas_sistemasWithId_areaOnly = await prisma.t_areas_sistemas.findMany({ select: { id_area: true } })
     * 
     */
    findMany<T extends t_areas_sistemasFindManyArgs>(args?: SelectSubset<T, t_areas_sistemasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_areas_sistemas.
     * @param {t_areas_sistemasCreateArgs} args - Arguments to create a T_areas_sistemas.
     * @example
     * // Create one T_areas_sistemas
     * const T_areas_sistemas = await prisma.t_areas_sistemas.create({
     *   data: {
     *     // ... data to create a T_areas_sistemas
     *   }
     * })
     * 
     */
    create<T extends t_areas_sistemasCreateArgs>(args: SelectSubset<T, t_areas_sistemasCreateArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_areas_sistemas.
     * @param {t_areas_sistemasCreateManyArgs} args - Arguments to create many T_areas_sistemas.
     * @example
     * // Create many T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_areas_sistemasCreateManyArgs>(args?: SelectSubset<T, t_areas_sistemasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_areas_sistemas.
     * @param {t_areas_sistemasDeleteArgs} args - Arguments to delete one T_areas_sistemas.
     * @example
     * // Delete one T_areas_sistemas
     * const T_areas_sistemas = await prisma.t_areas_sistemas.delete({
     *   where: {
     *     // ... filter to delete one T_areas_sistemas
     *   }
     * })
     * 
     */
    delete<T extends t_areas_sistemasDeleteArgs>(args: SelectSubset<T, t_areas_sistemasDeleteArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_areas_sistemas.
     * @param {t_areas_sistemasUpdateArgs} args - Arguments to update one T_areas_sistemas.
     * @example
     * // Update one T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_areas_sistemasUpdateArgs>(args: SelectSubset<T, t_areas_sistemasUpdateArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_areas_sistemas.
     * @param {t_areas_sistemasDeleteManyArgs} args - Arguments to filter T_areas_sistemas to delete.
     * @example
     * // Delete a few T_areas_sistemas
     * const { count } = await prisma.t_areas_sistemas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_areas_sistemasDeleteManyArgs>(args?: SelectSubset<T, t_areas_sistemasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_areas_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_areas_sistemasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_areas_sistemasUpdateManyArgs>(args: SelectSubset<T, t_areas_sistemasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_areas_sistemas.
     * @param {t_areas_sistemasUpsertArgs} args - Arguments to update or create a T_areas_sistemas.
     * @example
     * // Update or create a T_areas_sistemas
     * const t_areas_sistemas = await prisma.t_areas_sistemas.upsert({
     *   create: {
     *     // ... data to create a T_areas_sistemas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_areas_sistemas we want to update
     *   }
     * })
     */
    upsert<T extends t_areas_sistemasUpsertArgs>(args: SelectSubset<T, t_areas_sistemasUpsertArgs<ExtArgs>>): Prisma__t_areas_sistemasClient<$Result.GetResult<Prisma.$t_areas_sistemasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_areas_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_areas_sistemasCountArgs} args - Arguments to filter T_areas_sistemas to count.
     * @example
     * // Count the number of T_areas_sistemas
     * const count = await prisma.t_areas_sistemas.count({
     *   where: {
     *     // ... the filter for the T_areas_sistemas we want to count
     *   }
     * })
    **/
    count<T extends t_areas_sistemasCountArgs>(
      args?: Subset<T, t_areas_sistemasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_areas_sistemasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_areas_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_areas_sistemasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_areas_sistemasAggregateArgs>(args: Subset<T, T_areas_sistemasAggregateArgs>): Prisma.PrismaPromise<GetT_areas_sistemasAggregateType<T>>

    /**
     * Group by T_areas_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_areas_sistemasGroupByArgs} args - Group by arguments.
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
      T extends t_areas_sistemasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_areas_sistemasGroupByArgs['orderBy'] }
        : { orderBy?: t_areas_sistemasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_areas_sistemasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_areas_sistemasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_areas_sistemas model
   */
  readonly fields: t_areas_sistemasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_areas_sistemas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_areas_sistemasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_areas_sistemas model
   */
  interface t_areas_sistemasFieldRefs {
    readonly id_area: FieldRef<"t_areas_sistemas", 'Int'>
    readonly ceco_sap: FieldRef<"t_areas_sistemas", 'String'>
    readonly descripcion_ceco: FieldRef<"t_areas_sistemas", 'String'>
    readonly area_sistemas: FieldRef<"t_areas_sistemas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_areas_sistemas findUnique
   */
  export type t_areas_sistemasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_areas_sistemas to fetch.
     */
    where: t_areas_sistemasWhereUniqueInput
  }

  /**
   * t_areas_sistemas findUniqueOrThrow
   */
  export type t_areas_sistemasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_areas_sistemas to fetch.
     */
    where: t_areas_sistemasWhereUniqueInput
  }

  /**
   * t_areas_sistemas findFirst
   */
  export type t_areas_sistemasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_areas_sistemas to fetch.
     */
    where?: t_areas_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_areas_sistemas to fetch.
     */
    orderBy?: t_areas_sistemasOrderByWithRelationInput | t_areas_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_areas_sistemas.
     */
    cursor?: t_areas_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_areas_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_areas_sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_areas_sistemas.
     */
    distinct?: T_areas_sistemasScalarFieldEnum | T_areas_sistemasScalarFieldEnum[]
  }

  /**
   * t_areas_sistemas findFirstOrThrow
   */
  export type t_areas_sistemasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_areas_sistemas to fetch.
     */
    where?: t_areas_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_areas_sistemas to fetch.
     */
    orderBy?: t_areas_sistemasOrderByWithRelationInput | t_areas_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_areas_sistemas.
     */
    cursor?: t_areas_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_areas_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_areas_sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_areas_sistemas.
     */
    distinct?: T_areas_sistemasScalarFieldEnum | T_areas_sistemasScalarFieldEnum[]
  }

  /**
   * t_areas_sistemas findMany
   */
  export type t_areas_sistemasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_areas_sistemas to fetch.
     */
    where?: t_areas_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_areas_sistemas to fetch.
     */
    orderBy?: t_areas_sistemasOrderByWithRelationInput | t_areas_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_areas_sistemas.
     */
    cursor?: t_areas_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_areas_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_areas_sistemas.
     */
    skip?: number
    distinct?: T_areas_sistemasScalarFieldEnum | T_areas_sistemasScalarFieldEnum[]
  }

  /**
   * t_areas_sistemas create
   */
  export type t_areas_sistemasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * The data needed to create a t_areas_sistemas.
     */
    data: XOR<t_areas_sistemasCreateInput, t_areas_sistemasUncheckedCreateInput>
  }

  /**
   * t_areas_sistemas createMany
   */
  export type t_areas_sistemasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_areas_sistemas.
     */
    data: t_areas_sistemasCreateManyInput | t_areas_sistemasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_areas_sistemas update
   */
  export type t_areas_sistemasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * The data needed to update a t_areas_sistemas.
     */
    data: XOR<t_areas_sistemasUpdateInput, t_areas_sistemasUncheckedUpdateInput>
    /**
     * Choose, which t_areas_sistemas to update.
     */
    where: t_areas_sistemasWhereUniqueInput
  }

  /**
   * t_areas_sistemas updateMany
   */
  export type t_areas_sistemasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_areas_sistemas.
     */
    data: XOR<t_areas_sistemasUpdateManyMutationInput, t_areas_sistemasUncheckedUpdateManyInput>
    /**
     * Filter which t_areas_sistemas to update
     */
    where?: t_areas_sistemasWhereInput
    /**
     * Limit how many t_areas_sistemas to update.
     */
    limit?: number
  }

  /**
   * t_areas_sistemas upsert
   */
  export type t_areas_sistemasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * The filter to search for the t_areas_sistemas to update in case it exists.
     */
    where: t_areas_sistemasWhereUniqueInput
    /**
     * In case the t_areas_sistemas found by the `where` argument doesn't exist, create a new t_areas_sistemas with this data.
     */
    create: XOR<t_areas_sistemasCreateInput, t_areas_sistemasUncheckedCreateInput>
    /**
     * In case the t_areas_sistemas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_areas_sistemasUpdateInput, t_areas_sistemasUncheckedUpdateInput>
  }

  /**
   * t_areas_sistemas delete
   */
  export type t_areas_sistemasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
    /**
     * Filter which t_areas_sistemas to delete.
     */
    where: t_areas_sistemasWhereUniqueInput
  }

  /**
   * t_areas_sistemas deleteMany
   */
  export type t_areas_sistemasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_areas_sistemas to delete
     */
    where?: t_areas_sistemasWhereInput
    /**
     * Limit how many t_areas_sistemas to delete.
     */
    limit?: number
  }

  /**
   * t_areas_sistemas without action
   */
  export type t_areas_sistemasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_areas_sistemas
     */
    select?: t_areas_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_areas_sistemas
     */
    omit?: t_areas_sistemasOmit<ExtArgs> | null
  }


  /**
   * Model t_articulo_sistemas
   */

  export type AggregateT_articulo_sistemas = {
    _count: T_articulo_sistemasCountAggregateOutputType | null
    _avg: T_articulo_sistemasAvgAggregateOutputType | null
    _sum: T_articulo_sistemasSumAggregateOutputType | null
    _min: T_articulo_sistemasMinAggregateOutputType | null
    _max: T_articulo_sistemasMaxAggregateOutputType | null
  }

  export type T_articulo_sistemasAvgAggregateOutputType = {
    id_articulo: number | null
    codigo_articulo: number | null
    consecutivo: number | null
  }

  export type T_articulo_sistemasSumAggregateOutputType = {
    id_articulo: number | null
    codigo_articulo: number | null
    consecutivo: number | null
  }

  export type T_articulo_sistemasMinAggregateOutputType = {
    id_articulo: number | null
    codigo_articulo: number | null
    descripcion: string | null
    identificador: string | null
    consecutivo: number | null
  }

  export type T_articulo_sistemasMaxAggregateOutputType = {
    id_articulo: number | null
    codigo_articulo: number | null
    descripcion: string | null
    identificador: string | null
    consecutivo: number | null
  }

  export type T_articulo_sistemasCountAggregateOutputType = {
    id_articulo: number
    codigo_articulo: number
    descripcion: number
    identificador: number
    consecutivo: number
    _all: number
  }


  export type T_articulo_sistemasAvgAggregateInputType = {
    id_articulo?: true
    codigo_articulo?: true
    consecutivo?: true
  }

  export type T_articulo_sistemasSumAggregateInputType = {
    id_articulo?: true
    codigo_articulo?: true
    consecutivo?: true
  }

  export type T_articulo_sistemasMinAggregateInputType = {
    id_articulo?: true
    codigo_articulo?: true
    descripcion?: true
    identificador?: true
    consecutivo?: true
  }

  export type T_articulo_sistemasMaxAggregateInputType = {
    id_articulo?: true
    codigo_articulo?: true
    descripcion?: true
    identificador?: true
    consecutivo?: true
  }

  export type T_articulo_sistemasCountAggregateInputType = {
    id_articulo?: true
    codigo_articulo?: true
    descripcion?: true
    identificador?: true
    consecutivo?: true
    _all?: true
  }

  export type T_articulo_sistemasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_articulo_sistemas to aggregate.
     */
    where?: t_articulo_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_articulo_sistemas to fetch.
     */
    orderBy?: t_articulo_sistemasOrderByWithRelationInput | t_articulo_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_articulo_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_articulo_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_articulo_sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_articulo_sistemas
    **/
    _count?: true | T_articulo_sistemasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_articulo_sistemasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_articulo_sistemasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_articulo_sistemasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_articulo_sistemasMaxAggregateInputType
  }

  export type GetT_articulo_sistemasAggregateType<T extends T_articulo_sistemasAggregateArgs> = {
        [P in keyof T & keyof AggregateT_articulo_sistemas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_articulo_sistemas[P]>
      : GetScalarType<T[P], AggregateT_articulo_sistemas[P]>
  }




  export type t_articulo_sistemasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_articulo_sistemasWhereInput
    orderBy?: t_articulo_sistemasOrderByWithAggregationInput | t_articulo_sistemasOrderByWithAggregationInput[]
    by: T_articulo_sistemasScalarFieldEnum[] | T_articulo_sistemasScalarFieldEnum
    having?: t_articulo_sistemasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_articulo_sistemasCountAggregateInputType | true
    _avg?: T_articulo_sistemasAvgAggregateInputType
    _sum?: T_articulo_sistemasSumAggregateInputType
    _min?: T_articulo_sistemasMinAggregateInputType
    _max?: T_articulo_sistemasMaxAggregateInputType
  }

  export type T_articulo_sistemasGroupByOutputType = {
    id_articulo: number
    codigo_articulo: number
    descripcion: string
    identificador: string
    consecutivo: number
    _count: T_articulo_sistemasCountAggregateOutputType | null
    _avg: T_articulo_sistemasAvgAggregateOutputType | null
    _sum: T_articulo_sistemasSumAggregateOutputType | null
    _min: T_articulo_sistemasMinAggregateOutputType | null
    _max: T_articulo_sistemasMaxAggregateOutputType | null
  }

  type GetT_articulo_sistemasGroupByPayload<T extends t_articulo_sistemasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_articulo_sistemasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_articulo_sistemasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_articulo_sistemasGroupByOutputType[P]>
            : GetScalarType<T[P], T_articulo_sistemasGroupByOutputType[P]>
        }
      >
    >


  export type t_articulo_sistemasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_articulo?: boolean
    codigo_articulo?: boolean
    descripcion?: boolean
    identificador?: boolean
    consecutivo?: boolean
  }, ExtArgs["result"]["t_articulo_sistemas"]>



  export type t_articulo_sistemasSelectScalar = {
    id_articulo?: boolean
    codigo_articulo?: boolean
    descripcion?: boolean
    identificador?: boolean
    consecutivo?: boolean
  }

  export type t_articulo_sistemasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_articulo" | "codigo_articulo" | "descripcion" | "identificador" | "consecutivo", ExtArgs["result"]["t_articulo_sistemas"]>

  export type $t_articulo_sistemasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_articulo_sistemas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_articulo: number
      codigo_articulo: number
      descripcion: string
      identificador: string
      consecutivo: number
    }, ExtArgs["result"]["t_articulo_sistemas"]>
    composites: {}
  }

  type t_articulo_sistemasGetPayload<S extends boolean | null | undefined | t_articulo_sistemasDefaultArgs> = $Result.GetResult<Prisma.$t_articulo_sistemasPayload, S>

  type t_articulo_sistemasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_articulo_sistemasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_articulo_sistemasCountAggregateInputType | true
    }

  export interface t_articulo_sistemasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_articulo_sistemas'], meta: { name: 't_articulo_sistemas' } }
    /**
     * Find zero or one T_articulo_sistemas that matches the filter.
     * @param {t_articulo_sistemasFindUniqueArgs} args - Arguments to find a T_articulo_sistemas
     * @example
     * // Get one T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_articulo_sistemasFindUniqueArgs>(args: SelectSubset<T, t_articulo_sistemasFindUniqueArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_articulo_sistemas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_articulo_sistemasFindUniqueOrThrowArgs} args - Arguments to find a T_articulo_sistemas
     * @example
     * // Get one T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_articulo_sistemasFindUniqueOrThrowArgs>(args: SelectSubset<T, t_articulo_sistemasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_articulo_sistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_articulo_sistemasFindFirstArgs} args - Arguments to find a T_articulo_sistemas
     * @example
     * // Get one T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_articulo_sistemasFindFirstArgs>(args?: SelectSubset<T, t_articulo_sistemasFindFirstArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_articulo_sistemas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_articulo_sistemasFindFirstOrThrowArgs} args - Arguments to find a T_articulo_sistemas
     * @example
     * // Get one T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_articulo_sistemasFindFirstOrThrowArgs>(args?: SelectSubset<T, t_articulo_sistemasFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_articulo_sistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_articulo_sistemasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.findMany()
     * 
     * // Get first 10 T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.findMany({ take: 10 })
     * 
     * // Only select the `id_articulo`
     * const t_articulo_sistemasWithId_articuloOnly = await prisma.t_articulo_sistemas.findMany({ select: { id_articulo: true } })
     * 
     */
    findMany<T extends t_articulo_sistemasFindManyArgs>(args?: SelectSubset<T, t_articulo_sistemasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_articulo_sistemas.
     * @param {t_articulo_sistemasCreateArgs} args - Arguments to create a T_articulo_sistemas.
     * @example
     * // Create one T_articulo_sistemas
     * const T_articulo_sistemas = await prisma.t_articulo_sistemas.create({
     *   data: {
     *     // ... data to create a T_articulo_sistemas
     *   }
     * })
     * 
     */
    create<T extends t_articulo_sistemasCreateArgs>(args: SelectSubset<T, t_articulo_sistemasCreateArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_articulo_sistemas.
     * @param {t_articulo_sistemasCreateManyArgs} args - Arguments to create many T_articulo_sistemas.
     * @example
     * // Create many T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_articulo_sistemasCreateManyArgs>(args?: SelectSubset<T, t_articulo_sistemasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_articulo_sistemas.
     * @param {t_articulo_sistemasDeleteArgs} args - Arguments to delete one T_articulo_sistemas.
     * @example
     * // Delete one T_articulo_sistemas
     * const T_articulo_sistemas = await prisma.t_articulo_sistemas.delete({
     *   where: {
     *     // ... filter to delete one T_articulo_sistemas
     *   }
     * })
     * 
     */
    delete<T extends t_articulo_sistemasDeleteArgs>(args: SelectSubset<T, t_articulo_sistemasDeleteArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_articulo_sistemas.
     * @param {t_articulo_sistemasUpdateArgs} args - Arguments to update one T_articulo_sistemas.
     * @example
     * // Update one T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_articulo_sistemasUpdateArgs>(args: SelectSubset<T, t_articulo_sistemasUpdateArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_articulo_sistemas.
     * @param {t_articulo_sistemasDeleteManyArgs} args - Arguments to filter T_articulo_sistemas to delete.
     * @example
     * // Delete a few T_articulo_sistemas
     * const { count } = await prisma.t_articulo_sistemas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_articulo_sistemasDeleteManyArgs>(args?: SelectSubset<T, t_articulo_sistemasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_articulo_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_articulo_sistemasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_articulo_sistemasUpdateManyArgs>(args: SelectSubset<T, t_articulo_sistemasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_articulo_sistemas.
     * @param {t_articulo_sistemasUpsertArgs} args - Arguments to update or create a T_articulo_sistemas.
     * @example
     * // Update or create a T_articulo_sistemas
     * const t_articulo_sistemas = await prisma.t_articulo_sistemas.upsert({
     *   create: {
     *     // ... data to create a T_articulo_sistemas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_articulo_sistemas we want to update
     *   }
     * })
     */
    upsert<T extends t_articulo_sistemasUpsertArgs>(args: SelectSubset<T, t_articulo_sistemasUpsertArgs<ExtArgs>>): Prisma__t_articulo_sistemasClient<$Result.GetResult<Prisma.$t_articulo_sistemasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_articulo_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_articulo_sistemasCountArgs} args - Arguments to filter T_articulo_sistemas to count.
     * @example
     * // Count the number of T_articulo_sistemas
     * const count = await prisma.t_articulo_sistemas.count({
     *   where: {
     *     // ... the filter for the T_articulo_sistemas we want to count
     *   }
     * })
    **/
    count<T extends t_articulo_sistemasCountArgs>(
      args?: Subset<T, t_articulo_sistemasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_articulo_sistemasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_articulo_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_articulo_sistemasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_articulo_sistemasAggregateArgs>(args: Subset<T, T_articulo_sistemasAggregateArgs>): Prisma.PrismaPromise<GetT_articulo_sistemasAggregateType<T>>

    /**
     * Group by T_articulo_sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_articulo_sistemasGroupByArgs} args - Group by arguments.
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
      T extends t_articulo_sistemasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_articulo_sistemasGroupByArgs['orderBy'] }
        : { orderBy?: t_articulo_sistemasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_articulo_sistemasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_articulo_sistemasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_articulo_sistemas model
   */
  readonly fields: t_articulo_sistemasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_articulo_sistemas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_articulo_sistemasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_articulo_sistemas model
   */
  interface t_articulo_sistemasFieldRefs {
    readonly id_articulo: FieldRef<"t_articulo_sistemas", 'Int'>
    readonly codigo_articulo: FieldRef<"t_articulo_sistemas", 'Int'>
    readonly descripcion: FieldRef<"t_articulo_sistemas", 'String'>
    readonly identificador: FieldRef<"t_articulo_sistemas", 'String'>
    readonly consecutivo: FieldRef<"t_articulo_sistemas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_articulo_sistemas findUnique
   */
  export type t_articulo_sistemasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_articulo_sistemas to fetch.
     */
    where: t_articulo_sistemasWhereUniqueInput
  }

  /**
   * t_articulo_sistemas findUniqueOrThrow
   */
  export type t_articulo_sistemasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_articulo_sistemas to fetch.
     */
    where: t_articulo_sistemasWhereUniqueInput
  }

  /**
   * t_articulo_sistemas findFirst
   */
  export type t_articulo_sistemasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_articulo_sistemas to fetch.
     */
    where?: t_articulo_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_articulo_sistemas to fetch.
     */
    orderBy?: t_articulo_sistemasOrderByWithRelationInput | t_articulo_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_articulo_sistemas.
     */
    cursor?: t_articulo_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_articulo_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_articulo_sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_articulo_sistemas.
     */
    distinct?: T_articulo_sistemasScalarFieldEnum | T_articulo_sistemasScalarFieldEnum[]
  }

  /**
   * t_articulo_sistemas findFirstOrThrow
   */
  export type t_articulo_sistemasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_articulo_sistemas to fetch.
     */
    where?: t_articulo_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_articulo_sistemas to fetch.
     */
    orderBy?: t_articulo_sistemasOrderByWithRelationInput | t_articulo_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_articulo_sistemas.
     */
    cursor?: t_articulo_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_articulo_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_articulo_sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_articulo_sistemas.
     */
    distinct?: T_articulo_sistemasScalarFieldEnum | T_articulo_sistemasScalarFieldEnum[]
  }

  /**
   * t_articulo_sistemas findMany
   */
  export type t_articulo_sistemasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * Filter, which t_articulo_sistemas to fetch.
     */
    where?: t_articulo_sistemasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_articulo_sistemas to fetch.
     */
    orderBy?: t_articulo_sistemasOrderByWithRelationInput | t_articulo_sistemasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_articulo_sistemas.
     */
    cursor?: t_articulo_sistemasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_articulo_sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_articulo_sistemas.
     */
    skip?: number
    distinct?: T_articulo_sistemasScalarFieldEnum | T_articulo_sistemasScalarFieldEnum[]
  }

  /**
   * t_articulo_sistemas create
   */
  export type t_articulo_sistemasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * The data needed to create a t_articulo_sistemas.
     */
    data: XOR<t_articulo_sistemasCreateInput, t_articulo_sistemasUncheckedCreateInput>
  }

  /**
   * t_articulo_sistemas createMany
   */
  export type t_articulo_sistemasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_articulo_sistemas.
     */
    data: t_articulo_sistemasCreateManyInput | t_articulo_sistemasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_articulo_sistemas update
   */
  export type t_articulo_sistemasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * The data needed to update a t_articulo_sistemas.
     */
    data: XOR<t_articulo_sistemasUpdateInput, t_articulo_sistemasUncheckedUpdateInput>
    /**
     * Choose, which t_articulo_sistemas to update.
     */
    where: t_articulo_sistemasWhereUniqueInput
  }

  /**
   * t_articulo_sistemas updateMany
   */
  export type t_articulo_sistemasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_articulo_sistemas.
     */
    data: XOR<t_articulo_sistemasUpdateManyMutationInput, t_articulo_sistemasUncheckedUpdateManyInput>
    /**
     * Filter which t_articulo_sistemas to update
     */
    where?: t_articulo_sistemasWhereInput
    /**
     * Limit how many t_articulo_sistemas to update.
     */
    limit?: number
  }

  /**
   * t_articulo_sistemas upsert
   */
  export type t_articulo_sistemasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * The filter to search for the t_articulo_sistemas to update in case it exists.
     */
    where: t_articulo_sistemasWhereUniqueInput
    /**
     * In case the t_articulo_sistemas found by the `where` argument doesn't exist, create a new t_articulo_sistemas with this data.
     */
    create: XOR<t_articulo_sistemasCreateInput, t_articulo_sistemasUncheckedCreateInput>
    /**
     * In case the t_articulo_sistemas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_articulo_sistemasUpdateInput, t_articulo_sistemasUncheckedUpdateInput>
  }

  /**
   * t_articulo_sistemas delete
   */
  export type t_articulo_sistemasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
    /**
     * Filter which t_articulo_sistemas to delete.
     */
    where: t_articulo_sistemasWhereUniqueInput
  }

  /**
   * t_articulo_sistemas deleteMany
   */
  export type t_articulo_sistemasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_articulo_sistemas to delete
     */
    where?: t_articulo_sistemasWhereInput
    /**
     * Limit how many t_articulo_sistemas to delete.
     */
    limit?: number
  }

  /**
   * t_articulo_sistemas without action
   */
  export type t_articulo_sistemasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_articulo_sistemas
     */
    select?: t_articulo_sistemasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_articulo_sistemas
     */
    omit?: t_articulo_sistemasOmit<ExtArgs> | null
  }


  /**
   * Model t_colaboradores
   */

  export type AggregateT_colaboradores = {
    _count: T_colaboradoresCountAggregateOutputType | null
    _avg: T_colaboradoresAvgAggregateOutputType | null
    _sum: T_colaboradoresSumAggregateOutputType | null
    _min: T_colaboradoresMinAggregateOutputType | null
    _max: T_colaboradoresMaxAggregateOutputType | null
  }

  export type T_colaboradoresAvgAggregateOutputType = {
    id_colaboradores: number | null
    num_control: number | null
    id_area: number | null
  }

  export type T_colaboradoresSumAggregateOutputType = {
    id_colaboradores: number | null
    num_control: number | null
    id_area: number | null
  }

  export type T_colaboradoresMinAggregateOutputType = {
    id_colaboradores: number | null
    num_control: number | null
    nombre: string | null
    correo: string | null
    id_area: number | null
  }

  export type T_colaboradoresMaxAggregateOutputType = {
    id_colaboradores: number | null
    num_control: number | null
    nombre: string | null
    correo: string | null
    id_area: number | null
  }

  export type T_colaboradoresCountAggregateOutputType = {
    id_colaboradores: number
    num_control: number
    nombre: number
    correo: number
    id_area: number
    _all: number
  }


  export type T_colaboradoresAvgAggregateInputType = {
    id_colaboradores?: true
    num_control?: true
    id_area?: true
  }

  export type T_colaboradoresSumAggregateInputType = {
    id_colaboradores?: true
    num_control?: true
    id_area?: true
  }

  export type T_colaboradoresMinAggregateInputType = {
    id_colaboradores?: true
    num_control?: true
    nombre?: true
    correo?: true
    id_area?: true
  }

  export type T_colaboradoresMaxAggregateInputType = {
    id_colaboradores?: true
    num_control?: true
    nombre?: true
    correo?: true
    id_area?: true
  }

  export type T_colaboradoresCountAggregateInputType = {
    id_colaboradores?: true
    num_control?: true
    nombre?: true
    correo?: true
    id_area?: true
    _all?: true
  }

  export type T_colaboradoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_colaboradores to aggregate.
     */
    where?: t_colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_colaboradores to fetch.
     */
    orderBy?: t_colaboradoresOrderByWithRelationInput | t_colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_colaboradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_colaboradores
    **/
    _count?: true | T_colaboradoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_colaboradoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_colaboradoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_colaboradoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_colaboradoresMaxAggregateInputType
  }

  export type GetT_colaboradoresAggregateType<T extends T_colaboradoresAggregateArgs> = {
        [P in keyof T & keyof AggregateT_colaboradores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_colaboradores[P]>
      : GetScalarType<T[P], AggregateT_colaboradores[P]>
  }




  export type t_colaboradoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_colaboradoresWhereInput
    orderBy?: t_colaboradoresOrderByWithAggregationInput | t_colaboradoresOrderByWithAggregationInput[]
    by: T_colaboradoresScalarFieldEnum[] | T_colaboradoresScalarFieldEnum
    having?: t_colaboradoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_colaboradoresCountAggregateInputType | true
    _avg?: T_colaboradoresAvgAggregateInputType
    _sum?: T_colaboradoresSumAggregateInputType
    _min?: T_colaboradoresMinAggregateInputType
    _max?: T_colaboradoresMaxAggregateInputType
  }

  export type T_colaboradoresGroupByOutputType = {
    id_colaboradores: number
    num_control: number
    nombre: string
    correo: string
    id_area: number
    _count: T_colaboradoresCountAggregateOutputType | null
    _avg: T_colaboradoresAvgAggregateOutputType | null
    _sum: T_colaboradoresSumAggregateOutputType | null
    _min: T_colaboradoresMinAggregateOutputType | null
    _max: T_colaboradoresMaxAggregateOutputType | null
  }

  type GetT_colaboradoresGroupByPayload<T extends t_colaboradoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_colaboradoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_colaboradoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_colaboradoresGroupByOutputType[P]>
            : GetScalarType<T[P], T_colaboradoresGroupByOutputType[P]>
        }
      >
    >


  export type t_colaboradoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_colaboradores?: boolean
    num_control?: boolean
    nombre?: boolean
    correo?: boolean
    id_area?: boolean
  }, ExtArgs["result"]["t_colaboradores"]>



  export type t_colaboradoresSelectScalar = {
    id_colaboradores?: boolean
    num_control?: boolean
    nombre?: boolean
    correo?: boolean
    id_area?: boolean
  }

  export type t_colaboradoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_colaboradores" | "num_control" | "nombre" | "correo" | "id_area", ExtArgs["result"]["t_colaboradores"]>

  export type $t_colaboradoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_colaboradores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_colaboradores: number
      num_control: number
      nombre: string
      correo: string
      id_area: number
    }, ExtArgs["result"]["t_colaboradores"]>
    composites: {}
  }

  type t_colaboradoresGetPayload<S extends boolean | null | undefined | t_colaboradoresDefaultArgs> = $Result.GetResult<Prisma.$t_colaboradoresPayload, S>

  type t_colaboradoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_colaboradoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_colaboradoresCountAggregateInputType | true
    }

  export interface t_colaboradoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_colaboradores'], meta: { name: 't_colaboradores' } }
    /**
     * Find zero or one T_colaboradores that matches the filter.
     * @param {t_colaboradoresFindUniqueArgs} args - Arguments to find a T_colaboradores
     * @example
     * // Get one T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_colaboradoresFindUniqueArgs>(args: SelectSubset<T, t_colaboradoresFindUniqueArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_colaboradores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_colaboradoresFindUniqueOrThrowArgs} args - Arguments to find a T_colaboradores
     * @example
     * // Get one T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_colaboradoresFindUniqueOrThrowArgs>(args: SelectSubset<T, t_colaboradoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_colaboradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_colaboradoresFindFirstArgs} args - Arguments to find a T_colaboradores
     * @example
     * // Get one T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_colaboradoresFindFirstArgs>(args?: SelectSubset<T, t_colaboradoresFindFirstArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_colaboradores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_colaboradoresFindFirstOrThrowArgs} args - Arguments to find a T_colaboradores
     * @example
     * // Get one T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_colaboradoresFindFirstOrThrowArgs>(args?: SelectSubset<T, t_colaboradoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_colaboradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_colaboradoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.findMany()
     * 
     * // Get first 10 T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.findMany({ take: 10 })
     * 
     * // Only select the `id_colaboradores`
     * const t_colaboradoresWithId_colaboradoresOnly = await prisma.t_colaboradores.findMany({ select: { id_colaboradores: true } })
     * 
     */
    findMany<T extends t_colaboradoresFindManyArgs>(args?: SelectSubset<T, t_colaboradoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_colaboradores.
     * @param {t_colaboradoresCreateArgs} args - Arguments to create a T_colaboradores.
     * @example
     * // Create one T_colaboradores
     * const T_colaboradores = await prisma.t_colaboradores.create({
     *   data: {
     *     // ... data to create a T_colaboradores
     *   }
     * })
     * 
     */
    create<T extends t_colaboradoresCreateArgs>(args: SelectSubset<T, t_colaboradoresCreateArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_colaboradores.
     * @param {t_colaboradoresCreateManyArgs} args - Arguments to create many T_colaboradores.
     * @example
     * // Create many T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_colaboradoresCreateManyArgs>(args?: SelectSubset<T, t_colaboradoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_colaboradores.
     * @param {t_colaboradoresDeleteArgs} args - Arguments to delete one T_colaboradores.
     * @example
     * // Delete one T_colaboradores
     * const T_colaboradores = await prisma.t_colaboradores.delete({
     *   where: {
     *     // ... filter to delete one T_colaboradores
     *   }
     * })
     * 
     */
    delete<T extends t_colaboradoresDeleteArgs>(args: SelectSubset<T, t_colaboradoresDeleteArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_colaboradores.
     * @param {t_colaboradoresUpdateArgs} args - Arguments to update one T_colaboradores.
     * @example
     * // Update one T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_colaboradoresUpdateArgs>(args: SelectSubset<T, t_colaboradoresUpdateArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_colaboradores.
     * @param {t_colaboradoresDeleteManyArgs} args - Arguments to filter T_colaboradores to delete.
     * @example
     * // Delete a few T_colaboradores
     * const { count } = await prisma.t_colaboradores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_colaboradoresDeleteManyArgs>(args?: SelectSubset<T, t_colaboradoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_colaboradoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_colaboradoresUpdateManyArgs>(args: SelectSubset<T, t_colaboradoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_colaboradores.
     * @param {t_colaboradoresUpsertArgs} args - Arguments to update or create a T_colaboradores.
     * @example
     * // Update or create a T_colaboradores
     * const t_colaboradores = await prisma.t_colaboradores.upsert({
     *   create: {
     *     // ... data to create a T_colaboradores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_colaboradores we want to update
     *   }
     * })
     */
    upsert<T extends t_colaboradoresUpsertArgs>(args: SelectSubset<T, t_colaboradoresUpsertArgs<ExtArgs>>): Prisma__t_colaboradoresClient<$Result.GetResult<Prisma.$t_colaboradoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_colaboradoresCountArgs} args - Arguments to filter T_colaboradores to count.
     * @example
     * // Count the number of T_colaboradores
     * const count = await prisma.t_colaboradores.count({
     *   where: {
     *     // ... the filter for the T_colaboradores we want to count
     *   }
     * })
    **/
    count<T extends t_colaboradoresCountArgs>(
      args?: Subset<T, t_colaboradoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_colaboradoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_colaboradoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_colaboradoresAggregateArgs>(args: Subset<T, T_colaboradoresAggregateArgs>): Prisma.PrismaPromise<GetT_colaboradoresAggregateType<T>>

    /**
     * Group by T_colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_colaboradoresGroupByArgs} args - Group by arguments.
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
      T extends t_colaboradoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_colaboradoresGroupByArgs['orderBy'] }
        : { orderBy?: t_colaboradoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_colaboradoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_colaboradoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_colaboradores model
   */
  readonly fields: t_colaboradoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_colaboradores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_colaboradoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_colaboradores model
   */
  interface t_colaboradoresFieldRefs {
    readonly id_colaboradores: FieldRef<"t_colaboradores", 'Int'>
    readonly num_control: FieldRef<"t_colaboradores", 'Int'>
    readonly nombre: FieldRef<"t_colaboradores", 'String'>
    readonly correo: FieldRef<"t_colaboradores", 'String'>
    readonly id_area: FieldRef<"t_colaboradores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_colaboradores findUnique
   */
  export type t_colaboradoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which t_colaboradores to fetch.
     */
    where: t_colaboradoresWhereUniqueInput
  }

  /**
   * t_colaboradores findUniqueOrThrow
   */
  export type t_colaboradoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which t_colaboradores to fetch.
     */
    where: t_colaboradoresWhereUniqueInput
  }

  /**
   * t_colaboradores findFirst
   */
  export type t_colaboradoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which t_colaboradores to fetch.
     */
    where?: t_colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_colaboradores to fetch.
     */
    orderBy?: t_colaboradoresOrderByWithRelationInput | t_colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_colaboradores.
     */
    cursor?: t_colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_colaboradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_colaboradores.
     */
    distinct?: T_colaboradoresScalarFieldEnum | T_colaboradoresScalarFieldEnum[]
  }

  /**
   * t_colaboradores findFirstOrThrow
   */
  export type t_colaboradoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which t_colaboradores to fetch.
     */
    where?: t_colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_colaboradores to fetch.
     */
    orderBy?: t_colaboradoresOrderByWithRelationInput | t_colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_colaboradores.
     */
    cursor?: t_colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_colaboradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_colaboradores.
     */
    distinct?: T_colaboradoresScalarFieldEnum | T_colaboradoresScalarFieldEnum[]
  }

  /**
   * t_colaboradores findMany
   */
  export type t_colaboradoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which t_colaboradores to fetch.
     */
    where?: t_colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_colaboradores to fetch.
     */
    orderBy?: t_colaboradoresOrderByWithRelationInput | t_colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_colaboradores.
     */
    cursor?: t_colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_colaboradores.
     */
    skip?: number
    distinct?: T_colaboradoresScalarFieldEnum | T_colaboradoresScalarFieldEnum[]
  }

  /**
   * t_colaboradores create
   */
  export type t_colaboradoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * The data needed to create a t_colaboradores.
     */
    data: XOR<t_colaboradoresCreateInput, t_colaboradoresUncheckedCreateInput>
  }

  /**
   * t_colaboradores createMany
   */
  export type t_colaboradoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_colaboradores.
     */
    data: t_colaboradoresCreateManyInput | t_colaboradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_colaboradores update
   */
  export type t_colaboradoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * The data needed to update a t_colaboradores.
     */
    data: XOR<t_colaboradoresUpdateInput, t_colaboradoresUncheckedUpdateInput>
    /**
     * Choose, which t_colaboradores to update.
     */
    where: t_colaboradoresWhereUniqueInput
  }

  /**
   * t_colaboradores updateMany
   */
  export type t_colaboradoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_colaboradores.
     */
    data: XOR<t_colaboradoresUpdateManyMutationInput, t_colaboradoresUncheckedUpdateManyInput>
    /**
     * Filter which t_colaboradores to update
     */
    where?: t_colaboradoresWhereInput
    /**
     * Limit how many t_colaboradores to update.
     */
    limit?: number
  }

  /**
   * t_colaboradores upsert
   */
  export type t_colaboradoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * The filter to search for the t_colaboradores to update in case it exists.
     */
    where: t_colaboradoresWhereUniqueInput
    /**
     * In case the t_colaboradores found by the `where` argument doesn't exist, create a new t_colaboradores with this data.
     */
    create: XOR<t_colaboradoresCreateInput, t_colaboradoresUncheckedCreateInput>
    /**
     * In case the t_colaboradores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_colaboradoresUpdateInput, t_colaboradoresUncheckedUpdateInput>
  }

  /**
   * t_colaboradores delete
   */
  export type t_colaboradoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
    /**
     * Filter which t_colaboradores to delete.
     */
    where: t_colaboradoresWhereUniqueInput
  }

  /**
   * t_colaboradores deleteMany
   */
  export type t_colaboradoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_colaboradores to delete
     */
    where?: t_colaboradoresWhereInput
    /**
     * Limit how many t_colaboradores to delete.
     */
    limit?: number
  }

  /**
   * t_colaboradores without action
   */
  export type t_colaboradoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_colaboradores
     */
    select?: t_colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_colaboradores
     */
    omit?: t_colaboradoresOmit<ExtArgs> | null
  }


  /**
   * Model t_consumibles
   */

  export type AggregateT_consumibles = {
    _count: T_consumiblesCountAggregateOutputType | null
    _avg: T_consumiblesAvgAggregateOutputType | null
    _sum: T_consumiblesSumAggregateOutputType | null
    _min: T_consumiblesMinAggregateOutputType | null
    _max: T_consumiblesMaxAggregateOutputType | null
  }

  export type T_consumiblesAvgAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_consumiblesSumAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_consumiblesMinAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_consumiblesMaxAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_consumiblesCountAggregateOutputType = {
    id_dispositivos: number
    dispositivo: number
    descripcion_sistemas: number
    marca: number
    modelo: number
    num_serie: number
    id_visual: number
    num_sap: number
    status: number
    extras: number
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _all: number
  }


  export type T_consumiblesAvgAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_consumiblesSumAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_consumiblesMinAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_consumiblesMaxAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_consumiblesCountAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
    _all?: true
  }

  export type T_consumiblesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_consumibles to aggregate.
     */
    where?: t_consumiblesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_consumibles to fetch.
     */
    orderBy?: t_consumiblesOrderByWithRelationInput | t_consumiblesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_consumiblesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_consumibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_consumibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_consumibles
    **/
    _count?: true | T_consumiblesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_consumiblesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_consumiblesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_consumiblesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_consumiblesMaxAggregateInputType
  }

  export type GetT_consumiblesAggregateType<T extends T_consumiblesAggregateArgs> = {
        [P in keyof T & keyof AggregateT_consumibles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_consumibles[P]>
      : GetScalarType<T[P], AggregateT_consumibles[P]>
  }




  export type t_consumiblesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_consumiblesWhereInput
    orderBy?: t_consumiblesOrderByWithAggregationInput | t_consumiblesOrderByWithAggregationInput[]
    by: T_consumiblesScalarFieldEnum[] | T_consumiblesScalarFieldEnum
    having?: t_consumiblesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_consumiblesCountAggregateInputType | true
    _avg?: T_consumiblesAvgAggregateInputType
    _sum?: T_consumiblesSumAggregateInputType
    _min?: T_consumiblesMinAggregateInputType
    _max?: T_consumiblesMaxAggregateInputType
  }

  export type T_consumiblesGroupByOutputType = {
    id_dispositivos: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _count: T_consumiblesCountAggregateOutputType | null
    _avg: T_consumiblesAvgAggregateOutputType | null
    _sum: T_consumiblesSumAggregateOutputType | null
    _min: T_consumiblesMinAggregateOutputType | null
    _max: T_consumiblesMaxAggregateOutputType | null
  }

  type GetT_consumiblesGroupByPayload<T extends t_consumiblesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_consumiblesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_consumiblesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_consumiblesGroupByOutputType[P]>
            : GetScalarType<T[P], T_consumiblesGroupByOutputType[P]>
        }
      >
    >


  export type t_consumiblesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
  }, ExtArgs["result"]["t_consumibles"]>



  export type t_consumiblesSelectScalar = {
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
  }

  export type t_consumiblesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dispositivos" | "dispositivo" | "descripcion_sistemas" | "marca" | "modelo" | "num_serie" | "id_visual" | "num_sap" | "status" | "extras" | "id_area" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura", ExtArgs["result"]["t_consumibles"]>

  export type $t_consumiblesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_consumibles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_dispositivos: number
      dispositivo: string
      descripcion_sistemas: string
      marca: string
      modelo: string
      num_serie: string
      id_visual: string
      num_sap: number
      status: string
      extras: string
      id_area: number
      num_control: number
      codigo_propietario: number
      codigo_ubicacion: number
      id_factura: number
    }, ExtArgs["result"]["t_consumibles"]>
    composites: {}
  }

  type t_consumiblesGetPayload<S extends boolean | null | undefined | t_consumiblesDefaultArgs> = $Result.GetResult<Prisma.$t_consumiblesPayload, S>

  type t_consumiblesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_consumiblesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_consumiblesCountAggregateInputType | true
    }

  export interface t_consumiblesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_consumibles'], meta: { name: 't_consumibles' } }
    /**
     * Find zero or one T_consumibles that matches the filter.
     * @param {t_consumiblesFindUniqueArgs} args - Arguments to find a T_consumibles
     * @example
     * // Get one T_consumibles
     * const t_consumibles = await prisma.t_consumibles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_consumiblesFindUniqueArgs>(args: SelectSubset<T, t_consumiblesFindUniqueArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_consumibles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_consumiblesFindUniqueOrThrowArgs} args - Arguments to find a T_consumibles
     * @example
     * // Get one T_consumibles
     * const t_consumibles = await prisma.t_consumibles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_consumiblesFindUniqueOrThrowArgs>(args: SelectSubset<T, t_consumiblesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_consumibles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_consumiblesFindFirstArgs} args - Arguments to find a T_consumibles
     * @example
     * // Get one T_consumibles
     * const t_consumibles = await prisma.t_consumibles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_consumiblesFindFirstArgs>(args?: SelectSubset<T, t_consumiblesFindFirstArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_consumibles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_consumiblesFindFirstOrThrowArgs} args - Arguments to find a T_consumibles
     * @example
     * // Get one T_consumibles
     * const t_consumibles = await prisma.t_consumibles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_consumiblesFindFirstOrThrowArgs>(args?: SelectSubset<T, t_consumiblesFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_consumibles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_consumiblesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_consumibles
     * const t_consumibles = await prisma.t_consumibles.findMany()
     * 
     * // Get first 10 T_consumibles
     * const t_consumibles = await prisma.t_consumibles.findMany({ take: 10 })
     * 
     * // Only select the `id_dispositivos`
     * const t_consumiblesWithId_dispositivosOnly = await prisma.t_consumibles.findMany({ select: { id_dispositivos: true } })
     * 
     */
    findMany<T extends t_consumiblesFindManyArgs>(args?: SelectSubset<T, t_consumiblesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_consumibles.
     * @param {t_consumiblesCreateArgs} args - Arguments to create a T_consumibles.
     * @example
     * // Create one T_consumibles
     * const T_consumibles = await prisma.t_consumibles.create({
     *   data: {
     *     // ... data to create a T_consumibles
     *   }
     * })
     * 
     */
    create<T extends t_consumiblesCreateArgs>(args: SelectSubset<T, t_consumiblesCreateArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_consumibles.
     * @param {t_consumiblesCreateManyArgs} args - Arguments to create many T_consumibles.
     * @example
     * // Create many T_consumibles
     * const t_consumibles = await prisma.t_consumibles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_consumiblesCreateManyArgs>(args?: SelectSubset<T, t_consumiblesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_consumibles.
     * @param {t_consumiblesDeleteArgs} args - Arguments to delete one T_consumibles.
     * @example
     * // Delete one T_consumibles
     * const T_consumibles = await prisma.t_consumibles.delete({
     *   where: {
     *     // ... filter to delete one T_consumibles
     *   }
     * })
     * 
     */
    delete<T extends t_consumiblesDeleteArgs>(args: SelectSubset<T, t_consumiblesDeleteArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_consumibles.
     * @param {t_consumiblesUpdateArgs} args - Arguments to update one T_consumibles.
     * @example
     * // Update one T_consumibles
     * const t_consumibles = await prisma.t_consumibles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_consumiblesUpdateArgs>(args: SelectSubset<T, t_consumiblesUpdateArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_consumibles.
     * @param {t_consumiblesDeleteManyArgs} args - Arguments to filter T_consumibles to delete.
     * @example
     * // Delete a few T_consumibles
     * const { count } = await prisma.t_consumibles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_consumiblesDeleteManyArgs>(args?: SelectSubset<T, t_consumiblesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_consumibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_consumiblesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_consumibles
     * const t_consumibles = await prisma.t_consumibles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_consumiblesUpdateManyArgs>(args: SelectSubset<T, t_consumiblesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_consumibles.
     * @param {t_consumiblesUpsertArgs} args - Arguments to update or create a T_consumibles.
     * @example
     * // Update or create a T_consumibles
     * const t_consumibles = await prisma.t_consumibles.upsert({
     *   create: {
     *     // ... data to create a T_consumibles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_consumibles we want to update
     *   }
     * })
     */
    upsert<T extends t_consumiblesUpsertArgs>(args: SelectSubset<T, t_consumiblesUpsertArgs<ExtArgs>>): Prisma__t_consumiblesClient<$Result.GetResult<Prisma.$t_consumiblesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_consumibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_consumiblesCountArgs} args - Arguments to filter T_consumibles to count.
     * @example
     * // Count the number of T_consumibles
     * const count = await prisma.t_consumibles.count({
     *   where: {
     *     // ... the filter for the T_consumibles we want to count
     *   }
     * })
    **/
    count<T extends t_consumiblesCountArgs>(
      args?: Subset<T, t_consumiblesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_consumiblesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_consumibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_consumiblesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_consumiblesAggregateArgs>(args: Subset<T, T_consumiblesAggregateArgs>): Prisma.PrismaPromise<GetT_consumiblesAggregateType<T>>

    /**
     * Group by T_consumibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_consumiblesGroupByArgs} args - Group by arguments.
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
      T extends t_consumiblesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_consumiblesGroupByArgs['orderBy'] }
        : { orderBy?: t_consumiblesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_consumiblesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_consumiblesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_consumibles model
   */
  readonly fields: t_consumiblesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_consumibles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_consumiblesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_consumibles model
   */
  interface t_consumiblesFieldRefs {
    readonly id_dispositivos: FieldRef<"t_consumibles", 'Int'>
    readonly dispositivo: FieldRef<"t_consumibles", 'String'>
    readonly descripcion_sistemas: FieldRef<"t_consumibles", 'String'>
    readonly marca: FieldRef<"t_consumibles", 'String'>
    readonly modelo: FieldRef<"t_consumibles", 'String'>
    readonly num_serie: FieldRef<"t_consumibles", 'String'>
    readonly id_visual: FieldRef<"t_consumibles", 'String'>
    readonly num_sap: FieldRef<"t_consumibles", 'Int'>
    readonly status: FieldRef<"t_consumibles", 'String'>
    readonly extras: FieldRef<"t_consumibles", 'String'>
    readonly id_area: FieldRef<"t_consumibles", 'Int'>
    readonly num_control: FieldRef<"t_consumibles", 'Int'>
    readonly codigo_propietario: FieldRef<"t_consumibles", 'Int'>
    readonly codigo_ubicacion: FieldRef<"t_consumibles", 'Int'>
    readonly id_factura: FieldRef<"t_consumibles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_consumibles findUnique
   */
  export type t_consumiblesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * Filter, which t_consumibles to fetch.
     */
    where: t_consumiblesWhereUniqueInput
  }

  /**
   * t_consumibles findUniqueOrThrow
   */
  export type t_consumiblesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * Filter, which t_consumibles to fetch.
     */
    where: t_consumiblesWhereUniqueInput
  }

  /**
   * t_consumibles findFirst
   */
  export type t_consumiblesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * Filter, which t_consumibles to fetch.
     */
    where?: t_consumiblesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_consumibles to fetch.
     */
    orderBy?: t_consumiblesOrderByWithRelationInput | t_consumiblesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_consumibles.
     */
    cursor?: t_consumiblesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_consumibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_consumibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_consumibles.
     */
    distinct?: T_consumiblesScalarFieldEnum | T_consumiblesScalarFieldEnum[]
  }

  /**
   * t_consumibles findFirstOrThrow
   */
  export type t_consumiblesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * Filter, which t_consumibles to fetch.
     */
    where?: t_consumiblesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_consumibles to fetch.
     */
    orderBy?: t_consumiblesOrderByWithRelationInput | t_consumiblesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_consumibles.
     */
    cursor?: t_consumiblesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_consumibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_consumibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_consumibles.
     */
    distinct?: T_consumiblesScalarFieldEnum | T_consumiblesScalarFieldEnum[]
  }

  /**
   * t_consumibles findMany
   */
  export type t_consumiblesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * Filter, which t_consumibles to fetch.
     */
    where?: t_consumiblesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_consumibles to fetch.
     */
    orderBy?: t_consumiblesOrderByWithRelationInput | t_consumiblesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_consumibles.
     */
    cursor?: t_consumiblesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_consumibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_consumibles.
     */
    skip?: number
    distinct?: T_consumiblesScalarFieldEnum | T_consumiblesScalarFieldEnum[]
  }

  /**
   * t_consumibles create
   */
  export type t_consumiblesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * The data needed to create a t_consumibles.
     */
    data: XOR<t_consumiblesCreateInput, t_consumiblesUncheckedCreateInput>
  }

  /**
   * t_consumibles createMany
   */
  export type t_consumiblesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_consumibles.
     */
    data: t_consumiblesCreateManyInput | t_consumiblesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_consumibles update
   */
  export type t_consumiblesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * The data needed to update a t_consumibles.
     */
    data: XOR<t_consumiblesUpdateInput, t_consumiblesUncheckedUpdateInput>
    /**
     * Choose, which t_consumibles to update.
     */
    where: t_consumiblesWhereUniqueInput
  }

  /**
   * t_consumibles updateMany
   */
  export type t_consumiblesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_consumibles.
     */
    data: XOR<t_consumiblesUpdateManyMutationInput, t_consumiblesUncheckedUpdateManyInput>
    /**
     * Filter which t_consumibles to update
     */
    where?: t_consumiblesWhereInput
    /**
     * Limit how many t_consumibles to update.
     */
    limit?: number
  }

  /**
   * t_consumibles upsert
   */
  export type t_consumiblesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * The filter to search for the t_consumibles to update in case it exists.
     */
    where: t_consumiblesWhereUniqueInput
    /**
     * In case the t_consumibles found by the `where` argument doesn't exist, create a new t_consumibles with this data.
     */
    create: XOR<t_consumiblesCreateInput, t_consumiblesUncheckedCreateInput>
    /**
     * In case the t_consumibles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_consumiblesUpdateInput, t_consumiblesUncheckedUpdateInput>
  }

  /**
   * t_consumibles delete
   */
  export type t_consumiblesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
    /**
     * Filter which t_consumibles to delete.
     */
    where: t_consumiblesWhereUniqueInput
  }

  /**
   * t_consumibles deleteMany
   */
  export type t_consumiblesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_consumibles to delete
     */
    where?: t_consumiblesWhereInput
    /**
     * Limit how many t_consumibles to delete.
     */
    limit?: number
  }

  /**
   * t_consumibles without action
   */
  export type t_consumiblesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_consumibles
     */
    select?: t_consumiblesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_consumibles
     */
    omit?: t_consumiblesOmit<ExtArgs> | null
  }


  /**
   * Model t_dispositivos
   */

  export type AggregateT_dispositivos = {
    _count: T_dispositivosCountAggregateOutputType | null
    _avg: T_dispositivosAvgAggregateOutputType | null
    _sum: T_dispositivosSumAggregateOutputType | null
    _min: T_dispositivosMinAggregateOutputType | null
    _max: T_dispositivosMaxAggregateOutputType | null
  }

  export type T_dispositivosAvgAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_dispositivosSumAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_dispositivosMinAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_dispositivosMaxAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_dispositivosCountAggregateOutputType = {
    id_dispositivos: number
    dispositivo: number
    descripcion_sistemas: number
    marca: number
    modelo: number
    num_serie: number
    id_visual: number
    num_sap: number
    status: number
    extras: number
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _all: number
  }


  export type T_dispositivosAvgAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_dispositivosSumAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_dispositivosMinAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_dispositivosMaxAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_dispositivosCountAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
    _all?: true
  }

  export type T_dispositivosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_dispositivos to aggregate.
     */
    where?: t_dispositivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_dispositivos to fetch.
     */
    orderBy?: t_dispositivosOrderByWithRelationInput | t_dispositivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_dispositivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_dispositivos
    **/
    _count?: true | T_dispositivosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_dispositivosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_dispositivosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_dispositivosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_dispositivosMaxAggregateInputType
  }

  export type GetT_dispositivosAggregateType<T extends T_dispositivosAggregateArgs> = {
        [P in keyof T & keyof AggregateT_dispositivos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_dispositivos[P]>
      : GetScalarType<T[P], AggregateT_dispositivos[P]>
  }




  export type t_dispositivosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_dispositivosWhereInput
    orderBy?: t_dispositivosOrderByWithAggregationInput | t_dispositivosOrderByWithAggregationInput[]
    by: T_dispositivosScalarFieldEnum[] | T_dispositivosScalarFieldEnum
    having?: t_dispositivosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_dispositivosCountAggregateInputType | true
    _avg?: T_dispositivosAvgAggregateInputType
    _sum?: T_dispositivosSumAggregateInputType
    _min?: T_dispositivosMinAggregateInputType
    _max?: T_dispositivosMaxAggregateInputType
  }

  export type T_dispositivosGroupByOutputType = {
    id_dispositivos: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _count: T_dispositivosCountAggregateOutputType | null
    _avg: T_dispositivosAvgAggregateOutputType | null
    _sum: T_dispositivosSumAggregateOutputType | null
    _min: T_dispositivosMinAggregateOutputType | null
    _max: T_dispositivosMaxAggregateOutputType | null
  }

  type GetT_dispositivosGroupByPayload<T extends t_dispositivosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_dispositivosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_dispositivosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_dispositivosGroupByOutputType[P]>
            : GetScalarType<T[P], T_dispositivosGroupByOutputType[P]>
        }
      >
    >


  export type t_dispositivosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
  }, ExtArgs["result"]["t_dispositivos"]>



  export type t_dispositivosSelectScalar = {
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
  }

  export type t_dispositivosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dispositivos" | "dispositivo" | "descripcion_sistemas" | "marca" | "modelo" | "num_serie" | "id_visual" | "num_sap" | "status" | "extras" | "id_area" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura", ExtArgs["result"]["t_dispositivos"]>

  export type $t_dispositivosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_dispositivos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_dispositivos: number
      dispositivo: string
      descripcion_sistemas: string
      marca: string
      modelo: string
      num_serie: string
      id_visual: string
      num_sap: number
      status: string
      extras: string
      id_area: number
      num_control: number
      codigo_propietario: number
      codigo_ubicacion: number
      id_factura: number
    }, ExtArgs["result"]["t_dispositivos"]>
    composites: {}
  }

  type t_dispositivosGetPayload<S extends boolean | null | undefined | t_dispositivosDefaultArgs> = $Result.GetResult<Prisma.$t_dispositivosPayload, S>

  type t_dispositivosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_dispositivosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_dispositivosCountAggregateInputType | true
    }

  export interface t_dispositivosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_dispositivos'], meta: { name: 't_dispositivos' } }
    /**
     * Find zero or one T_dispositivos that matches the filter.
     * @param {t_dispositivosFindUniqueArgs} args - Arguments to find a T_dispositivos
     * @example
     * // Get one T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_dispositivosFindUniqueArgs>(args: SelectSubset<T, t_dispositivosFindUniqueArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_dispositivos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_dispositivosFindUniqueOrThrowArgs} args - Arguments to find a T_dispositivos
     * @example
     * // Get one T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_dispositivosFindUniqueOrThrowArgs>(args: SelectSubset<T, t_dispositivosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_dispositivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_dispositivosFindFirstArgs} args - Arguments to find a T_dispositivos
     * @example
     * // Get one T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_dispositivosFindFirstArgs>(args?: SelectSubset<T, t_dispositivosFindFirstArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_dispositivos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_dispositivosFindFirstOrThrowArgs} args - Arguments to find a T_dispositivos
     * @example
     * // Get one T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_dispositivosFindFirstOrThrowArgs>(args?: SelectSubset<T, t_dispositivosFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_dispositivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_dispositivosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.findMany()
     * 
     * // Get first 10 T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.findMany({ take: 10 })
     * 
     * // Only select the `id_dispositivos`
     * const t_dispositivosWithId_dispositivosOnly = await prisma.t_dispositivos.findMany({ select: { id_dispositivos: true } })
     * 
     */
    findMany<T extends t_dispositivosFindManyArgs>(args?: SelectSubset<T, t_dispositivosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_dispositivos.
     * @param {t_dispositivosCreateArgs} args - Arguments to create a T_dispositivos.
     * @example
     * // Create one T_dispositivos
     * const T_dispositivos = await prisma.t_dispositivos.create({
     *   data: {
     *     // ... data to create a T_dispositivos
     *   }
     * })
     * 
     */
    create<T extends t_dispositivosCreateArgs>(args: SelectSubset<T, t_dispositivosCreateArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_dispositivos.
     * @param {t_dispositivosCreateManyArgs} args - Arguments to create many T_dispositivos.
     * @example
     * // Create many T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_dispositivosCreateManyArgs>(args?: SelectSubset<T, t_dispositivosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_dispositivos.
     * @param {t_dispositivosDeleteArgs} args - Arguments to delete one T_dispositivos.
     * @example
     * // Delete one T_dispositivos
     * const T_dispositivos = await prisma.t_dispositivos.delete({
     *   where: {
     *     // ... filter to delete one T_dispositivos
     *   }
     * })
     * 
     */
    delete<T extends t_dispositivosDeleteArgs>(args: SelectSubset<T, t_dispositivosDeleteArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_dispositivos.
     * @param {t_dispositivosUpdateArgs} args - Arguments to update one T_dispositivos.
     * @example
     * // Update one T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_dispositivosUpdateArgs>(args: SelectSubset<T, t_dispositivosUpdateArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_dispositivos.
     * @param {t_dispositivosDeleteManyArgs} args - Arguments to filter T_dispositivos to delete.
     * @example
     * // Delete a few T_dispositivos
     * const { count } = await prisma.t_dispositivos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_dispositivosDeleteManyArgs>(args?: SelectSubset<T, t_dispositivosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_dispositivosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_dispositivosUpdateManyArgs>(args: SelectSubset<T, t_dispositivosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_dispositivos.
     * @param {t_dispositivosUpsertArgs} args - Arguments to update or create a T_dispositivos.
     * @example
     * // Update or create a T_dispositivos
     * const t_dispositivos = await prisma.t_dispositivos.upsert({
     *   create: {
     *     // ... data to create a T_dispositivos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_dispositivos we want to update
     *   }
     * })
     */
    upsert<T extends t_dispositivosUpsertArgs>(args: SelectSubset<T, t_dispositivosUpsertArgs<ExtArgs>>): Prisma__t_dispositivosClient<$Result.GetResult<Prisma.$t_dispositivosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_dispositivosCountArgs} args - Arguments to filter T_dispositivos to count.
     * @example
     * // Count the number of T_dispositivos
     * const count = await prisma.t_dispositivos.count({
     *   where: {
     *     // ... the filter for the T_dispositivos we want to count
     *   }
     * })
    **/
    count<T extends t_dispositivosCountArgs>(
      args?: Subset<T, t_dispositivosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_dispositivosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_dispositivosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_dispositivosAggregateArgs>(args: Subset<T, T_dispositivosAggregateArgs>): Prisma.PrismaPromise<GetT_dispositivosAggregateType<T>>

    /**
     * Group by T_dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_dispositivosGroupByArgs} args - Group by arguments.
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
      T extends t_dispositivosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_dispositivosGroupByArgs['orderBy'] }
        : { orderBy?: t_dispositivosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_dispositivosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_dispositivosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_dispositivos model
   */
  readonly fields: t_dispositivosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_dispositivos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_dispositivosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_dispositivos model
   */
  interface t_dispositivosFieldRefs {
    readonly id_dispositivos: FieldRef<"t_dispositivos", 'Int'>
    readonly dispositivo: FieldRef<"t_dispositivos", 'String'>
    readonly descripcion_sistemas: FieldRef<"t_dispositivos", 'String'>
    readonly marca: FieldRef<"t_dispositivos", 'String'>
    readonly modelo: FieldRef<"t_dispositivos", 'String'>
    readonly num_serie: FieldRef<"t_dispositivos", 'String'>
    readonly id_visual: FieldRef<"t_dispositivos", 'String'>
    readonly num_sap: FieldRef<"t_dispositivos", 'Int'>
    readonly status: FieldRef<"t_dispositivos", 'String'>
    readonly extras: FieldRef<"t_dispositivos", 'String'>
    readonly id_area: FieldRef<"t_dispositivos", 'Int'>
    readonly num_control: FieldRef<"t_dispositivos", 'Int'>
    readonly codigo_propietario: FieldRef<"t_dispositivos", 'Int'>
    readonly codigo_ubicacion: FieldRef<"t_dispositivos", 'Int'>
    readonly id_factura: FieldRef<"t_dispositivos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_dispositivos findUnique
   */
  export type t_dispositivosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * Filter, which t_dispositivos to fetch.
     */
    where: t_dispositivosWhereUniqueInput
  }

  /**
   * t_dispositivos findUniqueOrThrow
   */
  export type t_dispositivosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * Filter, which t_dispositivos to fetch.
     */
    where: t_dispositivosWhereUniqueInput
  }

  /**
   * t_dispositivos findFirst
   */
  export type t_dispositivosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * Filter, which t_dispositivos to fetch.
     */
    where?: t_dispositivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_dispositivos to fetch.
     */
    orderBy?: t_dispositivosOrderByWithRelationInput | t_dispositivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_dispositivos.
     */
    cursor?: t_dispositivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_dispositivos.
     */
    distinct?: T_dispositivosScalarFieldEnum | T_dispositivosScalarFieldEnum[]
  }

  /**
   * t_dispositivos findFirstOrThrow
   */
  export type t_dispositivosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * Filter, which t_dispositivos to fetch.
     */
    where?: t_dispositivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_dispositivos to fetch.
     */
    orderBy?: t_dispositivosOrderByWithRelationInput | t_dispositivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_dispositivos.
     */
    cursor?: t_dispositivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_dispositivos.
     */
    distinct?: T_dispositivosScalarFieldEnum | T_dispositivosScalarFieldEnum[]
  }

  /**
   * t_dispositivos findMany
   */
  export type t_dispositivosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * Filter, which t_dispositivos to fetch.
     */
    where?: t_dispositivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_dispositivos to fetch.
     */
    orderBy?: t_dispositivosOrderByWithRelationInput | t_dispositivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_dispositivos.
     */
    cursor?: t_dispositivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_dispositivos.
     */
    skip?: number
    distinct?: T_dispositivosScalarFieldEnum | T_dispositivosScalarFieldEnum[]
  }

  /**
   * t_dispositivos create
   */
  export type t_dispositivosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * The data needed to create a t_dispositivos.
     */
    data: XOR<t_dispositivosCreateInput, t_dispositivosUncheckedCreateInput>
  }

  /**
   * t_dispositivos createMany
   */
  export type t_dispositivosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_dispositivos.
     */
    data: t_dispositivosCreateManyInput | t_dispositivosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_dispositivos update
   */
  export type t_dispositivosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * The data needed to update a t_dispositivos.
     */
    data: XOR<t_dispositivosUpdateInput, t_dispositivosUncheckedUpdateInput>
    /**
     * Choose, which t_dispositivos to update.
     */
    where: t_dispositivosWhereUniqueInput
  }

  /**
   * t_dispositivos updateMany
   */
  export type t_dispositivosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_dispositivos.
     */
    data: XOR<t_dispositivosUpdateManyMutationInput, t_dispositivosUncheckedUpdateManyInput>
    /**
     * Filter which t_dispositivos to update
     */
    where?: t_dispositivosWhereInput
    /**
     * Limit how many t_dispositivos to update.
     */
    limit?: number
  }

  /**
   * t_dispositivos upsert
   */
  export type t_dispositivosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * The filter to search for the t_dispositivos to update in case it exists.
     */
    where: t_dispositivosWhereUniqueInput
    /**
     * In case the t_dispositivos found by the `where` argument doesn't exist, create a new t_dispositivos with this data.
     */
    create: XOR<t_dispositivosCreateInput, t_dispositivosUncheckedCreateInput>
    /**
     * In case the t_dispositivos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_dispositivosUpdateInput, t_dispositivosUncheckedUpdateInput>
  }

  /**
   * t_dispositivos delete
   */
  export type t_dispositivosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
    /**
     * Filter which t_dispositivos to delete.
     */
    where: t_dispositivosWhereUniqueInput
  }

  /**
   * t_dispositivos deleteMany
   */
  export type t_dispositivosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_dispositivos to delete
     */
    where?: t_dispositivosWhereInput
    /**
     * Limit how many t_dispositivos to delete.
     */
    limit?: number
  }

  /**
   * t_dispositivos without action
   */
  export type t_dispositivosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_dispositivos
     */
    select?: t_dispositivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_dispositivos
     */
    omit?: t_dispositivosOmit<ExtArgs> | null
  }


  /**
   * Model t_factura
   */

  export type AggregateT_factura = {
    _count: T_facturaCountAggregateOutputType | null
    _avg: T_facturaAvgAggregateOutputType | null
    _sum: T_facturaSumAggregateOutputType | null
    _min: T_facturaMinAggregateOutputType | null
    _max: T_facturaMaxAggregateOutputType | null
  }

  export type T_facturaAvgAggregateOutputType = {
    id_factura: number | null
    codigo_propietario: number | null
    unit_s_iva: number | null
  }

  export type T_facturaSumAggregateOutputType = {
    id_factura: number | null
    codigo_propietario: number | null
    unit_s_iva: number | null
  }

  export type T_facturaMinAggregateOutputType = {
    id_factura: number | null
    codigo_propietario: number | null
    proveedor_alias: string | null
    razon_social: string | null
    folio_factura: string | null
    fact_so: string | null
    fecha_factura: Date | null
    moneda: string | null
    unit_s_iva: number | null
  }

  export type T_facturaMaxAggregateOutputType = {
    id_factura: number | null
    codigo_propietario: number | null
    proveedor_alias: string | null
    razon_social: string | null
    folio_factura: string | null
    fact_so: string | null
    fecha_factura: Date | null
    moneda: string | null
    unit_s_iva: number | null
  }

  export type T_facturaCountAggregateOutputType = {
    id_factura: number
    codigo_propietario: number
    proveedor_alias: number
    razon_social: number
    folio_factura: number
    fact_so: number
    fecha_factura: number
    moneda: number
    unit_s_iva: number
    _all: number
  }


  export type T_facturaAvgAggregateInputType = {
    id_factura?: true
    codigo_propietario?: true
    unit_s_iva?: true
  }

  export type T_facturaSumAggregateInputType = {
    id_factura?: true
    codigo_propietario?: true
    unit_s_iva?: true
  }

  export type T_facturaMinAggregateInputType = {
    id_factura?: true
    codigo_propietario?: true
    proveedor_alias?: true
    razon_social?: true
    folio_factura?: true
    fact_so?: true
    fecha_factura?: true
    moneda?: true
    unit_s_iva?: true
  }

  export type T_facturaMaxAggregateInputType = {
    id_factura?: true
    codigo_propietario?: true
    proveedor_alias?: true
    razon_social?: true
    folio_factura?: true
    fact_so?: true
    fecha_factura?: true
    moneda?: true
    unit_s_iva?: true
  }

  export type T_facturaCountAggregateInputType = {
    id_factura?: true
    codigo_propietario?: true
    proveedor_alias?: true
    razon_social?: true
    folio_factura?: true
    fact_so?: true
    fecha_factura?: true
    moneda?: true
    unit_s_iva?: true
    _all?: true
  }

  export type T_facturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_factura to aggregate.
     */
    where?: t_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_facturas to fetch.
     */
    orderBy?: t_facturaOrderByWithRelationInput | t_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_facturas
    **/
    _count?: true | T_facturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_facturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_facturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_facturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_facturaMaxAggregateInputType
  }

  export type GetT_facturaAggregateType<T extends T_facturaAggregateArgs> = {
        [P in keyof T & keyof AggregateT_factura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_factura[P]>
      : GetScalarType<T[P], AggregateT_factura[P]>
  }




  export type t_facturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_facturaWhereInput
    orderBy?: t_facturaOrderByWithAggregationInput | t_facturaOrderByWithAggregationInput[]
    by: T_facturaScalarFieldEnum[] | T_facturaScalarFieldEnum
    having?: t_facturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_facturaCountAggregateInputType | true
    _avg?: T_facturaAvgAggregateInputType
    _sum?: T_facturaSumAggregateInputType
    _min?: T_facturaMinAggregateInputType
    _max?: T_facturaMaxAggregateInputType
  }

  export type T_facturaGroupByOutputType = {
    id_factura: number
    codigo_propietario: number
    proveedor_alias: string
    razon_social: string
    folio_factura: string
    fact_so: string
    fecha_factura: Date
    moneda: string
    unit_s_iva: number
    _count: T_facturaCountAggregateOutputType | null
    _avg: T_facturaAvgAggregateOutputType | null
    _sum: T_facturaSumAggregateOutputType | null
    _min: T_facturaMinAggregateOutputType | null
    _max: T_facturaMaxAggregateOutputType | null
  }

  type GetT_facturaGroupByPayload<T extends t_facturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_facturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_facturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_facturaGroupByOutputType[P]>
            : GetScalarType<T[P], T_facturaGroupByOutputType[P]>
        }
      >
    >


  export type t_facturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    codigo_propietario?: boolean
    proveedor_alias?: boolean
    razon_social?: boolean
    folio_factura?: boolean
    fact_so?: boolean
    fecha_factura?: boolean
    moneda?: boolean
    unit_s_iva?: boolean
    t_propietario?: boolean | t_propietarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_factura"]>



  export type t_facturaSelectScalar = {
    id_factura?: boolean
    codigo_propietario?: boolean
    proveedor_alias?: boolean
    razon_social?: boolean
    folio_factura?: boolean
    fact_so?: boolean
    fecha_factura?: boolean
    moneda?: boolean
    unit_s_iva?: boolean
  }

  export type t_facturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_factura" | "codigo_propietario" | "proveedor_alias" | "razon_social" | "folio_factura" | "fact_so" | "fecha_factura" | "moneda" | "unit_s_iva", ExtArgs["result"]["t_factura"]>
  export type t_facturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_propietario?: boolean | t_propietarioDefaultArgs<ExtArgs>
  }

  export type $t_facturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_factura"
    objects: {
      t_propietario: Prisma.$t_propietarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_factura: number
      codigo_propietario: number
      proveedor_alias: string
      razon_social: string
      folio_factura: string
      fact_so: string
      fecha_factura: Date
      moneda: string
      unit_s_iva: number
    }, ExtArgs["result"]["t_factura"]>
    composites: {}
  }

  type t_facturaGetPayload<S extends boolean | null | undefined | t_facturaDefaultArgs> = $Result.GetResult<Prisma.$t_facturaPayload, S>

  type t_facturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_facturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_facturaCountAggregateInputType | true
    }

  export interface t_facturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_factura'], meta: { name: 't_factura' } }
    /**
     * Find zero or one T_factura that matches the filter.
     * @param {t_facturaFindUniqueArgs} args - Arguments to find a T_factura
     * @example
     * // Get one T_factura
     * const t_factura = await prisma.t_factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_facturaFindUniqueArgs>(args: SelectSubset<T, t_facturaFindUniqueArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_facturaFindUniqueOrThrowArgs} args - Arguments to find a T_factura
     * @example
     * // Get one T_factura
     * const t_factura = await prisma.t_factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_facturaFindUniqueOrThrowArgs>(args: SelectSubset<T, t_facturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_facturaFindFirstArgs} args - Arguments to find a T_factura
     * @example
     * // Get one T_factura
     * const t_factura = await prisma.t_factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_facturaFindFirstArgs>(args?: SelectSubset<T, t_facturaFindFirstArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_facturaFindFirstOrThrowArgs} args - Arguments to find a T_factura
     * @example
     * // Get one T_factura
     * const t_factura = await prisma.t_factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_facturaFindFirstOrThrowArgs>(args?: SelectSubset<T, t_facturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_facturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_facturas
     * const t_facturas = await prisma.t_factura.findMany()
     * 
     * // Get first 10 T_facturas
     * const t_facturas = await prisma.t_factura.findMany({ take: 10 })
     * 
     * // Only select the `id_factura`
     * const t_facturaWithId_facturaOnly = await prisma.t_factura.findMany({ select: { id_factura: true } })
     * 
     */
    findMany<T extends t_facturaFindManyArgs>(args?: SelectSubset<T, t_facturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_factura.
     * @param {t_facturaCreateArgs} args - Arguments to create a T_factura.
     * @example
     * // Create one T_factura
     * const T_factura = await prisma.t_factura.create({
     *   data: {
     *     // ... data to create a T_factura
     *   }
     * })
     * 
     */
    create<T extends t_facturaCreateArgs>(args: SelectSubset<T, t_facturaCreateArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_facturas.
     * @param {t_facturaCreateManyArgs} args - Arguments to create many T_facturas.
     * @example
     * // Create many T_facturas
     * const t_factura = await prisma.t_factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_facturaCreateManyArgs>(args?: SelectSubset<T, t_facturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_factura.
     * @param {t_facturaDeleteArgs} args - Arguments to delete one T_factura.
     * @example
     * // Delete one T_factura
     * const T_factura = await prisma.t_factura.delete({
     *   where: {
     *     // ... filter to delete one T_factura
     *   }
     * })
     * 
     */
    delete<T extends t_facturaDeleteArgs>(args: SelectSubset<T, t_facturaDeleteArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_factura.
     * @param {t_facturaUpdateArgs} args - Arguments to update one T_factura.
     * @example
     * // Update one T_factura
     * const t_factura = await prisma.t_factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_facturaUpdateArgs>(args: SelectSubset<T, t_facturaUpdateArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_facturas.
     * @param {t_facturaDeleteManyArgs} args - Arguments to filter T_facturas to delete.
     * @example
     * // Delete a few T_facturas
     * const { count } = await prisma.t_factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_facturaDeleteManyArgs>(args?: SelectSubset<T, t_facturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_facturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_facturas
     * const t_factura = await prisma.t_factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_facturaUpdateManyArgs>(args: SelectSubset<T, t_facturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_factura.
     * @param {t_facturaUpsertArgs} args - Arguments to update or create a T_factura.
     * @example
     * // Update or create a T_factura
     * const t_factura = await prisma.t_factura.upsert({
     *   create: {
     *     // ... data to create a T_factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_factura we want to update
     *   }
     * })
     */
    upsert<T extends t_facturaUpsertArgs>(args: SelectSubset<T, t_facturaUpsertArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_facturaCountArgs} args - Arguments to filter T_facturas to count.
     * @example
     * // Count the number of T_facturas
     * const count = await prisma.t_factura.count({
     *   where: {
     *     // ... the filter for the T_facturas we want to count
     *   }
     * })
    **/
    count<T extends t_facturaCountArgs>(
      args?: Subset<T, t_facturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_facturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_facturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_facturaAggregateArgs>(args: Subset<T, T_facturaAggregateArgs>): Prisma.PrismaPromise<GetT_facturaAggregateType<T>>

    /**
     * Group by T_factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_facturaGroupByArgs} args - Group by arguments.
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
      T extends t_facturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_facturaGroupByArgs['orderBy'] }
        : { orderBy?: t_facturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_facturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_facturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_factura model
   */
  readonly fields: t_facturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_facturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    t_propietario<T extends t_propietarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, t_propietarioDefaultArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the t_factura model
   */
  interface t_facturaFieldRefs {
    readonly id_factura: FieldRef<"t_factura", 'Int'>
    readonly codigo_propietario: FieldRef<"t_factura", 'Int'>
    readonly proveedor_alias: FieldRef<"t_factura", 'String'>
    readonly razon_social: FieldRef<"t_factura", 'String'>
    readonly folio_factura: FieldRef<"t_factura", 'String'>
    readonly fact_so: FieldRef<"t_factura", 'String'>
    readonly fecha_factura: FieldRef<"t_factura", 'DateTime'>
    readonly moneda: FieldRef<"t_factura", 'String'>
    readonly unit_s_iva: FieldRef<"t_factura", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * t_factura findUnique
   */
  export type t_facturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * Filter, which t_factura to fetch.
     */
    where: t_facturaWhereUniqueInput
  }

  /**
   * t_factura findUniqueOrThrow
   */
  export type t_facturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * Filter, which t_factura to fetch.
     */
    where: t_facturaWhereUniqueInput
  }

  /**
   * t_factura findFirst
   */
  export type t_facturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * Filter, which t_factura to fetch.
     */
    where?: t_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_facturas to fetch.
     */
    orderBy?: t_facturaOrderByWithRelationInput | t_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_facturas.
     */
    cursor?: t_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_facturas.
     */
    distinct?: T_facturaScalarFieldEnum | T_facturaScalarFieldEnum[]
  }

  /**
   * t_factura findFirstOrThrow
   */
  export type t_facturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * Filter, which t_factura to fetch.
     */
    where?: t_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_facturas to fetch.
     */
    orderBy?: t_facturaOrderByWithRelationInput | t_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_facturas.
     */
    cursor?: t_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_facturas.
     */
    distinct?: T_facturaScalarFieldEnum | T_facturaScalarFieldEnum[]
  }

  /**
   * t_factura findMany
   */
  export type t_facturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * Filter, which t_facturas to fetch.
     */
    where?: t_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_facturas to fetch.
     */
    orderBy?: t_facturaOrderByWithRelationInput | t_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_facturas.
     */
    cursor?: t_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_facturas.
     */
    skip?: number
    distinct?: T_facturaScalarFieldEnum | T_facturaScalarFieldEnum[]
  }

  /**
   * t_factura create
   */
  export type t_facturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * The data needed to create a t_factura.
     */
    data: XOR<t_facturaCreateInput, t_facturaUncheckedCreateInput>
  }

  /**
   * t_factura createMany
   */
  export type t_facturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_facturas.
     */
    data: t_facturaCreateManyInput | t_facturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_factura update
   */
  export type t_facturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * The data needed to update a t_factura.
     */
    data: XOR<t_facturaUpdateInput, t_facturaUncheckedUpdateInput>
    /**
     * Choose, which t_factura to update.
     */
    where: t_facturaWhereUniqueInput
  }

  /**
   * t_factura updateMany
   */
  export type t_facturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_facturas.
     */
    data: XOR<t_facturaUpdateManyMutationInput, t_facturaUncheckedUpdateManyInput>
    /**
     * Filter which t_facturas to update
     */
    where?: t_facturaWhereInput
    /**
     * Limit how many t_facturas to update.
     */
    limit?: number
  }

  /**
   * t_factura upsert
   */
  export type t_facturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * The filter to search for the t_factura to update in case it exists.
     */
    where: t_facturaWhereUniqueInput
    /**
     * In case the t_factura found by the `where` argument doesn't exist, create a new t_factura with this data.
     */
    create: XOR<t_facturaCreateInput, t_facturaUncheckedCreateInput>
    /**
     * In case the t_factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_facturaUpdateInput, t_facturaUncheckedUpdateInput>
  }

  /**
   * t_factura delete
   */
  export type t_facturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    /**
     * Filter which t_factura to delete.
     */
    where: t_facturaWhereUniqueInput
  }

  /**
   * t_factura deleteMany
   */
  export type t_facturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_facturas to delete
     */
    where?: t_facturaWhereInput
    /**
     * Limit how many t_facturas to delete.
     */
    limit?: number
  }

  /**
   * t_factura without action
   */
  export type t_facturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
  }


  /**
   * Model t_historial_articulo
   */

  export type AggregateT_historial_articulo = {
    _count: T_historial_articuloCountAggregateOutputType | null
    _avg: T_historial_articuloAvgAggregateOutputType | null
    _sum: T_historial_articuloSumAggregateOutputType | null
    _min: T_historial_articuloMinAggregateOutputType | null
    _max: T_historial_articuloMaxAggregateOutputType | null
  }

  export type T_historial_articuloAvgAggregateOutputType = {
    id_historial: number | null
    id_usuario: number | null
    id_dispositivos: number | null
    num_control_ant: number | null
    id_movimiento: number | null
  }

  export type T_historial_articuloSumAggregateOutputType = {
    id_historial: number | null
    id_usuario: number | null
    id_dispositivos: number | null
    num_control_ant: number | null
    id_movimiento: number | null
  }

  export type T_historial_articuloMinAggregateOutputType = {
    id_historial: number | null
    id_usuario: number | null
    fecha_modificacion: Date | null
    id_dispositivos: number | null
    hostname: string | null
    ceco_sap_ant: string | null
    num_control_ant: number | null
    id_movimiento: number | null
  }

  export type T_historial_articuloMaxAggregateOutputType = {
    id_historial: number | null
    id_usuario: number | null
    fecha_modificacion: Date | null
    id_dispositivos: number | null
    hostname: string | null
    ceco_sap_ant: string | null
    num_control_ant: number | null
    id_movimiento: number | null
  }

  export type T_historial_articuloCountAggregateOutputType = {
    id_historial: number
    id_usuario: number
    fecha_modificacion: number
    id_dispositivos: number
    hostname: number
    ceco_sap_ant: number
    num_control_ant: number
    id_movimiento: number
    _all: number
  }


  export type T_historial_articuloAvgAggregateInputType = {
    id_historial?: true
    id_usuario?: true
    id_dispositivos?: true
    num_control_ant?: true
    id_movimiento?: true
  }

  export type T_historial_articuloSumAggregateInputType = {
    id_historial?: true
    id_usuario?: true
    id_dispositivos?: true
    num_control_ant?: true
    id_movimiento?: true
  }

  export type T_historial_articuloMinAggregateInputType = {
    id_historial?: true
    id_usuario?: true
    fecha_modificacion?: true
    id_dispositivos?: true
    hostname?: true
    ceco_sap_ant?: true
    num_control_ant?: true
    id_movimiento?: true
  }

  export type T_historial_articuloMaxAggregateInputType = {
    id_historial?: true
    id_usuario?: true
    fecha_modificacion?: true
    id_dispositivos?: true
    hostname?: true
    ceco_sap_ant?: true
    num_control_ant?: true
    id_movimiento?: true
  }

  export type T_historial_articuloCountAggregateInputType = {
    id_historial?: true
    id_usuario?: true
    fecha_modificacion?: true
    id_dispositivos?: true
    hostname?: true
    ceco_sap_ant?: true
    num_control_ant?: true
    id_movimiento?: true
    _all?: true
  }

  export type T_historial_articuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_historial_articulo to aggregate.
     */
    where?: t_historial_articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_historial_articulos to fetch.
     */
    orderBy?: t_historial_articuloOrderByWithRelationInput | t_historial_articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_historial_articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_historial_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_historial_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_historial_articulos
    **/
    _count?: true | T_historial_articuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_historial_articuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_historial_articuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_historial_articuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_historial_articuloMaxAggregateInputType
  }

  export type GetT_historial_articuloAggregateType<T extends T_historial_articuloAggregateArgs> = {
        [P in keyof T & keyof AggregateT_historial_articulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_historial_articulo[P]>
      : GetScalarType<T[P], AggregateT_historial_articulo[P]>
  }




  export type t_historial_articuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_historial_articuloWhereInput
    orderBy?: t_historial_articuloOrderByWithAggregationInput | t_historial_articuloOrderByWithAggregationInput[]
    by: T_historial_articuloScalarFieldEnum[] | T_historial_articuloScalarFieldEnum
    having?: t_historial_articuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_historial_articuloCountAggregateInputType | true
    _avg?: T_historial_articuloAvgAggregateInputType
    _sum?: T_historial_articuloSumAggregateInputType
    _min?: T_historial_articuloMinAggregateInputType
    _max?: T_historial_articuloMaxAggregateInputType
  }

  export type T_historial_articuloGroupByOutputType = {
    id_historial: number
    id_usuario: number
    fecha_modificacion: Date
    id_dispositivos: number
    hostname: string
    ceco_sap_ant: string
    num_control_ant: number
    id_movimiento: number
    _count: T_historial_articuloCountAggregateOutputType | null
    _avg: T_historial_articuloAvgAggregateOutputType | null
    _sum: T_historial_articuloSumAggregateOutputType | null
    _min: T_historial_articuloMinAggregateOutputType | null
    _max: T_historial_articuloMaxAggregateOutputType | null
  }

  type GetT_historial_articuloGroupByPayload<T extends t_historial_articuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_historial_articuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_historial_articuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_historial_articuloGroupByOutputType[P]>
            : GetScalarType<T[P], T_historial_articuloGroupByOutputType[P]>
        }
      >
    >


  export type t_historial_articuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historial?: boolean
    id_usuario?: boolean
    fecha_modificacion?: boolean
    id_dispositivos?: boolean
    hostname?: boolean
    ceco_sap_ant?: boolean
    num_control_ant?: boolean
    id_movimiento?: boolean
  }, ExtArgs["result"]["t_historial_articulo"]>



  export type t_historial_articuloSelectScalar = {
    id_historial?: boolean
    id_usuario?: boolean
    fecha_modificacion?: boolean
    id_dispositivos?: boolean
    hostname?: boolean
    ceco_sap_ant?: boolean
    num_control_ant?: boolean
    id_movimiento?: boolean
  }

  export type t_historial_articuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_historial" | "id_usuario" | "fecha_modificacion" | "id_dispositivos" | "hostname" | "ceco_sap_ant" | "num_control_ant" | "id_movimiento", ExtArgs["result"]["t_historial_articulo"]>

  export type $t_historial_articuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_historial_articulo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_historial: number
      id_usuario: number
      fecha_modificacion: Date
      id_dispositivos: number
      hostname: string
      ceco_sap_ant: string
      num_control_ant: number
      id_movimiento: number
    }, ExtArgs["result"]["t_historial_articulo"]>
    composites: {}
  }

  type t_historial_articuloGetPayload<S extends boolean | null | undefined | t_historial_articuloDefaultArgs> = $Result.GetResult<Prisma.$t_historial_articuloPayload, S>

  type t_historial_articuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_historial_articuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_historial_articuloCountAggregateInputType | true
    }

  export interface t_historial_articuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_historial_articulo'], meta: { name: 't_historial_articulo' } }
    /**
     * Find zero or one T_historial_articulo that matches the filter.
     * @param {t_historial_articuloFindUniqueArgs} args - Arguments to find a T_historial_articulo
     * @example
     * // Get one T_historial_articulo
     * const t_historial_articulo = await prisma.t_historial_articulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_historial_articuloFindUniqueArgs>(args: SelectSubset<T, t_historial_articuloFindUniqueArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_historial_articulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_historial_articuloFindUniqueOrThrowArgs} args - Arguments to find a T_historial_articulo
     * @example
     * // Get one T_historial_articulo
     * const t_historial_articulo = await prisma.t_historial_articulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_historial_articuloFindUniqueOrThrowArgs>(args: SelectSubset<T, t_historial_articuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_historial_articulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_historial_articuloFindFirstArgs} args - Arguments to find a T_historial_articulo
     * @example
     * // Get one T_historial_articulo
     * const t_historial_articulo = await prisma.t_historial_articulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_historial_articuloFindFirstArgs>(args?: SelectSubset<T, t_historial_articuloFindFirstArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_historial_articulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_historial_articuloFindFirstOrThrowArgs} args - Arguments to find a T_historial_articulo
     * @example
     * // Get one T_historial_articulo
     * const t_historial_articulo = await prisma.t_historial_articulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_historial_articuloFindFirstOrThrowArgs>(args?: SelectSubset<T, t_historial_articuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_historial_articulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_historial_articuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_historial_articulos
     * const t_historial_articulos = await prisma.t_historial_articulo.findMany()
     * 
     * // Get first 10 T_historial_articulos
     * const t_historial_articulos = await prisma.t_historial_articulo.findMany({ take: 10 })
     * 
     * // Only select the `id_historial`
     * const t_historial_articuloWithId_historialOnly = await prisma.t_historial_articulo.findMany({ select: { id_historial: true } })
     * 
     */
    findMany<T extends t_historial_articuloFindManyArgs>(args?: SelectSubset<T, t_historial_articuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_historial_articulo.
     * @param {t_historial_articuloCreateArgs} args - Arguments to create a T_historial_articulo.
     * @example
     * // Create one T_historial_articulo
     * const T_historial_articulo = await prisma.t_historial_articulo.create({
     *   data: {
     *     // ... data to create a T_historial_articulo
     *   }
     * })
     * 
     */
    create<T extends t_historial_articuloCreateArgs>(args: SelectSubset<T, t_historial_articuloCreateArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_historial_articulos.
     * @param {t_historial_articuloCreateManyArgs} args - Arguments to create many T_historial_articulos.
     * @example
     * // Create many T_historial_articulos
     * const t_historial_articulo = await prisma.t_historial_articulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_historial_articuloCreateManyArgs>(args?: SelectSubset<T, t_historial_articuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_historial_articulo.
     * @param {t_historial_articuloDeleteArgs} args - Arguments to delete one T_historial_articulo.
     * @example
     * // Delete one T_historial_articulo
     * const T_historial_articulo = await prisma.t_historial_articulo.delete({
     *   where: {
     *     // ... filter to delete one T_historial_articulo
     *   }
     * })
     * 
     */
    delete<T extends t_historial_articuloDeleteArgs>(args: SelectSubset<T, t_historial_articuloDeleteArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_historial_articulo.
     * @param {t_historial_articuloUpdateArgs} args - Arguments to update one T_historial_articulo.
     * @example
     * // Update one T_historial_articulo
     * const t_historial_articulo = await prisma.t_historial_articulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_historial_articuloUpdateArgs>(args: SelectSubset<T, t_historial_articuloUpdateArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_historial_articulos.
     * @param {t_historial_articuloDeleteManyArgs} args - Arguments to filter T_historial_articulos to delete.
     * @example
     * // Delete a few T_historial_articulos
     * const { count } = await prisma.t_historial_articulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_historial_articuloDeleteManyArgs>(args?: SelectSubset<T, t_historial_articuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_historial_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_historial_articuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_historial_articulos
     * const t_historial_articulo = await prisma.t_historial_articulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_historial_articuloUpdateManyArgs>(args: SelectSubset<T, t_historial_articuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_historial_articulo.
     * @param {t_historial_articuloUpsertArgs} args - Arguments to update or create a T_historial_articulo.
     * @example
     * // Update or create a T_historial_articulo
     * const t_historial_articulo = await prisma.t_historial_articulo.upsert({
     *   create: {
     *     // ... data to create a T_historial_articulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_historial_articulo we want to update
     *   }
     * })
     */
    upsert<T extends t_historial_articuloUpsertArgs>(args: SelectSubset<T, t_historial_articuloUpsertArgs<ExtArgs>>): Prisma__t_historial_articuloClient<$Result.GetResult<Prisma.$t_historial_articuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_historial_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_historial_articuloCountArgs} args - Arguments to filter T_historial_articulos to count.
     * @example
     * // Count the number of T_historial_articulos
     * const count = await prisma.t_historial_articulo.count({
     *   where: {
     *     // ... the filter for the T_historial_articulos we want to count
     *   }
     * })
    **/
    count<T extends t_historial_articuloCountArgs>(
      args?: Subset<T, t_historial_articuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_historial_articuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_historial_articulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_historial_articuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_historial_articuloAggregateArgs>(args: Subset<T, T_historial_articuloAggregateArgs>): Prisma.PrismaPromise<GetT_historial_articuloAggregateType<T>>

    /**
     * Group by T_historial_articulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_historial_articuloGroupByArgs} args - Group by arguments.
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
      T extends t_historial_articuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_historial_articuloGroupByArgs['orderBy'] }
        : { orderBy?: t_historial_articuloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_historial_articuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_historial_articuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_historial_articulo model
   */
  readonly fields: t_historial_articuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_historial_articulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_historial_articuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_historial_articulo model
   */
  interface t_historial_articuloFieldRefs {
    readonly id_historial: FieldRef<"t_historial_articulo", 'Int'>
    readonly id_usuario: FieldRef<"t_historial_articulo", 'Int'>
    readonly fecha_modificacion: FieldRef<"t_historial_articulo", 'DateTime'>
    readonly id_dispositivos: FieldRef<"t_historial_articulo", 'Int'>
    readonly hostname: FieldRef<"t_historial_articulo", 'String'>
    readonly ceco_sap_ant: FieldRef<"t_historial_articulo", 'String'>
    readonly num_control_ant: FieldRef<"t_historial_articulo", 'Int'>
    readonly id_movimiento: FieldRef<"t_historial_articulo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_historial_articulo findUnique
   */
  export type t_historial_articuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * Filter, which t_historial_articulo to fetch.
     */
    where: t_historial_articuloWhereUniqueInput
  }

  /**
   * t_historial_articulo findUniqueOrThrow
   */
  export type t_historial_articuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * Filter, which t_historial_articulo to fetch.
     */
    where: t_historial_articuloWhereUniqueInput
  }

  /**
   * t_historial_articulo findFirst
   */
  export type t_historial_articuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * Filter, which t_historial_articulo to fetch.
     */
    where?: t_historial_articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_historial_articulos to fetch.
     */
    orderBy?: t_historial_articuloOrderByWithRelationInput | t_historial_articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_historial_articulos.
     */
    cursor?: t_historial_articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_historial_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_historial_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_historial_articulos.
     */
    distinct?: T_historial_articuloScalarFieldEnum | T_historial_articuloScalarFieldEnum[]
  }

  /**
   * t_historial_articulo findFirstOrThrow
   */
  export type t_historial_articuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * Filter, which t_historial_articulo to fetch.
     */
    where?: t_historial_articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_historial_articulos to fetch.
     */
    orderBy?: t_historial_articuloOrderByWithRelationInput | t_historial_articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_historial_articulos.
     */
    cursor?: t_historial_articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_historial_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_historial_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_historial_articulos.
     */
    distinct?: T_historial_articuloScalarFieldEnum | T_historial_articuloScalarFieldEnum[]
  }

  /**
   * t_historial_articulo findMany
   */
  export type t_historial_articuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * Filter, which t_historial_articulos to fetch.
     */
    where?: t_historial_articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_historial_articulos to fetch.
     */
    orderBy?: t_historial_articuloOrderByWithRelationInput | t_historial_articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_historial_articulos.
     */
    cursor?: t_historial_articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_historial_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_historial_articulos.
     */
    skip?: number
    distinct?: T_historial_articuloScalarFieldEnum | T_historial_articuloScalarFieldEnum[]
  }

  /**
   * t_historial_articulo create
   */
  export type t_historial_articuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * The data needed to create a t_historial_articulo.
     */
    data: XOR<t_historial_articuloCreateInput, t_historial_articuloUncheckedCreateInput>
  }

  /**
   * t_historial_articulo createMany
   */
  export type t_historial_articuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_historial_articulos.
     */
    data: t_historial_articuloCreateManyInput | t_historial_articuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_historial_articulo update
   */
  export type t_historial_articuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * The data needed to update a t_historial_articulo.
     */
    data: XOR<t_historial_articuloUpdateInput, t_historial_articuloUncheckedUpdateInput>
    /**
     * Choose, which t_historial_articulo to update.
     */
    where: t_historial_articuloWhereUniqueInput
  }

  /**
   * t_historial_articulo updateMany
   */
  export type t_historial_articuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_historial_articulos.
     */
    data: XOR<t_historial_articuloUpdateManyMutationInput, t_historial_articuloUncheckedUpdateManyInput>
    /**
     * Filter which t_historial_articulos to update
     */
    where?: t_historial_articuloWhereInput
    /**
     * Limit how many t_historial_articulos to update.
     */
    limit?: number
  }

  /**
   * t_historial_articulo upsert
   */
  export type t_historial_articuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * The filter to search for the t_historial_articulo to update in case it exists.
     */
    where: t_historial_articuloWhereUniqueInput
    /**
     * In case the t_historial_articulo found by the `where` argument doesn't exist, create a new t_historial_articulo with this data.
     */
    create: XOR<t_historial_articuloCreateInput, t_historial_articuloUncheckedCreateInput>
    /**
     * In case the t_historial_articulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_historial_articuloUpdateInput, t_historial_articuloUncheckedUpdateInput>
  }

  /**
   * t_historial_articulo delete
   */
  export type t_historial_articuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
    /**
     * Filter which t_historial_articulo to delete.
     */
    where: t_historial_articuloWhereUniqueInput
  }

  /**
   * t_historial_articulo deleteMany
   */
  export type t_historial_articuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_historial_articulos to delete
     */
    where?: t_historial_articuloWhereInput
    /**
     * Limit how many t_historial_articulos to delete.
     */
    limit?: number
  }

  /**
   * t_historial_articulo without action
   */
  export type t_historial_articuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_historial_articulo
     */
    select?: t_historial_articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_historial_articulo
     */
    omit?: t_historial_articuloOmit<ExtArgs> | null
  }


  /**
   * Model t_movimientos
   */

  export type AggregateT_movimientos = {
    _count: T_movimientosCountAggregateOutputType | null
    _avg: T_movimientosAvgAggregateOutputType | null
    _sum: T_movimientosSumAggregateOutputType | null
    _min: T_movimientosMinAggregateOutputType | null
    _max: T_movimientosMaxAggregateOutputType | null
  }

  export type T_movimientosAvgAggregateOutputType = {
    id_movimiento: number | null
  }

  export type T_movimientosSumAggregateOutputType = {
    id_movimiento: number | null
  }

  export type T_movimientosMinAggregateOutputType = {
    id_movimiento: number | null
    descripcion_movimineto: string | null
  }

  export type T_movimientosMaxAggregateOutputType = {
    id_movimiento: number | null
    descripcion_movimineto: string | null
  }

  export type T_movimientosCountAggregateOutputType = {
    id_movimiento: number
    descripcion_movimineto: number
    _all: number
  }


  export type T_movimientosAvgAggregateInputType = {
    id_movimiento?: true
  }

  export type T_movimientosSumAggregateInputType = {
    id_movimiento?: true
  }

  export type T_movimientosMinAggregateInputType = {
    id_movimiento?: true
    descripcion_movimineto?: true
  }

  export type T_movimientosMaxAggregateInputType = {
    id_movimiento?: true
    descripcion_movimineto?: true
  }

  export type T_movimientosCountAggregateInputType = {
    id_movimiento?: true
    descripcion_movimineto?: true
    _all?: true
  }

  export type T_movimientosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_movimientos to aggregate.
     */
    where?: t_movimientosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_movimientos to fetch.
     */
    orderBy?: t_movimientosOrderByWithRelationInput | t_movimientosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_movimientosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_movimientos
    **/
    _count?: true | T_movimientosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_movimientosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_movimientosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_movimientosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_movimientosMaxAggregateInputType
  }

  export type GetT_movimientosAggregateType<T extends T_movimientosAggregateArgs> = {
        [P in keyof T & keyof AggregateT_movimientos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_movimientos[P]>
      : GetScalarType<T[P], AggregateT_movimientos[P]>
  }




  export type t_movimientosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_movimientosWhereInput
    orderBy?: t_movimientosOrderByWithAggregationInput | t_movimientosOrderByWithAggregationInput[]
    by: T_movimientosScalarFieldEnum[] | T_movimientosScalarFieldEnum
    having?: t_movimientosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_movimientosCountAggregateInputType | true
    _avg?: T_movimientosAvgAggregateInputType
    _sum?: T_movimientosSumAggregateInputType
    _min?: T_movimientosMinAggregateInputType
    _max?: T_movimientosMaxAggregateInputType
  }

  export type T_movimientosGroupByOutputType = {
    id_movimiento: number
    descripcion_movimineto: string
    _count: T_movimientosCountAggregateOutputType | null
    _avg: T_movimientosAvgAggregateOutputType | null
    _sum: T_movimientosSumAggregateOutputType | null
    _min: T_movimientosMinAggregateOutputType | null
    _max: T_movimientosMaxAggregateOutputType | null
  }

  type GetT_movimientosGroupByPayload<T extends t_movimientosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_movimientosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_movimientosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_movimientosGroupByOutputType[P]>
            : GetScalarType<T[P], T_movimientosGroupByOutputType[P]>
        }
      >
    >


  export type t_movimientosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    descripcion_movimineto?: boolean
  }, ExtArgs["result"]["t_movimientos"]>



  export type t_movimientosSelectScalar = {
    id_movimiento?: boolean
    descripcion_movimineto?: boolean
  }

  export type t_movimientosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_movimiento" | "descripcion_movimineto", ExtArgs["result"]["t_movimientos"]>

  export type $t_movimientosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_movimientos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_movimiento: number
      descripcion_movimineto: string
    }, ExtArgs["result"]["t_movimientos"]>
    composites: {}
  }

  type t_movimientosGetPayload<S extends boolean | null | undefined | t_movimientosDefaultArgs> = $Result.GetResult<Prisma.$t_movimientosPayload, S>

  type t_movimientosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_movimientosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_movimientosCountAggregateInputType | true
    }

  export interface t_movimientosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_movimientos'], meta: { name: 't_movimientos' } }
    /**
     * Find zero or one T_movimientos that matches the filter.
     * @param {t_movimientosFindUniqueArgs} args - Arguments to find a T_movimientos
     * @example
     * // Get one T_movimientos
     * const t_movimientos = await prisma.t_movimientos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_movimientosFindUniqueArgs>(args: SelectSubset<T, t_movimientosFindUniqueArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_movimientos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_movimientosFindUniqueOrThrowArgs} args - Arguments to find a T_movimientos
     * @example
     * // Get one T_movimientos
     * const t_movimientos = await prisma.t_movimientos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_movimientosFindUniqueOrThrowArgs>(args: SelectSubset<T, t_movimientosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_movimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_movimientosFindFirstArgs} args - Arguments to find a T_movimientos
     * @example
     * // Get one T_movimientos
     * const t_movimientos = await prisma.t_movimientos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_movimientosFindFirstArgs>(args?: SelectSubset<T, t_movimientosFindFirstArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_movimientos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_movimientosFindFirstOrThrowArgs} args - Arguments to find a T_movimientos
     * @example
     * // Get one T_movimientos
     * const t_movimientos = await prisma.t_movimientos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_movimientosFindFirstOrThrowArgs>(args?: SelectSubset<T, t_movimientosFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_movimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_movimientosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_movimientos
     * const t_movimientos = await prisma.t_movimientos.findMany()
     * 
     * // Get first 10 T_movimientos
     * const t_movimientos = await prisma.t_movimientos.findMany({ take: 10 })
     * 
     * // Only select the `id_movimiento`
     * const t_movimientosWithId_movimientoOnly = await prisma.t_movimientos.findMany({ select: { id_movimiento: true } })
     * 
     */
    findMany<T extends t_movimientosFindManyArgs>(args?: SelectSubset<T, t_movimientosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_movimientos.
     * @param {t_movimientosCreateArgs} args - Arguments to create a T_movimientos.
     * @example
     * // Create one T_movimientos
     * const T_movimientos = await prisma.t_movimientos.create({
     *   data: {
     *     // ... data to create a T_movimientos
     *   }
     * })
     * 
     */
    create<T extends t_movimientosCreateArgs>(args: SelectSubset<T, t_movimientosCreateArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_movimientos.
     * @param {t_movimientosCreateManyArgs} args - Arguments to create many T_movimientos.
     * @example
     * // Create many T_movimientos
     * const t_movimientos = await prisma.t_movimientos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_movimientosCreateManyArgs>(args?: SelectSubset<T, t_movimientosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_movimientos.
     * @param {t_movimientosDeleteArgs} args - Arguments to delete one T_movimientos.
     * @example
     * // Delete one T_movimientos
     * const T_movimientos = await prisma.t_movimientos.delete({
     *   where: {
     *     // ... filter to delete one T_movimientos
     *   }
     * })
     * 
     */
    delete<T extends t_movimientosDeleteArgs>(args: SelectSubset<T, t_movimientosDeleteArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_movimientos.
     * @param {t_movimientosUpdateArgs} args - Arguments to update one T_movimientos.
     * @example
     * // Update one T_movimientos
     * const t_movimientos = await prisma.t_movimientos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_movimientosUpdateArgs>(args: SelectSubset<T, t_movimientosUpdateArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_movimientos.
     * @param {t_movimientosDeleteManyArgs} args - Arguments to filter T_movimientos to delete.
     * @example
     * // Delete a few T_movimientos
     * const { count } = await prisma.t_movimientos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_movimientosDeleteManyArgs>(args?: SelectSubset<T, t_movimientosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_movimientosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_movimientos
     * const t_movimientos = await prisma.t_movimientos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_movimientosUpdateManyArgs>(args: SelectSubset<T, t_movimientosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_movimientos.
     * @param {t_movimientosUpsertArgs} args - Arguments to update or create a T_movimientos.
     * @example
     * // Update or create a T_movimientos
     * const t_movimientos = await prisma.t_movimientos.upsert({
     *   create: {
     *     // ... data to create a T_movimientos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_movimientos we want to update
     *   }
     * })
     */
    upsert<T extends t_movimientosUpsertArgs>(args: SelectSubset<T, t_movimientosUpsertArgs<ExtArgs>>): Prisma__t_movimientosClient<$Result.GetResult<Prisma.$t_movimientosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_movimientosCountArgs} args - Arguments to filter T_movimientos to count.
     * @example
     * // Count the number of T_movimientos
     * const count = await prisma.t_movimientos.count({
     *   where: {
     *     // ... the filter for the T_movimientos we want to count
     *   }
     * })
    **/
    count<T extends t_movimientosCountArgs>(
      args?: Subset<T, t_movimientosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_movimientosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_movimientosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_movimientosAggregateArgs>(args: Subset<T, T_movimientosAggregateArgs>): Prisma.PrismaPromise<GetT_movimientosAggregateType<T>>

    /**
     * Group by T_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_movimientosGroupByArgs} args - Group by arguments.
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
      T extends t_movimientosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_movimientosGroupByArgs['orderBy'] }
        : { orderBy?: t_movimientosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_movimientosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_movimientosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_movimientos model
   */
  readonly fields: t_movimientosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_movimientos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_movimientosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_movimientos model
   */
  interface t_movimientosFieldRefs {
    readonly id_movimiento: FieldRef<"t_movimientos", 'Int'>
    readonly descripcion_movimineto: FieldRef<"t_movimientos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * t_movimientos findUnique
   */
  export type t_movimientosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * Filter, which t_movimientos to fetch.
     */
    where: t_movimientosWhereUniqueInput
  }

  /**
   * t_movimientos findUniqueOrThrow
   */
  export type t_movimientosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * Filter, which t_movimientos to fetch.
     */
    where: t_movimientosWhereUniqueInput
  }

  /**
   * t_movimientos findFirst
   */
  export type t_movimientosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * Filter, which t_movimientos to fetch.
     */
    where?: t_movimientosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_movimientos to fetch.
     */
    orderBy?: t_movimientosOrderByWithRelationInput | t_movimientosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_movimientos.
     */
    cursor?: t_movimientosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_movimientos.
     */
    distinct?: T_movimientosScalarFieldEnum | T_movimientosScalarFieldEnum[]
  }

  /**
   * t_movimientos findFirstOrThrow
   */
  export type t_movimientosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * Filter, which t_movimientos to fetch.
     */
    where?: t_movimientosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_movimientos to fetch.
     */
    orderBy?: t_movimientosOrderByWithRelationInput | t_movimientosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_movimientos.
     */
    cursor?: t_movimientosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_movimientos.
     */
    distinct?: T_movimientosScalarFieldEnum | T_movimientosScalarFieldEnum[]
  }

  /**
   * t_movimientos findMany
   */
  export type t_movimientosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * Filter, which t_movimientos to fetch.
     */
    where?: t_movimientosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_movimientos to fetch.
     */
    orderBy?: t_movimientosOrderByWithRelationInput | t_movimientosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_movimientos.
     */
    cursor?: t_movimientosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_movimientos.
     */
    skip?: number
    distinct?: T_movimientosScalarFieldEnum | T_movimientosScalarFieldEnum[]
  }

  /**
   * t_movimientos create
   */
  export type t_movimientosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * The data needed to create a t_movimientos.
     */
    data: XOR<t_movimientosCreateInput, t_movimientosUncheckedCreateInput>
  }

  /**
   * t_movimientos createMany
   */
  export type t_movimientosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_movimientos.
     */
    data: t_movimientosCreateManyInput | t_movimientosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_movimientos update
   */
  export type t_movimientosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * The data needed to update a t_movimientos.
     */
    data: XOR<t_movimientosUpdateInput, t_movimientosUncheckedUpdateInput>
    /**
     * Choose, which t_movimientos to update.
     */
    where: t_movimientosWhereUniqueInput
  }

  /**
   * t_movimientos updateMany
   */
  export type t_movimientosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_movimientos.
     */
    data: XOR<t_movimientosUpdateManyMutationInput, t_movimientosUncheckedUpdateManyInput>
    /**
     * Filter which t_movimientos to update
     */
    where?: t_movimientosWhereInput
    /**
     * Limit how many t_movimientos to update.
     */
    limit?: number
  }

  /**
   * t_movimientos upsert
   */
  export type t_movimientosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * The filter to search for the t_movimientos to update in case it exists.
     */
    where: t_movimientosWhereUniqueInput
    /**
     * In case the t_movimientos found by the `where` argument doesn't exist, create a new t_movimientos with this data.
     */
    create: XOR<t_movimientosCreateInput, t_movimientosUncheckedCreateInput>
    /**
     * In case the t_movimientos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_movimientosUpdateInput, t_movimientosUncheckedUpdateInput>
  }

  /**
   * t_movimientos delete
   */
  export type t_movimientosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
    /**
     * Filter which t_movimientos to delete.
     */
    where: t_movimientosWhereUniqueInput
  }

  /**
   * t_movimientos deleteMany
   */
  export type t_movimientosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_movimientos to delete
     */
    where?: t_movimientosWhereInput
    /**
     * Limit how many t_movimientos to delete.
     */
    limit?: number
  }

  /**
   * t_movimientos without action
   */
  export type t_movimientosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_movimientos
     */
    select?: t_movimientosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_movimientos
     */
    omit?: t_movimientosOmit<ExtArgs> | null
  }


  /**
   * Model t_propietario
   */

  export type AggregateT_propietario = {
    _count: T_propietarioCountAggregateOutputType | null
    _avg: T_propietarioAvgAggregateOutputType | null
    _sum: T_propietarioSumAggregateOutputType | null
    _min: T_propietarioMinAggregateOutputType | null
    _max: T_propietarioMaxAggregateOutputType | null
  }

  export type T_propietarioAvgAggregateOutputType = {
    id_propietario: number | null
    codigo_propietario: number | null
  }

  export type T_propietarioSumAggregateOutputType = {
    id_propietario: number | null
    codigo_propietario: number | null
  }

  export type T_propietarioMinAggregateOutputType = {
    id_propietario: number | null
    codigo_propietario: number | null
    nombre: string | null
  }

  export type T_propietarioMaxAggregateOutputType = {
    id_propietario: number | null
    codigo_propietario: number | null
    nombre: string | null
  }

  export type T_propietarioCountAggregateOutputType = {
    id_propietario: number
    codigo_propietario: number
    nombre: number
    _all: number
  }


  export type T_propietarioAvgAggregateInputType = {
    id_propietario?: true
    codigo_propietario?: true
  }

  export type T_propietarioSumAggregateInputType = {
    id_propietario?: true
    codigo_propietario?: true
  }

  export type T_propietarioMinAggregateInputType = {
    id_propietario?: true
    codigo_propietario?: true
    nombre?: true
  }

  export type T_propietarioMaxAggregateInputType = {
    id_propietario?: true
    codigo_propietario?: true
    nombre?: true
  }

  export type T_propietarioCountAggregateInputType = {
    id_propietario?: true
    codigo_propietario?: true
    nombre?: true
    _all?: true
  }

  export type T_propietarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_propietario to aggregate.
     */
    where?: t_propietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_propietarios to fetch.
     */
    orderBy?: t_propietarioOrderByWithRelationInput | t_propietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_propietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_propietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_propietarios
    **/
    _count?: true | T_propietarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_propietarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_propietarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_propietarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_propietarioMaxAggregateInputType
  }

  export type GetT_propietarioAggregateType<T extends T_propietarioAggregateArgs> = {
        [P in keyof T & keyof AggregateT_propietario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_propietario[P]>
      : GetScalarType<T[P], AggregateT_propietario[P]>
  }




  export type t_propietarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_propietarioWhereInput
    orderBy?: t_propietarioOrderByWithAggregationInput | t_propietarioOrderByWithAggregationInput[]
    by: T_propietarioScalarFieldEnum[] | T_propietarioScalarFieldEnum
    having?: t_propietarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_propietarioCountAggregateInputType | true
    _avg?: T_propietarioAvgAggregateInputType
    _sum?: T_propietarioSumAggregateInputType
    _min?: T_propietarioMinAggregateInputType
    _max?: T_propietarioMaxAggregateInputType
  }

  export type T_propietarioGroupByOutputType = {
    id_propietario: number
    codigo_propietario: number
    nombre: string
    _count: T_propietarioCountAggregateOutputType | null
    _avg: T_propietarioAvgAggregateOutputType | null
    _sum: T_propietarioSumAggregateOutputType | null
    _min: T_propietarioMinAggregateOutputType | null
    _max: T_propietarioMaxAggregateOutputType | null
  }

  type GetT_propietarioGroupByPayload<T extends t_propietarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_propietarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_propietarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_propietarioGroupByOutputType[P]>
            : GetScalarType<T[P], T_propietarioGroupByOutputType[P]>
        }
      >
    >


  export type t_propietarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_propietario?: boolean
    codigo_propietario?: boolean
    nombre?: boolean
    t_factura?: boolean | t_propietario$t_facturaArgs<ExtArgs>
    t_refacciones?: boolean | t_propietario$t_refaccionesArgs<ExtArgs>
  }, ExtArgs["result"]["t_propietario"]>



  export type t_propietarioSelectScalar = {
    id_propietario?: boolean
    codigo_propietario?: boolean
    nombre?: boolean
  }

  export type t_propietarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_propietario" | "codigo_propietario" | "nombre", ExtArgs["result"]["t_propietario"]>
  export type t_propietarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_factura?: boolean | t_propietario$t_facturaArgs<ExtArgs>
    t_refacciones?: boolean | t_propietario$t_refaccionesArgs<ExtArgs>
  }

  export type $t_propietarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_propietario"
    objects: {
      t_factura: Prisma.$t_facturaPayload<ExtArgs> | null
      t_refacciones: Prisma.$t_refaccionesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_propietario: number
      codigo_propietario: number
      nombre: string
    }, ExtArgs["result"]["t_propietario"]>
    composites: {}
  }

  type t_propietarioGetPayload<S extends boolean | null | undefined | t_propietarioDefaultArgs> = $Result.GetResult<Prisma.$t_propietarioPayload, S>

  type t_propietarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_propietarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_propietarioCountAggregateInputType | true
    }

  export interface t_propietarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_propietario'], meta: { name: 't_propietario' } }
    /**
     * Find zero or one T_propietario that matches the filter.
     * @param {t_propietarioFindUniqueArgs} args - Arguments to find a T_propietario
     * @example
     * // Get one T_propietario
     * const t_propietario = await prisma.t_propietario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_propietarioFindUniqueArgs>(args: SelectSubset<T, t_propietarioFindUniqueArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_propietario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_propietarioFindUniqueOrThrowArgs} args - Arguments to find a T_propietario
     * @example
     * // Get one T_propietario
     * const t_propietario = await prisma.t_propietario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_propietarioFindUniqueOrThrowArgs>(args: SelectSubset<T, t_propietarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_propietario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_propietarioFindFirstArgs} args - Arguments to find a T_propietario
     * @example
     * // Get one T_propietario
     * const t_propietario = await prisma.t_propietario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_propietarioFindFirstArgs>(args?: SelectSubset<T, t_propietarioFindFirstArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_propietario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_propietarioFindFirstOrThrowArgs} args - Arguments to find a T_propietario
     * @example
     * // Get one T_propietario
     * const t_propietario = await prisma.t_propietario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_propietarioFindFirstOrThrowArgs>(args?: SelectSubset<T, t_propietarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_propietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_propietarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_propietarios
     * const t_propietarios = await prisma.t_propietario.findMany()
     * 
     * // Get first 10 T_propietarios
     * const t_propietarios = await prisma.t_propietario.findMany({ take: 10 })
     * 
     * // Only select the `id_propietario`
     * const t_propietarioWithId_propietarioOnly = await prisma.t_propietario.findMany({ select: { id_propietario: true } })
     * 
     */
    findMany<T extends t_propietarioFindManyArgs>(args?: SelectSubset<T, t_propietarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_propietario.
     * @param {t_propietarioCreateArgs} args - Arguments to create a T_propietario.
     * @example
     * // Create one T_propietario
     * const T_propietario = await prisma.t_propietario.create({
     *   data: {
     *     // ... data to create a T_propietario
     *   }
     * })
     * 
     */
    create<T extends t_propietarioCreateArgs>(args: SelectSubset<T, t_propietarioCreateArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_propietarios.
     * @param {t_propietarioCreateManyArgs} args - Arguments to create many T_propietarios.
     * @example
     * // Create many T_propietarios
     * const t_propietario = await prisma.t_propietario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_propietarioCreateManyArgs>(args?: SelectSubset<T, t_propietarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_propietario.
     * @param {t_propietarioDeleteArgs} args - Arguments to delete one T_propietario.
     * @example
     * // Delete one T_propietario
     * const T_propietario = await prisma.t_propietario.delete({
     *   where: {
     *     // ... filter to delete one T_propietario
     *   }
     * })
     * 
     */
    delete<T extends t_propietarioDeleteArgs>(args: SelectSubset<T, t_propietarioDeleteArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_propietario.
     * @param {t_propietarioUpdateArgs} args - Arguments to update one T_propietario.
     * @example
     * // Update one T_propietario
     * const t_propietario = await prisma.t_propietario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_propietarioUpdateArgs>(args: SelectSubset<T, t_propietarioUpdateArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_propietarios.
     * @param {t_propietarioDeleteManyArgs} args - Arguments to filter T_propietarios to delete.
     * @example
     * // Delete a few T_propietarios
     * const { count } = await prisma.t_propietario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_propietarioDeleteManyArgs>(args?: SelectSubset<T, t_propietarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_propietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_propietarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_propietarios
     * const t_propietario = await prisma.t_propietario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_propietarioUpdateManyArgs>(args: SelectSubset<T, t_propietarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_propietario.
     * @param {t_propietarioUpsertArgs} args - Arguments to update or create a T_propietario.
     * @example
     * // Update or create a T_propietario
     * const t_propietario = await prisma.t_propietario.upsert({
     *   create: {
     *     // ... data to create a T_propietario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_propietario we want to update
     *   }
     * })
     */
    upsert<T extends t_propietarioUpsertArgs>(args: SelectSubset<T, t_propietarioUpsertArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_propietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_propietarioCountArgs} args - Arguments to filter T_propietarios to count.
     * @example
     * // Count the number of T_propietarios
     * const count = await prisma.t_propietario.count({
     *   where: {
     *     // ... the filter for the T_propietarios we want to count
     *   }
     * })
    **/
    count<T extends t_propietarioCountArgs>(
      args?: Subset<T, t_propietarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_propietarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_propietario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_propietarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_propietarioAggregateArgs>(args: Subset<T, T_propietarioAggregateArgs>): Prisma.PrismaPromise<GetT_propietarioAggregateType<T>>

    /**
     * Group by T_propietario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_propietarioGroupByArgs} args - Group by arguments.
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
      T extends t_propietarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_propietarioGroupByArgs['orderBy'] }
        : { orderBy?: t_propietarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_propietarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_propietarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_propietario model
   */
  readonly fields: t_propietarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_propietario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_propietarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    t_factura<T extends t_propietario$t_facturaArgs<ExtArgs> = {}>(args?: Subset<T, t_propietario$t_facturaArgs<ExtArgs>>): Prisma__t_facturaClient<$Result.GetResult<Prisma.$t_facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    t_refacciones<T extends t_propietario$t_refaccionesArgs<ExtArgs> = {}>(args?: Subset<T, t_propietario$t_refaccionesArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the t_propietario model
   */
  interface t_propietarioFieldRefs {
    readonly id_propietario: FieldRef<"t_propietario", 'Int'>
    readonly codigo_propietario: FieldRef<"t_propietario", 'Int'>
    readonly nombre: FieldRef<"t_propietario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * t_propietario findUnique
   */
  export type t_propietarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * Filter, which t_propietario to fetch.
     */
    where: t_propietarioWhereUniqueInput
  }

  /**
   * t_propietario findUniqueOrThrow
   */
  export type t_propietarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * Filter, which t_propietario to fetch.
     */
    where: t_propietarioWhereUniqueInput
  }

  /**
   * t_propietario findFirst
   */
  export type t_propietarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * Filter, which t_propietario to fetch.
     */
    where?: t_propietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_propietarios to fetch.
     */
    orderBy?: t_propietarioOrderByWithRelationInput | t_propietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_propietarios.
     */
    cursor?: t_propietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_propietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_propietarios.
     */
    distinct?: T_propietarioScalarFieldEnum | T_propietarioScalarFieldEnum[]
  }

  /**
   * t_propietario findFirstOrThrow
   */
  export type t_propietarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * Filter, which t_propietario to fetch.
     */
    where?: t_propietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_propietarios to fetch.
     */
    orderBy?: t_propietarioOrderByWithRelationInput | t_propietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_propietarios.
     */
    cursor?: t_propietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_propietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_propietarios.
     */
    distinct?: T_propietarioScalarFieldEnum | T_propietarioScalarFieldEnum[]
  }

  /**
   * t_propietario findMany
   */
  export type t_propietarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * Filter, which t_propietarios to fetch.
     */
    where?: t_propietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_propietarios to fetch.
     */
    orderBy?: t_propietarioOrderByWithRelationInput | t_propietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_propietarios.
     */
    cursor?: t_propietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_propietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_propietarios.
     */
    skip?: number
    distinct?: T_propietarioScalarFieldEnum | T_propietarioScalarFieldEnum[]
  }

  /**
   * t_propietario create
   */
  export type t_propietarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * The data needed to create a t_propietario.
     */
    data: XOR<t_propietarioCreateInput, t_propietarioUncheckedCreateInput>
  }

  /**
   * t_propietario createMany
   */
  export type t_propietarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_propietarios.
     */
    data: t_propietarioCreateManyInput | t_propietarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_propietario update
   */
  export type t_propietarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * The data needed to update a t_propietario.
     */
    data: XOR<t_propietarioUpdateInput, t_propietarioUncheckedUpdateInput>
    /**
     * Choose, which t_propietario to update.
     */
    where: t_propietarioWhereUniqueInput
  }

  /**
   * t_propietario updateMany
   */
  export type t_propietarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_propietarios.
     */
    data: XOR<t_propietarioUpdateManyMutationInput, t_propietarioUncheckedUpdateManyInput>
    /**
     * Filter which t_propietarios to update
     */
    where?: t_propietarioWhereInput
    /**
     * Limit how many t_propietarios to update.
     */
    limit?: number
  }

  /**
   * t_propietario upsert
   */
  export type t_propietarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * The filter to search for the t_propietario to update in case it exists.
     */
    where: t_propietarioWhereUniqueInput
    /**
     * In case the t_propietario found by the `where` argument doesn't exist, create a new t_propietario with this data.
     */
    create: XOR<t_propietarioCreateInput, t_propietarioUncheckedCreateInput>
    /**
     * In case the t_propietario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_propietarioUpdateInput, t_propietarioUncheckedUpdateInput>
  }

  /**
   * t_propietario delete
   */
  export type t_propietarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
    /**
     * Filter which t_propietario to delete.
     */
    where: t_propietarioWhereUniqueInput
  }

  /**
   * t_propietario deleteMany
   */
  export type t_propietarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_propietarios to delete
     */
    where?: t_propietarioWhereInput
    /**
     * Limit how many t_propietarios to delete.
     */
    limit?: number
  }

  /**
   * t_propietario.t_factura
   */
  export type t_propietario$t_facturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_factura
     */
    select?: t_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_factura
     */
    omit?: t_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_facturaInclude<ExtArgs> | null
    where?: t_facturaWhereInput
  }

  /**
   * t_propietario.t_refacciones
   */
  export type t_propietario$t_refaccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    where?: t_refaccionesWhereInput
  }

  /**
   * t_propietario without action
   */
  export type t_propietarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_propietario
     */
    select?: t_propietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_propietario
     */
    omit?: t_propietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_propietarioInclude<ExtArgs> | null
  }


  /**
   * Model t_refacciones
   */

  export type AggregateT_refacciones = {
    _count: T_refaccionesCountAggregateOutputType | null
    _avg: T_refaccionesAvgAggregateOutputType | null
    _sum: T_refaccionesSumAggregateOutputType | null
    _min: T_refaccionesMinAggregateOutputType | null
    _max: T_refaccionesMaxAggregateOutputType | null
  }

  export type T_refaccionesAvgAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_refaccionesSumAggregateOutputType = {
    id_dispositivos: number | null
    num_sap: number | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_refaccionesMinAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_refaccionesMaxAggregateOutputType = {
    id_dispositivos: number | null
    dispositivo: string | null
    descripcion_sistemas: string | null
    marca: string | null
    modelo: string | null
    num_serie: string | null
    id_visual: string | null
    num_sap: number | null
    status: string | null
    extras: string | null
    id_area: number | null
    num_control: number | null
    codigo_propietario: number | null
    codigo_ubicacion: number | null
    id_factura: number | null
  }

  export type T_refaccionesCountAggregateOutputType = {
    id_dispositivos: number
    dispositivo: number
    descripcion_sistemas: number
    marca: number
    modelo: number
    num_serie: number
    id_visual: number
    num_sap: number
    status: number
    extras: number
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _all: number
  }


  export type T_refaccionesAvgAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_refaccionesSumAggregateInputType = {
    id_dispositivos?: true
    num_sap?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_refaccionesMinAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_refaccionesMaxAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
  }

  export type T_refaccionesCountAggregateInputType = {
    id_dispositivos?: true
    dispositivo?: true
    descripcion_sistemas?: true
    marca?: true
    modelo?: true
    num_serie?: true
    id_visual?: true
    num_sap?: true
    status?: true
    extras?: true
    id_area?: true
    num_control?: true
    codigo_propietario?: true
    codigo_ubicacion?: true
    id_factura?: true
    _all?: true
  }

  export type T_refaccionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_refacciones to aggregate.
     */
    where?: t_refaccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_refacciones to fetch.
     */
    orderBy?: t_refaccionesOrderByWithRelationInput | t_refaccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_refaccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_refacciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_refacciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_refacciones
    **/
    _count?: true | T_refaccionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_refaccionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_refaccionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_refaccionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_refaccionesMaxAggregateInputType
  }

  export type GetT_refaccionesAggregateType<T extends T_refaccionesAggregateArgs> = {
        [P in keyof T & keyof AggregateT_refacciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_refacciones[P]>
      : GetScalarType<T[P], AggregateT_refacciones[P]>
  }




  export type t_refaccionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_refaccionesWhereInput
    orderBy?: t_refaccionesOrderByWithAggregationInput | t_refaccionesOrderByWithAggregationInput[]
    by: T_refaccionesScalarFieldEnum[] | T_refaccionesScalarFieldEnum
    having?: t_refaccionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_refaccionesCountAggregateInputType | true
    _avg?: T_refaccionesAvgAggregateInputType
    _sum?: T_refaccionesSumAggregateInputType
    _min?: T_refaccionesMinAggregateInputType
    _max?: T_refaccionesMaxAggregateInputType
  }

  export type T_refaccionesGroupByOutputType = {
    id_dispositivos: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
    _count: T_refaccionesCountAggregateOutputType | null
    _avg: T_refaccionesAvgAggregateOutputType | null
    _sum: T_refaccionesSumAggregateOutputType | null
    _min: T_refaccionesMinAggregateOutputType | null
    _max: T_refaccionesMaxAggregateOutputType | null
  }

  type GetT_refaccionesGroupByPayload<T extends t_refaccionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_refaccionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_refaccionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_refaccionesGroupByOutputType[P]>
            : GetScalarType<T[P], T_refaccionesGroupByOutputType[P]>
        }
      >
    >


  export type t_refaccionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
    t_propietario?: boolean | t_propietarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_refacciones"]>



  export type t_refaccionesSelectScalar = {
    id_dispositivos?: boolean
    dispositivo?: boolean
    descripcion_sistemas?: boolean
    marca?: boolean
    modelo?: boolean
    num_serie?: boolean
    id_visual?: boolean
    num_sap?: boolean
    status?: boolean
    extras?: boolean
    id_area?: boolean
    num_control?: boolean
    codigo_propietario?: boolean
    codigo_ubicacion?: boolean
    id_factura?: boolean
  }

  export type t_refaccionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dispositivos" | "dispositivo" | "descripcion_sistemas" | "marca" | "modelo" | "num_serie" | "id_visual" | "num_sap" | "status" | "extras" | "id_area" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura", ExtArgs["result"]["t_refacciones"]>
  export type t_refaccionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    t_propietario?: boolean | t_propietarioDefaultArgs<ExtArgs>
  }

  export type $t_refaccionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_refacciones"
    objects: {
      t_propietario: Prisma.$t_propietarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_dispositivos: number
      dispositivo: string
      descripcion_sistemas: string
      marca: string
      modelo: string
      num_serie: string
      id_visual: string
      num_sap: number
      status: string
      extras: string
      id_area: number
      num_control: number
      codigo_propietario: number
      codigo_ubicacion: number
      id_factura: number
    }, ExtArgs["result"]["t_refacciones"]>
    composites: {}
  }

  type t_refaccionesGetPayload<S extends boolean | null | undefined | t_refaccionesDefaultArgs> = $Result.GetResult<Prisma.$t_refaccionesPayload, S>

  type t_refaccionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_refaccionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_refaccionesCountAggregateInputType | true
    }

  export interface t_refaccionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_refacciones'], meta: { name: 't_refacciones' } }
    /**
     * Find zero or one T_refacciones that matches the filter.
     * @param {t_refaccionesFindUniqueArgs} args - Arguments to find a T_refacciones
     * @example
     * // Get one T_refacciones
     * const t_refacciones = await prisma.t_refacciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_refaccionesFindUniqueArgs>(args: SelectSubset<T, t_refaccionesFindUniqueArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_refacciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_refaccionesFindUniqueOrThrowArgs} args - Arguments to find a T_refacciones
     * @example
     * // Get one T_refacciones
     * const t_refacciones = await prisma.t_refacciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_refaccionesFindUniqueOrThrowArgs>(args: SelectSubset<T, t_refaccionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_refacciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_refaccionesFindFirstArgs} args - Arguments to find a T_refacciones
     * @example
     * // Get one T_refacciones
     * const t_refacciones = await prisma.t_refacciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_refaccionesFindFirstArgs>(args?: SelectSubset<T, t_refaccionesFindFirstArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_refacciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_refaccionesFindFirstOrThrowArgs} args - Arguments to find a T_refacciones
     * @example
     * // Get one T_refacciones
     * const t_refacciones = await prisma.t_refacciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_refaccionesFindFirstOrThrowArgs>(args?: SelectSubset<T, t_refaccionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_refacciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_refaccionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_refacciones
     * const t_refacciones = await prisma.t_refacciones.findMany()
     * 
     * // Get first 10 T_refacciones
     * const t_refacciones = await prisma.t_refacciones.findMany({ take: 10 })
     * 
     * // Only select the `id_dispositivos`
     * const t_refaccionesWithId_dispositivosOnly = await prisma.t_refacciones.findMany({ select: { id_dispositivos: true } })
     * 
     */
    findMany<T extends t_refaccionesFindManyArgs>(args?: SelectSubset<T, t_refaccionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_refacciones.
     * @param {t_refaccionesCreateArgs} args - Arguments to create a T_refacciones.
     * @example
     * // Create one T_refacciones
     * const T_refacciones = await prisma.t_refacciones.create({
     *   data: {
     *     // ... data to create a T_refacciones
     *   }
     * })
     * 
     */
    create<T extends t_refaccionesCreateArgs>(args: SelectSubset<T, t_refaccionesCreateArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_refacciones.
     * @param {t_refaccionesCreateManyArgs} args - Arguments to create many T_refacciones.
     * @example
     * // Create many T_refacciones
     * const t_refacciones = await prisma.t_refacciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_refaccionesCreateManyArgs>(args?: SelectSubset<T, t_refaccionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_refacciones.
     * @param {t_refaccionesDeleteArgs} args - Arguments to delete one T_refacciones.
     * @example
     * // Delete one T_refacciones
     * const T_refacciones = await prisma.t_refacciones.delete({
     *   where: {
     *     // ... filter to delete one T_refacciones
     *   }
     * })
     * 
     */
    delete<T extends t_refaccionesDeleteArgs>(args: SelectSubset<T, t_refaccionesDeleteArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_refacciones.
     * @param {t_refaccionesUpdateArgs} args - Arguments to update one T_refacciones.
     * @example
     * // Update one T_refacciones
     * const t_refacciones = await prisma.t_refacciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_refaccionesUpdateArgs>(args: SelectSubset<T, t_refaccionesUpdateArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_refacciones.
     * @param {t_refaccionesDeleteManyArgs} args - Arguments to filter T_refacciones to delete.
     * @example
     * // Delete a few T_refacciones
     * const { count } = await prisma.t_refacciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_refaccionesDeleteManyArgs>(args?: SelectSubset<T, t_refaccionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_refacciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_refaccionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_refacciones
     * const t_refacciones = await prisma.t_refacciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_refaccionesUpdateManyArgs>(args: SelectSubset<T, t_refaccionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_refacciones.
     * @param {t_refaccionesUpsertArgs} args - Arguments to update or create a T_refacciones.
     * @example
     * // Update or create a T_refacciones
     * const t_refacciones = await prisma.t_refacciones.upsert({
     *   create: {
     *     // ... data to create a T_refacciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_refacciones we want to update
     *   }
     * })
     */
    upsert<T extends t_refaccionesUpsertArgs>(args: SelectSubset<T, t_refaccionesUpsertArgs<ExtArgs>>): Prisma__t_refaccionesClient<$Result.GetResult<Prisma.$t_refaccionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_refacciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_refaccionesCountArgs} args - Arguments to filter T_refacciones to count.
     * @example
     * // Count the number of T_refacciones
     * const count = await prisma.t_refacciones.count({
     *   where: {
     *     // ... the filter for the T_refacciones we want to count
     *   }
     * })
    **/
    count<T extends t_refaccionesCountArgs>(
      args?: Subset<T, t_refaccionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_refaccionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_refacciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_refaccionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_refaccionesAggregateArgs>(args: Subset<T, T_refaccionesAggregateArgs>): Prisma.PrismaPromise<GetT_refaccionesAggregateType<T>>

    /**
     * Group by T_refacciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_refaccionesGroupByArgs} args - Group by arguments.
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
      T extends t_refaccionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_refaccionesGroupByArgs['orderBy'] }
        : { orderBy?: t_refaccionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_refaccionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_refaccionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_refacciones model
   */
  readonly fields: t_refaccionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_refacciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_refaccionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    t_propietario<T extends t_propietarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, t_propietarioDefaultArgs<ExtArgs>>): Prisma__t_propietarioClient<$Result.GetResult<Prisma.$t_propietarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the t_refacciones model
   */
  interface t_refaccionesFieldRefs {
    readonly id_dispositivos: FieldRef<"t_refacciones", 'Int'>
    readonly dispositivo: FieldRef<"t_refacciones", 'String'>
    readonly descripcion_sistemas: FieldRef<"t_refacciones", 'String'>
    readonly marca: FieldRef<"t_refacciones", 'String'>
    readonly modelo: FieldRef<"t_refacciones", 'String'>
    readonly num_serie: FieldRef<"t_refacciones", 'String'>
    readonly id_visual: FieldRef<"t_refacciones", 'String'>
    readonly num_sap: FieldRef<"t_refacciones", 'Int'>
    readonly status: FieldRef<"t_refacciones", 'String'>
    readonly extras: FieldRef<"t_refacciones", 'String'>
    readonly id_area: FieldRef<"t_refacciones", 'Int'>
    readonly num_control: FieldRef<"t_refacciones", 'Int'>
    readonly codigo_propietario: FieldRef<"t_refacciones", 'Int'>
    readonly codigo_ubicacion: FieldRef<"t_refacciones", 'Int'>
    readonly id_factura: FieldRef<"t_refacciones", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * t_refacciones findUnique
   */
  export type t_refaccionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * Filter, which t_refacciones to fetch.
     */
    where: t_refaccionesWhereUniqueInput
  }

  /**
   * t_refacciones findUniqueOrThrow
   */
  export type t_refaccionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * Filter, which t_refacciones to fetch.
     */
    where: t_refaccionesWhereUniqueInput
  }

  /**
   * t_refacciones findFirst
   */
  export type t_refaccionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * Filter, which t_refacciones to fetch.
     */
    where?: t_refaccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_refacciones to fetch.
     */
    orderBy?: t_refaccionesOrderByWithRelationInput | t_refaccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_refacciones.
     */
    cursor?: t_refaccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_refacciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_refacciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_refacciones.
     */
    distinct?: T_refaccionesScalarFieldEnum | T_refaccionesScalarFieldEnum[]
  }

  /**
   * t_refacciones findFirstOrThrow
   */
  export type t_refaccionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * Filter, which t_refacciones to fetch.
     */
    where?: t_refaccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_refacciones to fetch.
     */
    orderBy?: t_refaccionesOrderByWithRelationInput | t_refaccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_refacciones.
     */
    cursor?: t_refaccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_refacciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_refacciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_refacciones.
     */
    distinct?: T_refaccionesScalarFieldEnum | T_refaccionesScalarFieldEnum[]
  }

  /**
   * t_refacciones findMany
   */
  export type t_refaccionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * Filter, which t_refacciones to fetch.
     */
    where?: t_refaccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_refacciones to fetch.
     */
    orderBy?: t_refaccionesOrderByWithRelationInput | t_refaccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_refacciones.
     */
    cursor?: t_refaccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_refacciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_refacciones.
     */
    skip?: number
    distinct?: T_refaccionesScalarFieldEnum | T_refaccionesScalarFieldEnum[]
  }

  /**
   * t_refacciones create
   */
  export type t_refaccionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * The data needed to create a t_refacciones.
     */
    data: XOR<t_refaccionesCreateInput, t_refaccionesUncheckedCreateInput>
  }

  /**
   * t_refacciones createMany
   */
  export type t_refaccionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_refacciones.
     */
    data: t_refaccionesCreateManyInput | t_refaccionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_refacciones update
   */
  export type t_refaccionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * The data needed to update a t_refacciones.
     */
    data: XOR<t_refaccionesUpdateInput, t_refaccionesUncheckedUpdateInput>
    /**
     * Choose, which t_refacciones to update.
     */
    where: t_refaccionesWhereUniqueInput
  }

  /**
   * t_refacciones updateMany
   */
  export type t_refaccionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_refacciones.
     */
    data: XOR<t_refaccionesUpdateManyMutationInput, t_refaccionesUncheckedUpdateManyInput>
    /**
     * Filter which t_refacciones to update
     */
    where?: t_refaccionesWhereInput
    /**
     * Limit how many t_refacciones to update.
     */
    limit?: number
  }

  /**
   * t_refacciones upsert
   */
  export type t_refaccionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * The filter to search for the t_refacciones to update in case it exists.
     */
    where: t_refaccionesWhereUniqueInput
    /**
     * In case the t_refacciones found by the `where` argument doesn't exist, create a new t_refacciones with this data.
     */
    create: XOR<t_refaccionesCreateInput, t_refaccionesUncheckedCreateInput>
    /**
     * In case the t_refacciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_refaccionesUpdateInput, t_refaccionesUncheckedUpdateInput>
  }

  /**
   * t_refacciones delete
   */
  export type t_refaccionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
    /**
     * Filter which t_refacciones to delete.
     */
    where: t_refaccionesWhereUniqueInput
  }

  /**
   * t_refacciones deleteMany
   */
  export type t_refaccionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_refacciones to delete
     */
    where?: t_refaccionesWhereInput
    /**
     * Limit how many t_refacciones to delete.
     */
    limit?: number
  }

  /**
   * t_refacciones without action
   */
  export type t_refaccionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_refacciones
     */
    select?: t_refaccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_refacciones
     */
    omit?: t_refaccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: t_refaccionesInclude<ExtArgs> | null
  }


  /**
   * Model t_roles
   */

  export type AggregateT_roles = {
    _count: T_rolesCountAggregateOutputType | null
    _avg: T_rolesAvgAggregateOutputType | null
    _sum: T_rolesSumAggregateOutputType | null
    _min: T_rolesMinAggregateOutputType | null
    _max: T_rolesMaxAggregateOutputType | null
  }

  export type T_rolesAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type T_rolesSumAggregateOutputType = {
    id_rol: number | null
  }

  export type T_rolesMinAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
  }

  export type T_rolesMaxAggregateOutputType = {
    id_rol: number | null
    nombre: string | null
  }

  export type T_rolesCountAggregateOutputType = {
    id_rol: number
    nombre: number
    _all: number
  }


  export type T_rolesAvgAggregateInputType = {
    id_rol?: true
  }

  export type T_rolesSumAggregateInputType = {
    id_rol?: true
  }

  export type T_rolesMinAggregateInputType = {
    id_rol?: true
    nombre?: true
  }

  export type T_rolesMaxAggregateInputType = {
    id_rol?: true
    nombre?: true
  }

  export type T_rolesCountAggregateInputType = {
    id_rol?: true
    nombre?: true
    _all?: true
  }

  export type T_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_roles to aggregate.
     */
    where?: t_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_roles to fetch.
     */
    orderBy?: t_rolesOrderByWithRelationInput | t_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_roles
    **/
    _count?: true | T_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_rolesMaxAggregateInputType
  }

  export type GetT_rolesAggregateType<T extends T_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateT_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_roles[P]>
      : GetScalarType<T[P], AggregateT_roles[P]>
  }




  export type t_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_rolesWhereInput
    orderBy?: t_rolesOrderByWithAggregationInput | t_rolesOrderByWithAggregationInput[]
    by: T_rolesScalarFieldEnum[] | T_rolesScalarFieldEnum
    having?: t_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_rolesCountAggregateInputType | true
    _avg?: T_rolesAvgAggregateInputType
    _sum?: T_rolesSumAggregateInputType
    _min?: T_rolesMinAggregateInputType
    _max?: T_rolesMaxAggregateInputType
  }

  export type T_rolesGroupByOutputType = {
    id_rol: number
    nombre: string
    _count: T_rolesCountAggregateOutputType | null
    _avg: T_rolesAvgAggregateOutputType | null
    _sum: T_rolesSumAggregateOutputType | null
    _min: T_rolesMinAggregateOutputType | null
    _max: T_rolesMaxAggregateOutputType | null
  }

  type GetT_rolesGroupByPayload<T extends t_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], T_rolesGroupByOutputType[P]>
        }
      >
    >


  export type t_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["t_roles"]>



  export type t_rolesSelectScalar = {
    id_rol?: boolean
    nombre?: boolean
  }

  export type t_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "nombre", ExtArgs["result"]["t_roles"]>

  export type $t_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_roles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      nombre: string
    }, ExtArgs["result"]["t_roles"]>
    composites: {}
  }

  type t_rolesGetPayload<S extends boolean | null | undefined | t_rolesDefaultArgs> = $Result.GetResult<Prisma.$t_rolesPayload, S>

  type t_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_rolesCountAggregateInputType | true
    }

  export interface t_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_roles'], meta: { name: 't_roles' } }
    /**
     * Find zero or one T_roles that matches the filter.
     * @param {t_rolesFindUniqueArgs} args - Arguments to find a T_roles
     * @example
     * // Get one T_roles
     * const t_roles = await prisma.t_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_rolesFindUniqueArgs>(args: SelectSubset<T, t_rolesFindUniqueArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_rolesFindUniqueOrThrowArgs} args - Arguments to find a T_roles
     * @example
     * // Get one T_roles
     * const t_roles = await prisma.t_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, t_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_rolesFindFirstArgs} args - Arguments to find a T_roles
     * @example
     * // Get one T_roles
     * const t_roles = await prisma.t_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_rolesFindFirstArgs>(args?: SelectSubset<T, t_rolesFindFirstArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_rolesFindFirstOrThrowArgs} args - Arguments to find a T_roles
     * @example
     * // Get one T_roles
     * const t_roles = await prisma.t_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, t_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_roles
     * const t_roles = await prisma.t_roles.findMany()
     * 
     * // Get first 10 T_roles
     * const t_roles = await prisma.t_roles.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const t_rolesWithId_rolOnly = await prisma.t_roles.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends t_rolesFindManyArgs>(args?: SelectSubset<T, t_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_roles.
     * @param {t_rolesCreateArgs} args - Arguments to create a T_roles.
     * @example
     * // Create one T_roles
     * const T_roles = await prisma.t_roles.create({
     *   data: {
     *     // ... data to create a T_roles
     *   }
     * })
     * 
     */
    create<T extends t_rolesCreateArgs>(args: SelectSubset<T, t_rolesCreateArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_roles.
     * @param {t_rolesCreateManyArgs} args - Arguments to create many T_roles.
     * @example
     * // Create many T_roles
     * const t_roles = await prisma.t_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_rolesCreateManyArgs>(args?: SelectSubset<T, t_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_roles.
     * @param {t_rolesDeleteArgs} args - Arguments to delete one T_roles.
     * @example
     * // Delete one T_roles
     * const T_roles = await prisma.t_roles.delete({
     *   where: {
     *     // ... filter to delete one T_roles
     *   }
     * })
     * 
     */
    delete<T extends t_rolesDeleteArgs>(args: SelectSubset<T, t_rolesDeleteArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_roles.
     * @param {t_rolesUpdateArgs} args - Arguments to update one T_roles.
     * @example
     * // Update one T_roles
     * const t_roles = await prisma.t_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_rolesUpdateArgs>(args: SelectSubset<T, t_rolesUpdateArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_roles.
     * @param {t_rolesDeleteManyArgs} args - Arguments to filter T_roles to delete.
     * @example
     * // Delete a few T_roles
     * const { count } = await prisma.t_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_rolesDeleteManyArgs>(args?: SelectSubset<T, t_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_roles
     * const t_roles = await prisma.t_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_rolesUpdateManyArgs>(args: SelectSubset<T, t_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_roles.
     * @param {t_rolesUpsertArgs} args - Arguments to update or create a T_roles.
     * @example
     * // Update or create a T_roles
     * const t_roles = await prisma.t_roles.upsert({
     *   create: {
     *     // ... data to create a T_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_roles we want to update
     *   }
     * })
     */
    upsert<T extends t_rolesUpsertArgs>(args: SelectSubset<T, t_rolesUpsertArgs<ExtArgs>>): Prisma__t_rolesClient<$Result.GetResult<Prisma.$t_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_rolesCountArgs} args - Arguments to filter T_roles to count.
     * @example
     * // Count the number of T_roles
     * const count = await prisma.t_roles.count({
     *   where: {
     *     // ... the filter for the T_roles we want to count
     *   }
     * })
    **/
    count<T extends t_rolesCountArgs>(
      args?: Subset<T, t_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_rolesAggregateArgs>(args: Subset<T, T_rolesAggregateArgs>): Prisma.PrismaPromise<GetT_rolesAggregateType<T>>

    /**
     * Group by T_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_rolesGroupByArgs} args - Group by arguments.
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
      T extends t_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_rolesGroupByArgs['orderBy'] }
        : { orderBy?: t_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_roles model
   */
  readonly fields: t_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_roles model
   */
  interface t_rolesFieldRefs {
    readonly id_rol: FieldRef<"t_roles", 'Int'>
    readonly nombre: FieldRef<"t_roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * t_roles findUnique
   */
  export type t_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * Filter, which t_roles to fetch.
     */
    where: t_rolesWhereUniqueInput
  }

  /**
   * t_roles findUniqueOrThrow
   */
  export type t_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * Filter, which t_roles to fetch.
     */
    where: t_rolesWhereUniqueInput
  }

  /**
   * t_roles findFirst
   */
  export type t_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * Filter, which t_roles to fetch.
     */
    where?: t_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_roles to fetch.
     */
    orderBy?: t_rolesOrderByWithRelationInput | t_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_roles.
     */
    cursor?: t_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_roles.
     */
    distinct?: T_rolesScalarFieldEnum | T_rolesScalarFieldEnum[]
  }

  /**
   * t_roles findFirstOrThrow
   */
  export type t_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * Filter, which t_roles to fetch.
     */
    where?: t_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_roles to fetch.
     */
    orderBy?: t_rolesOrderByWithRelationInput | t_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_roles.
     */
    cursor?: t_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_roles.
     */
    distinct?: T_rolesScalarFieldEnum | T_rolesScalarFieldEnum[]
  }

  /**
   * t_roles findMany
   */
  export type t_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * Filter, which t_roles to fetch.
     */
    where?: t_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_roles to fetch.
     */
    orderBy?: t_rolesOrderByWithRelationInput | t_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_roles.
     */
    cursor?: t_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_roles.
     */
    skip?: number
    distinct?: T_rolesScalarFieldEnum | T_rolesScalarFieldEnum[]
  }

  /**
   * t_roles create
   */
  export type t_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * The data needed to create a t_roles.
     */
    data: XOR<t_rolesCreateInput, t_rolesUncheckedCreateInput>
  }

  /**
   * t_roles createMany
   */
  export type t_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_roles.
     */
    data: t_rolesCreateManyInput | t_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_roles update
   */
  export type t_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * The data needed to update a t_roles.
     */
    data: XOR<t_rolesUpdateInput, t_rolesUncheckedUpdateInput>
    /**
     * Choose, which t_roles to update.
     */
    where: t_rolesWhereUniqueInput
  }

  /**
   * t_roles updateMany
   */
  export type t_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_roles.
     */
    data: XOR<t_rolesUpdateManyMutationInput, t_rolesUncheckedUpdateManyInput>
    /**
     * Filter which t_roles to update
     */
    where?: t_rolesWhereInput
    /**
     * Limit how many t_roles to update.
     */
    limit?: number
  }

  /**
   * t_roles upsert
   */
  export type t_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * The filter to search for the t_roles to update in case it exists.
     */
    where: t_rolesWhereUniqueInput
    /**
     * In case the t_roles found by the `where` argument doesn't exist, create a new t_roles with this data.
     */
    create: XOR<t_rolesCreateInput, t_rolesUncheckedCreateInput>
    /**
     * In case the t_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_rolesUpdateInput, t_rolesUncheckedUpdateInput>
  }

  /**
   * t_roles delete
   */
  export type t_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
    /**
     * Filter which t_roles to delete.
     */
    where: t_rolesWhereUniqueInput
  }

  /**
   * t_roles deleteMany
   */
  export type t_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_roles to delete
     */
    where?: t_rolesWhereInput
    /**
     * Limit how many t_roles to delete.
     */
    limit?: number
  }

  /**
   * t_roles without action
   */
  export type t_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_roles
     */
    select?: t_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_roles
     */
    omit?: t_rolesOmit<ExtArgs> | null
  }


  /**
   * Model t_ubicacion_fisica
   */

  export type AggregateT_ubicacion_fisica = {
    _count: T_ubicacion_fisicaCountAggregateOutputType | null
    _avg: T_ubicacion_fisicaAvgAggregateOutputType | null
    _sum: T_ubicacion_fisicaSumAggregateOutputType | null
    _min: T_ubicacion_fisicaMinAggregateOutputType | null
    _max: T_ubicacion_fisicaMaxAggregateOutputType | null
  }

  export type T_ubicacion_fisicaAvgAggregateOutputType = {
    id_ubicacion: number | null
    codigo_ubicacion: number | null
  }

  export type T_ubicacion_fisicaSumAggregateOutputType = {
    id_ubicacion: number | null
    codigo_ubicacion: number | null
  }

  export type T_ubicacion_fisicaMinAggregateOutputType = {
    id_ubicacion: number | null
    codigo_ubicacion: number | null
    descripcion: string | null
  }

  export type T_ubicacion_fisicaMaxAggregateOutputType = {
    id_ubicacion: number | null
    codigo_ubicacion: number | null
    descripcion: string | null
  }

  export type T_ubicacion_fisicaCountAggregateOutputType = {
    id_ubicacion: number
    codigo_ubicacion: number
    descripcion: number
    _all: number
  }


  export type T_ubicacion_fisicaAvgAggregateInputType = {
    id_ubicacion?: true
    codigo_ubicacion?: true
  }

  export type T_ubicacion_fisicaSumAggregateInputType = {
    id_ubicacion?: true
    codigo_ubicacion?: true
  }

  export type T_ubicacion_fisicaMinAggregateInputType = {
    id_ubicacion?: true
    codigo_ubicacion?: true
    descripcion?: true
  }

  export type T_ubicacion_fisicaMaxAggregateInputType = {
    id_ubicacion?: true
    codigo_ubicacion?: true
    descripcion?: true
  }

  export type T_ubicacion_fisicaCountAggregateInputType = {
    id_ubicacion?: true
    codigo_ubicacion?: true
    descripcion?: true
    _all?: true
  }

  export type T_ubicacion_fisicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_ubicacion_fisica to aggregate.
     */
    where?: t_ubicacion_fisicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ubicacion_fisicas to fetch.
     */
    orderBy?: t_ubicacion_fisicaOrderByWithRelationInput | t_ubicacion_fisicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_ubicacion_fisicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ubicacion_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ubicacion_fisicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_ubicacion_fisicas
    **/
    _count?: true | T_ubicacion_fisicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_ubicacion_fisicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_ubicacion_fisicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_ubicacion_fisicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_ubicacion_fisicaMaxAggregateInputType
  }

  export type GetT_ubicacion_fisicaAggregateType<T extends T_ubicacion_fisicaAggregateArgs> = {
        [P in keyof T & keyof AggregateT_ubicacion_fisica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_ubicacion_fisica[P]>
      : GetScalarType<T[P], AggregateT_ubicacion_fisica[P]>
  }




  export type t_ubicacion_fisicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_ubicacion_fisicaWhereInput
    orderBy?: t_ubicacion_fisicaOrderByWithAggregationInput | t_ubicacion_fisicaOrderByWithAggregationInput[]
    by: T_ubicacion_fisicaScalarFieldEnum[] | T_ubicacion_fisicaScalarFieldEnum
    having?: t_ubicacion_fisicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_ubicacion_fisicaCountAggregateInputType | true
    _avg?: T_ubicacion_fisicaAvgAggregateInputType
    _sum?: T_ubicacion_fisicaSumAggregateInputType
    _min?: T_ubicacion_fisicaMinAggregateInputType
    _max?: T_ubicacion_fisicaMaxAggregateInputType
  }

  export type T_ubicacion_fisicaGroupByOutputType = {
    id_ubicacion: number
    codigo_ubicacion: number
    descripcion: string
    _count: T_ubicacion_fisicaCountAggregateOutputType | null
    _avg: T_ubicacion_fisicaAvgAggregateOutputType | null
    _sum: T_ubicacion_fisicaSumAggregateOutputType | null
    _min: T_ubicacion_fisicaMinAggregateOutputType | null
    _max: T_ubicacion_fisicaMaxAggregateOutputType | null
  }

  type GetT_ubicacion_fisicaGroupByPayload<T extends t_ubicacion_fisicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_ubicacion_fisicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_ubicacion_fisicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_ubicacion_fisicaGroupByOutputType[P]>
            : GetScalarType<T[P], T_ubicacion_fisicaGroupByOutputType[P]>
        }
      >
    >


  export type t_ubicacion_fisicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ubicacion?: boolean
    codigo_ubicacion?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["t_ubicacion_fisica"]>



  export type t_ubicacion_fisicaSelectScalar = {
    id_ubicacion?: boolean
    codigo_ubicacion?: boolean
    descripcion?: boolean
  }

  export type t_ubicacion_fisicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ubicacion" | "codigo_ubicacion" | "descripcion", ExtArgs["result"]["t_ubicacion_fisica"]>

  export type $t_ubicacion_fisicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_ubicacion_fisica"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_ubicacion: number
      codigo_ubicacion: number
      descripcion: string
    }, ExtArgs["result"]["t_ubicacion_fisica"]>
    composites: {}
  }

  type t_ubicacion_fisicaGetPayload<S extends boolean | null | undefined | t_ubicacion_fisicaDefaultArgs> = $Result.GetResult<Prisma.$t_ubicacion_fisicaPayload, S>

  type t_ubicacion_fisicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_ubicacion_fisicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_ubicacion_fisicaCountAggregateInputType | true
    }

  export interface t_ubicacion_fisicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_ubicacion_fisica'], meta: { name: 't_ubicacion_fisica' } }
    /**
     * Find zero or one T_ubicacion_fisica that matches the filter.
     * @param {t_ubicacion_fisicaFindUniqueArgs} args - Arguments to find a T_ubicacion_fisica
     * @example
     * // Get one T_ubicacion_fisica
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_ubicacion_fisicaFindUniqueArgs>(args: SelectSubset<T, t_ubicacion_fisicaFindUniqueArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_ubicacion_fisica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_ubicacion_fisicaFindUniqueOrThrowArgs} args - Arguments to find a T_ubicacion_fisica
     * @example
     * // Get one T_ubicacion_fisica
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_ubicacion_fisicaFindUniqueOrThrowArgs>(args: SelectSubset<T, t_ubicacion_fisicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_ubicacion_fisica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ubicacion_fisicaFindFirstArgs} args - Arguments to find a T_ubicacion_fisica
     * @example
     * // Get one T_ubicacion_fisica
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_ubicacion_fisicaFindFirstArgs>(args?: SelectSubset<T, t_ubicacion_fisicaFindFirstArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_ubicacion_fisica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ubicacion_fisicaFindFirstOrThrowArgs} args - Arguments to find a T_ubicacion_fisica
     * @example
     * // Get one T_ubicacion_fisica
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_ubicacion_fisicaFindFirstOrThrowArgs>(args?: SelectSubset<T, t_ubicacion_fisicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_ubicacion_fisicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ubicacion_fisicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_ubicacion_fisicas
     * const t_ubicacion_fisicas = await prisma.t_ubicacion_fisica.findMany()
     * 
     * // Get first 10 T_ubicacion_fisicas
     * const t_ubicacion_fisicas = await prisma.t_ubicacion_fisica.findMany({ take: 10 })
     * 
     * // Only select the `id_ubicacion`
     * const t_ubicacion_fisicaWithId_ubicacionOnly = await prisma.t_ubicacion_fisica.findMany({ select: { id_ubicacion: true } })
     * 
     */
    findMany<T extends t_ubicacion_fisicaFindManyArgs>(args?: SelectSubset<T, t_ubicacion_fisicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_ubicacion_fisica.
     * @param {t_ubicacion_fisicaCreateArgs} args - Arguments to create a T_ubicacion_fisica.
     * @example
     * // Create one T_ubicacion_fisica
     * const T_ubicacion_fisica = await prisma.t_ubicacion_fisica.create({
     *   data: {
     *     // ... data to create a T_ubicacion_fisica
     *   }
     * })
     * 
     */
    create<T extends t_ubicacion_fisicaCreateArgs>(args: SelectSubset<T, t_ubicacion_fisicaCreateArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_ubicacion_fisicas.
     * @param {t_ubicacion_fisicaCreateManyArgs} args - Arguments to create many T_ubicacion_fisicas.
     * @example
     * // Create many T_ubicacion_fisicas
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_ubicacion_fisicaCreateManyArgs>(args?: SelectSubset<T, t_ubicacion_fisicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_ubicacion_fisica.
     * @param {t_ubicacion_fisicaDeleteArgs} args - Arguments to delete one T_ubicacion_fisica.
     * @example
     * // Delete one T_ubicacion_fisica
     * const T_ubicacion_fisica = await prisma.t_ubicacion_fisica.delete({
     *   where: {
     *     // ... filter to delete one T_ubicacion_fisica
     *   }
     * })
     * 
     */
    delete<T extends t_ubicacion_fisicaDeleteArgs>(args: SelectSubset<T, t_ubicacion_fisicaDeleteArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_ubicacion_fisica.
     * @param {t_ubicacion_fisicaUpdateArgs} args - Arguments to update one T_ubicacion_fisica.
     * @example
     * // Update one T_ubicacion_fisica
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_ubicacion_fisicaUpdateArgs>(args: SelectSubset<T, t_ubicacion_fisicaUpdateArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_ubicacion_fisicas.
     * @param {t_ubicacion_fisicaDeleteManyArgs} args - Arguments to filter T_ubicacion_fisicas to delete.
     * @example
     * // Delete a few T_ubicacion_fisicas
     * const { count } = await prisma.t_ubicacion_fisica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_ubicacion_fisicaDeleteManyArgs>(args?: SelectSubset<T, t_ubicacion_fisicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_ubicacion_fisicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ubicacion_fisicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_ubicacion_fisicas
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_ubicacion_fisicaUpdateManyArgs>(args: SelectSubset<T, t_ubicacion_fisicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_ubicacion_fisica.
     * @param {t_ubicacion_fisicaUpsertArgs} args - Arguments to update or create a T_ubicacion_fisica.
     * @example
     * // Update or create a T_ubicacion_fisica
     * const t_ubicacion_fisica = await prisma.t_ubicacion_fisica.upsert({
     *   create: {
     *     // ... data to create a T_ubicacion_fisica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_ubicacion_fisica we want to update
     *   }
     * })
     */
    upsert<T extends t_ubicacion_fisicaUpsertArgs>(args: SelectSubset<T, t_ubicacion_fisicaUpsertArgs<ExtArgs>>): Prisma__t_ubicacion_fisicaClient<$Result.GetResult<Prisma.$t_ubicacion_fisicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_ubicacion_fisicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ubicacion_fisicaCountArgs} args - Arguments to filter T_ubicacion_fisicas to count.
     * @example
     * // Count the number of T_ubicacion_fisicas
     * const count = await prisma.t_ubicacion_fisica.count({
     *   where: {
     *     // ... the filter for the T_ubicacion_fisicas we want to count
     *   }
     * })
    **/
    count<T extends t_ubicacion_fisicaCountArgs>(
      args?: Subset<T, t_ubicacion_fisicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_ubicacion_fisicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_ubicacion_fisica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ubicacion_fisicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_ubicacion_fisicaAggregateArgs>(args: Subset<T, T_ubicacion_fisicaAggregateArgs>): Prisma.PrismaPromise<GetT_ubicacion_fisicaAggregateType<T>>

    /**
     * Group by T_ubicacion_fisica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_ubicacion_fisicaGroupByArgs} args - Group by arguments.
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
      T extends t_ubicacion_fisicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_ubicacion_fisicaGroupByArgs['orderBy'] }
        : { orderBy?: t_ubicacion_fisicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_ubicacion_fisicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_ubicacion_fisicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_ubicacion_fisica model
   */
  readonly fields: t_ubicacion_fisicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_ubicacion_fisica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_ubicacion_fisicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_ubicacion_fisica model
   */
  interface t_ubicacion_fisicaFieldRefs {
    readonly id_ubicacion: FieldRef<"t_ubicacion_fisica", 'Int'>
    readonly codigo_ubicacion: FieldRef<"t_ubicacion_fisica", 'Int'>
    readonly descripcion: FieldRef<"t_ubicacion_fisica", 'String'>
  }
    

  // Custom InputTypes
  /**
   * t_ubicacion_fisica findUnique
   */
  export type t_ubicacion_fisicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * Filter, which t_ubicacion_fisica to fetch.
     */
    where: t_ubicacion_fisicaWhereUniqueInput
  }

  /**
   * t_ubicacion_fisica findUniqueOrThrow
   */
  export type t_ubicacion_fisicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * Filter, which t_ubicacion_fisica to fetch.
     */
    where: t_ubicacion_fisicaWhereUniqueInput
  }

  /**
   * t_ubicacion_fisica findFirst
   */
  export type t_ubicacion_fisicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * Filter, which t_ubicacion_fisica to fetch.
     */
    where?: t_ubicacion_fisicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ubicacion_fisicas to fetch.
     */
    orderBy?: t_ubicacion_fisicaOrderByWithRelationInput | t_ubicacion_fisicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_ubicacion_fisicas.
     */
    cursor?: t_ubicacion_fisicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ubicacion_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ubicacion_fisicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_ubicacion_fisicas.
     */
    distinct?: T_ubicacion_fisicaScalarFieldEnum | T_ubicacion_fisicaScalarFieldEnum[]
  }

  /**
   * t_ubicacion_fisica findFirstOrThrow
   */
  export type t_ubicacion_fisicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * Filter, which t_ubicacion_fisica to fetch.
     */
    where?: t_ubicacion_fisicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ubicacion_fisicas to fetch.
     */
    orderBy?: t_ubicacion_fisicaOrderByWithRelationInput | t_ubicacion_fisicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_ubicacion_fisicas.
     */
    cursor?: t_ubicacion_fisicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ubicacion_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ubicacion_fisicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_ubicacion_fisicas.
     */
    distinct?: T_ubicacion_fisicaScalarFieldEnum | T_ubicacion_fisicaScalarFieldEnum[]
  }

  /**
   * t_ubicacion_fisica findMany
   */
  export type t_ubicacion_fisicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * Filter, which t_ubicacion_fisicas to fetch.
     */
    where?: t_ubicacion_fisicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_ubicacion_fisicas to fetch.
     */
    orderBy?: t_ubicacion_fisicaOrderByWithRelationInput | t_ubicacion_fisicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_ubicacion_fisicas.
     */
    cursor?: t_ubicacion_fisicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_ubicacion_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_ubicacion_fisicas.
     */
    skip?: number
    distinct?: T_ubicacion_fisicaScalarFieldEnum | T_ubicacion_fisicaScalarFieldEnum[]
  }

  /**
   * t_ubicacion_fisica create
   */
  export type t_ubicacion_fisicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * The data needed to create a t_ubicacion_fisica.
     */
    data: XOR<t_ubicacion_fisicaCreateInput, t_ubicacion_fisicaUncheckedCreateInput>
  }

  /**
   * t_ubicacion_fisica createMany
   */
  export type t_ubicacion_fisicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_ubicacion_fisicas.
     */
    data: t_ubicacion_fisicaCreateManyInput | t_ubicacion_fisicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_ubicacion_fisica update
   */
  export type t_ubicacion_fisicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * The data needed to update a t_ubicacion_fisica.
     */
    data: XOR<t_ubicacion_fisicaUpdateInput, t_ubicacion_fisicaUncheckedUpdateInput>
    /**
     * Choose, which t_ubicacion_fisica to update.
     */
    where: t_ubicacion_fisicaWhereUniqueInput
  }

  /**
   * t_ubicacion_fisica updateMany
   */
  export type t_ubicacion_fisicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_ubicacion_fisicas.
     */
    data: XOR<t_ubicacion_fisicaUpdateManyMutationInput, t_ubicacion_fisicaUncheckedUpdateManyInput>
    /**
     * Filter which t_ubicacion_fisicas to update
     */
    where?: t_ubicacion_fisicaWhereInput
    /**
     * Limit how many t_ubicacion_fisicas to update.
     */
    limit?: number
  }

  /**
   * t_ubicacion_fisica upsert
   */
  export type t_ubicacion_fisicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * The filter to search for the t_ubicacion_fisica to update in case it exists.
     */
    where: t_ubicacion_fisicaWhereUniqueInput
    /**
     * In case the t_ubicacion_fisica found by the `where` argument doesn't exist, create a new t_ubicacion_fisica with this data.
     */
    create: XOR<t_ubicacion_fisicaCreateInput, t_ubicacion_fisicaUncheckedCreateInput>
    /**
     * In case the t_ubicacion_fisica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_ubicacion_fisicaUpdateInput, t_ubicacion_fisicaUncheckedUpdateInput>
  }

  /**
   * t_ubicacion_fisica delete
   */
  export type t_ubicacion_fisicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
    /**
     * Filter which t_ubicacion_fisica to delete.
     */
    where: t_ubicacion_fisicaWhereUniqueInput
  }

  /**
   * t_ubicacion_fisica deleteMany
   */
  export type t_ubicacion_fisicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_ubicacion_fisicas to delete
     */
    where?: t_ubicacion_fisicaWhereInput
    /**
     * Limit how many t_ubicacion_fisicas to delete.
     */
    limit?: number
  }

  /**
   * t_ubicacion_fisica without action
   */
  export type t_ubicacion_fisicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_ubicacion_fisica
     */
    select?: t_ubicacion_fisicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_ubicacion_fisica
     */
    omit?: t_ubicacion_fisicaOmit<ExtArgs> | null
  }


  /**
   * Model t_usuario
   */

  export type AggregateT_usuario = {
    _count: T_usuarioCountAggregateOutputType | null
    _avg: T_usuarioAvgAggregateOutputType | null
    _sum: T_usuarioSumAggregateOutputType | null
    _min: T_usuarioMinAggregateOutputType | null
    _max: T_usuarioMaxAggregateOutputType | null
  }

  export type T_usuarioAvgAggregateOutputType = {
    id_usuario: number | null
    num_control: number | null
    id_rol: number | null
  }

  export type T_usuarioSumAggregateOutputType = {
    id_usuario: number | null
    num_control: number | null
    id_rol: number | null
  }

  export type T_usuarioMinAggregateOutputType = {
    id_usuario: number | null
    num_control: number | null
    id_rol: number | null
    contrasena: string | null
    status: boolean | null
  }

  export type T_usuarioMaxAggregateOutputType = {
    id_usuario: number | null
    num_control: number | null
    id_rol: number | null
    contrasena: string | null
    status: boolean | null
  }

  export type T_usuarioCountAggregateOutputType = {
    id_usuario: number
    num_control: number
    id_rol: number
    contrasena: number
    status: number
    _all: number
  }


  export type T_usuarioAvgAggregateInputType = {
    id_usuario?: true
    num_control?: true
    id_rol?: true
  }

  export type T_usuarioSumAggregateInputType = {
    id_usuario?: true
    num_control?: true
    id_rol?: true
  }

  export type T_usuarioMinAggregateInputType = {
    id_usuario?: true
    num_control?: true
    id_rol?: true
    contrasena?: true
    status?: true
  }

  export type T_usuarioMaxAggregateInputType = {
    id_usuario?: true
    num_control?: true
    id_rol?: true
    contrasena?: true
    status?: true
  }

  export type T_usuarioCountAggregateInputType = {
    id_usuario?: true
    num_control?: true
    id_rol?: true
    contrasena?: true
    status?: true
    _all?: true
  }

  export type T_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_usuario to aggregate.
     */
    where?: t_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_usuarios to fetch.
     */
    orderBy?: t_usuarioOrderByWithRelationInput | t_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_usuarios
    **/
    _count?: true | T_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_usuarioMaxAggregateInputType
  }

  export type GetT_usuarioAggregateType<T extends T_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateT_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_usuario[P]>
      : GetScalarType<T[P], AggregateT_usuario[P]>
  }




  export type t_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_usuarioWhereInput
    orderBy?: t_usuarioOrderByWithAggregationInput | t_usuarioOrderByWithAggregationInput[]
    by: T_usuarioScalarFieldEnum[] | T_usuarioScalarFieldEnum
    having?: t_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_usuarioCountAggregateInputType | true
    _avg?: T_usuarioAvgAggregateInputType
    _sum?: T_usuarioSumAggregateInputType
    _min?: T_usuarioMinAggregateInputType
    _max?: T_usuarioMaxAggregateInputType
  }

  export type T_usuarioGroupByOutputType = {
    id_usuario: number
    num_control: number
    id_rol: number
    contrasena: string
    status: boolean
    _count: T_usuarioCountAggregateOutputType | null
    _avg: T_usuarioAvgAggregateOutputType | null
    _sum: T_usuarioSumAggregateOutputType | null
    _min: T_usuarioMinAggregateOutputType | null
    _max: T_usuarioMaxAggregateOutputType | null
  }

  type GetT_usuarioGroupByPayload<T extends t_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], T_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type t_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    num_control?: boolean
    id_rol?: boolean
    contrasena?: boolean
    status?: boolean
  }, ExtArgs["result"]["t_usuario"]>



  export type t_usuarioSelectScalar = {
    id_usuario?: boolean
    num_control?: boolean
    id_rol?: boolean
    contrasena?: boolean
    status?: boolean
  }

  export type t_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "num_control" | "id_rol" | "contrasena" | "status", ExtArgs["result"]["t_usuario"]>

  export type $t_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      num_control: number
      id_rol: number
      contrasena: string
      status: boolean
    }, ExtArgs["result"]["t_usuario"]>
    composites: {}
  }

  type t_usuarioGetPayload<S extends boolean | null | undefined | t_usuarioDefaultArgs> = $Result.GetResult<Prisma.$t_usuarioPayload, S>

  type t_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_usuarioCountAggregateInputType | true
    }

  export interface t_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_usuario'], meta: { name: 't_usuario' } }
    /**
     * Find zero or one T_usuario that matches the filter.
     * @param {t_usuarioFindUniqueArgs} args - Arguments to find a T_usuario
     * @example
     * // Get one T_usuario
     * const t_usuario = await prisma.t_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_usuarioFindUniqueArgs>(args: SelectSubset<T, t_usuarioFindUniqueArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_usuarioFindUniqueOrThrowArgs} args - Arguments to find a T_usuario
     * @example
     * // Get one T_usuario
     * const t_usuario = await prisma.t_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, t_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usuarioFindFirstArgs} args - Arguments to find a T_usuario
     * @example
     * // Get one T_usuario
     * const t_usuario = await prisma.t_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_usuarioFindFirstArgs>(args?: SelectSubset<T, t_usuarioFindFirstArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usuarioFindFirstOrThrowArgs} args - Arguments to find a T_usuario
     * @example
     * // Get one T_usuario
     * const t_usuario = await prisma.t_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, t_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_usuarios
     * const t_usuarios = await prisma.t_usuario.findMany()
     * 
     * // Get first 10 T_usuarios
     * const t_usuarios = await prisma.t_usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const t_usuarioWithId_usuarioOnly = await prisma.t_usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends t_usuarioFindManyArgs>(args?: SelectSubset<T, t_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_usuario.
     * @param {t_usuarioCreateArgs} args - Arguments to create a T_usuario.
     * @example
     * // Create one T_usuario
     * const T_usuario = await prisma.t_usuario.create({
     *   data: {
     *     // ... data to create a T_usuario
     *   }
     * })
     * 
     */
    create<T extends t_usuarioCreateArgs>(args: SelectSubset<T, t_usuarioCreateArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_usuarios.
     * @param {t_usuarioCreateManyArgs} args - Arguments to create many T_usuarios.
     * @example
     * // Create many T_usuarios
     * const t_usuario = await prisma.t_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_usuarioCreateManyArgs>(args?: SelectSubset<T, t_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_usuario.
     * @param {t_usuarioDeleteArgs} args - Arguments to delete one T_usuario.
     * @example
     * // Delete one T_usuario
     * const T_usuario = await prisma.t_usuario.delete({
     *   where: {
     *     // ... filter to delete one T_usuario
     *   }
     * })
     * 
     */
    delete<T extends t_usuarioDeleteArgs>(args: SelectSubset<T, t_usuarioDeleteArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_usuario.
     * @param {t_usuarioUpdateArgs} args - Arguments to update one T_usuario.
     * @example
     * // Update one T_usuario
     * const t_usuario = await prisma.t_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_usuarioUpdateArgs>(args: SelectSubset<T, t_usuarioUpdateArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_usuarios.
     * @param {t_usuarioDeleteManyArgs} args - Arguments to filter T_usuarios to delete.
     * @example
     * // Delete a few T_usuarios
     * const { count } = await prisma.t_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_usuarioDeleteManyArgs>(args?: SelectSubset<T, t_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_usuarios
     * const t_usuario = await prisma.t_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_usuarioUpdateManyArgs>(args: SelectSubset<T, t_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_usuario.
     * @param {t_usuarioUpsertArgs} args - Arguments to update or create a T_usuario.
     * @example
     * // Update or create a T_usuario
     * const t_usuario = await prisma.t_usuario.upsert({
     *   create: {
     *     // ... data to create a T_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_usuario we want to update
     *   }
     * })
     */
    upsert<T extends t_usuarioUpsertArgs>(args: SelectSubset<T, t_usuarioUpsertArgs<ExtArgs>>): Prisma__t_usuarioClient<$Result.GetResult<Prisma.$t_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usuarioCountArgs} args - Arguments to filter T_usuarios to count.
     * @example
     * // Count the number of T_usuarios
     * const count = await prisma.t_usuario.count({
     *   where: {
     *     // ... the filter for the T_usuarios we want to count
     *   }
     * })
    **/
    count<T extends t_usuarioCountArgs>(
      args?: Subset<T, t_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_usuarioAggregateArgs>(args: Subset<T, T_usuarioAggregateArgs>): Prisma.PrismaPromise<GetT_usuarioAggregateType<T>>

    /**
     * Group by T_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_usuarioGroupByArgs} args - Group by arguments.
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
      T extends t_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: t_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_usuario model
   */
  readonly fields: t_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_usuario model
   */
  interface t_usuarioFieldRefs {
    readonly id_usuario: FieldRef<"t_usuario", 'Int'>
    readonly num_control: FieldRef<"t_usuario", 'Int'>
    readonly id_rol: FieldRef<"t_usuario", 'Int'>
    readonly contrasena: FieldRef<"t_usuario", 'String'>
    readonly status: FieldRef<"t_usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * t_usuario findUnique
   */
  export type t_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * Filter, which t_usuario to fetch.
     */
    where: t_usuarioWhereUniqueInput
  }

  /**
   * t_usuario findUniqueOrThrow
   */
  export type t_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * Filter, which t_usuario to fetch.
     */
    where: t_usuarioWhereUniqueInput
  }

  /**
   * t_usuario findFirst
   */
  export type t_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * Filter, which t_usuario to fetch.
     */
    where?: t_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_usuarios to fetch.
     */
    orderBy?: t_usuarioOrderByWithRelationInput | t_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_usuarios.
     */
    cursor?: t_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_usuarios.
     */
    distinct?: T_usuarioScalarFieldEnum | T_usuarioScalarFieldEnum[]
  }

  /**
   * t_usuario findFirstOrThrow
   */
  export type t_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * Filter, which t_usuario to fetch.
     */
    where?: t_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_usuarios to fetch.
     */
    orderBy?: t_usuarioOrderByWithRelationInput | t_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_usuarios.
     */
    cursor?: t_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_usuarios.
     */
    distinct?: T_usuarioScalarFieldEnum | T_usuarioScalarFieldEnum[]
  }

  /**
   * t_usuario findMany
   */
  export type t_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * Filter, which t_usuarios to fetch.
     */
    where?: t_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_usuarios to fetch.
     */
    orderBy?: t_usuarioOrderByWithRelationInput | t_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_usuarios.
     */
    cursor?: t_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_usuarios.
     */
    skip?: number
    distinct?: T_usuarioScalarFieldEnum | T_usuarioScalarFieldEnum[]
  }

  /**
   * t_usuario create
   */
  export type t_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a t_usuario.
     */
    data: XOR<t_usuarioCreateInput, t_usuarioUncheckedCreateInput>
  }

  /**
   * t_usuario createMany
   */
  export type t_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_usuarios.
     */
    data: t_usuarioCreateManyInput | t_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_usuario update
   */
  export type t_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a t_usuario.
     */
    data: XOR<t_usuarioUpdateInput, t_usuarioUncheckedUpdateInput>
    /**
     * Choose, which t_usuario to update.
     */
    where: t_usuarioWhereUniqueInput
  }

  /**
   * t_usuario updateMany
   */
  export type t_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_usuarios.
     */
    data: XOR<t_usuarioUpdateManyMutationInput, t_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which t_usuarios to update
     */
    where?: t_usuarioWhereInput
    /**
     * Limit how many t_usuarios to update.
     */
    limit?: number
  }

  /**
   * t_usuario upsert
   */
  export type t_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the t_usuario to update in case it exists.
     */
    where: t_usuarioWhereUniqueInput
    /**
     * In case the t_usuario found by the `where` argument doesn't exist, create a new t_usuario with this data.
     */
    create: XOR<t_usuarioCreateInput, t_usuarioUncheckedCreateInput>
    /**
     * In case the t_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_usuarioUpdateInput, t_usuarioUncheckedUpdateInput>
  }

  /**
   * t_usuario delete
   */
  export type t_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
    /**
     * Filter which t_usuario to delete.
     */
    where: t_usuarioWhereUniqueInput
  }

  /**
   * t_usuario deleteMany
   */
  export type t_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_usuarios to delete
     */
    where?: t_usuarioWhereInput
    /**
     * Limit how many t_usuarios to delete.
     */
    limit?: number
  }

  /**
   * t_usuario without action
   */
  export type t_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_usuario
     */
    select?: t_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_usuario
     */
    omit?: t_usuarioOmit<ExtArgs> | null
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


  export const T_accesoriosScalarFieldEnum: {
    id_dispositivos: 'id_dispositivos',
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    num_sap: 'num_sap',
    status: 'status',
    extras: 'extras',
    id_area: 'id_area',
    num_control: 'num_control',
    codigo_propietario: 'codigo_propietario',
    codigo_ubicacion: 'codigo_ubicacion',
    id_factura: 'id_factura'
  };

  export type T_accesoriosScalarFieldEnum = (typeof T_accesoriosScalarFieldEnum)[keyof typeof T_accesoriosScalarFieldEnum]


  export const T_areas_sistemasScalarFieldEnum: {
    id_area: 'id_area',
    ceco_sap: 'ceco_sap',
    descripcion_ceco: 'descripcion_ceco',
    area_sistemas: 'area_sistemas'
  };

  export type T_areas_sistemasScalarFieldEnum = (typeof T_areas_sistemasScalarFieldEnum)[keyof typeof T_areas_sistemasScalarFieldEnum]


  export const T_articulo_sistemasScalarFieldEnum: {
    id_articulo: 'id_articulo',
    codigo_articulo: 'codigo_articulo',
    descripcion: 'descripcion',
    identificador: 'identificador',
    consecutivo: 'consecutivo'
  };

  export type T_articulo_sistemasScalarFieldEnum = (typeof T_articulo_sistemasScalarFieldEnum)[keyof typeof T_articulo_sistemasScalarFieldEnum]


  export const T_colaboradoresScalarFieldEnum: {
    id_colaboradores: 'id_colaboradores',
    num_control: 'num_control',
    nombre: 'nombre',
    correo: 'correo',
    id_area: 'id_area'
  };

  export type T_colaboradoresScalarFieldEnum = (typeof T_colaboradoresScalarFieldEnum)[keyof typeof T_colaboradoresScalarFieldEnum]


  export const T_consumiblesScalarFieldEnum: {
    id_dispositivos: 'id_dispositivos',
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    num_sap: 'num_sap',
    status: 'status',
    extras: 'extras',
    id_area: 'id_area',
    num_control: 'num_control',
    codigo_propietario: 'codigo_propietario',
    codigo_ubicacion: 'codigo_ubicacion',
    id_factura: 'id_factura'
  };

  export type T_consumiblesScalarFieldEnum = (typeof T_consumiblesScalarFieldEnum)[keyof typeof T_consumiblesScalarFieldEnum]


  export const T_dispositivosScalarFieldEnum: {
    id_dispositivos: 'id_dispositivos',
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    num_sap: 'num_sap',
    status: 'status',
    extras: 'extras',
    id_area: 'id_area',
    num_control: 'num_control',
    codigo_propietario: 'codigo_propietario',
    codigo_ubicacion: 'codigo_ubicacion',
    id_factura: 'id_factura'
  };

  export type T_dispositivosScalarFieldEnum = (typeof T_dispositivosScalarFieldEnum)[keyof typeof T_dispositivosScalarFieldEnum]


  export const T_facturaScalarFieldEnum: {
    id_factura: 'id_factura',
    codigo_propietario: 'codigo_propietario',
    proveedor_alias: 'proveedor_alias',
    razon_social: 'razon_social',
    folio_factura: 'folio_factura',
    fact_so: 'fact_so',
    fecha_factura: 'fecha_factura',
    moneda: 'moneda',
    unit_s_iva: 'unit_s_iva'
  };

  export type T_facturaScalarFieldEnum = (typeof T_facturaScalarFieldEnum)[keyof typeof T_facturaScalarFieldEnum]


  export const T_historial_articuloScalarFieldEnum: {
    id_historial: 'id_historial',
    id_usuario: 'id_usuario',
    fecha_modificacion: 'fecha_modificacion',
    id_dispositivos: 'id_dispositivos',
    hostname: 'hostname',
    ceco_sap_ant: 'ceco_sap_ant',
    num_control_ant: 'num_control_ant',
    id_movimiento: 'id_movimiento'
  };

  export type T_historial_articuloScalarFieldEnum = (typeof T_historial_articuloScalarFieldEnum)[keyof typeof T_historial_articuloScalarFieldEnum]


  export const T_movimientosScalarFieldEnum: {
    id_movimiento: 'id_movimiento',
    descripcion_movimineto: 'descripcion_movimineto'
  };

  export type T_movimientosScalarFieldEnum = (typeof T_movimientosScalarFieldEnum)[keyof typeof T_movimientosScalarFieldEnum]


  export const T_propietarioScalarFieldEnum: {
    id_propietario: 'id_propietario',
    codigo_propietario: 'codigo_propietario',
    nombre: 'nombre'
  };

  export type T_propietarioScalarFieldEnum = (typeof T_propietarioScalarFieldEnum)[keyof typeof T_propietarioScalarFieldEnum]


  export const T_refaccionesScalarFieldEnum: {
    id_dispositivos: 'id_dispositivos',
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    num_sap: 'num_sap',
    status: 'status',
    extras: 'extras',
    id_area: 'id_area',
    num_control: 'num_control',
    codigo_propietario: 'codigo_propietario',
    codigo_ubicacion: 'codigo_ubicacion',
    id_factura: 'id_factura'
  };

  export type T_refaccionesScalarFieldEnum = (typeof T_refaccionesScalarFieldEnum)[keyof typeof T_refaccionesScalarFieldEnum]


  export const T_rolesScalarFieldEnum: {
    id_rol: 'id_rol',
    nombre: 'nombre'
  };

  export type T_rolesScalarFieldEnum = (typeof T_rolesScalarFieldEnum)[keyof typeof T_rolesScalarFieldEnum]


  export const T_ubicacion_fisicaScalarFieldEnum: {
    id_ubicacion: 'id_ubicacion',
    codigo_ubicacion: 'codigo_ubicacion',
    descripcion: 'descripcion'
  };

  export type T_ubicacion_fisicaScalarFieldEnum = (typeof T_ubicacion_fisicaScalarFieldEnum)[keyof typeof T_ubicacion_fisicaScalarFieldEnum]


  export const T_usuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    num_control: 'num_control',
    id_rol: 'id_rol',
    contrasena: 'contrasena',
    status: 'status'
  };

  export type T_usuarioScalarFieldEnum = (typeof T_usuarioScalarFieldEnum)[keyof typeof T_usuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const t_accesoriosOrderByRelevanceFieldEnum: {
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    status: 'status',
    extras: 'extras'
  };

  export type t_accesoriosOrderByRelevanceFieldEnum = (typeof t_accesoriosOrderByRelevanceFieldEnum)[keyof typeof t_accesoriosOrderByRelevanceFieldEnum]


  export const t_areas_sistemasOrderByRelevanceFieldEnum: {
    ceco_sap: 'ceco_sap',
    descripcion_ceco: 'descripcion_ceco'
  };

  export type t_areas_sistemasOrderByRelevanceFieldEnum = (typeof t_areas_sistemasOrderByRelevanceFieldEnum)[keyof typeof t_areas_sistemasOrderByRelevanceFieldEnum]


  export const t_articulo_sistemasOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion',
    identificador: 'identificador'
  };

  export type t_articulo_sistemasOrderByRelevanceFieldEnum = (typeof t_articulo_sistemasOrderByRelevanceFieldEnum)[keyof typeof t_articulo_sistemasOrderByRelevanceFieldEnum]


  export const t_colaboradoresOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    correo: 'correo'
  };

  export type t_colaboradoresOrderByRelevanceFieldEnum = (typeof t_colaboradoresOrderByRelevanceFieldEnum)[keyof typeof t_colaboradoresOrderByRelevanceFieldEnum]


  export const t_consumiblesOrderByRelevanceFieldEnum: {
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    status: 'status',
    extras: 'extras'
  };

  export type t_consumiblesOrderByRelevanceFieldEnum = (typeof t_consumiblesOrderByRelevanceFieldEnum)[keyof typeof t_consumiblesOrderByRelevanceFieldEnum]


  export const t_dispositivosOrderByRelevanceFieldEnum: {
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    status: 'status',
    extras: 'extras'
  };

  export type t_dispositivosOrderByRelevanceFieldEnum = (typeof t_dispositivosOrderByRelevanceFieldEnum)[keyof typeof t_dispositivosOrderByRelevanceFieldEnum]


  export const t_facturaOrderByRelevanceFieldEnum: {
    proveedor_alias: 'proveedor_alias',
    razon_social: 'razon_social',
    folio_factura: 'folio_factura',
    fact_so: 'fact_so',
    moneda: 'moneda'
  };

  export type t_facturaOrderByRelevanceFieldEnum = (typeof t_facturaOrderByRelevanceFieldEnum)[keyof typeof t_facturaOrderByRelevanceFieldEnum]


  export const t_historial_articuloOrderByRelevanceFieldEnum: {
    hostname: 'hostname',
    ceco_sap_ant: 'ceco_sap_ant'
  };

  export type t_historial_articuloOrderByRelevanceFieldEnum = (typeof t_historial_articuloOrderByRelevanceFieldEnum)[keyof typeof t_historial_articuloOrderByRelevanceFieldEnum]


  export const t_movimientosOrderByRelevanceFieldEnum: {
    descripcion_movimineto: 'descripcion_movimineto'
  };

  export type t_movimientosOrderByRelevanceFieldEnum = (typeof t_movimientosOrderByRelevanceFieldEnum)[keyof typeof t_movimientosOrderByRelevanceFieldEnum]


  export const t_propietarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type t_propietarioOrderByRelevanceFieldEnum = (typeof t_propietarioOrderByRelevanceFieldEnum)[keyof typeof t_propietarioOrderByRelevanceFieldEnum]


  export const t_refaccionesOrderByRelevanceFieldEnum: {
    dispositivo: 'dispositivo',
    descripcion_sistemas: 'descripcion_sistemas',
    marca: 'marca',
    modelo: 'modelo',
    num_serie: 'num_serie',
    id_visual: 'id_visual',
    status: 'status',
    extras: 'extras'
  };

  export type t_refaccionesOrderByRelevanceFieldEnum = (typeof t_refaccionesOrderByRelevanceFieldEnum)[keyof typeof t_refaccionesOrderByRelevanceFieldEnum]


  export const t_rolesOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type t_rolesOrderByRelevanceFieldEnum = (typeof t_rolesOrderByRelevanceFieldEnum)[keyof typeof t_rolesOrderByRelevanceFieldEnum]


  export const t_ubicacion_fisicaOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion'
  };

  export type t_ubicacion_fisicaOrderByRelevanceFieldEnum = (typeof t_ubicacion_fisicaOrderByRelevanceFieldEnum)[keyof typeof t_ubicacion_fisicaOrderByRelevanceFieldEnum]


  export const t_usuarioOrderByRelevanceFieldEnum: {
    contrasena: 'contrasena'
  };

  export type t_usuarioOrderByRelevanceFieldEnum = (typeof t_usuarioOrderByRelevanceFieldEnum)[keyof typeof t_usuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type t_accesoriosWhereInput = {
    AND?: t_accesoriosWhereInput | t_accesoriosWhereInput[]
    OR?: t_accesoriosWhereInput[]
    NOT?: t_accesoriosWhereInput | t_accesoriosWhereInput[]
    id_dispositivos?: IntFilter<"t_accesorios"> | number
    dispositivo?: StringFilter<"t_accesorios"> | string
    descripcion_sistemas?: StringFilter<"t_accesorios"> | string
    marca?: StringFilter<"t_accesorios"> | string
    modelo?: StringFilter<"t_accesorios"> | string
    num_serie?: StringFilter<"t_accesorios"> | string
    id_visual?: StringFilter<"t_accesorios"> | string
    num_sap?: IntFilter<"t_accesorios"> | number
    status?: StringFilter<"t_accesorios"> | string
    extras?: StringFilter<"t_accesorios"> | string
    id_area?: IntFilter<"t_accesorios"> | number
    num_control?: IntFilter<"t_accesorios"> | number
    codigo_propietario?: IntFilter<"t_accesorios"> | number
    codigo_ubicacion?: IntFilter<"t_accesorios"> | number
    id_factura?: IntFilter<"t_accesorios"> | number
  }

  export type t_accesoriosOrderByWithRelationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    _relevance?: t_accesoriosOrderByRelevanceInput
  }

  export type t_accesoriosWhereUniqueInput = Prisma.AtLeast<{
    id_dispositivos?: number
    num_control?: number
    codigo_propietario?: number
    codigo_ubicacion?: number
    id_factura?: number
    AND?: t_accesoriosWhereInput | t_accesoriosWhereInput[]
    OR?: t_accesoriosWhereInput[]
    NOT?: t_accesoriosWhereInput | t_accesoriosWhereInput[]
    dispositivo?: StringFilter<"t_accesorios"> | string
    descripcion_sistemas?: StringFilter<"t_accesorios"> | string
    marca?: StringFilter<"t_accesorios"> | string
    modelo?: StringFilter<"t_accesorios"> | string
    num_serie?: StringFilter<"t_accesorios"> | string
    id_visual?: StringFilter<"t_accesorios"> | string
    num_sap?: IntFilter<"t_accesorios"> | number
    status?: StringFilter<"t_accesorios"> | string
    extras?: StringFilter<"t_accesorios"> | string
    id_area?: IntFilter<"t_accesorios"> | number
  }, "id_dispositivos" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura">

  export type t_accesoriosOrderByWithAggregationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    _count?: t_accesoriosCountOrderByAggregateInput
    _avg?: t_accesoriosAvgOrderByAggregateInput
    _max?: t_accesoriosMaxOrderByAggregateInput
    _min?: t_accesoriosMinOrderByAggregateInput
    _sum?: t_accesoriosSumOrderByAggregateInput
  }

  export type t_accesoriosScalarWhereWithAggregatesInput = {
    AND?: t_accesoriosScalarWhereWithAggregatesInput | t_accesoriosScalarWhereWithAggregatesInput[]
    OR?: t_accesoriosScalarWhereWithAggregatesInput[]
    NOT?: t_accesoriosScalarWhereWithAggregatesInput | t_accesoriosScalarWhereWithAggregatesInput[]
    id_dispositivos?: IntWithAggregatesFilter<"t_accesorios"> | number
    dispositivo?: StringWithAggregatesFilter<"t_accesorios"> | string
    descripcion_sistemas?: StringWithAggregatesFilter<"t_accesorios"> | string
    marca?: StringWithAggregatesFilter<"t_accesorios"> | string
    modelo?: StringWithAggregatesFilter<"t_accesorios"> | string
    num_serie?: StringWithAggregatesFilter<"t_accesorios"> | string
    id_visual?: StringWithAggregatesFilter<"t_accesorios"> | string
    num_sap?: IntWithAggregatesFilter<"t_accesorios"> | number
    status?: StringWithAggregatesFilter<"t_accesorios"> | string
    extras?: StringWithAggregatesFilter<"t_accesorios"> | string
    id_area?: IntWithAggregatesFilter<"t_accesorios"> | number
    num_control?: IntWithAggregatesFilter<"t_accesorios"> | number
    codigo_propietario?: IntWithAggregatesFilter<"t_accesorios"> | number
    codigo_ubicacion?: IntWithAggregatesFilter<"t_accesorios"> | number
    id_factura?: IntWithAggregatesFilter<"t_accesorios"> | number
  }

  export type t_areas_sistemasWhereInput = {
    AND?: t_areas_sistemasWhereInput | t_areas_sistemasWhereInput[]
    OR?: t_areas_sistemasWhereInput[]
    NOT?: t_areas_sistemasWhereInput | t_areas_sistemasWhereInput[]
    id_area?: IntFilter<"t_areas_sistemas"> | number
    ceco_sap?: StringFilter<"t_areas_sistemas"> | string
    descripcion_ceco?: StringFilter<"t_areas_sistemas"> | string
    area_sistemas?: IntFilter<"t_areas_sistemas"> | number
  }

  export type t_areas_sistemasOrderByWithRelationInput = {
    id_area?: SortOrder
    ceco_sap?: SortOrder
    descripcion_ceco?: SortOrder
    area_sistemas?: SortOrder
    _relevance?: t_areas_sistemasOrderByRelevanceInput
  }

  export type t_areas_sistemasWhereUniqueInput = Prisma.AtLeast<{
    id_area?: number
    ceco_sap?: string
    AND?: t_areas_sistemasWhereInput | t_areas_sistemasWhereInput[]
    OR?: t_areas_sistemasWhereInput[]
    NOT?: t_areas_sistemasWhereInput | t_areas_sistemasWhereInput[]
    descripcion_ceco?: StringFilter<"t_areas_sistemas"> | string
    area_sistemas?: IntFilter<"t_areas_sistemas"> | number
  }, "id_area" | "ceco_sap">

  export type t_areas_sistemasOrderByWithAggregationInput = {
    id_area?: SortOrder
    ceco_sap?: SortOrder
    descripcion_ceco?: SortOrder
    area_sistemas?: SortOrder
    _count?: t_areas_sistemasCountOrderByAggregateInput
    _avg?: t_areas_sistemasAvgOrderByAggregateInput
    _max?: t_areas_sistemasMaxOrderByAggregateInput
    _min?: t_areas_sistemasMinOrderByAggregateInput
    _sum?: t_areas_sistemasSumOrderByAggregateInput
  }

  export type t_areas_sistemasScalarWhereWithAggregatesInput = {
    AND?: t_areas_sistemasScalarWhereWithAggregatesInput | t_areas_sistemasScalarWhereWithAggregatesInput[]
    OR?: t_areas_sistemasScalarWhereWithAggregatesInput[]
    NOT?: t_areas_sistemasScalarWhereWithAggregatesInput | t_areas_sistemasScalarWhereWithAggregatesInput[]
    id_area?: IntWithAggregatesFilter<"t_areas_sistemas"> | number
    ceco_sap?: StringWithAggregatesFilter<"t_areas_sistemas"> | string
    descripcion_ceco?: StringWithAggregatesFilter<"t_areas_sistemas"> | string
    area_sistemas?: IntWithAggregatesFilter<"t_areas_sistemas"> | number
  }

  export type t_articulo_sistemasWhereInput = {
    AND?: t_articulo_sistemasWhereInput | t_articulo_sistemasWhereInput[]
    OR?: t_articulo_sistemasWhereInput[]
    NOT?: t_articulo_sistemasWhereInput | t_articulo_sistemasWhereInput[]
    id_articulo?: IntFilter<"t_articulo_sistemas"> | number
    codigo_articulo?: IntFilter<"t_articulo_sistemas"> | number
    descripcion?: StringFilter<"t_articulo_sistemas"> | string
    identificador?: StringFilter<"t_articulo_sistemas"> | string
    consecutivo?: IntFilter<"t_articulo_sistemas"> | number
  }

  export type t_articulo_sistemasOrderByWithRelationInput = {
    id_articulo?: SortOrder
    codigo_articulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    consecutivo?: SortOrder
    _relevance?: t_articulo_sistemasOrderByRelevanceInput
  }

  export type t_articulo_sistemasWhereUniqueInput = Prisma.AtLeast<{
    id_articulo?: number
    codigo_articulo?: number
    AND?: t_articulo_sistemasWhereInput | t_articulo_sistemasWhereInput[]
    OR?: t_articulo_sistemasWhereInput[]
    NOT?: t_articulo_sistemasWhereInput | t_articulo_sistemasWhereInput[]
    descripcion?: StringFilter<"t_articulo_sistemas"> | string
    identificador?: StringFilter<"t_articulo_sistemas"> | string
    consecutivo?: IntFilter<"t_articulo_sistemas"> | number
  }, "id_articulo" | "codigo_articulo">

  export type t_articulo_sistemasOrderByWithAggregationInput = {
    id_articulo?: SortOrder
    codigo_articulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    consecutivo?: SortOrder
    _count?: t_articulo_sistemasCountOrderByAggregateInput
    _avg?: t_articulo_sistemasAvgOrderByAggregateInput
    _max?: t_articulo_sistemasMaxOrderByAggregateInput
    _min?: t_articulo_sistemasMinOrderByAggregateInput
    _sum?: t_articulo_sistemasSumOrderByAggregateInput
  }

  export type t_articulo_sistemasScalarWhereWithAggregatesInput = {
    AND?: t_articulo_sistemasScalarWhereWithAggregatesInput | t_articulo_sistemasScalarWhereWithAggregatesInput[]
    OR?: t_articulo_sistemasScalarWhereWithAggregatesInput[]
    NOT?: t_articulo_sistemasScalarWhereWithAggregatesInput | t_articulo_sistemasScalarWhereWithAggregatesInput[]
    id_articulo?: IntWithAggregatesFilter<"t_articulo_sistemas"> | number
    codigo_articulo?: IntWithAggregatesFilter<"t_articulo_sistemas"> | number
    descripcion?: StringWithAggregatesFilter<"t_articulo_sistemas"> | string
    identificador?: StringWithAggregatesFilter<"t_articulo_sistemas"> | string
    consecutivo?: IntWithAggregatesFilter<"t_articulo_sistemas"> | number
  }

  export type t_colaboradoresWhereInput = {
    AND?: t_colaboradoresWhereInput | t_colaboradoresWhereInput[]
    OR?: t_colaboradoresWhereInput[]
    NOT?: t_colaboradoresWhereInput | t_colaboradoresWhereInput[]
    id_colaboradores?: IntFilter<"t_colaboradores"> | number
    num_control?: IntFilter<"t_colaboradores"> | number
    nombre?: StringFilter<"t_colaboradores"> | string
    correo?: StringFilter<"t_colaboradores"> | string
    id_area?: IntFilter<"t_colaboradores"> | number
  }

  export type t_colaboradoresOrderByWithRelationInput = {
    id_colaboradores?: SortOrder
    num_control?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    id_area?: SortOrder
    _relevance?: t_colaboradoresOrderByRelevanceInput
  }

  export type t_colaboradoresWhereUniqueInput = Prisma.AtLeast<{
    id_colaboradores?: number
    num_control?: number
    AND?: t_colaboradoresWhereInput | t_colaboradoresWhereInput[]
    OR?: t_colaboradoresWhereInput[]
    NOT?: t_colaboradoresWhereInput | t_colaboradoresWhereInput[]
    nombre?: StringFilter<"t_colaboradores"> | string
    correo?: StringFilter<"t_colaboradores"> | string
    id_area?: IntFilter<"t_colaboradores"> | number
  }, "id_colaboradores" | "num_control">

  export type t_colaboradoresOrderByWithAggregationInput = {
    id_colaboradores?: SortOrder
    num_control?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    id_area?: SortOrder
    _count?: t_colaboradoresCountOrderByAggregateInput
    _avg?: t_colaboradoresAvgOrderByAggregateInput
    _max?: t_colaboradoresMaxOrderByAggregateInput
    _min?: t_colaboradoresMinOrderByAggregateInput
    _sum?: t_colaboradoresSumOrderByAggregateInput
  }

  export type t_colaboradoresScalarWhereWithAggregatesInput = {
    AND?: t_colaboradoresScalarWhereWithAggregatesInput | t_colaboradoresScalarWhereWithAggregatesInput[]
    OR?: t_colaboradoresScalarWhereWithAggregatesInput[]
    NOT?: t_colaboradoresScalarWhereWithAggregatesInput | t_colaboradoresScalarWhereWithAggregatesInput[]
    id_colaboradores?: IntWithAggregatesFilter<"t_colaboradores"> | number
    num_control?: IntWithAggregatesFilter<"t_colaboradores"> | number
    nombre?: StringWithAggregatesFilter<"t_colaboradores"> | string
    correo?: StringWithAggregatesFilter<"t_colaboradores"> | string
    id_area?: IntWithAggregatesFilter<"t_colaboradores"> | number
  }

  export type t_consumiblesWhereInput = {
    AND?: t_consumiblesWhereInput | t_consumiblesWhereInput[]
    OR?: t_consumiblesWhereInput[]
    NOT?: t_consumiblesWhereInput | t_consumiblesWhereInput[]
    id_dispositivos?: IntFilter<"t_consumibles"> | number
    dispositivo?: StringFilter<"t_consumibles"> | string
    descripcion_sistemas?: StringFilter<"t_consumibles"> | string
    marca?: StringFilter<"t_consumibles"> | string
    modelo?: StringFilter<"t_consumibles"> | string
    num_serie?: StringFilter<"t_consumibles"> | string
    id_visual?: StringFilter<"t_consumibles"> | string
    num_sap?: IntFilter<"t_consumibles"> | number
    status?: StringFilter<"t_consumibles"> | string
    extras?: StringFilter<"t_consumibles"> | string
    id_area?: IntFilter<"t_consumibles"> | number
    num_control?: IntFilter<"t_consumibles"> | number
    codigo_propietario?: IntFilter<"t_consumibles"> | number
    codigo_ubicacion?: IntFilter<"t_consumibles"> | number
    id_factura?: IntFilter<"t_consumibles"> | number
  }

  export type t_consumiblesOrderByWithRelationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    _relevance?: t_consumiblesOrderByRelevanceInput
  }

  export type t_consumiblesWhereUniqueInput = Prisma.AtLeast<{
    id_dispositivos?: number
    num_control?: number
    codigo_propietario?: number
    codigo_ubicacion?: number
    id_factura?: number
    AND?: t_consumiblesWhereInput | t_consumiblesWhereInput[]
    OR?: t_consumiblesWhereInput[]
    NOT?: t_consumiblesWhereInput | t_consumiblesWhereInput[]
    dispositivo?: StringFilter<"t_consumibles"> | string
    descripcion_sistemas?: StringFilter<"t_consumibles"> | string
    marca?: StringFilter<"t_consumibles"> | string
    modelo?: StringFilter<"t_consumibles"> | string
    num_serie?: StringFilter<"t_consumibles"> | string
    id_visual?: StringFilter<"t_consumibles"> | string
    num_sap?: IntFilter<"t_consumibles"> | number
    status?: StringFilter<"t_consumibles"> | string
    extras?: StringFilter<"t_consumibles"> | string
    id_area?: IntFilter<"t_consumibles"> | number
  }, "id_dispositivos" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura">

  export type t_consumiblesOrderByWithAggregationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    _count?: t_consumiblesCountOrderByAggregateInput
    _avg?: t_consumiblesAvgOrderByAggregateInput
    _max?: t_consumiblesMaxOrderByAggregateInput
    _min?: t_consumiblesMinOrderByAggregateInput
    _sum?: t_consumiblesSumOrderByAggregateInput
  }

  export type t_consumiblesScalarWhereWithAggregatesInput = {
    AND?: t_consumiblesScalarWhereWithAggregatesInput | t_consumiblesScalarWhereWithAggregatesInput[]
    OR?: t_consumiblesScalarWhereWithAggregatesInput[]
    NOT?: t_consumiblesScalarWhereWithAggregatesInput | t_consumiblesScalarWhereWithAggregatesInput[]
    id_dispositivos?: IntWithAggregatesFilter<"t_consumibles"> | number
    dispositivo?: StringWithAggregatesFilter<"t_consumibles"> | string
    descripcion_sistemas?: StringWithAggregatesFilter<"t_consumibles"> | string
    marca?: StringWithAggregatesFilter<"t_consumibles"> | string
    modelo?: StringWithAggregatesFilter<"t_consumibles"> | string
    num_serie?: StringWithAggregatesFilter<"t_consumibles"> | string
    id_visual?: StringWithAggregatesFilter<"t_consumibles"> | string
    num_sap?: IntWithAggregatesFilter<"t_consumibles"> | number
    status?: StringWithAggregatesFilter<"t_consumibles"> | string
    extras?: StringWithAggregatesFilter<"t_consumibles"> | string
    id_area?: IntWithAggregatesFilter<"t_consumibles"> | number
    num_control?: IntWithAggregatesFilter<"t_consumibles"> | number
    codigo_propietario?: IntWithAggregatesFilter<"t_consumibles"> | number
    codigo_ubicacion?: IntWithAggregatesFilter<"t_consumibles"> | number
    id_factura?: IntWithAggregatesFilter<"t_consumibles"> | number
  }

  export type t_dispositivosWhereInput = {
    AND?: t_dispositivosWhereInput | t_dispositivosWhereInput[]
    OR?: t_dispositivosWhereInput[]
    NOT?: t_dispositivosWhereInput | t_dispositivosWhereInput[]
    id_dispositivos?: IntFilter<"t_dispositivos"> | number
    dispositivo?: StringFilter<"t_dispositivos"> | string
    descripcion_sistemas?: StringFilter<"t_dispositivos"> | string
    marca?: StringFilter<"t_dispositivos"> | string
    modelo?: StringFilter<"t_dispositivos"> | string
    num_serie?: StringFilter<"t_dispositivos"> | string
    id_visual?: StringFilter<"t_dispositivos"> | string
    num_sap?: IntFilter<"t_dispositivos"> | number
    status?: StringFilter<"t_dispositivos"> | string
    extras?: StringFilter<"t_dispositivos"> | string
    id_area?: IntFilter<"t_dispositivos"> | number
    num_control?: IntFilter<"t_dispositivos"> | number
    codigo_propietario?: IntFilter<"t_dispositivos"> | number
    codigo_ubicacion?: IntFilter<"t_dispositivos"> | number
    id_factura?: IntFilter<"t_dispositivos"> | number
  }

  export type t_dispositivosOrderByWithRelationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    _relevance?: t_dispositivosOrderByRelevanceInput
  }

  export type t_dispositivosWhereUniqueInput = Prisma.AtLeast<{
    id_dispositivos?: number
    num_control?: number
    codigo_propietario?: number
    codigo_ubicacion?: number
    id_factura?: number
    AND?: t_dispositivosWhereInput | t_dispositivosWhereInput[]
    OR?: t_dispositivosWhereInput[]
    NOT?: t_dispositivosWhereInput | t_dispositivosWhereInput[]
    dispositivo?: StringFilter<"t_dispositivos"> | string
    descripcion_sistemas?: StringFilter<"t_dispositivos"> | string
    marca?: StringFilter<"t_dispositivos"> | string
    modelo?: StringFilter<"t_dispositivos"> | string
    num_serie?: StringFilter<"t_dispositivos"> | string
    id_visual?: StringFilter<"t_dispositivos"> | string
    num_sap?: IntFilter<"t_dispositivos"> | number
    status?: StringFilter<"t_dispositivos"> | string
    extras?: StringFilter<"t_dispositivos"> | string
    id_area?: IntFilter<"t_dispositivos"> | number
  }, "id_dispositivos" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura">

  export type t_dispositivosOrderByWithAggregationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    _count?: t_dispositivosCountOrderByAggregateInput
    _avg?: t_dispositivosAvgOrderByAggregateInput
    _max?: t_dispositivosMaxOrderByAggregateInput
    _min?: t_dispositivosMinOrderByAggregateInput
    _sum?: t_dispositivosSumOrderByAggregateInput
  }

  export type t_dispositivosScalarWhereWithAggregatesInput = {
    AND?: t_dispositivosScalarWhereWithAggregatesInput | t_dispositivosScalarWhereWithAggregatesInput[]
    OR?: t_dispositivosScalarWhereWithAggregatesInput[]
    NOT?: t_dispositivosScalarWhereWithAggregatesInput | t_dispositivosScalarWhereWithAggregatesInput[]
    id_dispositivos?: IntWithAggregatesFilter<"t_dispositivos"> | number
    dispositivo?: StringWithAggregatesFilter<"t_dispositivos"> | string
    descripcion_sistemas?: StringWithAggregatesFilter<"t_dispositivos"> | string
    marca?: StringWithAggregatesFilter<"t_dispositivos"> | string
    modelo?: StringWithAggregatesFilter<"t_dispositivos"> | string
    num_serie?: StringWithAggregatesFilter<"t_dispositivos"> | string
    id_visual?: StringWithAggregatesFilter<"t_dispositivos"> | string
    num_sap?: IntWithAggregatesFilter<"t_dispositivos"> | number
    status?: StringWithAggregatesFilter<"t_dispositivos"> | string
    extras?: StringWithAggregatesFilter<"t_dispositivos"> | string
    id_area?: IntWithAggregatesFilter<"t_dispositivos"> | number
    num_control?: IntWithAggregatesFilter<"t_dispositivos"> | number
    codigo_propietario?: IntWithAggregatesFilter<"t_dispositivos"> | number
    codigo_ubicacion?: IntWithAggregatesFilter<"t_dispositivos"> | number
    id_factura?: IntWithAggregatesFilter<"t_dispositivos"> | number
  }

  export type t_facturaWhereInput = {
    AND?: t_facturaWhereInput | t_facturaWhereInput[]
    OR?: t_facturaWhereInput[]
    NOT?: t_facturaWhereInput | t_facturaWhereInput[]
    id_factura?: IntFilter<"t_factura"> | number
    codigo_propietario?: IntFilter<"t_factura"> | number
    proveedor_alias?: StringFilter<"t_factura"> | string
    razon_social?: StringFilter<"t_factura"> | string
    folio_factura?: StringFilter<"t_factura"> | string
    fact_so?: StringFilter<"t_factura"> | string
    fecha_factura?: DateTimeFilter<"t_factura"> | Date | string
    moneda?: StringFilter<"t_factura"> | string
    unit_s_iva?: FloatFilter<"t_factura"> | number
    t_propietario?: XOR<T_propietarioScalarRelationFilter, t_propietarioWhereInput>
  }

  export type t_facturaOrderByWithRelationInput = {
    id_factura?: SortOrder
    codigo_propietario?: SortOrder
    proveedor_alias?: SortOrder
    razon_social?: SortOrder
    folio_factura?: SortOrder
    fact_so?: SortOrder
    fecha_factura?: SortOrder
    moneda?: SortOrder
    unit_s_iva?: SortOrder
    t_propietario?: t_propietarioOrderByWithRelationInput
    _relevance?: t_facturaOrderByRelevanceInput
  }

  export type t_facturaWhereUniqueInput = Prisma.AtLeast<{
    id_factura?: number
    codigo_propietario?: number
    AND?: t_facturaWhereInput | t_facturaWhereInput[]
    OR?: t_facturaWhereInput[]
    NOT?: t_facturaWhereInput | t_facturaWhereInput[]
    proveedor_alias?: StringFilter<"t_factura"> | string
    razon_social?: StringFilter<"t_factura"> | string
    folio_factura?: StringFilter<"t_factura"> | string
    fact_so?: StringFilter<"t_factura"> | string
    fecha_factura?: DateTimeFilter<"t_factura"> | Date | string
    moneda?: StringFilter<"t_factura"> | string
    unit_s_iva?: FloatFilter<"t_factura"> | number
    t_propietario?: XOR<T_propietarioScalarRelationFilter, t_propietarioWhereInput>
  }, "id_factura" | "codigo_propietario">

  export type t_facturaOrderByWithAggregationInput = {
    id_factura?: SortOrder
    codigo_propietario?: SortOrder
    proveedor_alias?: SortOrder
    razon_social?: SortOrder
    folio_factura?: SortOrder
    fact_so?: SortOrder
    fecha_factura?: SortOrder
    moneda?: SortOrder
    unit_s_iva?: SortOrder
    _count?: t_facturaCountOrderByAggregateInput
    _avg?: t_facturaAvgOrderByAggregateInput
    _max?: t_facturaMaxOrderByAggregateInput
    _min?: t_facturaMinOrderByAggregateInput
    _sum?: t_facturaSumOrderByAggregateInput
  }

  export type t_facturaScalarWhereWithAggregatesInput = {
    AND?: t_facturaScalarWhereWithAggregatesInput | t_facturaScalarWhereWithAggregatesInput[]
    OR?: t_facturaScalarWhereWithAggregatesInput[]
    NOT?: t_facturaScalarWhereWithAggregatesInput | t_facturaScalarWhereWithAggregatesInput[]
    id_factura?: IntWithAggregatesFilter<"t_factura"> | number
    codigo_propietario?: IntWithAggregatesFilter<"t_factura"> | number
    proveedor_alias?: StringWithAggregatesFilter<"t_factura"> | string
    razon_social?: StringWithAggregatesFilter<"t_factura"> | string
    folio_factura?: StringWithAggregatesFilter<"t_factura"> | string
    fact_so?: StringWithAggregatesFilter<"t_factura"> | string
    fecha_factura?: DateTimeWithAggregatesFilter<"t_factura"> | Date | string
    moneda?: StringWithAggregatesFilter<"t_factura"> | string
    unit_s_iva?: FloatWithAggregatesFilter<"t_factura"> | number
  }

  export type t_historial_articuloWhereInput = {
    AND?: t_historial_articuloWhereInput | t_historial_articuloWhereInput[]
    OR?: t_historial_articuloWhereInput[]
    NOT?: t_historial_articuloWhereInput | t_historial_articuloWhereInput[]
    id_historial?: IntFilter<"t_historial_articulo"> | number
    id_usuario?: IntFilter<"t_historial_articulo"> | number
    fecha_modificacion?: DateTimeFilter<"t_historial_articulo"> | Date | string
    id_dispositivos?: IntFilter<"t_historial_articulo"> | number
    hostname?: StringFilter<"t_historial_articulo"> | string
    ceco_sap_ant?: StringFilter<"t_historial_articulo"> | string
    num_control_ant?: IntFilter<"t_historial_articulo"> | number
    id_movimiento?: IntFilter<"t_historial_articulo"> | number
  }

  export type t_historial_articuloOrderByWithRelationInput = {
    id_historial?: SortOrder
    id_usuario?: SortOrder
    fecha_modificacion?: SortOrder
    id_dispositivos?: SortOrder
    hostname?: SortOrder
    ceco_sap_ant?: SortOrder
    num_control_ant?: SortOrder
    id_movimiento?: SortOrder
    _relevance?: t_historial_articuloOrderByRelevanceInput
  }

  export type t_historial_articuloWhereUniqueInput = Prisma.AtLeast<{
    id_historial?: number
    id_usuario?: number
    id_dispositivos?: number
    id_movimiento?: number
    AND?: t_historial_articuloWhereInput | t_historial_articuloWhereInput[]
    OR?: t_historial_articuloWhereInput[]
    NOT?: t_historial_articuloWhereInput | t_historial_articuloWhereInput[]
    fecha_modificacion?: DateTimeFilter<"t_historial_articulo"> | Date | string
    hostname?: StringFilter<"t_historial_articulo"> | string
    ceco_sap_ant?: StringFilter<"t_historial_articulo"> | string
    num_control_ant?: IntFilter<"t_historial_articulo"> | number
  }, "id_historial" | "id_usuario" | "id_dispositivos" | "id_movimiento">

  export type t_historial_articuloOrderByWithAggregationInput = {
    id_historial?: SortOrder
    id_usuario?: SortOrder
    fecha_modificacion?: SortOrder
    id_dispositivos?: SortOrder
    hostname?: SortOrder
    ceco_sap_ant?: SortOrder
    num_control_ant?: SortOrder
    id_movimiento?: SortOrder
    _count?: t_historial_articuloCountOrderByAggregateInput
    _avg?: t_historial_articuloAvgOrderByAggregateInput
    _max?: t_historial_articuloMaxOrderByAggregateInput
    _min?: t_historial_articuloMinOrderByAggregateInput
    _sum?: t_historial_articuloSumOrderByAggregateInput
  }

  export type t_historial_articuloScalarWhereWithAggregatesInput = {
    AND?: t_historial_articuloScalarWhereWithAggregatesInput | t_historial_articuloScalarWhereWithAggregatesInput[]
    OR?: t_historial_articuloScalarWhereWithAggregatesInput[]
    NOT?: t_historial_articuloScalarWhereWithAggregatesInput | t_historial_articuloScalarWhereWithAggregatesInput[]
    id_historial?: IntWithAggregatesFilter<"t_historial_articulo"> | number
    id_usuario?: IntWithAggregatesFilter<"t_historial_articulo"> | number
    fecha_modificacion?: DateTimeWithAggregatesFilter<"t_historial_articulo"> | Date | string
    id_dispositivos?: IntWithAggregatesFilter<"t_historial_articulo"> | number
    hostname?: StringWithAggregatesFilter<"t_historial_articulo"> | string
    ceco_sap_ant?: StringWithAggregatesFilter<"t_historial_articulo"> | string
    num_control_ant?: IntWithAggregatesFilter<"t_historial_articulo"> | number
    id_movimiento?: IntWithAggregatesFilter<"t_historial_articulo"> | number
  }

  export type t_movimientosWhereInput = {
    AND?: t_movimientosWhereInput | t_movimientosWhereInput[]
    OR?: t_movimientosWhereInput[]
    NOT?: t_movimientosWhereInput | t_movimientosWhereInput[]
    id_movimiento?: IntFilter<"t_movimientos"> | number
    descripcion_movimineto?: StringFilter<"t_movimientos"> | string
  }

  export type t_movimientosOrderByWithRelationInput = {
    id_movimiento?: SortOrder
    descripcion_movimineto?: SortOrder
    _relevance?: t_movimientosOrderByRelevanceInput
  }

  export type t_movimientosWhereUniqueInput = Prisma.AtLeast<{
    id_movimiento?: number
    AND?: t_movimientosWhereInput | t_movimientosWhereInput[]
    OR?: t_movimientosWhereInput[]
    NOT?: t_movimientosWhereInput | t_movimientosWhereInput[]
    descripcion_movimineto?: StringFilter<"t_movimientos"> | string
  }, "id_movimiento">

  export type t_movimientosOrderByWithAggregationInput = {
    id_movimiento?: SortOrder
    descripcion_movimineto?: SortOrder
    _count?: t_movimientosCountOrderByAggregateInput
    _avg?: t_movimientosAvgOrderByAggregateInput
    _max?: t_movimientosMaxOrderByAggregateInput
    _min?: t_movimientosMinOrderByAggregateInput
    _sum?: t_movimientosSumOrderByAggregateInput
  }

  export type t_movimientosScalarWhereWithAggregatesInput = {
    AND?: t_movimientosScalarWhereWithAggregatesInput | t_movimientosScalarWhereWithAggregatesInput[]
    OR?: t_movimientosScalarWhereWithAggregatesInput[]
    NOT?: t_movimientosScalarWhereWithAggregatesInput | t_movimientosScalarWhereWithAggregatesInput[]
    id_movimiento?: IntWithAggregatesFilter<"t_movimientos"> | number
    descripcion_movimineto?: StringWithAggregatesFilter<"t_movimientos"> | string
  }

  export type t_propietarioWhereInput = {
    AND?: t_propietarioWhereInput | t_propietarioWhereInput[]
    OR?: t_propietarioWhereInput[]
    NOT?: t_propietarioWhereInput | t_propietarioWhereInput[]
    id_propietario?: IntFilter<"t_propietario"> | number
    codigo_propietario?: IntFilter<"t_propietario"> | number
    nombre?: StringFilter<"t_propietario"> | string
    t_factura?: XOR<T_facturaNullableScalarRelationFilter, t_facturaWhereInput> | null
    t_refacciones?: XOR<T_refaccionesNullableScalarRelationFilter, t_refaccionesWhereInput> | null
  }

  export type t_propietarioOrderByWithRelationInput = {
    id_propietario?: SortOrder
    codigo_propietario?: SortOrder
    nombre?: SortOrder
    t_factura?: t_facturaOrderByWithRelationInput
    t_refacciones?: t_refaccionesOrderByWithRelationInput
    _relevance?: t_propietarioOrderByRelevanceInput
  }

  export type t_propietarioWhereUniqueInput = Prisma.AtLeast<{
    id_propietario?: number
    codigo_propietario?: number
    AND?: t_propietarioWhereInput | t_propietarioWhereInput[]
    OR?: t_propietarioWhereInput[]
    NOT?: t_propietarioWhereInput | t_propietarioWhereInput[]
    nombre?: StringFilter<"t_propietario"> | string
    t_factura?: XOR<T_facturaNullableScalarRelationFilter, t_facturaWhereInput> | null
    t_refacciones?: XOR<T_refaccionesNullableScalarRelationFilter, t_refaccionesWhereInput> | null
  }, "id_propietario" | "codigo_propietario">

  export type t_propietarioOrderByWithAggregationInput = {
    id_propietario?: SortOrder
    codigo_propietario?: SortOrder
    nombre?: SortOrder
    _count?: t_propietarioCountOrderByAggregateInput
    _avg?: t_propietarioAvgOrderByAggregateInput
    _max?: t_propietarioMaxOrderByAggregateInput
    _min?: t_propietarioMinOrderByAggregateInput
    _sum?: t_propietarioSumOrderByAggregateInput
  }

  export type t_propietarioScalarWhereWithAggregatesInput = {
    AND?: t_propietarioScalarWhereWithAggregatesInput | t_propietarioScalarWhereWithAggregatesInput[]
    OR?: t_propietarioScalarWhereWithAggregatesInput[]
    NOT?: t_propietarioScalarWhereWithAggregatesInput | t_propietarioScalarWhereWithAggregatesInput[]
    id_propietario?: IntWithAggregatesFilter<"t_propietario"> | number
    codigo_propietario?: IntWithAggregatesFilter<"t_propietario"> | number
    nombre?: StringWithAggregatesFilter<"t_propietario"> | string
  }

  export type t_refaccionesWhereInput = {
    AND?: t_refaccionesWhereInput | t_refaccionesWhereInput[]
    OR?: t_refaccionesWhereInput[]
    NOT?: t_refaccionesWhereInput | t_refaccionesWhereInput[]
    id_dispositivos?: IntFilter<"t_refacciones"> | number
    dispositivo?: StringFilter<"t_refacciones"> | string
    descripcion_sistemas?: StringFilter<"t_refacciones"> | string
    marca?: StringFilter<"t_refacciones"> | string
    modelo?: StringFilter<"t_refacciones"> | string
    num_serie?: StringFilter<"t_refacciones"> | string
    id_visual?: StringFilter<"t_refacciones"> | string
    num_sap?: IntFilter<"t_refacciones"> | number
    status?: StringFilter<"t_refacciones"> | string
    extras?: StringFilter<"t_refacciones"> | string
    id_area?: IntFilter<"t_refacciones"> | number
    num_control?: IntFilter<"t_refacciones"> | number
    codigo_propietario?: IntFilter<"t_refacciones"> | number
    codigo_ubicacion?: IntFilter<"t_refacciones"> | number
    id_factura?: IntFilter<"t_refacciones"> | number
    t_propietario?: XOR<T_propietarioScalarRelationFilter, t_propietarioWhereInput>
  }

  export type t_refaccionesOrderByWithRelationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    t_propietario?: t_propietarioOrderByWithRelationInput
    _relevance?: t_refaccionesOrderByRelevanceInput
  }

  export type t_refaccionesWhereUniqueInput = Prisma.AtLeast<{
    id_dispositivos?: number
    num_control?: number
    codigo_propietario?: number
    codigo_ubicacion?: number
    id_factura?: number
    AND?: t_refaccionesWhereInput | t_refaccionesWhereInput[]
    OR?: t_refaccionesWhereInput[]
    NOT?: t_refaccionesWhereInput | t_refaccionesWhereInput[]
    dispositivo?: StringFilter<"t_refacciones"> | string
    descripcion_sistemas?: StringFilter<"t_refacciones"> | string
    marca?: StringFilter<"t_refacciones"> | string
    modelo?: StringFilter<"t_refacciones"> | string
    num_serie?: StringFilter<"t_refacciones"> | string
    id_visual?: StringFilter<"t_refacciones"> | string
    num_sap?: IntFilter<"t_refacciones"> | number
    status?: StringFilter<"t_refacciones"> | string
    extras?: StringFilter<"t_refacciones"> | string
    id_area?: IntFilter<"t_refacciones"> | number
    t_propietario?: XOR<T_propietarioScalarRelationFilter, t_propietarioWhereInput>
  }, "id_dispositivos" | "num_control" | "codigo_propietario" | "codigo_ubicacion" | "id_factura">

  export type t_refaccionesOrderByWithAggregationInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
    _count?: t_refaccionesCountOrderByAggregateInput
    _avg?: t_refaccionesAvgOrderByAggregateInput
    _max?: t_refaccionesMaxOrderByAggregateInput
    _min?: t_refaccionesMinOrderByAggregateInput
    _sum?: t_refaccionesSumOrderByAggregateInput
  }

  export type t_refaccionesScalarWhereWithAggregatesInput = {
    AND?: t_refaccionesScalarWhereWithAggregatesInput | t_refaccionesScalarWhereWithAggregatesInput[]
    OR?: t_refaccionesScalarWhereWithAggregatesInput[]
    NOT?: t_refaccionesScalarWhereWithAggregatesInput | t_refaccionesScalarWhereWithAggregatesInput[]
    id_dispositivos?: IntWithAggregatesFilter<"t_refacciones"> | number
    dispositivo?: StringWithAggregatesFilter<"t_refacciones"> | string
    descripcion_sistemas?: StringWithAggregatesFilter<"t_refacciones"> | string
    marca?: StringWithAggregatesFilter<"t_refacciones"> | string
    modelo?: StringWithAggregatesFilter<"t_refacciones"> | string
    num_serie?: StringWithAggregatesFilter<"t_refacciones"> | string
    id_visual?: StringWithAggregatesFilter<"t_refacciones"> | string
    num_sap?: IntWithAggregatesFilter<"t_refacciones"> | number
    status?: StringWithAggregatesFilter<"t_refacciones"> | string
    extras?: StringWithAggregatesFilter<"t_refacciones"> | string
    id_area?: IntWithAggregatesFilter<"t_refacciones"> | number
    num_control?: IntWithAggregatesFilter<"t_refacciones"> | number
    codigo_propietario?: IntWithAggregatesFilter<"t_refacciones"> | number
    codigo_ubicacion?: IntWithAggregatesFilter<"t_refacciones"> | number
    id_factura?: IntWithAggregatesFilter<"t_refacciones"> | number
  }

  export type t_rolesWhereInput = {
    AND?: t_rolesWhereInput | t_rolesWhereInput[]
    OR?: t_rolesWhereInput[]
    NOT?: t_rolesWhereInput | t_rolesWhereInput[]
    id_rol?: IntFilter<"t_roles"> | number
    nombre?: StringFilter<"t_roles"> | string
  }

  export type t_rolesOrderByWithRelationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    _relevance?: t_rolesOrderByRelevanceInput
  }

  export type t_rolesWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    AND?: t_rolesWhereInput | t_rolesWhereInput[]
    OR?: t_rolesWhereInput[]
    NOT?: t_rolesWhereInput | t_rolesWhereInput[]
    nombre?: StringFilter<"t_roles"> | string
  }, "id_rol">

  export type t_rolesOrderByWithAggregationInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
    _count?: t_rolesCountOrderByAggregateInput
    _avg?: t_rolesAvgOrderByAggregateInput
    _max?: t_rolesMaxOrderByAggregateInput
    _min?: t_rolesMinOrderByAggregateInput
    _sum?: t_rolesSumOrderByAggregateInput
  }

  export type t_rolesScalarWhereWithAggregatesInput = {
    AND?: t_rolesScalarWhereWithAggregatesInput | t_rolesScalarWhereWithAggregatesInput[]
    OR?: t_rolesScalarWhereWithAggregatesInput[]
    NOT?: t_rolesScalarWhereWithAggregatesInput | t_rolesScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"t_roles"> | number
    nombre?: StringWithAggregatesFilter<"t_roles"> | string
  }

  export type t_ubicacion_fisicaWhereInput = {
    AND?: t_ubicacion_fisicaWhereInput | t_ubicacion_fisicaWhereInput[]
    OR?: t_ubicacion_fisicaWhereInput[]
    NOT?: t_ubicacion_fisicaWhereInput | t_ubicacion_fisicaWhereInput[]
    id_ubicacion?: IntFilter<"t_ubicacion_fisica"> | number
    codigo_ubicacion?: IntFilter<"t_ubicacion_fisica"> | number
    descripcion?: StringFilter<"t_ubicacion_fisica"> | string
  }

  export type t_ubicacion_fisicaOrderByWithRelationInput = {
    id_ubicacion?: SortOrder
    codigo_ubicacion?: SortOrder
    descripcion?: SortOrder
    _relevance?: t_ubicacion_fisicaOrderByRelevanceInput
  }

  export type t_ubicacion_fisicaWhereUniqueInput = Prisma.AtLeast<{
    id_ubicacion?: number
    codigo_ubicacion?: number
    AND?: t_ubicacion_fisicaWhereInput | t_ubicacion_fisicaWhereInput[]
    OR?: t_ubicacion_fisicaWhereInput[]
    NOT?: t_ubicacion_fisicaWhereInput | t_ubicacion_fisicaWhereInput[]
    descripcion?: StringFilter<"t_ubicacion_fisica"> | string
  }, "id_ubicacion" | "codigo_ubicacion">

  export type t_ubicacion_fisicaOrderByWithAggregationInput = {
    id_ubicacion?: SortOrder
    codigo_ubicacion?: SortOrder
    descripcion?: SortOrder
    _count?: t_ubicacion_fisicaCountOrderByAggregateInput
    _avg?: t_ubicacion_fisicaAvgOrderByAggregateInput
    _max?: t_ubicacion_fisicaMaxOrderByAggregateInput
    _min?: t_ubicacion_fisicaMinOrderByAggregateInput
    _sum?: t_ubicacion_fisicaSumOrderByAggregateInput
  }

  export type t_ubicacion_fisicaScalarWhereWithAggregatesInput = {
    AND?: t_ubicacion_fisicaScalarWhereWithAggregatesInput | t_ubicacion_fisicaScalarWhereWithAggregatesInput[]
    OR?: t_ubicacion_fisicaScalarWhereWithAggregatesInput[]
    NOT?: t_ubicacion_fisicaScalarWhereWithAggregatesInput | t_ubicacion_fisicaScalarWhereWithAggregatesInput[]
    id_ubicacion?: IntWithAggregatesFilter<"t_ubicacion_fisica"> | number
    codigo_ubicacion?: IntWithAggregatesFilter<"t_ubicacion_fisica"> | number
    descripcion?: StringWithAggregatesFilter<"t_ubicacion_fisica"> | string
  }

  export type t_usuarioWhereInput = {
    AND?: t_usuarioWhereInput | t_usuarioWhereInput[]
    OR?: t_usuarioWhereInput[]
    NOT?: t_usuarioWhereInput | t_usuarioWhereInput[]
    id_usuario?: IntFilter<"t_usuario"> | number
    num_control?: IntFilter<"t_usuario"> | number
    id_rol?: IntFilter<"t_usuario"> | number
    contrasena?: StringFilter<"t_usuario"> | string
    status?: BoolFilter<"t_usuario"> | boolean
  }

  export type t_usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    num_control?: SortOrder
    id_rol?: SortOrder
    contrasena?: SortOrder
    status?: SortOrder
    _relevance?: t_usuarioOrderByRelevanceInput
  }

  export type t_usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    num_control?: number
    id_rol?: number
    AND?: t_usuarioWhereInput | t_usuarioWhereInput[]
    OR?: t_usuarioWhereInput[]
    NOT?: t_usuarioWhereInput | t_usuarioWhereInput[]
    contrasena?: StringFilter<"t_usuario"> | string
    status?: BoolFilter<"t_usuario"> | boolean
  }, "id_usuario" | "num_control" | "id_rol">

  export type t_usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    num_control?: SortOrder
    id_rol?: SortOrder
    contrasena?: SortOrder
    status?: SortOrder
    _count?: t_usuarioCountOrderByAggregateInput
    _avg?: t_usuarioAvgOrderByAggregateInput
    _max?: t_usuarioMaxOrderByAggregateInput
    _min?: t_usuarioMinOrderByAggregateInput
    _sum?: t_usuarioSumOrderByAggregateInput
  }

  export type t_usuarioScalarWhereWithAggregatesInput = {
    AND?: t_usuarioScalarWhereWithAggregatesInput | t_usuarioScalarWhereWithAggregatesInput[]
    OR?: t_usuarioScalarWhereWithAggregatesInput[]
    NOT?: t_usuarioScalarWhereWithAggregatesInput | t_usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"t_usuario"> | number
    num_control?: IntWithAggregatesFilter<"t_usuario"> | number
    id_rol?: IntWithAggregatesFilter<"t_usuario"> | number
    contrasena?: StringWithAggregatesFilter<"t_usuario"> | string
    status?: BoolWithAggregatesFilter<"t_usuario"> | boolean
  }

  export type t_accesoriosCreateInput = {
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_accesoriosUncheckedCreateInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_accesoriosUpdateInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_accesoriosUncheckedUpdateInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_accesoriosCreateManyInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_accesoriosUpdateManyMutationInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_accesoriosUncheckedUpdateManyInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_areas_sistemasCreateInput = {
    ceco_sap: string
    descripcion_ceco: string
    area_sistemas: number
  }

  export type t_areas_sistemasUncheckedCreateInput = {
    id_area?: number
    ceco_sap: string
    descripcion_ceco: string
    area_sistemas: number
  }

  export type t_areas_sistemasUpdateInput = {
    ceco_sap?: StringFieldUpdateOperationsInput | string
    descripcion_ceco?: StringFieldUpdateOperationsInput | string
    area_sistemas?: IntFieldUpdateOperationsInput | number
  }

  export type t_areas_sistemasUncheckedUpdateInput = {
    id_area?: IntFieldUpdateOperationsInput | number
    ceco_sap?: StringFieldUpdateOperationsInput | string
    descripcion_ceco?: StringFieldUpdateOperationsInput | string
    area_sistemas?: IntFieldUpdateOperationsInput | number
  }

  export type t_areas_sistemasCreateManyInput = {
    id_area?: number
    ceco_sap: string
    descripcion_ceco: string
    area_sistemas: number
  }

  export type t_areas_sistemasUpdateManyMutationInput = {
    ceco_sap?: StringFieldUpdateOperationsInput | string
    descripcion_ceco?: StringFieldUpdateOperationsInput | string
    area_sistemas?: IntFieldUpdateOperationsInput | number
  }

  export type t_areas_sistemasUncheckedUpdateManyInput = {
    id_area?: IntFieldUpdateOperationsInput | number
    ceco_sap?: StringFieldUpdateOperationsInput | string
    descripcion_ceco?: StringFieldUpdateOperationsInput | string
    area_sistemas?: IntFieldUpdateOperationsInput | number
  }

  export type t_articulo_sistemasCreateInput = {
    codigo_articulo: number
    descripcion: string
    identificador: string
    consecutivo: number
  }

  export type t_articulo_sistemasUncheckedCreateInput = {
    id_articulo?: number
    codigo_articulo: number
    descripcion: string
    identificador: string
    consecutivo: number
  }

  export type t_articulo_sistemasUpdateInput = {
    codigo_articulo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    consecutivo?: IntFieldUpdateOperationsInput | number
  }

  export type t_articulo_sistemasUncheckedUpdateInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    codigo_articulo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    consecutivo?: IntFieldUpdateOperationsInput | number
  }

  export type t_articulo_sistemasCreateManyInput = {
    id_articulo?: number
    codigo_articulo: number
    descripcion: string
    identificador: string
    consecutivo: number
  }

  export type t_articulo_sistemasUpdateManyMutationInput = {
    codigo_articulo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    consecutivo?: IntFieldUpdateOperationsInput | number
  }

  export type t_articulo_sistemasUncheckedUpdateManyInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    codigo_articulo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    consecutivo?: IntFieldUpdateOperationsInput | number
  }

  export type t_colaboradoresCreateInput = {
    num_control: number
    nombre: string
    correo?: string
    id_area: number
  }

  export type t_colaboradoresUncheckedCreateInput = {
    id_colaboradores?: number
    num_control: number
    nombre: string
    correo?: string
    id_area: number
  }

  export type t_colaboradoresUpdateInput = {
    num_control?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
  }

  export type t_colaboradoresUncheckedUpdateInput = {
    id_colaboradores?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
  }

  export type t_colaboradoresCreateManyInput = {
    id_colaboradores?: number
    num_control: number
    nombre: string
    correo?: string
    id_area: number
  }

  export type t_colaboradoresUpdateManyMutationInput = {
    num_control?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
  }

  export type t_colaboradoresUncheckedUpdateManyInput = {
    id_colaboradores?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
  }

  export type t_consumiblesCreateInput = {
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_consumiblesUncheckedCreateInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_consumiblesUpdateInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_consumiblesUncheckedUpdateInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_consumiblesCreateManyInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_consumiblesUpdateManyMutationInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_consumiblesUncheckedUpdateManyInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_dispositivosCreateInput = {
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_dispositivosUncheckedCreateInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_dispositivosUpdateInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_dispositivosUncheckedUpdateInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_dispositivosCreateManyInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_dispositivosUpdateManyMutationInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_dispositivosUncheckedUpdateManyInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_facturaCreateInput = {
    proveedor_alias: string
    razon_social: string
    folio_factura: string
    fact_so: string
    fecha_factura: Date | string
    moneda: string
    unit_s_iva: number
    t_propietario: t_propietarioCreateNestedOneWithoutT_facturaInput
  }

  export type t_facturaUncheckedCreateInput = {
    id_factura?: number
    codigo_propietario: number
    proveedor_alias: string
    razon_social: string
    folio_factura: string
    fact_so: string
    fecha_factura: Date | string
    moneda: string
    unit_s_iva: number
  }

  export type t_facturaUpdateInput = {
    proveedor_alias?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    folio_factura?: StringFieldUpdateOperationsInput | string
    fact_so?: StringFieldUpdateOperationsInput | string
    fecha_factura?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    unit_s_iva?: FloatFieldUpdateOperationsInput | number
    t_propietario?: t_propietarioUpdateOneRequiredWithoutT_facturaNestedInput
  }

  export type t_facturaUncheckedUpdateInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    proveedor_alias?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    folio_factura?: StringFieldUpdateOperationsInput | string
    fact_so?: StringFieldUpdateOperationsInput | string
    fecha_factura?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    unit_s_iva?: FloatFieldUpdateOperationsInput | number
  }

  export type t_facturaCreateManyInput = {
    id_factura?: number
    codigo_propietario: number
    proveedor_alias: string
    razon_social: string
    folio_factura: string
    fact_so: string
    fecha_factura: Date | string
    moneda: string
    unit_s_iva: number
  }

  export type t_facturaUpdateManyMutationInput = {
    proveedor_alias?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    folio_factura?: StringFieldUpdateOperationsInput | string
    fact_so?: StringFieldUpdateOperationsInput | string
    fecha_factura?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    unit_s_iva?: FloatFieldUpdateOperationsInput | number
  }

  export type t_facturaUncheckedUpdateManyInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    proveedor_alias?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    folio_factura?: StringFieldUpdateOperationsInput | string
    fact_so?: StringFieldUpdateOperationsInput | string
    fecha_factura?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    unit_s_iva?: FloatFieldUpdateOperationsInput | number
  }

  export type t_historial_articuloCreateInput = {
    id_usuario: number
    fecha_modificacion: Date | string
    id_dispositivos: number
    hostname: string
    ceco_sap_ant: string
    num_control_ant: number
    id_movimiento: number
  }

  export type t_historial_articuloUncheckedCreateInput = {
    id_historial?: number
    id_usuario: number
    fecha_modificacion: Date | string
    id_dispositivos: number
    hostname: string
    ceco_sap_ant: string
    num_control_ant: number
    id_movimiento: number
  }

  export type t_historial_articuloUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    hostname?: StringFieldUpdateOperationsInput | string
    ceco_sap_ant?: StringFieldUpdateOperationsInput | string
    num_control_ant?: IntFieldUpdateOperationsInput | number
    id_movimiento?: IntFieldUpdateOperationsInput | number
  }

  export type t_historial_articuloUncheckedUpdateInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    hostname?: StringFieldUpdateOperationsInput | string
    ceco_sap_ant?: StringFieldUpdateOperationsInput | string
    num_control_ant?: IntFieldUpdateOperationsInput | number
    id_movimiento?: IntFieldUpdateOperationsInput | number
  }

  export type t_historial_articuloCreateManyInput = {
    id_historial?: number
    id_usuario: number
    fecha_modificacion: Date | string
    id_dispositivos: number
    hostname: string
    ceco_sap_ant: string
    num_control_ant: number
    id_movimiento: number
  }

  export type t_historial_articuloUpdateManyMutationInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    hostname?: StringFieldUpdateOperationsInput | string
    ceco_sap_ant?: StringFieldUpdateOperationsInput | string
    num_control_ant?: IntFieldUpdateOperationsInput | number
    id_movimiento?: IntFieldUpdateOperationsInput | number
  }

  export type t_historial_articuloUncheckedUpdateManyInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    hostname?: StringFieldUpdateOperationsInput | string
    ceco_sap_ant?: StringFieldUpdateOperationsInput | string
    num_control_ant?: IntFieldUpdateOperationsInput | number
    id_movimiento?: IntFieldUpdateOperationsInput | number
  }

  export type t_movimientosCreateInput = {
    descripcion_movimineto: string
  }

  export type t_movimientosUncheckedCreateInput = {
    id_movimiento?: number
    descripcion_movimineto: string
  }

  export type t_movimientosUpdateInput = {
    descripcion_movimineto?: StringFieldUpdateOperationsInput | string
  }

  export type t_movimientosUncheckedUpdateInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    descripcion_movimineto?: StringFieldUpdateOperationsInput | string
  }

  export type t_movimientosCreateManyInput = {
    id_movimiento?: number
    descripcion_movimineto: string
  }

  export type t_movimientosUpdateManyMutationInput = {
    descripcion_movimineto?: StringFieldUpdateOperationsInput | string
  }

  export type t_movimientosUncheckedUpdateManyInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    descripcion_movimineto?: StringFieldUpdateOperationsInput | string
  }

  export type t_propietarioCreateInput = {
    codigo_propietario: number
    nombre: string
    t_factura?: t_facturaCreateNestedOneWithoutT_propietarioInput
    t_refacciones?: t_refaccionesCreateNestedOneWithoutT_propietarioInput
  }

  export type t_propietarioUncheckedCreateInput = {
    id_propietario?: number
    codigo_propietario: number
    nombre: string
    t_factura?: t_facturaUncheckedCreateNestedOneWithoutT_propietarioInput
    t_refacciones?: t_refaccionesUncheckedCreateNestedOneWithoutT_propietarioInput
  }

  export type t_propietarioUpdateInput = {
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    t_factura?: t_facturaUpdateOneWithoutT_propietarioNestedInput
    t_refacciones?: t_refaccionesUpdateOneWithoutT_propietarioNestedInput
  }

  export type t_propietarioUncheckedUpdateInput = {
    id_propietario?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    t_factura?: t_facturaUncheckedUpdateOneWithoutT_propietarioNestedInput
    t_refacciones?: t_refaccionesUncheckedUpdateOneWithoutT_propietarioNestedInput
  }

  export type t_propietarioCreateManyInput = {
    id_propietario?: number
    codigo_propietario: number
    nombre: string
  }

  export type t_propietarioUpdateManyMutationInput = {
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type t_propietarioUncheckedUpdateManyInput = {
    id_propietario?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type t_refaccionesCreateInput = {
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_ubicacion: number
    id_factura: number
    t_propietario: t_propietarioCreateNestedOneWithoutT_refaccionesInput
  }

  export type t_refaccionesUncheckedCreateInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_refaccionesUpdateInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
    t_propietario?: t_propietarioUpdateOneRequiredWithoutT_refaccionesNestedInput
  }

  export type t_refaccionesUncheckedUpdateInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_refaccionesCreateManyInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_propietario: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_refaccionesUpdateManyMutationInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_refaccionesUncheckedUpdateManyInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_rolesCreateInput = {
    nombre: string
  }

  export type t_rolesUncheckedCreateInput = {
    id_rol?: number
    nombre: string
  }

  export type t_rolesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type t_rolesUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type t_rolesCreateManyInput = {
    id_rol?: number
    nombre: string
  }

  export type t_rolesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type t_rolesUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type t_ubicacion_fisicaCreateInput = {
    codigo_ubicacion: number
    descripcion: string
  }

  export type t_ubicacion_fisicaUncheckedCreateInput = {
    id_ubicacion?: number
    codigo_ubicacion: number
    descripcion: string
  }

  export type t_ubicacion_fisicaUpdateInput = {
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type t_ubicacion_fisicaUncheckedUpdateInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type t_ubicacion_fisicaCreateManyInput = {
    id_ubicacion?: number
    codigo_ubicacion: number
    descripcion: string
  }

  export type t_ubicacion_fisicaUpdateManyMutationInput = {
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type t_ubicacion_fisicaUncheckedUpdateManyInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type t_usuarioCreateInput = {
    num_control: number
    id_rol: number
    contrasena: string
    status: boolean
  }

  export type t_usuarioUncheckedCreateInput = {
    id_usuario?: number
    num_control: number
    id_rol: number
    contrasena: string
    status: boolean
  }

  export type t_usuarioUpdateInput = {
    num_control?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    contrasena?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type t_usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    contrasena?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type t_usuarioCreateManyInput = {
    id_usuario?: number
    num_control: number
    id_rol: number
    contrasena: string
    status: boolean
  }

  export type t_usuarioUpdateManyMutationInput = {
    num_control?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    contrasena?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type t_usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    contrasena?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type t_accesoriosOrderByRelevanceInput = {
    fields: t_accesoriosOrderByRelevanceFieldEnum | t_accesoriosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_accesoriosCountOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_accesoriosAvgOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_accesoriosMaxOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_accesoriosMinOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_accesoriosSumOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type t_areas_sistemasOrderByRelevanceInput = {
    fields: t_areas_sistemasOrderByRelevanceFieldEnum | t_areas_sistemasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_areas_sistemasCountOrderByAggregateInput = {
    id_area?: SortOrder
    ceco_sap?: SortOrder
    descripcion_ceco?: SortOrder
    area_sistemas?: SortOrder
  }

  export type t_areas_sistemasAvgOrderByAggregateInput = {
    id_area?: SortOrder
    area_sistemas?: SortOrder
  }

  export type t_areas_sistemasMaxOrderByAggregateInput = {
    id_area?: SortOrder
    ceco_sap?: SortOrder
    descripcion_ceco?: SortOrder
    area_sistemas?: SortOrder
  }

  export type t_areas_sistemasMinOrderByAggregateInput = {
    id_area?: SortOrder
    ceco_sap?: SortOrder
    descripcion_ceco?: SortOrder
    area_sistemas?: SortOrder
  }

  export type t_areas_sistemasSumOrderByAggregateInput = {
    id_area?: SortOrder
    area_sistemas?: SortOrder
  }

  export type t_articulo_sistemasOrderByRelevanceInput = {
    fields: t_articulo_sistemasOrderByRelevanceFieldEnum | t_articulo_sistemasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_articulo_sistemasCountOrderByAggregateInput = {
    id_articulo?: SortOrder
    codigo_articulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    consecutivo?: SortOrder
  }

  export type t_articulo_sistemasAvgOrderByAggregateInput = {
    id_articulo?: SortOrder
    codigo_articulo?: SortOrder
    consecutivo?: SortOrder
  }

  export type t_articulo_sistemasMaxOrderByAggregateInput = {
    id_articulo?: SortOrder
    codigo_articulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    consecutivo?: SortOrder
  }

  export type t_articulo_sistemasMinOrderByAggregateInput = {
    id_articulo?: SortOrder
    codigo_articulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    consecutivo?: SortOrder
  }

  export type t_articulo_sistemasSumOrderByAggregateInput = {
    id_articulo?: SortOrder
    codigo_articulo?: SortOrder
    consecutivo?: SortOrder
  }

  export type t_colaboradoresOrderByRelevanceInput = {
    fields: t_colaboradoresOrderByRelevanceFieldEnum | t_colaboradoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_colaboradoresCountOrderByAggregateInput = {
    id_colaboradores?: SortOrder
    num_control?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    id_area?: SortOrder
  }

  export type t_colaboradoresAvgOrderByAggregateInput = {
    id_colaboradores?: SortOrder
    num_control?: SortOrder
    id_area?: SortOrder
  }

  export type t_colaboradoresMaxOrderByAggregateInput = {
    id_colaboradores?: SortOrder
    num_control?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    id_area?: SortOrder
  }

  export type t_colaboradoresMinOrderByAggregateInput = {
    id_colaboradores?: SortOrder
    num_control?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    id_area?: SortOrder
  }

  export type t_colaboradoresSumOrderByAggregateInput = {
    id_colaboradores?: SortOrder
    num_control?: SortOrder
    id_area?: SortOrder
  }

  export type t_consumiblesOrderByRelevanceInput = {
    fields: t_consumiblesOrderByRelevanceFieldEnum | t_consumiblesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_consumiblesCountOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_consumiblesAvgOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_consumiblesMaxOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_consumiblesMinOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_consumiblesSumOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_dispositivosOrderByRelevanceInput = {
    fields: t_dispositivosOrderByRelevanceFieldEnum | t_dispositivosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_dispositivosCountOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_dispositivosAvgOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_dispositivosMaxOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_dispositivosMinOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_dispositivosSumOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type T_propietarioScalarRelationFilter = {
    is?: t_propietarioWhereInput
    isNot?: t_propietarioWhereInput
  }

  export type t_facturaOrderByRelevanceInput = {
    fields: t_facturaOrderByRelevanceFieldEnum | t_facturaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_facturaCountOrderByAggregateInput = {
    id_factura?: SortOrder
    codigo_propietario?: SortOrder
    proveedor_alias?: SortOrder
    razon_social?: SortOrder
    folio_factura?: SortOrder
    fact_so?: SortOrder
    fecha_factura?: SortOrder
    moneda?: SortOrder
    unit_s_iva?: SortOrder
  }

  export type t_facturaAvgOrderByAggregateInput = {
    id_factura?: SortOrder
    codigo_propietario?: SortOrder
    unit_s_iva?: SortOrder
  }

  export type t_facturaMaxOrderByAggregateInput = {
    id_factura?: SortOrder
    codigo_propietario?: SortOrder
    proveedor_alias?: SortOrder
    razon_social?: SortOrder
    folio_factura?: SortOrder
    fact_so?: SortOrder
    fecha_factura?: SortOrder
    moneda?: SortOrder
    unit_s_iva?: SortOrder
  }

  export type t_facturaMinOrderByAggregateInput = {
    id_factura?: SortOrder
    codigo_propietario?: SortOrder
    proveedor_alias?: SortOrder
    razon_social?: SortOrder
    folio_factura?: SortOrder
    fact_so?: SortOrder
    fecha_factura?: SortOrder
    moneda?: SortOrder
    unit_s_iva?: SortOrder
  }

  export type t_facturaSumOrderByAggregateInput = {
    id_factura?: SortOrder
    codigo_propietario?: SortOrder
    unit_s_iva?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type t_historial_articuloOrderByRelevanceInput = {
    fields: t_historial_articuloOrderByRelevanceFieldEnum | t_historial_articuloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_historial_articuloCountOrderByAggregateInput = {
    id_historial?: SortOrder
    id_usuario?: SortOrder
    fecha_modificacion?: SortOrder
    id_dispositivos?: SortOrder
    hostname?: SortOrder
    ceco_sap_ant?: SortOrder
    num_control_ant?: SortOrder
    id_movimiento?: SortOrder
  }

  export type t_historial_articuloAvgOrderByAggregateInput = {
    id_historial?: SortOrder
    id_usuario?: SortOrder
    id_dispositivos?: SortOrder
    num_control_ant?: SortOrder
    id_movimiento?: SortOrder
  }

  export type t_historial_articuloMaxOrderByAggregateInput = {
    id_historial?: SortOrder
    id_usuario?: SortOrder
    fecha_modificacion?: SortOrder
    id_dispositivos?: SortOrder
    hostname?: SortOrder
    ceco_sap_ant?: SortOrder
    num_control_ant?: SortOrder
    id_movimiento?: SortOrder
  }

  export type t_historial_articuloMinOrderByAggregateInput = {
    id_historial?: SortOrder
    id_usuario?: SortOrder
    fecha_modificacion?: SortOrder
    id_dispositivos?: SortOrder
    hostname?: SortOrder
    ceco_sap_ant?: SortOrder
    num_control_ant?: SortOrder
    id_movimiento?: SortOrder
  }

  export type t_historial_articuloSumOrderByAggregateInput = {
    id_historial?: SortOrder
    id_usuario?: SortOrder
    id_dispositivos?: SortOrder
    num_control_ant?: SortOrder
    id_movimiento?: SortOrder
  }

  export type t_movimientosOrderByRelevanceInput = {
    fields: t_movimientosOrderByRelevanceFieldEnum | t_movimientosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_movimientosCountOrderByAggregateInput = {
    id_movimiento?: SortOrder
    descripcion_movimineto?: SortOrder
  }

  export type t_movimientosAvgOrderByAggregateInput = {
    id_movimiento?: SortOrder
  }

  export type t_movimientosMaxOrderByAggregateInput = {
    id_movimiento?: SortOrder
    descripcion_movimineto?: SortOrder
  }

  export type t_movimientosMinOrderByAggregateInput = {
    id_movimiento?: SortOrder
    descripcion_movimineto?: SortOrder
  }

  export type t_movimientosSumOrderByAggregateInput = {
    id_movimiento?: SortOrder
  }

  export type T_facturaNullableScalarRelationFilter = {
    is?: t_facturaWhereInput | null
    isNot?: t_facturaWhereInput | null
  }

  export type T_refaccionesNullableScalarRelationFilter = {
    is?: t_refaccionesWhereInput | null
    isNot?: t_refaccionesWhereInput | null
  }

  export type t_propietarioOrderByRelevanceInput = {
    fields: t_propietarioOrderByRelevanceFieldEnum | t_propietarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_propietarioCountOrderByAggregateInput = {
    id_propietario?: SortOrder
    codigo_propietario?: SortOrder
    nombre?: SortOrder
  }

  export type t_propietarioAvgOrderByAggregateInput = {
    id_propietario?: SortOrder
    codigo_propietario?: SortOrder
  }

  export type t_propietarioMaxOrderByAggregateInput = {
    id_propietario?: SortOrder
    codigo_propietario?: SortOrder
    nombre?: SortOrder
  }

  export type t_propietarioMinOrderByAggregateInput = {
    id_propietario?: SortOrder
    codigo_propietario?: SortOrder
    nombre?: SortOrder
  }

  export type t_propietarioSumOrderByAggregateInput = {
    id_propietario?: SortOrder
    codigo_propietario?: SortOrder
  }

  export type t_refaccionesOrderByRelevanceInput = {
    fields: t_refaccionesOrderByRelevanceFieldEnum | t_refaccionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_refaccionesCountOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_refaccionesAvgOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_refaccionesMaxOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_refaccionesMinOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    dispositivo?: SortOrder
    descripcion_sistemas?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    num_serie?: SortOrder
    id_visual?: SortOrder
    num_sap?: SortOrder
    status?: SortOrder
    extras?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_refaccionesSumOrderByAggregateInput = {
    id_dispositivos?: SortOrder
    num_sap?: SortOrder
    id_area?: SortOrder
    num_control?: SortOrder
    codigo_propietario?: SortOrder
    codigo_ubicacion?: SortOrder
    id_factura?: SortOrder
  }

  export type t_rolesOrderByRelevanceInput = {
    fields: t_rolesOrderByRelevanceFieldEnum | t_rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_rolesCountOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type t_rolesAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type t_rolesMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type t_rolesMinOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre?: SortOrder
  }

  export type t_rolesSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type t_ubicacion_fisicaOrderByRelevanceInput = {
    fields: t_ubicacion_fisicaOrderByRelevanceFieldEnum | t_ubicacion_fisicaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_ubicacion_fisicaCountOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    codigo_ubicacion?: SortOrder
    descripcion?: SortOrder
  }

  export type t_ubicacion_fisicaAvgOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    codigo_ubicacion?: SortOrder
  }

  export type t_ubicacion_fisicaMaxOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    codigo_ubicacion?: SortOrder
    descripcion?: SortOrder
  }

  export type t_ubicacion_fisicaMinOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    codigo_ubicacion?: SortOrder
    descripcion?: SortOrder
  }

  export type t_ubicacion_fisicaSumOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    codigo_ubicacion?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type t_usuarioOrderByRelevanceInput = {
    fields: t_usuarioOrderByRelevanceFieldEnum | t_usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_control?: SortOrder
    id_rol?: SortOrder
    contrasena?: SortOrder
    status?: SortOrder
  }

  export type t_usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_control?: SortOrder
    id_rol?: SortOrder
  }

  export type t_usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_control?: SortOrder
    id_rol?: SortOrder
    contrasena?: SortOrder
    status?: SortOrder
  }

  export type t_usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_control?: SortOrder
    id_rol?: SortOrder
    contrasena?: SortOrder
    status?: SortOrder
  }

  export type t_usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_control?: SortOrder
    id_rol?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type t_propietarioCreateNestedOneWithoutT_facturaInput = {
    create?: XOR<t_propietarioCreateWithoutT_facturaInput, t_propietarioUncheckedCreateWithoutT_facturaInput>
    connectOrCreate?: t_propietarioCreateOrConnectWithoutT_facturaInput
    connect?: t_propietarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type t_propietarioUpdateOneRequiredWithoutT_facturaNestedInput = {
    create?: XOR<t_propietarioCreateWithoutT_facturaInput, t_propietarioUncheckedCreateWithoutT_facturaInput>
    connectOrCreate?: t_propietarioCreateOrConnectWithoutT_facturaInput
    upsert?: t_propietarioUpsertWithoutT_facturaInput
    connect?: t_propietarioWhereUniqueInput
    update?: XOR<XOR<t_propietarioUpdateToOneWithWhereWithoutT_facturaInput, t_propietarioUpdateWithoutT_facturaInput>, t_propietarioUncheckedUpdateWithoutT_facturaInput>
  }

  export type t_facturaCreateNestedOneWithoutT_propietarioInput = {
    create?: XOR<t_facturaCreateWithoutT_propietarioInput, t_facturaUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_facturaCreateOrConnectWithoutT_propietarioInput
    connect?: t_facturaWhereUniqueInput
  }

  export type t_refaccionesCreateNestedOneWithoutT_propietarioInput = {
    create?: XOR<t_refaccionesCreateWithoutT_propietarioInput, t_refaccionesUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_refaccionesCreateOrConnectWithoutT_propietarioInput
    connect?: t_refaccionesWhereUniqueInput
  }

  export type t_facturaUncheckedCreateNestedOneWithoutT_propietarioInput = {
    create?: XOR<t_facturaCreateWithoutT_propietarioInput, t_facturaUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_facturaCreateOrConnectWithoutT_propietarioInput
    connect?: t_facturaWhereUniqueInput
  }

  export type t_refaccionesUncheckedCreateNestedOneWithoutT_propietarioInput = {
    create?: XOR<t_refaccionesCreateWithoutT_propietarioInput, t_refaccionesUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_refaccionesCreateOrConnectWithoutT_propietarioInput
    connect?: t_refaccionesWhereUniqueInput
  }

  export type t_facturaUpdateOneWithoutT_propietarioNestedInput = {
    create?: XOR<t_facturaCreateWithoutT_propietarioInput, t_facturaUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_facturaCreateOrConnectWithoutT_propietarioInput
    upsert?: t_facturaUpsertWithoutT_propietarioInput
    disconnect?: t_facturaWhereInput | boolean
    delete?: t_facturaWhereInput | boolean
    connect?: t_facturaWhereUniqueInput
    update?: XOR<XOR<t_facturaUpdateToOneWithWhereWithoutT_propietarioInput, t_facturaUpdateWithoutT_propietarioInput>, t_facturaUncheckedUpdateWithoutT_propietarioInput>
  }

  export type t_refaccionesUpdateOneWithoutT_propietarioNestedInput = {
    create?: XOR<t_refaccionesCreateWithoutT_propietarioInput, t_refaccionesUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_refaccionesCreateOrConnectWithoutT_propietarioInput
    upsert?: t_refaccionesUpsertWithoutT_propietarioInput
    disconnect?: t_refaccionesWhereInput | boolean
    delete?: t_refaccionesWhereInput | boolean
    connect?: t_refaccionesWhereUniqueInput
    update?: XOR<XOR<t_refaccionesUpdateToOneWithWhereWithoutT_propietarioInput, t_refaccionesUpdateWithoutT_propietarioInput>, t_refaccionesUncheckedUpdateWithoutT_propietarioInput>
  }

  export type t_facturaUncheckedUpdateOneWithoutT_propietarioNestedInput = {
    create?: XOR<t_facturaCreateWithoutT_propietarioInput, t_facturaUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_facturaCreateOrConnectWithoutT_propietarioInput
    upsert?: t_facturaUpsertWithoutT_propietarioInput
    disconnect?: t_facturaWhereInput | boolean
    delete?: t_facturaWhereInput | boolean
    connect?: t_facturaWhereUniqueInput
    update?: XOR<XOR<t_facturaUpdateToOneWithWhereWithoutT_propietarioInput, t_facturaUpdateWithoutT_propietarioInput>, t_facturaUncheckedUpdateWithoutT_propietarioInput>
  }

  export type t_refaccionesUncheckedUpdateOneWithoutT_propietarioNestedInput = {
    create?: XOR<t_refaccionesCreateWithoutT_propietarioInput, t_refaccionesUncheckedCreateWithoutT_propietarioInput>
    connectOrCreate?: t_refaccionesCreateOrConnectWithoutT_propietarioInput
    upsert?: t_refaccionesUpsertWithoutT_propietarioInput
    disconnect?: t_refaccionesWhereInput | boolean
    delete?: t_refaccionesWhereInput | boolean
    connect?: t_refaccionesWhereUniqueInput
    update?: XOR<XOR<t_refaccionesUpdateToOneWithWhereWithoutT_propietarioInput, t_refaccionesUpdateWithoutT_propietarioInput>, t_refaccionesUncheckedUpdateWithoutT_propietarioInput>
  }

  export type t_propietarioCreateNestedOneWithoutT_refaccionesInput = {
    create?: XOR<t_propietarioCreateWithoutT_refaccionesInput, t_propietarioUncheckedCreateWithoutT_refaccionesInput>
    connectOrCreate?: t_propietarioCreateOrConnectWithoutT_refaccionesInput
    connect?: t_propietarioWhereUniqueInput
  }

  export type t_propietarioUpdateOneRequiredWithoutT_refaccionesNestedInput = {
    create?: XOR<t_propietarioCreateWithoutT_refaccionesInput, t_propietarioUncheckedCreateWithoutT_refaccionesInput>
    connectOrCreate?: t_propietarioCreateOrConnectWithoutT_refaccionesInput
    upsert?: t_propietarioUpsertWithoutT_refaccionesInput
    connect?: t_propietarioWhereUniqueInput
    update?: XOR<XOR<t_propietarioUpdateToOneWithWhereWithoutT_refaccionesInput, t_propietarioUpdateWithoutT_refaccionesInput>, t_propietarioUncheckedUpdateWithoutT_refaccionesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type t_propietarioCreateWithoutT_facturaInput = {
    codigo_propietario: number
    nombre: string
    t_refacciones?: t_refaccionesCreateNestedOneWithoutT_propietarioInput
  }

  export type t_propietarioUncheckedCreateWithoutT_facturaInput = {
    id_propietario?: number
    codigo_propietario: number
    nombre: string
    t_refacciones?: t_refaccionesUncheckedCreateNestedOneWithoutT_propietarioInput
  }

  export type t_propietarioCreateOrConnectWithoutT_facturaInput = {
    where: t_propietarioWhereUniqueInput
    create: XOR<t_propietarioCreateWithoutT_facturaInput, t_propietarioUncheckedCreateWithoutT_facturaInput>
  }

  export type t_propietarioUpsertWithoutT_facturaInput = {
    update: XOR<t_propietarioUpdateWithoutT_facturaInput, t_propietarioUncheckedUpdateWithoutT_facturaInput>
    create: XOR<t_propietarioCreateWithoutT_facturaInput, t_propietarioUncheckedCreateWithoutT_facturaInput>
    where?: t_propietarioWhereInput
  }

  export type t_propietarioUpdateToOneWithWhereWithoutT_facturaInput = {
    where?: t_propietarioWhereInput
    data: XOR<t_propietarioUpdateWithoutT_facturaInput, t_propietarioUncheckedUpdateWithoutT_facturaInput>
  }

  export type t_propietarioUpdateWithoutT_facturaInput = {
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    t_refacciones?: t_refaccionesUpdateOneWithoutT_propietarioNestedInput
  }

  export type t_propietarioUncheckedUpdateWithoutT_facturaInput = {
    id_propietario?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    t_refacciones?: t_refaccionesUncheckedUpdateOneWithoutT_propietarioNestedInput
  }

  export type t_facturaCreateWithoutT_propietarioInput = {
    proveedor_alias: string
    razon_social: string
    folio_factura: string
    fact_so: string
    fecha_factura: Date | string
    moneda: string
    unit_s_iva: number
  }

  export type t_facturaUncheckedCreateWithoutT_propietarioInput = {
    id_factura?: number
    proveedor_alias: string
    razon_social: string
    folio_factura: string
    fact_so: string
    fecha_factura: Date | string
    moneda: string
    unit_s_iva: number
  }

  export type t_facturaCreateOrConnectWithoutT_propietarioInput = {
    where: t_facturaWhereUniqueInput
    create: XOR<t_facturaCreateWithoutT_propietarioInput, t_facturaUncheckedCreateWithoutT_propietarioInput>
  }

  export type t_refaccionesCreateWithoutT_propietarioInput = {
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_refaccionesUncheckedCreateWithoutT_propietarioInput = {
    id_dispositivos?: number
    dispositivo: string
    descripcion_sistemas: string
    marca: string
    modelo: string
    num_serie: string
    id_visual: string
    num_sap: number
    status: string
    extras: string
    id_area: number
    num_control: number
    codigo_ubicacion: number
    id_factura: number
  }

  export type t_refaccionesCreateOrConnectWithoutT_propietarioInput = {
    where: t_refaccionesWhereUniqueInput
    create: XOR<t_refaccionesCreateWithoutT_propietarioInput, t_refaccionesUncheckedCreateWithoutT_propietarioInput>
  }

  export type t_facturaUpsertWithoutT_propietarioInput = {
    update: XOR<t_facturaUpdateWithoutT_propietarioInput, t_facturaUncheckedUpdateWithoutT_propietarioInput>
    create: XOR<t_facturaCreateWithoutT_propietarioInput, t_facturaUncheckedCreateWithoutT_propietarioInput>
    where?: t_facturaWhereInput
  }

  export type t_facturaUpdateToOneWithWhereWithoutT_propietarioInput = {
    where?: t_facturaWhereInput
    data: XOR<t_facturaUpdateWithoutT_propietarioInput, t_facturaUncheckedUpdateWithoutT_propietarioInput>
  }

  export type t_facturaUpdateWithoutT_propietarioInput = {
    proveedor_alias?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    folio_factura?: StringFieldUpdateOperationsInput | string
    fact_so?: StringFieldUpdateOperationsInput | string
    fecha_factura?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    unit_s_iva?: FloatFieldUpdateOperationsInput | number
  }

  export type t_facturaUncheckedUpdateWithoutT_propietarioInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    proveedor_alias?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    folio_factura?: StringFieldUpdateOperationsInput | string
    fact_so?: StringFieldUpdateOperationsInput | string
    fecha_factura?: DateTimeFieldUpdateOperationsInput | Date | string
    moneda?: StringFieldUpdateOperationsInput | string
    unit_s_iva?: FloatFieldUpdateOperationsInput | number
  }

  export type t_refaccionesUpsertWithoutT_propietarioInput = {
    update: XOR<t_refaccionesUpdateWithoutT_propietarioInput, t_refaccionesUncheckedUpdateWithoutT_propietarioInput>
    create: XOR<t_refaccionesCreateWithoutT_propietarioInput, t_refaccionesUncheckedCreateWithoutT_propietarioInput>
    where?: t_refaccionesWhereInput
  }

  export type t_refaccionesUpdateToOneWithWhereWithoutT_propietarioInput = {
    where?: t_refaccionesWhereInput
    data: XOR<t_refaccionesUpdateWithoutT_propietarioInput, t_refaccionesUncheckedUpdateWithoutT_propietarioInput>
  }

  export type t_refaccionesUpdateWithoutT_propietarioInput = {
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_refaccionesUncheckedUpdateWithoutT_propietarioInput = {
    id_dispositivos?: IntFieldUpdateOperationsInput | number
    dispositivo?: StringFieldUpdateOperationsInput | string
    descripcion_sistemas?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    num_serie?: StringFieldUpdateOperationsInput | string
    id_visual?: StringFieldUpdateOperationsInput | string
    num_sap?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    extras?: StringFieldUpdateOperationsInput | string
    id_area?: IntFieldUpdateOperationsInput | number
    num_control?: IntFieldUpdateOperationsInput | number
    codigo_ubicacion?: IntFieldUpdateOperationsInput | number
    id_factura?: IntFieldUpdateOperationsInput | number
  }

  export type t_propietarioCreateWithoutT_refaccionesInput = {
    codigo_propietario: number
    nombre: string
    t_factura?: t_facturaCreateNestedOneWithoutT_propietarioInput
  }

  export type t_propietarioUncheckedCreateWithoutT_refaccionesInput = {
    id_propietario?: number
    codigo_propietario: number
    nombre: string
    t_factura?: t_facturaUncheckedCreateNestedOneWithoutT_propietarioInput
  }

  export type t_propietarioCreateOrConnectWithoutT_refaccionesInput = {
    where: t_propietarioWhereUniqueInput
    create: XOR<t_propietarioCreateWithoutT_refaccionesInput, t_propietarioUncheckedCreateWithoutT_refaccionesInput>
  }

  export type t_propietarioUpsertWithoutT_refaccionesInput = {
    update: XOR<t_propietarioUpdateWithoutT_refaccionesInput, t_propietarioUncheckedUpdateWithoutT_refaccionesInput>
    create: XOR<t_propietarioCreateWithoutT_refaccionesInput, t_propietarioUncheckedCreateWithoutT_refaccionesInput>
    where?: t_propietarioWhereInput
  }

  export type t_propietarioUpdateToOneWithWhereWithoutT_refaccionesInput = {
    where?: t_propietarioWhereInput
    data: XOR<t_propietarioUpdateWithoutT_refaccionesInput, t_propietarioUncheckedUpdateWithoutT_refaccionesInput>
  }

  export type t_propietarioUpdateWithoutT_refaccionesInput = {
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    t_factura?: t_facturaUpdateOneWithoutT_propietarioNestedInput
  }

  export type t_propietarioUncheckedUpdateWithoutT_refaccionesInput = {
    id_propietario?: IntFieldUpdateOperationsInput | number
    codigo_propietario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    t_factura?: t_facturaUncheckedUpdateOneWithoutT_propietarioNestedInput
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