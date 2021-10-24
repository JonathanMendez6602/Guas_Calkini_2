import { Data } from "@angular/router";

export interface Corralon {
    id: number;
    fecha_entrada: Date;
    pension_c: string;
    dias_pension: number;
    status_entrega: string;
    fecha_entrega: Date;
    otro_asunto: string;
    id_vehiculo: number;
}
