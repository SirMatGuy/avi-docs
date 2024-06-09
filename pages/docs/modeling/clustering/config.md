# Module: config.py

## Configuration Settings

The `config.py` module contains configuration settings for the clustering process. These settings include model type, number of clusters, random state, and feature columns.

### Configuration Variables

- `MODEL_TYPE`: Specifies the type of clustering model to be used. Options could include "KMeans", "DBSCAN", "AgglomerativeClustering", etc.
  - Example: `"KMeans"`

- `N_CLUSTERS`: The default number of clusters to be formed.
  - Example: `3`

- `RANDOM_STATE`: Controls the randomness of the clustering process for reproducibility.
  - Example: `42`

- `FEATURE_COLUMNS`: A list of column names to be used as features in the model. These columns are used for clustering.
  - Example:
    ```python
    [
        "sepal_length",
        "sepal_width",
        "petal_length",
        "petal_width"
    ]
    ```

### Example Configuration for Iris Dataset

The provided configuration is set up for clustering the Iris dataset:

- `MODEL_TYPE`: `"KMeans"`
- `N_CLUSTERS`: `3`
- `RANDOM_STATE`: `42`
- `FEATURE_COLUMNS`: List of feature columns relevant to the Iris dataset:
  ```python
  [
      "sepal_length",
      "sepal_width",
      "petal_length",
      "petal_width"
  ]
