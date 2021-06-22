import { AfterViewInit, Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tinyMCE';

  emailTemplate: any;

  ngOnInit() {

  }

  captureHtmlTemplate(e: any) {
    console.log(e.editor.getContent());
    this.emailTemplate = e.editor.getContent();

  }

}

