# Module: augment.py

## Functions

```python
import numpy as np
from keras.preprocessing.image import ImageDataGenerator

def augment_images_in_memory(images, augmentations):
    """
    Apply specified augmentations to images in memory.

    Parameters:
        images (np.array): Array of images to be augmented.
        augmentations (dict): Dictionary of augmentation parameters.

    Returns:
        np.array: Array of augmented images.
    """
