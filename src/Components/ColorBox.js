function ColorBox({ color, changeColor }) {
  return (
    <div className={`h-16 w-16 rounded-md cursor-pointer`} style={{backgroundColor: color}} onClick={() => changeColor(color)}>
    </div>
  )
}

export default ColorBox;