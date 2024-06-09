# Module: config.py

## Configuration Settings

The `config.py` module contains configuration settings for the tabular data classification process. These settings include model type, dataset split ratio, random state, target column, and feature columns.

### Configuration Variables

- `MODEL_TYPE`: Specifies the type of model to be used. Options could include "RandomForestClassifier", "LogisticRegression", "SVM", etc.
  - Example: `"RandomForestClassifier"`

- `TEST_SIZE`: The proportion of the dataset to include in the test split.
  - Example: `0.2` (20% of the dataset will be used for testing)

- `RANDOM_STATE`: Controls the shuffling applied to the data before applying the split. This ensures reproducibility of the split.
  - Example: `42`

- `TARGET_COLUMN`: The name of the column in the dataset that contains the target variable (the variable to be predicted).
  - Example: `"target"`

- `FEATURE_COLUMNS`: A list of column names to be used as features in the model. These columns are used for training the model.
  - Example:
    ```python
    [
        "feature1",
        "feature2",
        "feature3"
    ]
    ```

These settings will be used throughout the classification process to ensure consistency and reproducibility.
