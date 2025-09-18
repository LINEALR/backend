import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
    saludo: t.procedure
        .input(z.object({ nombre: z.string() }))
        .query(({ input }) => {
            return { mensaje: `Hola, ${input.nombre} desde NestJS 🚀` };
        }),


    suma: t.procedure
        .input(z.object({ a: z.number(), b: z.number() }))
        .mutation(({ input }) => {
            return { resultado: input.a + input.b}
        }),
});

export type AppRouter = typeof appRouter;