import { Component, OnInit } from '@angular/core';
import { AppHttpService } from './services/app-http.service';

@Component({
	selector: 'svg-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [AppHttpService]
})
export class AppComponent implements OnInit {

	aniColor: any;

	constructor(private _appHttpService: AppHttpService) {

	}

	callHttpService() {

		this._appHttpService.requestData('./assets/data/ani-data.json')
		.subscribe(
			data => {this.aniColor = data},
			error => console.log(error),
			() =>console.log('subscribe complete')
		)
	}

	getRandomNum(min, max) {
		return Math.random() * (max - min) + min;
	}

	aniShape($event) {
		let shape = document.getElementById('shape');
		let maxNum = this.aniColor.length;
		let randomNum = Math.round(this.getRandomNum(0, maxNum));
		shape.style.fill = this.aniColor[randomNum].color;
	}

	ngOnInit() {
		this.callHttpService();
	}
}
