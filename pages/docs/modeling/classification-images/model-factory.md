# Module: model_factory.py

## Functions

```python
import tensorflow as tf
from tensorflow.keras.applications import ResNet50, VGG16

def get_image_model(model_type: str, input_shape):
    """
    Get a specific image classification model.

    Parameters:
        model_type (str): Type of model architecture to use (e.g., "SimpleCNN", "ResNet", "VGG").
        input_shape (tuple): Shape of the input images.

    Returns:
        tf.keras.Model: Compiled Keras model instance.
    """
