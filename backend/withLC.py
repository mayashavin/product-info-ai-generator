from langchain.chains import TransformChain
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from image import load_image;
import os
from langchain_core.runnables import chain
from langchain import globals
from Product import Product
from dotenv import load_dotenv

load_dotenv()

load_image_chain = TransformChain(
    input_variables=['image_path'],
    output_variables=["image"],
    transform=load_image
)

# Set verbose
globals.set_debug(True)

from langchain_core.output_parsers import JsonOutputParser

@chain
def image_model(inputs: dict):
 """Invoke model with image and prompt."""
 model = ChatOpenAI(temperature=0.5, model="gpt-4o", max_tokens=1024)
 msg = model.invoke(
             [
                HumanMessage(
             content=[
                {"type": "text", "text": inputs["prompt"]},
                {"type": "text", "text": parser.get_format_instructions()},
             {"type": "image_url", 
              "image_url": {"url": f"data:image/jpeg;base64,{inputs['image']}"}},
             ])]
             )
 return msg.content

parser = JsonOutputParser(pydantic_object=Product)

def get_product_info(image_path: bytes, customPrompt: str, tone: str, lang: str) -> dict:
   prompt = f"""
   Given the image of a product, provide the following information in {lang}:
   - Product Title
   - Product Description
   - At least 13 Product Tags for SEO purposes
   - At most 3 primary Colors of the Product, excluding the background colors.
   {customPrompt}
   The tone of the description should be {tone.lower()}.
   """
   generate_product_chain = load_image_chain | image_model | parser
   return generate_product_chain.invoke({'image_path': image_path, 
                               'prompt': prompt})
