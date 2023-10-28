import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ALERTS, Alert, UserAnswers, UserInfo, Generica } from 'src/app/models/data.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/utils.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { loadUser, loadUserSuccess } from '../../store/actions';
import { QuestService } from 'src/app/shared/quest.service';
import { carrera_list, ciclo_list, dependencia_list, distritos_list, genero_list, grados_list, puestos_list } from 'src/app/models/info-test.model';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, NgbAlert, ReactiveFormsModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  alerts!: Alert[];
  distritosLima: Generica[] = [];
  grados: Generica[] = [];
  puestos: Generica[] = [];
  loading: boolean = false;
  error: any;
  loadUser!: Subscription;
  userInfo!: UserInfo;
  generoList!: Generica[];
  carreraList!: Generica[];
  cicloList!: Generica[];
  dependenciaList!: Generica[];
  finalReport!: UserAnswers;
  auth: boolean = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  public utilsService = inject(UtilsService);
  private store = inject(Store<AppState>);
  private questService = inject(QuestService);

  dataForm: FormGroup = this.fb.group({
    edad: ['', [Validators.required, Validators.minLength(2), Validators.min(18), Validators.max(100)]],
    genero: ['', [Validators.required]],
    genero_otro: [''],
    distrito: ['', [Validators.required]],
    es_estudiante: ['', [Validators.required]],
    carrera: [''],
    ciclo: [''],
    tiene_hijos: ['', [Validators.required]],
    hijos: [''],
    esta_laborando: ['', [Validators.required]],
    puesto: [''],
    dependencia: ['', [Validators.required]],
    grado_padre: ['', [Validators.required]],
    grado_madre: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.alerts = Array.from(ALERTS);

    // Nos suscribimos al store para obtener el estado del usuario
    this.store.select('user').subscribe(user => {
      this.loading = user.loading;
    });

    // cargamos las listas de datos
    this.generoList = genero_list;
    this.cicloList = ciclo_list;
    this.carreraList = carrera_list;
    this.distritosLima = distritos_list;
    this.puestos = puestos_list;
    this.grados = grados_list;
    this.dependenciaList = dependencia_list;

    this.dataForm.get('esta_laborando')?.valueChanges.subscribe(value => {
      if (value === 'SI') {
        this.dataForm.get('puesto')?.setValidators([Validators.required]);
      } else {
        this.dataForm.get('puesto')?.clearValidators();
      }
      this.dataForm.get('puesto')?.updateValueAndValidity();
    });

    this.dataForm.get('tiene_hijos')?.valueChanges.subscribe(value => {
      if (value === 'SI') {
        this.dataForm.get('hijos')?.setValidators([Validators.required]);
      } else {
        this.dataForm.get('hijos')?.clearValidators();
      }
      this.dataForm.get('hijos')?.updateValueAndValidity();
    });

    this.dataForm.get('es_estudiante')?.valueChanges.subscribe(value => {
      if (value === 'SI') {
        this.dataForm.get('carrera')?.setValidators([Validators.required]);
        this.dataForm.get('ciclo')?.setValidators([Validators.required]);
      } else {
        this.dataForm.get('carrera')?.clearValidators();
        this.dataForm.get('ciclo')?.clearValidators();
      }
      this.dataForm.get('carrera')?.updateValueAndValidity();
      this.dataForm.get('ciclo')?.updateValueAndValidity();
    });

    this.dataForm.get('genero')?.valueChanges.subscribe(value => {
      if (value === 'O') {
        this.dataForm.get('genero_otro')?.setValidators([Validators.required]);
      } else {
        this.dataForm.get('genero_otro')?.clearValidators();
      }
      this.dataForm.get('genero_otro')?.updateValueAndValidity();
    });

    if(this.questService.checkLocal()) {
      this.finalReport = this.questService.getFromLocal();
      this.dataForm.get('edad')?.setValue(this.finalReport.user?.edad);
      this.dataForm.get('genero')?.setValue(this.finalReport.user?.genero);
      this.dataForm.get('genero_otro')?.setValue(this.finalReport.user?.genero_otro);
      this.dataForm.get('distrito')?.setValue(this.finalReport.user?.distrito);
      this.dataForm.get('es_estudiante')?.setValue(this.finalReport.user?.es_estudiante);
      this.dataForm.get('carrera')?.setValue(this.finalReport.user?.carrera);
      this.dataForm.get('ciclo')?.setValue(this.finalReport.user?.ciclo);
      this.dataForm.get('tiene_hijos')?.setValue(this.finalReport.user?.tiene_hijos);
      this.dataForm.get('hijos')?.setValue(this.finalReport.user?.hijos);
      this.dataForm.get('esta_laborando')?.setValue(this.finalReport.user?.esta_laborando);
      this.dataForm.get('puesto')?.setValue(this.finalReport.user?.puesto);
      this.dataForm.get('dependencia')?.setValue(this.finalReport.user?.dependencia);
      this.dataForm.get('grado_padre')?.setValue(this.finalReport.user?.grado_padre);
      this.dataForm.get('grado_madre')?.setValue(this.finalReport.user?.grado_madre);

      this.store.dispatch(loadUser({user: this.finalReport.user}));
      this.store.dispatch(loadUserSuccess());
    }
  }

  sendData() {
    this.loading = true;

    this.userInfo = {
      edad: this.dataForm.get('edad')?.value,
      distrito: this.dataForm.get('distrito')?.value,
      genero: this.dataForm.get('genero')?.value,
      genero_otro: this.dataForm.get('genero_otro')?.value.trim(),
      es_estudiante: this.dataForm.get('es_estudiante')?.value,
      carrera: this.dataForm.get('carrera')?.value,
      ciclo: this.dataForm.get('ciclo')?.value,
      tiene_hijos: this.dataForm.get('tiene_hijos')?.value,
      hijos: this.dataForm.get('hijos')?.value,
      esta_laborando: this.dataForm.get('esta_laborando')?.value,
      puesto: this.dataForm.get('puesto')?.value.trim(),
      dependencia: this.dataForm.get('dependencia')?.value,
      grado_padre: this.dataForm.get('grado_padre')?.value,
      grado_madre: this.dataForm.get('grado_madre')?.value
    }

    this.questService.saveToLocal({user: this.userInfo, data: []});
    this.store.dispatch(loadUser({user: this.userInfo}));
    this.store.dispatch(loadUserSuccess());
    this.router.navigateByUrl('/section');
  }

  invalidField(field: string) {
    return this.dataForm.get(field)?.invalid && this.dataForm.get(field)?.touched;
  }

  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

  checkboxChanged() {
    this.auth = !this.auth;
  }
}
