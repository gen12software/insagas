export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  whatsappMessage: string;
}

export interface WorkItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string | null;
}

export interface AboutContent {
  description: string;
  matricula: string;
  zonaCobertura: string;
  copyrightYear: number;
  address: string;
  horarios: string;
  horarioAtencionPresencial: string;
}
