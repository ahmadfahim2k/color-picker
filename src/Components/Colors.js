import ColorBox from './ColorBox';
import { useRecoilValue } from 'recoil';
import { colorsAtom } from '../Recoil';

const Colors = ({ changeColor }) => {

  const colors = useRecoilValue(colorsAtom);

  return (
    <>
      <h1 className='ml-10 p-3 text-3xl'>Pick a Color</h1>
      <div className='mt-[20px] h-[100px] w-full flex flex-row justify-around'>
        {colors.map(color => {
          return <ColorBox color={color} key={color} changeColor={changeColor}/>
        })}
      </div>
    </>
  )
}

export default Colors;