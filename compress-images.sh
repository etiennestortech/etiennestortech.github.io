#!/bin/bash

# Image Compression Script for TC Storage Website
# This script compresses images while maintaining good quality

echo "Starting image compression..."

cd "$(dirname "$0")/public"

# Create backup directory
mkdir -p ../image-backups
echo "Creating backups in image-backups directory..."

# Function to compress JPEG images
compress_jpeg() {
    local file="$1"
    local backup="../image-backups/$(basename "$file")"
    
    echo "Compressing JPEG: $file"
    cp "$file" "$backup"  # Create backup
    
    # Compress JPEG with quality 80 (good balance of quality/size)
    sips -s formatOptions 80 "$file" > /dev/null 2>&1
}

# Function to compress PNG images  
compress_png() {
    local file="$1"
    local backup="../image-backups/$(basename "$file")"
    
    echo "Compressing PNG: $file"
    cp "$file" "$backup"  # Create backup
    
    # For PNG, we'll reduce size if it's very large and convert to JPEG if appropriate
    local filesize=$(stat -f%z "$file")
    
    # If PNG is larger than 1MB and not a logo/icon, consider converting to JPEG
    if [[ $filesize -gt 1048576 ]] && [[ "$file" != *"logo"* ]] && [[ "$file" != *"icon"* ]]; then
        echo "  Converting large PNG to JPEG: $file"
        local jpegfile="${file%.png}.jpg"
        sips -s format jpeg -s formatOptions 85 "$file" --out "$jpegfile" > /dev/null 2>&1
        rm "$file"  # Remove original PNG
        echo "  Created: $jpegfile"
    else
        # Just compress PNG
        sips -s formatOptions 90 "$file" > /dev/null 2>&1
    fi
}

# Get file sizes before compression
echo "Getting file sizes before compression..."
total_before=0
shopt -s nullglob
for file in *.jpg *.jpeg *.png; do
    if [[ -f "$file" ]]; then
        size=$(stat -f%z "$file" 2>/dev/null || echo 0)
        total_before=$((total_before + size))
    fi
done

# Compress all JPEG files
for file in *.jpg *.jpeg; do
    if [[ -f "$file" ]]; then
        compress_jpeg "$file"
    fi
done

# Compress all PNG files
for file in *.png; do
    if [[ -f "$file" ]]; then
        compress_png "$file"
    fi
done

# Calculate savings
echo ""
echo "Calculating compression results..."
total_after=0
for file in *.jpg *.jpeg *.png; do
    if [[ -f "$file" ]]; then
        size=$(stat -f%z "$file" 2>/dev/null || echo 0)
        total_after=$((total_after + size))
    fi
done

# Convert bytes to MB for display
total_before_mb=$(echo "scale=1; $total_before / 1048576" | bc)
total_after_mb=$(echo "scale=1; $total_after / 1048576" | bc)
savings_mb=$(echo "scale=1; ($total_before - $total_after) / 1048576" | bc)
savings_percent=$(echo "scale=1; (($total_before - $total_after) * 100) / $total_before" | bc)

echo "========================================="
echo "COMPRESSION RESULTS:"
echo "Before: ${total_before_mb}MB"
echo "After:  ${total_after_mb}MB" 
echo "Saved:  ${savings_mb}MB (${savings_percent}%)"
echo "========================================="

echo "Compression complete! Backups saved in image-backups/"
echo "You can now deploy the optimized images."