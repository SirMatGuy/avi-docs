# Module: config.py

## Configuration Settings

The `config.py` module contains configuration settings for the OpenAI API. These settings include the API key, model name, maximum tokens, and temperature.

### Configuration Variables

- `OPENAI_API_KEY`: Your OpenAI API key.
  - Example: `"YOUR_OPENAI_API_KEY"`  # Replace with your actual OpenAI API key

- `MODEL_NAME`: The desired model from OpenAI to be used.
  - Example: `"text-davinci-003"`  # Options include "gpt-3.5-turbo", "text-davinci-003", etc.

- `MAX_TOKENS`: The maximum number of tokens to generate.
  - Example: `150`

- `TEMPERATURE`: The sampling temperature to use. Higher values mean the model will take more risks.
  - Example: `0.7`

These settings will be used throughout the OpenAI modeling process to ensure consistency and reproducibility.
