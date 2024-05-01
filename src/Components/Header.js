
import React, { useState ,useRef} from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const Header = ({ onValueChange }) => {
//   const changeehandler = (e) => {
//     // onValueChange=parseInt(e.target.value);
//     const selectedValue = e.target.value;
//     onValueChange(selectedValue);
//     //console.log(onValueChange);
//   };
const inputRef = useRef(null);
  const [list, setList] = useState(false);
    const dropclick = () => {
      setList(!list);
    };

    const[listItem,setListItem]=useState('');
    const selctlistItem=((item)=>{
        setListItem(item);
        setList(!list);
        const selectedValue = item;
       // console.log(selectedValue)
        onValueChange(selectedValue);
       // inputRef.current.focus();
    });

    const [inputValue, setInputValue] = useState('100%');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setListItem('');
        const selectedValue = e.target.value;
       // console.log(selectedValue)
        onValueChange(selectedValue);
      };
      const handleKeyDown = (e) => {
        if (e.key === 'Backspace') {
         
          if (inputValue === '' && setListItem !== '') {
            setListItem('');
          }
         
          else if (e.target.selectionStart === e.target.selectionEnd && inputValue !== '') {
            console.log(inputValue.slice(0, -1))
            setInputValue(inputValue.slice(0, -1));
            //console.log(inputValue.slice(0, -1))
          }
        }
      };

      const handleDoubleClick = () => {
        if (inputRef.current === document.activeElement && inputValue !== '') {
          setInputValue('');
          setListItem('');
        }
      };
  return (
    <div className=" flex justify-around items-center fixed bg-white top-0 z-10 w-[100%] h-[10%]  border-red-900 shadow-xl shadow-red-400">
      <span className="text-red-950 font-bold text-3xl">Essentials</span>
      <div className="relative">
        <input
          type="text"
          className="w-[100%] h-[90%] border-4 border-red-950"
          value={inputValue ||listItem}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onDoubleClick={handleDoubleClick}
        />
        <IoMdArrowDropdown
          className="absolute top-2 right-2 cursor-pointer"
          onClick={dropclick}
        />
         {list == true && (
        <div className="absolute top-full right-0 bg-white border border-gray-300">
          <ul className="w-[100%] h-[50%] border-4 border-red-950 cursor-pointer ">
          
            <li onClick={()=>selctlistItem('50%')}>50%</li>
            <li onClick={()=>selctlistItem('60%')}>60%</li>
            <li onClick={()=>selctlistItem('70%')}>70%</li>
            <li onClick={()=>selctlistItem('80%')}>80%</li>
            <li onClick={()=>selctlistItem('90%')}>90%</li>
            <li onClick={()=>selctlistItem('100%')}>100%</li>
            <li onClick={()=>selctlistItem('120%')}>120%</li>
            <li onClick={()=>selctlistItem('150%')}>150%</li>
            <li onClick={()=>selctlistItem('200%')}>200%</li>
            <li onClick={()=>selctlistItem('250%')}>250%</li>
            <li onClick={()=>selctlistItem('300%')}>300%</li>
          </ul>
        </div>
      )}
      </div>
      {/* <input type='number' className='w-[5%] h-[90%] border-4 border-red-950 '></input> */}

     
      {/* <select
        className="w-[10%] h-[90%] border-4 border-red-950 "
        // onChange={changeehandler}
      >
        <option value="50%">50%</option>
        <option value="60%">60%</option>
        <option value="80%">80%</option>
        <option value="90%">90%</option>
        <option value="100%">100%</option>
        <option value="150%">150%</option>
        <option value="200%">200%</option>
        <option value="250%">250%</option>
        <option value="300%">300%</option>
      </select> */}
    </div>
  );
};

export default Header;
