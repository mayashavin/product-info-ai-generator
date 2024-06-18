import base64

# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

def load_image(inputs: dict) -> dict:
    """Load image from file and encode it as base64."""
    # image_path = inputs["image_path"]
    image_file = inputs["image_path"]
    image_base64 = base64.b64encode(image_file).decode('utf-8')
    return {"image": image_base64}