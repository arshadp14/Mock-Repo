import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
export default function CopyToClipboard() {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };
   return (
    <div>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>Share</button> 
          {copySuccess}
        </div>
      }
      <form>
        <textarea className="hiddenBox" id="urlInput" ref={textAreaRef}>{window.location.href}</textarea>
      </form>
    </div>
  );
}