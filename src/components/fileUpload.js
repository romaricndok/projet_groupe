import React, { useState, useEffect } from 'react';
import { storage } from '../utils/fireBase';

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const handelChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (image) {
      handelUpload();
    }
  }, [image]);

  const handelUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setUrl(url);
            const itemImage = JSON.parse(localStorage.getItem('image'));
            const arrayImage = [];
            console.log('itemImage');
            console.log(itemImage);
            if (itemImage) {
              itemImage.map(img => arrayImage.push(img));
              arrayImage.push(url);
              localStorage.setItem('image', JSON.stringify(arrayImage));
            } else {
              arrayImage.push(url);
              localStorage.setItem('image', JSON.stringify(arrayImage));
            }
          });
      }
    );
  };

  return (
    <div>
      <br />
      <input type='file' onChange={handelChange} />
    </div>
  );
};

export default FileUpload;
