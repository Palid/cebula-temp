#!/bin/bash

# Ensure a video file is passed as an argument
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 path/to/video.mp4"
  exit 1
fi

VIDEO_FILE=$1
FRAME_FILE="frame.png"
OUTPUT_FILE="frame_transparent.png"

# Extract the first frame as a PNG
ffmpeg -i "$VIDEO_FILE" -vf "select=eq(n\,0)" -q:v 3 "$FRAME_FILE"

# Ensure ffmpeg succeeded
if [ ! -f "$FRAME_FILE" ]; then
  echo "Failed to extract the first frame."
  exit 1
fi

# Use ImageMagick to convert white to transparent
# Replace 'convert' with 'magick' for ImageMagick v7
magick "$FRAME_FILE" -fuzz 15% -transparent white "$OUTPUT_FILE"

# Notify the user of success
if [ -f "$OUTPUT_FILE" ]; then
  echo "The transparent PNG has been saved as $OUTPUT_FILE"
else
  echo "Failed to create a transparent PNG."
  exit 1
fi
