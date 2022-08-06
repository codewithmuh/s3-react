import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

import React from 'react';

const Uploader = () => {
    
    
    const handleChangeStatus = ({ meta, remove }, status) => {
       console.log(status, meta);
    }
    return (
        <Dropzone
          onChangeStatus={handleChangeStatus}
          maxFiles={2}
          multiple={false}
          canCancel={false}
          inputContent="Drop A File"
          styles={{
            dropzone: { width: 400, height: 200 },
            dropzoneActive: { borderColor: 'green' },
          }}
        />
    )
  }
  <Uploader />
export default Uploader