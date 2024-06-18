from langchain_core.pydantic_v1 import BaseModel, Field

class Product(BaseModel):
    '''Product description'''
    title: str = Field(..., title="Product Title", description="Title of the product")
    description: str = Field(..., title="Product Description", description="Description of the product")
    tags: list = Field([], title="Product Tags", description="Tags for SEO")
    primary_colors: list = Field([], title="Primary Colors", description="Primary colors of the product")