# Module: config.py

## Configuration Settings

The `config.py` module contains configuration settings for the image classification process. These settings include model type, image size, batch size, number of epochs, directories for training and testing data, and data augmentation parameters.

### Configuration Variables

- `MODEL_TYPE`: Specifies the type of model to be used. Options could include "SimpleCNN", "ResNet", "VGG", etc.
  - Example: `"SimpleCNN"`

- `IMAGE_SIZE`: The desired dimensions for the input images.
  - Example: `(128, 128)`

- `BATCH_SIZE`: The number of samples per gradient update.
  - Example: `32`

- `EPOCHS`: The number of epochs to train the model.
  - Example: `10`

- `TRAIN_DIR`: Path to the directory containing the training image dataset.
  - Example: `"train/dir"`

- `TEST_DIR`: Path to the directory containing the testing image dataset.
  - Example: `"test/dir"`

- `AUGMENTATIONS`: A dictionary of augmentation parameters to be applied to the training images.
  - Example:
    ```python
    {
        'rotation_range': 20,
        'width_shift_range': 0.2,
        'height_shift_range': 0.2,
        'shear_range': 0.2,
        'zoom_range': 0.2,
        'horizontal_flip': True,
        'fill_mode': 'nearest'
    }
    ```

### Example Configuration

The provided configuration is set up for training a simple CNN model on image data with specific augmentations:

- `MODEL_TYPE`: `"SimpleCNN"`
- `IMAGE_SIZE`: `(128, 128)`
- `BATCH_SIZE`: `32`
- `EPOCHS`: `10`
- `TRAIN_DIR`: `"train/dir"`
- `TEST_DIR`: `"test/dir"`
- `AUGMENTATIONS`: Dictionary with parameters for rotation, width shift, height shift, shear, zoom, horizontal flip, and fill mode.

These settings will be used throughout the image classification process to ensure consistency and reproducibility.
