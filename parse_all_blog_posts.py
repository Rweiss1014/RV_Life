#!/usr/bin/env python3
import json
import os
import glob
from html.parser import HTMLParser
import re

class BlogHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.in_h1 = False
        self.in_article = False
        self.in_p = False
        self.title = ''
        self.h1 = ''
        self.paragraphs = []
        self.current_paragraph = ''
        self.images = []
        self.meta_description = ''

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        if tag == 'title':
            self.in_title = True
        elif tag == 'h1':
            self.in_h1 = True
        elif tag == 'article' or (tag == 'div' and any('content' in str(v).lower() for k, v in attrs if k == 'class')):
            self.in_article = True
        elif tag == 'p' and self.in_article:
            self.in_p = True
            self.current_paragraph = ''
        elif tag == 'img':
            img_src = attrs_dict.get('src', '')
            img_alt = attrs_dict.get('alt', '')
            if 'storage.mlcdn.com' in img_src and 'icons' not in img_src.lower():
                self.images.append({'src': img_src, 'alt': img_alt})
        elif tag == 'meta':
            if attrs_dict.get('name') == 'description':
                self.meta_description = attrs_dict.get('content', '')

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag == 'h1':
            self.in_h1 = False
        elif tag == 'p' and self.in_p:
            self.in_p = False
            if self.current_paragraph.strip() and len(self.current_paragraph.strip()) > 50:
                self.paragraphs.append(self.current_paragraph.strip())

    def handle_data(self, data):
        data = data.strip()
        if self.in_title and data:
            self.title = data
        elif self.in_h1 and data:
            self.h1 = data
        elif self.in_p and data:
            self.current_paragraph += ' ' + data

# Read the JSON file
with open('/tmp/cc-agent/62037062/project/content/pages.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)

blog_posts = []

# First, get data from JSON
for url, page_data in json_data.items():
    if '/blogsolofemalervliving/' in url and '/category/' not in url and not url.endswith('/blogsolofemalervliving') and not url.endswith('/blogsolofemalervliving/'):
        # Skip pagination pages
        if url.endswith('/2') or url.endswith('/3'):
            continue

        title = page_data.get('title', '')
        meta_description = page_data.get('meta_description', '')
        slug = url.replace('https://makingmyownlane.com/blogsolofemalervliving/', '')

        paragraphs = page_data.get('paragraphs', [])
        content = ''
        if paragraphs:
            content_paragraphs = [p for p in paragraphs if len(p) > 100 and
                                 'Skip to content' not in p and
                                 'Making My Own Lane' not in p[:50] and
                                 'Subscribe to my email' not in p and
                                 'All Rights Reserved' not in p]
            if content_paragraphs:
                content = '\n\n'.join(content_paragraphs[:3])

        images = page_data.get('images', [])
        featured_image = ''
        if images:
            for img in images:
                img_src = img.get('src', '')
                if 'storage.mlcdn.com' in img_src and 'icons' not in img_src:
                    featured_image = img_src
                    break

        # Determine category
        category = 'RV Life'
        slug_lower = slug.lower()
        title_lower = title.lower()

        if any(word in slug_lower or word in title_lower for word in ['florida', 'key west', 'keys']):
            category = 'Southeast US'
        elif 'national-park' in slug_lower or 'national park' in title_lower or 'state park' in title_lower:
            category = 'National Parks'
        elif any(word in slug_lower for word in ['tips', 'how-to', 'essentials', 'budget', 'cost']):
            category = 'RV Life Tips'
        elif 'solo-female' in slug_lower or 'solo female' in title_lower:
            category = 'Solo Female RV Living'
        elif any(word in slug_lower for word in ['north-carolina', 'virginia', 'maine', 'pennsylvania', 'new-york', 'massachusetts', 'new-jersey', 'maryland', 'assateague']):
            category = 'East Coast'
        elif any(word in slug_lower for word in ['michigan', 'minnesota', 'kentucky', 'ohio', 'voyageurs', 'pictured-rocks']):
            category = 'Mid-West'
        elif any(word in slug_lower for word in ['product', 'review', 'charging-station', 'solar', 'power']):
            category = 'Product Reviews'
        elif 'bourbon' in slug_lower or 'bourbon' in title_lower:
            category = 'Travel & Food'

        blog_post = {
            'title': title,
            'slug': slug,
            'url': url,
            'excerpt': meta_description,
            'description': meta_description,
            'category': category,
            'featured_image': featured_image,
            'content': content[:2000] if content else ''
        }

        blog_posts.append(blog_post)

# Now parse HTML files for additional posts not in JSON
html_files = glob.glob('/tmp/cc-agent/62037062/project/html/_blogsolofemalervliving_*.html')

for html_file in html_files:
    filename = os.path.basename(html_file)

    # Skip category and main blog page files
    if 'category' in filename or filename == '_blogsolofemalervliving.html':
        continue

    # Extract slug from filename
    slug = filename.replace('_blogsolofemalervliving_', '').replace('.html', '')

    # Skip pagination files
    if slug in ['2', '3']:
        continue

    url = f'https://makingmyownlane.com/blogsolofemalervliving/{slug}'

    # Check if we already have this post
    if any(p['url'] == url for p in blog_posts):
        continue

    # Parse HTML file
    try:
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            html_content = f.read()

        parser = BlogHTMLParser()
        parser.feed(html_content)

        title = parser.h1 or parser.title or slug.replace('-', ' ').title()
        meta_description = parser.meta_description
        featured_image = parser.images[0]['src'] if parser.images else ''
        content = '\n\n'.join(parser.paragraphs[:3])

        # Determine category
        category = 'RV Life'
        slug_lower = slug.lower()
        title_lower = title.lower()

        if any(word in slug_lower or word in title_lower for word in ['florida', 'key west', 'keys']):
            category = 'Southeast US'
        elif 'national-park' in slug_lower or 'national park' in title_lower or 'state park' in title_lower:
            category = 'National Parks'
        elif any(word in slug_lower for word in ['tips', 'how-to', 'essentials', 'budget', 'cost']):
            category = 'RV Life Tips'
        elif 'solo-female' in slug_lower or 'solo female' in title_lower:
            category = 'Solo Female RV Living'
        elif any(word in slug_lower for word in ['north-carolina', 'virginia', 'maine', 'pennsylvania', 'new-york', 'massachusetts', 'new-jersey', 'maryland', 'assateague']):
            category = 'East Coast'
        elif any(word in slug_lower for word in ['michigan', 'minnesota', 'kentucky', 'ohio', 'voyageurs', 'pictured-rocks']):
            category = 'Mid-West'
        elif any(word in slug_lower for word in ['product', 'review', 'charging-station', 'solar', 'power']):
            category = 'Product Reviews'
        elif 'bourbon' in slug_lower or 'bourbon' in title_lower:
            category = 'Travel & Food'

        blog_post = {
            'title': title,
            'slug': slug,
            'url': url,
            'excerpt': meta_description,
            'description': meta_description,
            'category': category,
            'featured_image': featured_image,
            'content': content[:2000] if content else ''
        }

        blog_posts.append(blog_post)

    except Exception as e:
        print(f"Error parsing {html_file}: {e}")

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

# Print all post titles
print(f"\nAll {len(blog_posts)} blog posts:")
for i, post in enumerate(blog_posts, 1):
    print(f"{i}. {post['title']} [{post['category']}]")

# Category breakdown
from collections import Counter
categories = Counter(p['category'] for p in blog_posts)
print(f"\n\nCategory breakdown:")
for cat, count in sorted(categories.items()):
    print(f"  {cat}: {count}")
