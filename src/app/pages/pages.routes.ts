import { Route } from "@angular/router";
import { DataComponent } from "./data/data.component";
import { SectionComponent } from "./section/section.component";

export const pagesRoutes: Route[] = [
  {
    path: '',
    component: DataComponent
  },{
    path: 'section',
    component: SectionComponent
  }
];
