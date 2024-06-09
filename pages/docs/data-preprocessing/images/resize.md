# Module: resize.py

## Functions

```python
import PIL.Image
from PIL import Image
import os
import np

def resize_images(input_dir, output_dir, output_size):
    """
    Resize all images in the input directory and save them to the output directory.

    Parameters:
        input_dir (str): Directory containing the original images.
        output_dir (str): Directory where resized images will be saved.
        output_size (tuple): Desired output size as a tuple (width, height).

    Returns:
        None
    """


def resize_images_in_memory(images, output_size):
    """
    Resize images in memory.

    Parameters:
        images (list): List of images to be resized.
        output_size (tuple): Desired output size as a tuple (width, height).

    Returns:
        np.array: Array of resized images.
    """
