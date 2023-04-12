// Parent Component
import React from 'react';
import ChannelComponent from '@/components/comps/channelComp';
import json from "./content.json"; 

const ParentComponent = () => {
  const data = json.global.whatsapp; 
  return (
    <>    
      <ChannelComponent pageData={data} />    
    </>
  );
};

export default ParentComponent;