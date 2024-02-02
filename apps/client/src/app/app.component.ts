import { Component, OnInit } from "@angular/core";
import { ApiService } from "./services/api.service";
import { SharedModule } from "./shared/shared.module";

@Component({
	standalone: true,
	imports: [SharedModule],
	// providers: [ApiService],
	selector: "access-ability-job-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent implements OnInit {
	title = "client";

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.apiService.getData().subscribe((data) => {
			console.log("api data: ", data);
		});
	}
}
