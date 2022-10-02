import React from 'react';
import '../App.css';
import { FileUploader } from 'react-drag-drop-files';

export default function musicSheet_Upload() {
      return (
        <div className="download_wrapper">
		<FileUploader
        name="file"
        types={['PDF']}
        children={
            ( my_button ) ? (<button className="button3">업로드</button>) : (<button className="button3">업로드 완료</button>)
       }
        onDrop={(file) =>{uploadFile(file, order.id, 1);}}
        onSelect={(file) =>{uploadFile(file, order.id, 1);}}
        onChange={(file) =>{uploadFile(file, order.id, 1);}}
   />
           
         <div class="box">
			<p class="note"><img src="src\src_assets\musical-note.png" alt='logo'/></p>
			<div class="lookok"><a href ='test.html'>봐라오케</a></div>
			<div class="list"><a href ='test.html'>악보 리스트</a></div>
			<div class="change_up"><a href ='test.html'>악보 변환</a></div>
			<div class="upload"><a href ='test.html'>악보 등록</a></div>
			<div class="login Rc"><a href ='test.html'>로그인</a></div>
		</div>
		<div class="upload_page_title hc">악보 등록</div>
        <div class="upload_page_instructions hc ">기존 악보 파일을 업로드</div>
		<button id="my_button" class="button1" onclick="uploadFile()">업로드</button>
         </div>
      );
    }
	const uploadFile = (file, order, file_group) => {
        // event.preventDefault();
        setFile(file);

        const formData = new FormData();
        formData.append('order', order);
        formData.append('file_group', file_group);
        formData.append('file', file);
        
        axios({
            method: 'POST',
            url: `http://localhost:8080/api/sheetmusics`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log('then');
            console.log(response.data);
        })
        .catch((error) => {
            console.log('error');
            console.error(error);
        });

    };

export {uploadFile};
	