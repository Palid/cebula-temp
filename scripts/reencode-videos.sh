#!/bin/bash

# Define directories
SOURCE_DIR="./source-videos"
DEST_DIR="./public/videos"

# Define sizes and names
SIZES=(480 720 1080 1440 2160)
NAMES=("mobile" "tablet" "hd" "twok" "uhd")

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

for video in "$SOURCE_DIR"/*.mkv; do
    if [ -f "$video" ]; then
        filename=$(basename "$video" .mkv)
        echo "Processing: $filename"

        # Get video dimensions
        width=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$video")
        height=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$video")

        # Process each size
        for i in "${!SIZES[@]}"; do
            size="${SIZES[$i]}"
            name="${NAMES[$i]}"

            echo "Debug: Processing $name with height=$size"

            if [ "$size" -le "$height" ]; then
                echo "Processing size $name (${size}p)"
                # MP4
                ffmpeg -n -i "$video" \
                    -c:v libx264 \
                    -vf "scale=-1:${size}" \
                    -preset slow \
                    -crf 23 \
                    -an \
                    "${DEST_DIR}/${filename}_${name}.mp4"

                # WebM
                ffmpeg -n -i "$video" \
                    -c:v libvpx-vp9 \
                    -deadline good \
                    -cpu-used 2 \
                    -row-mt 1 \
                    -threads 8 \
                    -vf "scale=-1:${size}" \
                    -quality good \
                    -an \
                    -crf 20 \
                    "${DEST_DIR}/${filename}_${name}.webm"

                # Ogg
                ffmpeg -n -i "$video" \
                    -c:v libtheora \
                    -q:v 5 \
                    -vf "scale=-1:${size}" \
                    -an \
                    "${DEST_DIR}/${filename}_${name}.ogv"
            fi
        done

        # Create original resolution version
        echo "Creating original resolution version"

        ffmpeg -n -i "$video" \
            -c:v libx264 \
            -preset slow \
            -an \
            "${DEST_DIR}/${filename}_full.mp4"

        ffmpeg -n -i "$video" \
            -c:v libvpx-vp9 \
            -deadline good \
            -cpu-used 2 \
            -row-mt 1 \
            -threads 8 \
            -quality good \
            -an \
            "${DEST_DIR}/${filename}_full.webm"

        ffmpeg -n -i "$video" \
            -c:v libtheora \
            -q:v 5 \
            -an \
            "${DEST_DIR}/${filename}_full.ogv"

        echo "Completed processing: $filename"
        echo "----------------------------"
    fi
done

echo "All videos have been processed."
