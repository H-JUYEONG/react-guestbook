//import 라이브러리
import React from "react";
import { Link } from 'react-router-dom';


const ItemGuest = (props) => {

    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const {guest} = props;
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    
    return (
        <>
           <table border="1" width="540px">
                <tbody>
                    <tr>
                        <td>{guest.no}</td>
                        <td>{guest.name}</td>
                        <td>{guest.regDate}</td>
                        <td><Link to={`/deleteform/${guest.no}`} rel="noreferrer noopener">삭제</Link></td>
                    </tr>
                    <tr>
                        <td colSpan="4">{guest.content}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </>
    );
}
export default ItemGuest;