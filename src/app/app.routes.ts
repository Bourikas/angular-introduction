import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'for-directive-example', component:ForDirectiveExampleComponent},
    {path: 'component-output-example', component:ComponentOutputExampleComponent},
    {path: "", redirectTo: '/welcome', pathMatch: 'full'},
    // {path: "simple-datatable", component:SimpleDatatableComponent},
    {path: "component-output-example", component:ComponentOutputExampleComponent},
    {path:"simple-datatable-example", component:SimpleDatatableExampleComponent}
];
