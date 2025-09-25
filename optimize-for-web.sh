#!/bin/bash

# Enhanced Image Optimization Script for Web Performance
# Addresses specific PageSpeed insights recommendations

echo "Starting enhanced web optimization..."

cd "$(dirname "$0")/public"

# Create backups if they don't exist
mkdir -p ../optimization-backups

# Function to get original size
get_file_size() {
    stat -f%z "$1" 2>/dev/null || echo 0
}

# Function to resize and compress oversized images
optimize_oversized_image() {
    local file="$1"
    local max_width="$2"
    local quality="$3"
    local backup="../optimization-backups/$(basename "$file")"
    
    echo "Optimizing oversized image: $file"
    
    # Create backup if it doesn't exist
    if [[ ! -f "$backup" ]]; then
        cp "$file" "$backup"
    fi
    
    # Resize and compress
    sips -Z "$max_width" "$file" > /dev/null 2>&1
    sips -s formatOptions "$quality" "$file" > /dev/null 2>&1
}

# Function to aggressively compress regular images
compress_image() {
    local file="$1"
    local quality="$2"
    local backup="../optimization-backups/$(basename "$file")"
    
    echo "Compressing: $file"
    
    # Create backup if it doesn't exist
    if [[ ! -f "$backup" ]]; then
        cp "$file" "$backup"
    fi
    
    # Compress
    sips -s formatOptions "$quality" "$file" > /dev/null 2>&1
}

echo "Getting original file sizes..."
total_before=0
shopt -s nullglob
for file in *.jpg *.jpeg *.png; do
    if [[ -f "$file" ]]; then
        size=$(get_file_size "$file")
        total_before=$((total_before + size))
    fi
done

echo "Applying PageSpeed recommendations..."

# Optimize the largest offenders from the performance analysis:

# 1. tc-truck.jpg - Very large for display size (4000x3000 → 1200px max)
if [[ -f "tc-truck.jpg" ]]; then
    optimize_oversized_image "tc-truck.jpg" 1200 70
fi

# 2. enhanced-hero-image.jpg - Oversized (1025x1536 → 1080px max)
if [[ -f "enhanced-hero-image.jpg" ]]; then
    optimize_oversized_image "enhanced-hero-image.jpg" 1080 75
fi

# 3. Unit size images - Too large for display (1275x852 → 800px max)
for unit_file in *Units*TC.png; do
    if [[ -f "$unit_file" ]]; then
        echo "Optimizing unit image: $unit_file"
        backup="../optimization-backups/$(basename "$unit_file")"
        if [[ ! -f "$backup" ]]; then
            cp "$unit_file" "$backup"
        fi
        sips -Z 800 "$unit_file" > /dev/null 2>&1
        sips -s formatOptions 85 "$unit_file" > /dev/null 2>&1
    fi
done

# 4. Other large images
if [[ -f "fulfilling-hearts-dog-mat.jpg" ]]; then
    optimize_oversized_image "fulfilling-hearts-dog-mat.jpg" 800 75
fi

if [[ -f "business-storage.jpg" ]]; then
    compress_image "business-storage.jpg" 75
fi

# 5. Facility exterior (if it's still very large)
if [[ -f "facility-exterior.jpg" ]]; then
    optimize_oversized_image "facility-exterior.jpg" 1200 70
fi

# 6. Community hero
if [[ -f "community-hero.jpg" ]]; then
    compress_image "community-hero.jpg" 75
fi

# 7. Compress other remaining large images
for file in *.jpg *.jpeg; do
    if [[ -f "$file" ]]; then
        current_size=$(get_file_size "$file")
        # If image is still larger than 500KB, compress more
        if [[ $current_size -gt 512000 ]]; then
            echo "Additional compression for large file: $file"
            compress_image "$file" 65
        fi
    fi
done

echo ""
echo "Calculating final results..."
total_after=0
for file in *.jpg *.jpeg *.png; do
    if [[ -f "$file" ]]; then
        size=$(get_file_size "$file")
        total_after=$((total_after + size))
    fi
done

# Calculate savings
total_before_mb=$(echo "scale=1; $total_before / 1048576" | bc)
total_after_mb=$(echo "scale=1; $total_after / 1048576" | bc)
savings_mb=$(echo "scale=1; ($total_before - $total_after) / 1048576" | bc)
savings_percent=$(echo "scale=1; (($total_before - $total_after) * 100) / $total_before" | bc)

echo "========================================="
echo "WEB OPTIMIZATION RESULTS:"
echo "Before: ${total_before_mb}MB"
echo "After:  ${total_after_mb}MB"
echo "Saved:  ${savings_mb}MB (${savings_percent}%)"
echo "========================================="
echo ""
echo "Performance improvements:"
echo "- Reduced oversized images to appropriate display sizes"
echo "- Applied aggressive compression for web delivery"
echo "- Maintained visual quality while maximizing speed"
echo ""
echo "Backups saved in: optimization-backups/"
echo "Ready for deployment!"