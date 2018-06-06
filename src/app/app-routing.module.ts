import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router'
import { HomeComponent } from "./home/container/home.component";
import { NotFoundComponent } from "./not-found/container/not-found/not-found.component";
import { StatsBoardComponent } from "./stats-board/container/stats-board.component";
import { Guard } from "./services/guard.service";

const routes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'salary/:salary', component: StatsBoardComponent, canActivate: [Guard] },
    // { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '' }
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