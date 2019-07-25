import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';


@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.scss']
})
export class ContentPageComponent implements OnInit {
  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: 'Write Description',
  };

  public addcontent = false;
  public updatecontent = false;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public alertRes: any;
  html: any;
  public isReadOnly = false;
  public inline = false;
  public componentEvents: string[] = [];
  public editorData = `<p>Hi, CKEditor</p>`;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = this.editorContent;
      // this.editor.disable();
    }, 10000);

    this.http.get(`assets/data/content.json`)
    .subscribe( data => {
        this.data = data;
    });
  }

  changeEditorType() {
    this.inline = !this.inline;
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
  }

  onContentChanged({ quill, html, text }) {
    this.html = text;
    console.log('quill content is changed!', quill, html, text);
  }


  toggleAddContent() {
    this.addcontent = !this.addcontent;
  }

  toggleEditContent() {
    this.updatecontent = !this.updatecontent;
  }

  deleteContent() {
      swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        timer: 5000
  });
  }
}
