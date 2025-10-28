import { Injectable } from "@nestjs/common";
import { EventBusPort } from "src/ports/out/event-bus.port";
import * as amqp from 'amqplib';
import { publicDecrypt } from "crypto";
import { MovimientoDispositivoEvent } from "src/domain/events/movimiento-dispositivo.event";

@Injectable()
export class RABBITMQEventBusAdapter implements EventBusPort {
    private channel: amqp.Channel;

    async init() {
        const connection = await amqp.connect('amqp://localhost');
        this.channel = await connection.createChannel();
        await this.channel.assertExchange('dispositivo', 'fanout', { dirable: true });
    }

    async publish(event: MovimientoDispositivoEvent): Promise<void> {
        this.channel.publish('dispositivo', '', Buffer.from(JSON.stringify(event)), { persistent: true })
    }
}