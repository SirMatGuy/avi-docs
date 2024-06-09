# Module: model_factory.py

## Functions

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC

def get_model(model_type: str):
    """
    Return a machine learning model based on the provided type.

    Parameters:
        model_type (str): The name of the model type (e.g., "RandomForestClassifier").

    Returns:
        model: Initialized model instance.
    """
