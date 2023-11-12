import React, {useState}  from 'react';
import st from './style.module.scss';

export default function Form() {
  const[inputText, setInputText]=useState('');
  const[validateInputText, setValidateInputText]=useState(false);
  const[comment, setComment]=useState([]);
 
  const handleChange=(e) => {
    setInputText(e.target.value);
  };

  const checkSpam = (str) => {
    let inputTextLowerCase = str.toLowerCase();
    const inputTextFilter = inputTextLowerCase.replace(/viagra|xxx/g, "***");
    return inputTextFilter;
  }

  let handleAddComment=(e) => {
    e.preventDefault();
    if (!inputText) {
      setValidateInputText(true);
    } else {
    const checkSpamComment=checkSpam(inputText);
    setComment([checkSpamComment, ...comment]);
    setInputText('');
    setValidateInputText(false);
    }}

  return (
    <div>
      <form className={st.form}>
        <div className={st.comments}>
          {comment.map((comment, index) => (
              <div key={index} className={st.comment}>{comment}</div>
            ))}
        </div>
        <div className={st.containerInputText}>
          {validateInputText && <div className={st.error}>Поле комментарий не заполнено</div>}
          <label for="inputText" className={st.subtitle}>Оставьте ваш комментарий:</label> <br />
          <input type="textarea" name="inputText" className={st.inputText} onChange={handleChange} value={inputText} rows="10"/>
        </div> 
        <div>
          <button type="button" className={st.formBtn} onClick={handleAddComment}>Отправить</button>
        </div>
      </form>
    </div>
  )
}
