//import 라이브러리
import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = () => {
    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    
    return (
        <>
            <form action="" method="">
		        <table border="1" width="540px">
			        <tr>
				        <td>이름</td><td><input type="text" name="name" value=""/></td>
				        <td>비밀번호</td><td><input type="password" name="password" value=""/></td>
			        </tr>
			        <tr>
				        <td colspan="4"><textarea cols="72" rows="5" name="content" value=""></textarea></td>
			        </tr>
			        <tr>
				        <td colspan="4"><button type="submit">등록</button></td>
			        </tr>
		        </table>
	        </form>
	        <br/>
	
            <table border="1" width="540px">
                <tr>
                    <td>번호</td>
                    <td>이름</td>
                    <td>등록일</td>
                    <td><Link to="/deleteform" rel="noreferrer noopener">삭제</Link></td>
                </tr>
                <tr>
                    <td colspan="4">내용입력</td>
                </tr>
            </table>
            <br/>
        </>
    );
}
export default List;