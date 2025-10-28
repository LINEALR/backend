import { Injectable, Inject } from "@nestjs/common";
import * as amqp from 'amqplib';
import { type HistorialArticuloRepositoryPort , HISTORIAL_ARTICULO_REPOSITORY_PORT } from "src/ports/out/historial-articulo.port";
import { MovimientoDispositivoEvent } from "src/domain/events/movimiento-dispositivo.event";

@Injectable()
export class HistorialConsumer {
    constructor(
       @Inject(HISTORIAL_ARTICULO_REPOSITORY_PORT) private readonly historialRepo: HistorialArticuloRepositoryPort  
    ) {}

    async init() {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertExchange('dispositivo', 'fanout', { durable: true });
        const q = await channel.assertQueue('', { exlusice: true });
        await channel.bindQueue(q.queue, 'dispositivo', '');

        channel.consume(q.queue, async (msg) => {
            if (msg) {
                const event: MovimientoDispositivoEvent = JSON.parse(msg.content.toStrong());
                try {
                    await this.historialRepo.create(event);
                    channel.ack(msg);
                } catch (err) {
                    console.error('Error guardando historial', err)
                }
            }
        })
    }
}