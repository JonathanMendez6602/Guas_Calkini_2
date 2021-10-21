export interface Vehiculo {
    id: number;
    modelo: string;
    marca: string;
    foto_vehiculo: string;
    color: string;
    placas: string;
    inventario: string;
    foto_inventario: string;
    llaves: string;
    tipo_servicio: string;
    lugar_siniestro: string;
    descripcion: string;
    aseguradora: string;
    nombre_aseguradora: string;
    particular: string;
    nombre_particular: string;
    apellido_materno: string;
    apellido_paterno: string;
    corralon: string;
    fecha_entrada: Date;
    pension_c: string;
    dias_pension: number;
    status_entrega: string;
    fecha_entrega: Date;
    otro_asunto: string;
}
