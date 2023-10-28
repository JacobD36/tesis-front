import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question_test1, UserAnswers } from 'src/app/models/data.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addData, setCount } from 'src/app/store/actions';
import { questions_test1, questions_test2 } from 'src/app/models/info-test.model';
import { DataSend } from '../../models/data.model';
import { QuestService } from 'src/app/shared/quest.service';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/shared/validator.service';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
  questions!: Question_test1[];
  question_number!: number;
  id!: number;
  loading: boolean = false;
  resp!: number[];
  test_title!: string;
  test_description!: string;
  intro: boolean = true;
  final: boolean = false;
  idUser: string = '';
  emailSaved: boolean = false;

  finalReport!: UserAnswers;
  finalData!: any[];
  user!: any;
  authorization: boolean = false;

  private store = inject(Store<AppState>);
  private fb = inject(FormBuilder);
  private fbAuth = inject(FormBuilder);
  private questService = inject(QuestService);
  private router = inject(Router);
  private validatorsService = inject(ValidatorService);

  dataForm: FormGroup = this.fb.group({
    opt: ['', [Validators.required]]
  });

  authForm: FormGroup = this.fbAuth.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
  });

  ngOnInit(): void {
    this.store.select('section').subscribe(({id, count, data}) => {
      this.id = id;
      this.question_number = count;

      if(this.id === 1) {
        this.questions = questions_test1.data;
        this.test_title = questions_test1.title;
        this.test_description = questions_test1.description;
      }

      if(this.id === 2) {
        this.questions = questions_test2.data;
        this.test_title = questions_test2.title;
        this.test_description = questions_test2.description;
      }

      this.finalData = data;
    });

    this.store.select('user').subscribe(user => {
      if(!user.user){
        this.router.navigateByUrl('/');
      }
      this.loading = user.loading;
      this.user = user.user;
    });
  }

  invalidField(field: string) {
    return this.dataForm.get(field)?.invalid && this.dataForm.get(field)?.touched;
  }

  next() {
    if(this.question_number === (this.questions.length - 1) && this.id !== 2) {
      this.questService.saveToLocal({user: this.user, data: this.finalData});
      this.store.dispatch(addData({newData: [{ id: this.id, num: this.question_number + 1, value: this.dataForm.get('opt')?.value }]}));
      this.store.dispatch(setCount({id: 2, count: -1}));
      this.dataForm.reset();
      this.intro = true;
      return;
    }

    if(this.question_number === (this.questions.length - 1) && this.id === 2) {
      this.questService.saveToLocal({user: this.user, data: this.finalData});
      this.store.dispatch(addData({newData: [{ id: this.id, num: this.question_number + 1, value: this.dataForm.get('opt')?.value }]}));
      this.dataForm.reset();
      this.finalReport = {
        user: this.user,
        data: this.finalData
      };
      this.questService.deleteLocal();
      this.questService.saveQuest(this.finalReport).subscribe(({uid}:any) => {
        this.idUser = uid;
      });
      this.final = true;
      this.store.dispatch(setCount({id: 1, count: 0}));
      return;
    }

    this.questService.saveToLocal({user: this.user, data: this.finalData});
    this.store.dispatch(addData({newData: [{ id: this.id, num: this.question_number + 1, value: this.dataForm.get('opt')?.value }]}));
    this.store.dispatch(setCount({id: this.id, count: this.question_number}));
    this.dataForm.reset();
  }

  invalidAuthField(field: string) {
    return this.authForm.get(field)?.invalid && this.authForm.get(field)?.touched;
  }

  checkboxChanged() {
    this.authorization = !this.authorization;
  }

  updateEmailCheck() {
    this.questService.updateEmailAuth(this.idUser, this.authForm.get('email')?.value, this.authorization).subscribe((res: any) => {
      this.emailSaved = true;
    });
  }
}
