//import 라이브러리
import React, {useEffect, useState} from "react";
import axios from 'axios';

// import 컴포넌트
import ItemGuest from './ItemGuest';

const List = () => {
    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');
    const [guestList, setGuestList] = useState([]);
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    const getGuestList = () => {
        axios({
			method: 'get', 			// put, post, delete                   
			url: 'http://localhost:9000/api/guests',
		
			responseType: 'json' //수신타입
		}).then(response => {
			console.log(response); //수신데이터
			setGuestList(response.data.apiData);

		}).catch(error => {
			console.log(error);
		});	
    }

    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    // 마운트 되었을때
	useEffect(() => {
		console.log("마운트 됐어요");

		// 서버에서 데이터 가져오기 그리기
		getGuestList();

	}, []);
    
    // 이름
    const handleName = (e) => {
        setName(e.target.value);
    }

    // 패스워드
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    // 내용 입력
    const handleContent = (e) => {
        setContent(e.target.value);
    }

    // 등록 버튼
    const handleAdd = (e) => {
        e.preventDefault();

        const guestVo = {
            name: name,
            password: password,
            content: content
        }
        console.log(guestVo);

        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/guests',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: guestVo,
        
            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            // 데이터 등록 후 리스트 다시 가져오기
            getGuestList();
            setName(''); // 입력 필드 초기화
            setPassword(''); // 입력 필드 초기화
            setContent(''); // 입력 필드 초기화
        
          }).catch(error => {
            console.log(error);
        });
    }
    
    return (
        <>
            <form action="" method="" onSubmit={handleAdd}>
		        <table border="1" width="540px">
                    <tbody>
                        <tr>
                            <td>이름</td><td><input type="text" name="name" value={name} onChange={handleName} /></td>
                            <td>비밀번호</td><td><input type="password" name="password" value={password} onChange={handlePassword} /></td>
                        </tr>
                        <tr>
                            <td colSpan="4"><textarea cols="72" rows="5" name="content" value={content} onChange={handleContent}></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="4"><button type="submit">등록</button></td>
                        </tr>
                    </tbody>
		        </table>
	        </form>
	        <br/>

            {guestList.map((guestVo) => {
                return (
                <div key={guestVo.no}>
                    <ItemGuest guest={guestVo} />
                </div>
                )
            })}
	
        </>
    );
}
export default List;