#!/bin/bash

# Directory containing the CSS files
CSS_DIR="./_includes/css"
SCSS_DIR="./_sass"

# Find all .css files in the specified directory, excluding .min.css files
find "$CSS_DIR" -name "*.css" ! -name "*.min.css" | while read -r css_file; do
  # Define the corresponding .scss file path
  scss_file="${css_file/$CSS_DIR/$SCSS_DIR}"
  
  # Convert the .css file to .scss using sass-convert
  sass-convert "$css_file" "${scss_file%.css}.scss"
done
