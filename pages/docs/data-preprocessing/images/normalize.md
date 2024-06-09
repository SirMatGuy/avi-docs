# Module: normalize.py

## Functions

```python
import numpy as np

def normalize_image(image, scale_range=(0, 1)):
    """
    Normalize an image's pixel values to [0, 1] or [-1, 1].

    Parameters:
        image (np.array): The input image.
        scale_range (tuple): The range to scale the pixel values to, either (0, 1) or (-1, 1).

    Returns:
        np.array: The normalized image.
    """


def batch_normalize_images_in_memory(images, scale_range=(0, 1)):
    """
    Batch normalize images in memory.

    Parameters:
        images (list): List of images to be normalized.
        scale_range (tuple): The range to scale the pixel values to, either (0, 1) or (-1, 1).

    Returns:
        np.array: Array of normalized images.
    """
