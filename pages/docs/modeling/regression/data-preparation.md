# Module: data_preparation.py

## Functions

```python
from sklearn.model_selection import train_test_split
from modeling.regression.config import ACTIVE_FEATURE_COLUMNS, TARGET_COLUMN, TEST_SIZE, RANDOM_STATE
import pandas as pd

def prepare_data(df: pd.DataFrame):
    """
    Prepare the data for training and testing by splitting the dataset into features and target, 
    and then performing a train-test split.

    Parameters:
        df (pd.DataFrame): The dataframe containing the dataset.

    Returns:
        tuple: A tuple containing the training and testing datasets (X_train, X_test, y_train, y_test).
    """
