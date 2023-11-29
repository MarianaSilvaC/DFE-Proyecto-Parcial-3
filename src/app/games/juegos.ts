export interface Videojuego {
    titulo: string;
    imagen: string;
    descripcion: string;
    precio: number;
    estrellas: number;
    plataforma: string [];
    tags: string [];
  }

  export interface Producto {
    titulo: string;
    precio: string;
    cantidad: number;
    subtotal: string;
  }
  
  export interface Ventas {
    id: number;
    productos: Producto[];
    vendedor: string;
    fecha: string;
    total: number;
  }
  
  
  
 
  