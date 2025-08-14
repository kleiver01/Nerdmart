import TecladoImage from '../assets/images/Teclado Mecánico RGB.jpg';
import MonitorImage from '../assets/images/Monitor Curvo 27 144Hz.webp';
import AuricularesImage from '../assets/images/Auriculares Inalámbricos Noise Cancelling.jpg';
import MouseImage from '../assets/images/Mouse Gaming Ergonómico.jpg';
import WebcamImage from '../assets/images/Webcam Full HD 1080p.png';
import SillaImage from '../assets/images/Silla Gaming Ergonómica.png';
import TarjetaGraficaImage from '../assets/images/Tarjeta Gráfica RTX 4090.jpg';
import ProcesadorImage from '../assets/images/Procesador Intel i9-14900K.png';
import SSDImage from '../assets/images/SSD NVMe 2TB.jpg';

export const products = [
  {
    id: '1',
    name: 'Teclado Mecánico RGB',
    description: 'Teclado gaming con switches Cherry MX y retroiluminación RGB personalizable.',
    price: 129.99,
    imageUrl: TecladoImage,
    category: 'Periféricos',
    rating: 4.8,
    reviews: 150,
  },
  {
    id: '2',
    name: 'Monitor Curvo 27" 144Hz',
    description: 'Monitor de alta gama para gaming y diseño, con resolución QHD y 1ms de respuesta.',
    price: 399.99,
    imageUrl: MonitorImage,
    category: 'Monitores',
    rating: 4.7,
    reviews: 90,
  },
  {
    id: '3',
    name: 'Auriculares Inalámbricos Noise Cancelling',
    description: 'Sonido premium con cancelación de ruido activa y batería de larga duración.',
    price: 199.99,
    imageUrl: AuricularesImage,
    category: 'Audio',
    rating: 4.9,
    reviews: 230,
  },
  {
    id: '4',
    name: 'Mouse Gaming Ergonómico',
    description: 'Mouse de alta precisión con DPI ajustable y diseño ergonómico para largas sesiones.',
    price: 59.99,
    imageUrl: MouseImage,
    category: 'Periféricos',
    rating: 4.5,
    reviews: 180,
  },
  {
    id: '5',
    name: 'Webcam Full HD 1080p',
    description: 'Ideal para streaming y videollamadas, con enfoque automático y micrófono integrado.',
    price: 79.99,
    imageUrl: WebcamImage,
    category: 'Accesorios',
    rating: 4.2,
    reviews: 75,
  },
  {
    id: '6',
    name: 'Silla Gaming Ergonómica',
    description: 'Silla con soporte lumbar y cervical, ideal para largas horas de juego o trabajo.',
    price: 249.99,
    imageUrl: SillaImage,
    category: 'Mobiliario',
    rating: 4.6,
    reviews: 110,
  },
  {
    id: '7',
    name: 'Tarjeta Gráfica RTX 4090',
    description: 'La GPU más potente para gaming y renderizado 3D.',
    price: 1599.99,
    imageUrl: TarjetaGraficaImage,
    category: 'Componentes',
    rating: 4.9,
    reviews: 300,
  },
  {
    id: '8',
    name: 'Procesador Intel i9-14900K',
    description: 'Procesador de última generación para el máximo rendimiento.',
    price: 589.99,
    imageUrl: ProcesadorImage,
    category: 'Componentes',
    rating: 4.7,
    reviews: 210,
  },
  {
    id: '9',
    name: 'SSD NVMe 2TB',
    description: 'Almacenamiento ultrarrápido para tus juegos y aplicaciones.',
    price: 189.99,
    imageUrl: SSDImage,
    category: 'Componentes',
    rating: 4.8,
    reviews: 190,
  },
];

export const categories = [
  'Todos',
  'Periféricos',
  'Monitores',
  'Audio',
  'Accesorios',
  'Mobiliario',
  'Componentes',
];