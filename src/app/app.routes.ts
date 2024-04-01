import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'for-directive-example', component:ForDirectiveExampleComponent},
    {path: 'component-input-example', component:ComponentInputExampleComponent},
    {path: "", redirectTo: '/welcome', pathMatch: 'full'}
];