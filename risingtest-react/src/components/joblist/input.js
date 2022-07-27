import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Input = () => {
    <>
        <Slider />
        <Range 
            min={0}
            max={80}/>
    </>
}

export default Input;