import { Data } from "@angular/router";

export interface Corralon {
    id_vehiculo: number;
    fecha_entrada: Date;
    pension_c: number;
    dias_pension: number;
    status_entrega: string;
    fecha_entrega: Data;
    otro_asunto: string;
}
