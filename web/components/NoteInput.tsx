import React, { FunctionComponent, useState } from 'react';



const NoteInput: FunctionComponent<{}> = () => {
  const [clicks, setClicks] = useState();
  return <>
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold font-lobster">
          <span className="text-tw-orange">think</span>within
        </h1>
        <br />
        <p className='font-opensans'>What are you thinking about?
        </p>
        <textarea autoFocus className="mt-5 w-96	">
        </textarea>
        <input />
      </div>
    </div>
  </>
}
export default NoteInput