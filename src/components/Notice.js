import React from 'react';

function Notice(props) {
  if (props.type === 'postcomment'){
    return (
      <span style={{display: 'flex', justifyContent: 'center'}}>
      Functionality is not present as website is a mockup.
      </span>
    )
  }
  else if (props.type === 'login'){
    return (
      <span style={{display: 'flex', justifyContent: 'center'}}>
          Functionality is not present as website is a mockup.
          Press "Let's Go" with any information.
      </span>
    );
  }
  else if (props.type === 'register'){
    return (
      <span style={{display: 'flex', justifyContent: 'center'}}>
          Functionality is not present as website is a mockup.
          Press "Submit" with any information.
      </span>
    );
  }
  else {
    return (null)
  }

}

export default Notice;