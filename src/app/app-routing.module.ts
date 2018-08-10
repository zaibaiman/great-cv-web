import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
    {
        path: '',
        component: WorkbenchComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'stats', component: StatsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
