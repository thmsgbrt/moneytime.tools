import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router'
import { HomeComponent } from "./home/container/home.component";
import { NotFoundComponent } from "./not-found/container/not-found/not-found.component";

const routes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'salary/:salary', component: HomeComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }