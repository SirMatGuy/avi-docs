# Module: feature_selection.py

## Functions

###### METHOD_K_FEATUERS is a parameter that defiend in a CONFIG file 

```python
from sklearn.feature_selection import VarianceThreshold, SelectKBest, chi2, mutual_info_regression
from modeling.regression.config import METHOD_K_FEATUERS
from utils.utils import update_active_features

def remove_low_variance_features(dataframe, threshold=0.0):
    """
    Remove features with low variance.

    Parameters:
        dataframe (pd.DataFrame): The dataframe containing the data.
        threshold (float): Features with a variance lower than this threshold will be removed.

    Returns:
        pd.DataFrame: DataFrame with selected features.
    """


def select_k_best_features(dataframe, labels, k=10, method=METHOD_K_FEATUERS):
    """
    Select the K best features based on the specified method.

    Parameters:
        dataframe (pd.DataFrame): The dataframe containing the data.
        labels (pd.Series): The target variable.
        k (int): The number of top features to select.
        method (str): The feature selection method ('mutual_info' or 'chi2').

    Returns:
        pd.DataFrame: DataFrame with the K best features selected.
    """
