import React from 'react';
import './RandomPhoto.scss';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  showError: PropTypes.bool,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  showError: false,
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/300/300?random=${randomId} `;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, showError } =
    props;
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <div className={`random-photo ${showError ? 'is-invalid' : ''}`}>
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && <img src={imageUrl} alt="Not found image. Random again" />}
      </div>
    </div>
  );
}

export default RandomPhoto;
