# Module: openai_utils.py

## Functions

```python
import openai
from config import OPENAI_API_KEY, MODEL_NAME, MAX_TOKENS, TEMPERATURE

def initialize_openai():
    """
    Initialize the OpenAI API client.
    """
    openai.api_key = OPENAI_API_KEY

def generate_text(prompt: str, max_tokens: int = MAX_TOKENS, temperature: float = TEMPERATURE):
    """
    Generate text using the specified OpenAI model.

    Parameters:
        prompt (str): The text prompt to provide to the OpenAI model.
        max_tokens (int): Maximum number of tokens to generate.
        temperature (float): Sampling temperature for text generation.

    Returns:
        str: Generated text response from the OpenAI model.
    """
    response = openai.Completion.create(
        engine=MODEL_NAME,
        prompt=prompt,
        max_tokens=max_tokens,
        temperature=temperature
    )

    return response.choices[0].text.strip()

def classify_text(prompt: str, options: list, max_tokens: int = MAX_TOKENS, temperature: float = TEMPERATURE):
    """
    Classify text using the specified OpenAI model.

    Parameters:
        prompt (str): The text prompt to provide to the OpenAI model for classification.
        options (list): A list of possible classification categories.
        max_tokens (int): Maximum number of tokens to generate.
        temperature (float): Sampling temperature for classification.

    Returns:
        str: The predicted classification label from the OpenAI model.
    """
    response = openai.Completion.create(
        engine=MODEL_NAME,
        prompt=f"{prompt}\n\nOptions: {', '.join(options)}",
        max_tokens=max_tokens,
        temperature=temperature
    )

    return response.choices[0].text.strip()
