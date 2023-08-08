import { useRecoilState } from 'recoil';
import { textAtom } from '../Recoil';

const TxtBox = ({ activeColor }) => {

  const [text, setText] = useRecoilState(textAtom);

  function handleClick() {
    setText('');
  }

  function handleTextChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div className='mt-[100px] h-[50px] w-full flex flex-row justify-around'>
        <div className="my-auto mx-[10px] w-[700px] h-full">
        <input
            type="text"
            className="p-[10px] w-[90%] h-[90%] text-3xl resize-none rounded-md border-solid border-[1px] border-[#ccc]"
            style={{ color: activeColor }}
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="my-auto mx-[0px]">
        <button className={`p-2 w-[150px] h-[50px] text-2xl cursor-pointer bg-[#fff] rounded-md text-white active:scale-95`} style={{background: activeColor}} onClick={handleClick} >RESET</button>
        </div>
    </div>
  );
}

export default TxtBox;