import json
import pika
from qr_generator import generar_etiqueta_reorganizada

RABBITMQ = "amp://guest:guest@localhost:5672"

def on_request(ch, method, props, body):
    data = json.loads(body)
    serial_num = data["serial_num"]
    counter = data["counter"]

    generar_etiqueta_reorganizada(serial_num, counter)

    filename = f"etiqueta_P{serial_num:03d}_{counter:03d}.png"

    ch.basic_publish(
        exchange = '',
        routing_key = props.reply_to,
        properties = pika.BasicProperties(correlation_id=props.correlation_id),
        body = json.dumps({"ruta": filename})
    )

    ch.basic_ack(delivery_tag=method.delivery_tag)

def main():
    params = pika.URLParameters(RABBITMQ)
    connection = pika.BlockingConnection(params)
    channel = connection.channel()
    channel.queue_declare(queue='qr_generation_queue', durable=True)
    channel.basic_qos(prefetch_count=1)
    channel.basic_consume(queue='qr_generation_queue', on_message_callback=on_request)
    print("⏳ Esperando solicitudes RPC en RabbitMQ...")
    channel.start_consuming()
if __name__ == "__main__":
    main()