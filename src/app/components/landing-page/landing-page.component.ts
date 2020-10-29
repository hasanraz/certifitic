import { Component, OnInit } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PDFAnnotationData } from 'pdfjs-dist';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Input } from './input';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


    public name = '';


    getImage() {
        let node = document.getElementById('Edit-certificate');

        // domtoimage.toPng(node)
        //     .then(function (dataUrl) {
        //         var img = new Image();
        //         img.src = dataUrl;
        //         document.body.appendChild(img);
        //     })
        //     .catch(function (error) {
        //         console.error('oops, something went wrong!', error);
        //     });

            domtoimage.toJpeg(document.getElementById('Edit-certificate'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'certificate.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

}
