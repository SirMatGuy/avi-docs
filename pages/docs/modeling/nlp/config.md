# Module: config.py

## Configuration Settings

The `config.py` module contains configuration settings for the NLP process. These settings include model type, vocabulary size, sequence length, batch size, number of epochs, data file path, text and label columns, and Hugging Face model.

### Configuration Variables

- `MODEL_TYPE`: Specifies the type of NLP model to be used. Options could include "LSTM", "Transformer", or "HuggingFace".
  - Example: `"LSTM"`

- `MAX_WORDS`: The maximum number of words to keep in the vocabulary.
  - Example: `10000`

- `MAX_LEN`: The maximum length of sequences.
  - Example: `100`

- `BATCH_SIZE`: The number of samples per gradient update.
  - Example: `32`

- `EPOCHS`: The number of epochs to train the model.
  - Example: `5`

- `DATA_FILE`: Path to the CSV file containing the dataset.
  - Example: `"data/text_dataset.csv"`

- `TEXT_COLUMN`: The name of the column in the dataset that contains the text data.
  - Example: `"text"`

- `LABEL_COLUMN`: The name of the column in the dataset that contains the labels.
  - Example: `"label"`

- `HUGGING_FACE_MODEL`: The Hugging Face model to be used if `MODEL_TYPE` is set to "HuggingFace".
  - Example: `"bert-base-uncased"`

These settings will be used throughout the NLP process to ensure consistency and reproducibility.
