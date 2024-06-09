# Module: data_preparation.py

## Functions

```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from modeling.classification_images.config import TRAIN_DIR, TEST_DIR, IMAGE_SIZE, BATCH_SIZE

def prepare_image_data():
    """
    Prepares training and validation datasets using ImageDataGenerator.

    Returns:
        tuple: A tuple containing train_generator and validation_generator.
    """
