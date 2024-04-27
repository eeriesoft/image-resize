# Image Resizer

## Overview
This JavaScript project provides a simple yet effective image resizing function for web applications. The function allows users to resize images to a specified width and height while maintaining the aspect ratio of the original image. It's particularly useful for scenarios where precise image dimensions are required, such as in photo galleries, profile picture uploads, or any application dealing with user-generated content.

## Features
- **Dynamic Resizing**: Users can select an image from their device and specify the desired width and height for resizing.
- **Maintains Aspect Ratio**: The function preserves the aspect ratio of the original image to prevent distortion.
- **Efficient Processing**: Images are resized using HTML5 Canvas, ensuring efficient processing and minimal performance impact.
- **Customizable**: Developers can easily integrate the function into their projects and customize it according to their specific requirements.

## Usage
1. Include the `resizeImage` function in your JavaScript codebase.
2. Call the `resizeImage` function with the desired target width and height, along with a callback function to handle the resized image URL.
3. Upon selecting an image, the function resizes it and invokes the callback function with the resized image URL.

## Example
```javascript
// Example usage:
resizeImage(300, 200, function(resizedImageUrl) {
    console.log('Resized Image URL:', resizedImageUrl);
    // You can use the resizedImageUrl as needed here.
    // The img element is already removed at this point.
});
