import React from 'react'
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

const ImageTransformer = props => (
  <CloudinaryContext cloudName="dvrmfqcqc">
    <Image publicId={props.img}>
        <Transformation 
          opacity="50"
          crop="fill" 
          gravity="faces" 
          width="600" 
          height="600"
          effect="blur:700"/>
        <Transformation 
          width="600"
          overlay={{
            fontFamily: "Short Stack", 
            fontWeight: 800, 
            fontSize: `${parseInt((props.size==='auto'? 100 : props.size))}`, 
            text: `"${props.quote}"`,
            textAlign: "center"
          }}
          crop="fit"
          opacity="35"/>
          <Transformation 
            width="600"
            overlay={{
              fontFamily: "Short Stack", 
              fontWeight: 800, 
              fontSize: 30, 
              text: props.date,
              textAlign: "right"
            }}
            crop="fit"
            y="10"
            gravity="south"
            opacity="40"/>
    </Image>
  </CloudinaryContext>
)

export default ImageTransformer