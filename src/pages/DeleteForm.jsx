//import 라이브러리
import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteForm = () => {

    /*---라우터 관련-------------------------------*/
    const {no} = useParams();
    const navigate = useNavigate();
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [password, setPassword] = useState('');
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    // 패스워드
    const handelPssword = (e) => {
        setPassword(e.target.value);
    }

    const handleDel = (e) => {
        e.preventDefault();

        let guestVo = {
            password: password
        }
        console.log(guestVo);

        axios({
            method: 'delete',
            url: `http://localhost:9000/api/guests/${no}`,

            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: guestVo,

            responseType: 'json'
        }).then(response => {
            console.log(response);
            if(response.data.result === 'success'){
                navigate('/list');
            }else{
                alert('비밀번호가 일치하지 않습니다.');
            }
        });

    }
    
    return (
        <>
        <form action="" method="" onSubmit={handleDel}>
            <table>
                <tbody>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="text" name="password" value={password} onChange={handelPssword} /></td>
                        <td><button type="submit">삭제</button></td>
                    </tr>
                </tbody>
            </table>
		    <input type="hidden" name="no" value=""/>
	    </form>
	
	    <br/><br/>
        <Link to="/list" rel="noreferrer noopener">메인으로 돌아가기</Link>
        </>
    );
}
export default DeleteForm;