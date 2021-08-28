import Banner from 'components/Banner';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { randomNumber } from 'utils/common';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );

  const initialValue = isAddMode
    ? {
        title: '',
        categoryId: null,
        photo: '',
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };

          const action = addPhoto(newPhoto);
          console.log(action);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push('/photos');
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />
      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
         initialValue={initialValue} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
