import React from 'react';
import '../App.css';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { DocumentPdf, getProps } from './document-pdf';

export default function change_progress(){
      return (
        <div>

         <div class="box">
         <p class="note"><img src="musical-note.png" alt='logo'/></p>
         <div class="lookok"><a href ='test.html'>봐라오케</a></div>
         <div class="list"><a href ='test.html'>악보 리스트</a></div>
         <div class="change_up"><a href ='test.html'>악보 변환</a></div>
         <div class="upload"><a href ='test.html'>악보 등록</a></div>
         <div class="login Rc"><a href ='test.html'>로그인</a></div>
      </div>
      <div class="beunhan">악보 변환 중</div>
        <div class="loading">Loading&#8230;</div>
        </div>
      );
    }
	export const LazyDownloadPDFButton = () => (
		<button
		  onClick={async () => {
			const props = await getProps();
			const doc = <DocumentPdf {...props} />;
			const asPdf = pdf({}); // {} is important, throws without an argument
			asPdf.updateContainer(doc);
			const blob = await asPdf.toBlob();
			saveAs(blob, 'document.pdf');
		  }}
		>Download PDF</button>
	  );