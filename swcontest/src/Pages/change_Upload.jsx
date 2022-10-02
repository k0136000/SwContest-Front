import React from 'react';
import '../App.css'
import { FileUploader } from 'react-drag-drop-files';

export default function change_Upload() {
      return (
        <div>
		<FileUploader
        name="file"
        types={['PDF']}
        children={
            ( my_button ) ? (<button className="button2">업로드</button>) : (<button className="button2">업로드완료</button>)
       }
        onDrop={(file) =>{uploadFile(file, order.id, 1);}}
        onSelect={(file) =>{uploadFile(file, order.id, 1);}}
        onChange={(file) =>{uploadFile(file, order.id, 1);}}
   />
         <div class="box">
			<p class="note"><img src="src/src_assets/musical-note.png" img alt='profile'/></p>
			<div class="lookok"><a href ='test.html'>봐라오케</a></div>
			<div class="list"><a href ='test.html'>악보 리스트</a></div>
			<div class="change_up"><a href ='test.html'>악보 변환</a></div>
			<div class="upload"><a href ='test.html'>악보 등록</a></div>
			<div class="login Rc"><a href ='test.html'>로그인</a></div>
		</div>
		<div class="Change_page">악보 변환</div>
		<div class="Change_page_intro">기존 악보에서 계이름을 추가한 PDF로 변환 </div>
		<div class="light_bulb"><img src="src\src_assets\light-bulb (1).png" alt='light_bulb'/></div>
		<div class="light_bulb_text">업로드 버튼을 눌러 파일을 첨부하세요</div>
		<div class="light_bulb_title">어떻게 변환하나요?</div>

		<div class="medal"><img src="src\src_assets\medal.png" alt='medal'></img></div>
		<div class="medal_text">제작자들이 학생이라 아무도 안써서 안전한 보안!</div>
		<div class="medal_title">보안의 문제는 없나요?</div>

		<div class="like"><img src="src\src_assets\like (1).png" alt='like'></img></div>
		<div class="best_text">최상의 기능을 제공하는 어쩌고 연락 어쩌고 애플스러운 말투</div>
		<div class="best_title">오류 발생시 대처 방법은?</div>

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
		url: `http://52.79.222.1/convert/upload`,
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