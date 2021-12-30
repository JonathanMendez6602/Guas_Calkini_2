export interface Interfaces {
    
}
export interface Chofer{
    id: number;
    nombre: string;
    apellido_m: string;
    apellido_p: string;
    edad: number;
    doc_lic_fed_n: string;
    doc_lic_fed: string;
    fecha_lic_fed: Date;
    num_lic_fed: number;
    doc_lic_est_n: string;
    doc_lic_est: string;
    fecha_lic_est: Date;
    num_lic_est: number;
    doc_ine_n: string;
    doc_ine: string;
    doc_curp_n: string;
    doc_curp: string;
    sucursal: string;
    estado: String;
}
export interface Vehiculo{
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
    nombre: string;
    sucursal: string;
}
export interface Aseguradora{
    id: number;
    nombre_aseguradora: string;
}
export interface Sucursal{
    id: number;
    sucursal: string;
}
export interface Grua{
    id: number;
    marca: string;
    modelo: string;
    num_serie: number;
    placas: string;
    anio: number;
    num_motor: number;
    tipo_est_o_fed: string;
    doc_tarjcirculacion: string
    doc_cartaporte: string;
    doc_polizaseguro: string;
    doc_factura: string;
    doc_consecion: string;
    doc_inclusion: string;
    doc_permiso_fisicomec: string;
    doc_anticontaminantes: string;
    doc_tarjcirculacion_n: string;
    doc_cartaporte_n: string;
    doc_polizaseguro_n: string;
    doc_factura_n: string;
    doc_consecion_n: string;
    doc_inclusion_n: string;
    doc_permiso_fisicomec_n: string;
    doc_anticontaminantes_n: string;
    sucursal: string;
}
export interface Corralon{
    id: number;
    fecha_entrada: Date;
    pension_c: string;
    dias_pension: number;
    status_entrega: string;
    fecha_entrega: Date;
    otro_asunto: string;
    id_vehiculo: number;
    tipo_vehiculo: String;
    costo_total: number;
    sucursal: string;
}
export interface Catalogo{
    id: number;
    tipoVehiculo: string;
    costo: string;
}
