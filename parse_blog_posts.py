#!/usr/bin/env python3
import json
import re

# Read the entire JSON file
with open('/tmp/cc-agent/62037062/project/content/pages.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

blog_posts = []

# Iterate through all pages
for url, page_data in data.items():
    # Check if this is a blog post (not category pages or the main blog page)
    if '/blogsolofemalervliving/' in url and '/category/' not in url and not url.endswith('/blogsolofemalervliving') and not url.endswith('/blogsolofemalervliving/') and not url.endswith('/2') and not url.endswith('/3'):

        title = page_data.get('title', '')
        meta_description = page_data.get('meta_description', '')

        # Extract the slug from URL
        slug = url.replace('https://makingmyownlane.com/blogsolofemalervliving/', '')

        # Get paragraphs for content
        paragraphs = page_data.get('paragraphs', [])

        # Find the main content (usually longer paragraphs)
        content = ''
        excerpt = meta_description

        # Get the longest paragraph as potential content
        if paragraphs:
            # Filter out navigation and footer content
            content_paragraphs = [p for p in paragraphs if len(p) > 100 and
                                 'Skip to content' not in p and
                                 'Making My Own Lane' not in p[:50] and
                                 'Subscribe to my email' not in p and
                                 'All Rights Reserved' not in p]
            if content_paragraphs:
                content = '\n\n'.join(content_paragraphs[:5])  # Get first 5 substantial paragraphs

        # Extract featured image (first image in the page)
        images = page_data.get('images', [])
        featured_image = ''
        if images:
            # Filter out icons and social media images
            for img in images:
                img_src = img.get('src', '')
                if 'storage.mlcdn.com' in img_src and 'icons' not in img_src:
                    featured_image = img_src
                    break

        # Determine category based on URL and content
        category = 'RV Life'  # default
        if 'florida' in slug.lower() or 'florida' in title.lower():
            category = 'Southeast US'
        elif 'national-park' in slug.lower() or 'national park' in title.lower():
            category = 'National Parks'
        elif 'tips' in slug.lower() or 'how-to' in slug.lower() or 'essentials' in slug.lower():
            category = 'RV Life Tips'
        elif 'solo-female' in slug.lower() or 'solo female' in title.lower():
            category = 'Solo Female RV Living'
        elif any(word in slug.lower() for word in ['north-carolina', 'virginia', 'maine', 'pennsylvania', 'new-york', 'massachusetts', 'new-jersey']):
            category = 'East Coast'
        elif any(word in slug.lower() for word in ['michigan', 'minnesota', 'kentucky', 'ohio']):
            category = 'Mid-West'
        elif 'product' in slug.lower() or 'review' in slug.lower() or 'charging-station' in slug.lower() or 'solar' in slug.lower():
            category = 'Product Reviews'

        # Create blog post object
        blog_post = {
            'title': title,
            'slug': slug,
            'url': url,
            'excerpt': excerpt,
            'description': meta_description,
            'category': category,
            'featured_image': featured_image,
            'content': content[:2000] if content else ''  # Limit content length
        }

        blog_posts.append(blog_post)

# Sort by title
blog_posts.sort(key=lambda x: x['title'])

# Write to output file
output = {
    'total_posts': len(blog_posts),
    'posts': blog_posts
}

with open('/tmp/cc-agent/62037062/project/src/data/blogPosts.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Successfully extracted {len(blog_posts)} blog posts")
print(f"Output saved to: /tmp/cc-agent/62037062/project/src/data/blogPosts.json")

# Print first few post titles
print("\nFirst 10 blog posts:")
for i, post in enumerate(blog_posts[:10], 1):
    print(f"{i}. {post['title']}")
