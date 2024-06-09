# Module: config.py

## Configuration Settings

The `config.py` module contains configuration settings for the regression modeling process. These settings include model type, dataset split ratio, random state, target column, initial and active feature columns, evaluation metrics, and feature selection method.

### Configuration Variables

- `MODEL_TYPE`: Specifies the type of model to be used. Options could include "RandomForestRegressor", "XGBoost", etc. 
  - Example: `"RandomForestRegressor"`

- `TEST_SIZE`: The proportion of the dataset to include in the test split.
  - Example: `0.2` (20% of the dataset will be used for testing)

- `RANDOM_STATE`: Controls the shuffling applied to the data before applying the split. This ensures reproducibility of the split.
  - Example: `42`

- `TARGET_COLUMN`: The name of the column in the dataset that contains the target variable (the variable to be predicted).
  - Example: `"MEDV"`

- `INITIAL_FEATURE_COLUMNS`: A list of column names to be used as features in the initial model. These columns are used for training the model.
  - Example:
    ```python
    [
        "CRIM", "ZN", "INDUS", "CHAS", "NOX", "RM", "AGE",
        "DIS", "RAD", "TAX", "PTRATIO", "B", "LSTAT"
    ]
    ```

- `ACTIVE_FEATURE_COLUMNS`: A copy of the initial feature columns list. This can be modified during feature selection and engineering processes.
  - Example: `INITIAL_FEATURE_COLUMNS.copy()`

- `EVALUATION_METRICS`: A list of evaluation metrics to assess the model's performance. Each metric is specified by its import path.
  - Example:
    ```python
    [
        'sklearn.metrics.mean_squared_error',
        'sklearn.metrics.r2_score',
        'sklearn.metrics.mean_absolute_error'
    ]
    ```

- `METHOD_K_FEATUERS`: The method used for selecting the top K features. Options could include "mutual_info" for mutual information or other feature selection techniques.
  - Example: `'mutual_info'`

### Boston Housing Example

In this specific example, the configuration is set up for a regression task using the Boston Housing dataset:

- `MODEL_TYPE`: `"RandomForestRegressor"`
- `TEST_SIZE`: `0.2`
- `RANDOM_STATE`: `42`
- `TARGET_COLUMN`: `"MEDV"`
- `INITIAL_FEATURE_COLUMNS`: List of feature columns relevant to the Boston Housing dataset.
- `ACTIVE_FEATURE_COLUMNS`: Copy of the initial feature columns.
- `EVALUATION_METRICS`: List of metrics including mean squared error, R-squared score, and mean absolute error.
- `METHOD_K_FEATUERS`: `'mutual_info'`

These settings will be used throughout the modeling process to ensure consistency and reproducibility.
