import {RouterModule, Routes} from '@angular/router';
import {TutorialComponent} from './tutorial.component';
import {NgModule} from '@angular/core';
import {TutorialDetailComponent} from './tutorial-detail/tutorial-detail.component';

const tutorialRoutes: Routes = [
  {path: '', data: { title: 'Tutorial'},
    children: [
      {path: '', component: TutorialComponent, data: { title: ''}},
      {path: ':url', component: TutorialDetailComponent, data: { title: ''}}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(tutorialRoutes)
  ],
  exports: [RouterModule]
})

export class TutorialRoutesModule {}
