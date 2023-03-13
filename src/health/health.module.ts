import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthService } from 'src/auth/auth.service';
import { Store } from "store";
import { MealsComponent } from "./meals.components";
import { ScheduleComponent } from "./schedule.components";
import { WorkoutsComponent } from "./workouts.components";

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: 'schedule', component: ScheduleComponent },
            { path: 'meals', component: MealsComponent },
            { path: 'workouts', component: WorkoutsComponent }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
    ],
    declarations: [
        ScheduleComponent,
        MealsComponent,
        WorkoutsComponent
    ],
    providers: [
        AuthService,
        Store
    ],
})
export class HealthModule { } 