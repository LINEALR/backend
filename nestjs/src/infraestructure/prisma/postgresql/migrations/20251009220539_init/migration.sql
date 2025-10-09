-- CreateTable
CREATE TABLE "public"."t_accesorios" (
    "id_accesorios" SERIAL NOT NULL,
    "dispositivo" VARCHAR(255) NOT NULL,
    "descripcion_sistemas" VARCHAR(255) NOT NULL,
    "marca" VARCHAR(255) NOT NULL,
    "modelo" VARCHAR(255) NOT NULL,
    "num_serie" VARCHAR(255) NOT NULL,
    "id_visual" VARCHAR(255) NOT NULL,
    "num_sap" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "extras" VARCHAR(255) NOT NULL,
    "id_area" INTEGER NOT NULL,
    "num_control" INTEGER NOT NULL,
    "codigo_propietario" INTEGER NOT NULL,
    "codigo_ubicacion" INTEGER NOT NULL,
    "id_factura" INTEGER NOT NULL,

    CONSTRAINT "T_accesorios_pkey" PRIMARY KEY ("id_accesorios")
);

-- CreateTable
CREATE TABLE "public"."t_areas_sistemas" (
    "id_area" SERIAL NOT NULL,
    "ceco_sap" VARCHAR(255) NOT NULL,
    "descripcion_ceco" VARCHAR(255) NOT NULL,
    "area_sistemas" VARCHAR(255) NOT NULL,

    CONSTRAINT "T_areas_sistemas_pkey" PRIMARY KEY ("id_area")
);

-- CreateTable
CREATE TABLE "public"."t_articulo_sistemas" (
    "id_articulo" SERIAL NOT NULL,
    "codigo_articulo" INTEGER NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "identificador" VARCHAR(255) NOT NULL,
    "consecutivo" INTEGER NOT NULL,

    CONSTRAINT "T_articulo_sistemas_pkey" PRIMARY KEY ("id_articulo")
);

-- CreateTable
CREATE TABLE "public"."t_colaboradores" (
    "id_colaboradores" SERIAL NOT NULL,
    "num_control" INTEGER NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "correo" VARCHAR(255) NOT NULL DEFAULT 'N/A',
    "id_area" INTEGER NOT NULL,

    CONSTRAINT "T_colaboradores_pkey" PRIMARY KEY ("id_colaboradores")
);

-- CreateTable
CREATE TABLE "public"."t_consumibles" (
    "id_consumibles" SERIAL NOT NULL,
    "dispositivo" VARCHAR(255) NOT NULL,
    "descripcion_sistemas" VARCHAR(255) NOT NULL,
    "marca" VARCHAR(255) NOT NULL,
    "modelo" VARCHAR(255) NOT NULL,
    "num_serie" VARCHAR(255) NOT NULL,
    "id_visual" VARCHAR(255) NOT NULL,
    "num_sap" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "extras" VARCHAR(255) NOT NULL,
    "id_area" INTEGER NOT NULL,
    "num_control" INTEGER NOT NULL,
    "codigo_propietario" INTEGER NOT NULL,
    "codigo_ubicacion" INTEGER NOT NULL,
    "id_factura" INTEGER NOT NULL,

    CONSTRAINT "T_consumibles_pkey" PRIMARY KEY ("id_consumibles")
);

-- CreateTable
CREATE TABLE "public"."t_dispositivos" (
    "id_dispositivos" SERIAL NOT NULL,
    "dispositivo" VARCHAR(255) NOT NULL,
    "descripcion_sistemas" VARCHAR(255) NOT NULL,
    "marca" VARCHAR(255) NOT NULL,
    "modelo" VARCHAR(255) NOT NULL,
    "num_serie" VARCHAR(255) NOT NULL,
    "id_visual" VARCHAR(255) NOT NULL,
    "num_sap" INTEGER,
    "status" VARCHAR(255) NOT NULL,
    "extras" VARCHAR(255) NOT NULL,
    "id_area" INTEGER NOT NULL,
    "num_control" INTEGER NOT NULL,
    "codigo_propietario" INTEGER NOT NULL,
    "codigo_ubicacion" INTEGER NOT NULL,
    "id_factura" INTEGER NOT NULL,

    CONSTRAINT "T_dispositivos_pkey" PRIMARY KEY ("id_dispositivos")
);

-- CreateTable
CREATE TABLE "public"."t_factura" (
    "id_factura" SERIAL NOT NULL,
    "codigo_propietario" INTEGER NOT NULL,
    "proveedor_alias" VARCHAR(255) NOT NULL,
    "razon_social" VARCHAR(255) NOT NULL,
    "folio_factura" VARCHAR(255) NOT NULL,
    "fact_so" VARCHAR(255) NOT NULL,
    "fecha_factura" DATE,
    "moneda" VARCHAR(255) NOT NULL,
    "unit_s_iva" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "T_factura_pkey" PRIMARY KEY ("id_factura")
);

-- CreateTable
CREATE TABLE "public"."t_historial_articulo" (
    "id_historial" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "fecha_modificacion" DATE NOT NULL,
    "id_dispositivos" INTEGER NOT NULL,
    "hostname" VARCHAR(255) NOT NULL,
    "ceco_sap_ant" VARCHAR(255) NOT NULL,
    "num_control_ant" INTEGER NOT NULL,
    "id_movimiento" INTEGER NOT NULL,

    CONSTRAINT "T_historial_articulo_pkey" PRIMARY KEY ("id_historial")
);

-- CreateTable
CREATE TABLE "public"."t_movimientos" (
    "id_movimiento" SERIAL NOT NULL,
    "descripcion_movimineto" VARCHAR(255) NOT NULL,

    CONSTRAINT "T_movimientos_pkey" PRIMARY KEY ("id_movimiento")
);

-- CreateTable
CREATE TABLE "public"."t_propietario" (
    "id_propietario" SERIAL NOT NULL,
    "codigo_propietario" INTEGER NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,

    CONSTRAINT "T_propietario_pkey" PRIMARY KEY ("id_propietario")
);

-- CreateTable
CREATE TABLE "public"."t_refacciones" (
    "id_refacciones" SERIAL NOT NULL,
    "dispositivo" VARCHAR(255) NOT NULL,
    "descripcion_sistemas" VARCHAR(255) NOT NULL,
    "marca" VARCHAR(255) NOT NULL,
    "modelo" VARCHAR(255) NOT NULL,
    "num_serie" VARCHAR(255) NOT NULL,
    "id_visual" VARCHAR(255) NOT NULL,
    "num_sap" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "extras" VARCHAR(255) NOT NULL,
    "id_area" INTEGER NOT NULL,
    "num_control" INTEGER NOT NULL,
    "codigo_propietario" INTEGER NOT NULL,
    "codigo_ubicacion" INTEGER NOT NULL,
    "id_factura" INTEGER NOT NULL,

    CONSTRAINT "T_refacciones_pkey" PRIMARY KEY ("id_refacciones")
);

-- CreateTable
CREATE TABLE "public"."t_roles" (
    "id_rol" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,

    CONSTRAINT "T_roles_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "public"."t_ubicacion_fisica" (
    "id_ubicacion" SERIAL NOT NULL,
    "codigo_ubicacion" INTEGER NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,

    CONSTRAINT "T_ubicacion_fisica_pkey" PRIMARY KEY ("id_ubicacion")
);

-- CreateTable
CREATE TABLE "public"."t_usuario" (
    "id_usuario" SERIAL NOT NULL,
    "num_control" INTEGER NOT NULL,
    "id_rol" INTEGER NOT NULL,
    "contrasena" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "T_usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- AddForeignKey
ALTER TABLE "public"."t_accesorios" ADD CONSTRAINT "t_accesorios_codigo_propietario_foreign" FOREIGN KEY ("codigo_propietario") REFERENCES "public"."t_propietario"("id_propietario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_accesorios" ADD CONSTRAINT "t_accesorios_codigo_ubicacion_foreign" FOREIGN KEY ("codigo_ubicacion") REFERENCES "public"."t_ubicacion_fisica"("id_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_accesorios" ADD CONSTRAINT "t_accesorios_id_area_foreign" FOREIGN KEY ("id_area") REFERENCES "public"."t_areas_sistemas"("id_area") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_accesorios" ADD CONSTRAINT "t_accesorios_id_factura_foreign" FOREIGN KEY ("id_factura") REFERENCES "public"."t_factura"("id_factura") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_accesorios" ADD CONSTRAINT "t_accesorios_num_control_foreign" FOREIGN KEY ("num_control") REFERENCES "public"."t_colaboradores"("id_colaboradores") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_colaboradores" ADD CONSTRAINT "t_colaboradores_id_area_foreign" FOREIGN KEY ("id_area") REFERENCES "public"."t_areas_sistemas"("id_area") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_consumibles" ADD CONSTRAINT "t_consumibles_codigo_propietario_foreign" FOREIGN KEY ("codigo_propietario") REFERENCES "public"."t_propietario"("id_propietario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_consumibles" ADD CONSTRAINT "t_consumibles_codigo_ubicacion_foreign" FOREIGN KEY ("codigo_ubicacion") REFERENCES "public"."t_ubicacion_fisica"("id_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_consumibles" ADD CONSTRAINT "t_consumibles_id_area_foreign" FOREIGN KEY ("id_area") REFERENCES "public"."t_areas_sistemas"("id_area") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_consumibles" ADD CONSTRAINT "t_consumibles_id_factura_foreign" FOREIGN KEY ("id_factura") REFERENCES "public"."t_factura"("id_factura") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_consumibles" ADD CONSTRAINT "t_consumibles_num_control_foreign" FOREIGN KEY ("num_control") REFERENCES "public"."t_colaboradores"("id_colaboradores") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_dispositivos" ADD CONSTRAINT "t_dispositivos_codigo_propietario_foreign" FOREIGN KEY ("codigo_propietario") REFERENCES "public"."t_propietario"("id_propietario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_dispositivos" ADD CONSTRAINT "t_dispositivos_codigo_ubicacion_foreign" FOREIGN KEY ("codigo_ubicacion") REFERENCES "public"."t_ubicacion_fisica"("id_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_dispositivos" ADD CONSTRAINT "t_dispositivos_id_area_foreign" FOREIGN KEY ("id_area") REFERENCES "public"."t_areas_sistemas"("id_area") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_dispositivos" ADD CONSTRAINT "t_dispositivos_id_factura_foreign" FOREIGN KEY ("id_factura") REFERENCES "public"."t_factura"("id_factura") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_dispositivos" ADD CONSTRAINT "t_dispositivos_num_control_foreign" FOREIGN KEY ("num_control") REFERENCES "public"."t_colaboradores"("id_colaboradores") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_factura" ADD CONSTRAINT "t_factura_codigo_propietario_foreign" FOREIGN KEY ("codigo_propietario") REFERENCES "public"."t_propietario"("id_propietario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_refacciones" ADD CONSTRAINT "t_refacciones_codigo_propietario_foreign" FOREIGN KEY ("codigo_propietario") REFERENCES "public"."t_propietario"("id_propietario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_refacciones" ADD CONSTRAINT "t_refacciones_codigo_ubicacion_foreign" FOREIGN KEY ("codigo_ubicacion") REFERENCES "public"."t_ubicacion_fisica"("id_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_refacciones" ADD CONSTRAINT "t_refacciones_id_area_foreign" FOREIGN KEY ("id_area") REFERENCES "public"."t_areas_sistemas"("id_area") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_refacciones" ADD CONSTRAINT "t_refacciones_id_factura_foreign" FOREIGN KEY ("id_factura") REFERENCES "public"."t_factura"("id_factura") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_refacciones" ADD CONSTRAINT "t_refacciones_num_control_foreign" FOREIGN KEY ("num_control") REFERENCES "public"."t_colaboradores"("id_colaboradores") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_usuario" ADD CONSTRAINT "t_usuario_id_rol_foreign" FOREIGN KEY ("id_rol") REFERENCES "public"."t_roles"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."t_usuario" ADD CONSTRAINT "t_usuario_id_usuario_foreign" FOREIGN KEY ("id_usuario") REFERENCES "public"."t_colaboradores"("id_colaboradores") ON DELETE NO ACTION ON UPDATE NO ACTION;
