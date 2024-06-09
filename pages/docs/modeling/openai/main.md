# Module: main.py

## Example of Using OpenAI API for Text Generation and Classification

This script demonstrates how to use the OpenAI API for text generation and classification.

### Functions

```python
from openai_utils import initialize_openai, generate_text, classify_text

def main():
    """
    Main function to run the OpenAI text generation and classification examples.
    """
    # Initialize the OpenAI client
    initialize_openai()

    # Example text generation prompt
    text_prompt = "Write a short story about a detective solving a mystery."
    generated_story = generate_text(text_prompt)
    print("\nGenerated Story:\n", generated_story)

    # Example text classification prompt
    classification_prompt = "The customer expressed frustration with the product."
    classification_options = ["Positive", "Neutral", "Negative"]
    sentiment = classify_text(classification_prompt, classification_options)
    print("\nClassified Sentiment:\n", sentiment)

if __name__ == "__main__":
    main()
