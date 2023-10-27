export interface Alert {
	type: string;
	message: string;
}

export const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'Este test está desarrollado para realizar un estudio de la percepción de la calidad de los datos de los usuarios de la aplicación. Por favor ingrese la información solicitada. Gracias.',
	}
];

export interface UserInfo {
  edad: number;
  genero: string;
  genero_otro: string;
  distrito: string;
  es_estudiante: string;
  carrera: string;
  ciclo: string;
  tiene_hijos: string;
  hijos: number;
  esta_laborando: string;
  puesto: string;
  dependencia: string;
  grado_padre: string;
  grado_madre: string;
}

export interface UserAnswers {
  user: UserInfo;
  data: DataSend[];
}

export interface Question_test1 {
  id: number;
  question?: string;
  answer_options: Options[];
}

export interface Options {
  opt: string;
  value: number;
}

export interface DataSend {
  id: number;
  num: number;
  value: number;
}

export interface Generica {
  value: string;
  viewValue: string;
}
