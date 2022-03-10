import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import TagsInput from '../components/TagsInput';
import { Button, Textarea, Spacer } from '@nextui-org/react';
import {useSwipeable} from 'react-swipeable';

const config = {
  delta: 10,                            // min distance(px) before a swipe starts. *See Notes*
  preventDefaultTouchmoveEvent: false,  // call e.preventDefault *See Details*
  trackTouch: true,                     // track touch input
  trackMouse: true,                    // track mouse input
  rotationAngle: 0,                     // set a rotation angle
}

const NoteInput: FunctionComponent<{}> = () => {
  const [clicks, setClicks] = useState();
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    ...config,
  });
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      // @ts-ignore
      inputElement.current.focus();
    }
  }, []);
  return <>
    <div onScroll={(e)=>{console.log('scroll')}} className="flex items-center justify-center h-screen">
      
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold font-lobster">
          <span className="text-tw-orange">think</span>within
        </h1>
        <br />
        <Textarea
            autoFocus
            placeholder="What are you thinking about?"
            css={{width: 500}}
            ref={inputElement} 
            />       
        <Spacer y={0.5} />
        <Button onClick={()=>{console.log('save')}}>Save</Button>
      </div>
    </div>
  </>
}
export default NoteInput