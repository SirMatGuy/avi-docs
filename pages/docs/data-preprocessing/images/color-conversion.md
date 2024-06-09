# Module: color_conversion.py

## Functions

```python
import cv2
import os

def convert_color_in_directory(input_dir, output_dir, conversion_type):
    """
    Convert color space of all images in a directory.

    Parameters:
        input_dir (str): Directory containing the input images.
        output_dir (str): Directory where converted images will be saved.
        conversion_type (str): Type of conversion ('BGR2RGB' or 'BGR2GRAY').

    Returns:
        None
    """
