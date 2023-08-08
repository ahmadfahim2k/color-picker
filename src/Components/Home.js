import Colors from './Colors';
import TxtBox from './TxtBox';
import { useRecoilState } from 'recoil';
import { activeColorAtom } from '../Recoil';

const Home = () => {

  const [activeColor, setActiveColor] = useRecoilState(activeColorAtom);

  function changeColor(newColor) {
    setActiveColor(newColor);
  }

  return (
    <div className='h-[600px] flex flex-col flex-start'>
      <TxtBox activeColor={activeColor} />
      <div className='w-full h-[100px] mt-[50px] flex flex-col'>
        <Colors changeColor={changeColor} />
      </div>
    </div>
  );
}

export default Home;