# this simple file is useful to test .env and openai api key configuration
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()  # Load from .env
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "How are you today?"}
    ]
)

print(response.choices[0].message.content)
