#!/usr/bin/env python3
import json
import os
import glob
import re
from html.parser import HTMLParser

class BlogHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.in_h1 = False
        self.in_p = False
        self.title = ''
        self.h1 = ''
        self.paragraphs = []
        self.current_paragraph = ''
        self.images = []
        self.meta_description = ''
        self.canonical_url = ''

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        if tag == 'title':
            self.in_title = True
        elif tag == 'h1':
            self.in_h1 = True
        elif tag == 'p':
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
            elif attrs_dict.get('property') == 'og:url':
                self.canonical_url = attrs_dict.get('content', '')

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag == 'h1':
            self.in_h1 = False
        elif tag == 'p' and self.in_p:
            self.in_p = False
            if self.current_paragraph.strip() and len(self.current_paragraph.strip()) > 100:
                # Filter out navigation and boilerplate
                text = self.current_paragraph.strip()
                if not any(skip in text for skip in ['Skip to content', 'Making My Own Lane', 'Subscribe to',
                                                       'All Rights Reserved', 'DISCLAIMER', 'affiliate links']):
                    self.paragraphs.append(text)

    def handle_data(self, data):
        data = data.strip()
        if self.in_title and data and 'Full-time Living' not in data:
            self.title = data
        elif self.in_h1 and data:
            self.h1 = data
        elif self.in_p and data:
            self.current_paragraph += ' ' + data

def determine_category(slug, title):
    """Determine the category based on slug and title"""
    slug_lower = slug.lower()
    title_lower = title.lower()

    if any(word in slug_lower or word in title_lower for word in ['florida', 'key west', 'keys', 'south carolina']):
        return 'Southeast US'
    elif 'national-park' in slug_lower or 'national park' in title_lower or 'state park' in title_lower or 'lakeshore' in title_lower:
        return 'National Parks & State Parks'
    elif any(word in slug_lower for word in ['tips', 'how-to', 'essentials', 'budget', 'cost', 'downsizing', 'planning', 'getting-ready', 'ready']):
        return 'RV Life Tips'
    elif 'solo-female' in slug_lower or 'solo female' in title_lower or 'rving-as-a-solo' in slug_lower:
        return 'Solo Female RV Living'
    elif any(word in slug_lower for word in ['north-carolina', 'virginia', 'maine', 'pennsylvania', 'new-york', 'massachusetts',
                                              'new-jersey', 'maryland', 'assateague', 'bar-harbor', 'smoky-mountain',
                                              'dollywood', 'blue-ridge', 'west-virginia', 'nuttallburg', 'new-river']):
        return 'East Coast'
    elif any(word in slug_lower for word in ['michigan', 'minnesota', 'kentucky', 'ohio', 'voyageurs', 'pictured-rocks', 'sleeping-bear', 'copper-harbor']):
        return 'Mid-West'
    elif any(word in slug_lower for word in ['review', 'charging-station', 'solar', 'power', 'composting-toilet', 'air-conditioning']):
        return 'Product Reviews & Tips'
    elif 'bourbon' in slug_lower or 'bourbon' in title_lower or 'central-florida' in slug_lower:
        return 'Travel & Food'
    elif any(word in slug_lower for word in ['harvest-host', 'thousand-trails']):
        return 'RV Life Tips'
    elif any(word in slug_lower or word in title_lower for word in ['roadtrip', 'road-trip', 'adventure', 'breakdown', 'months']):
        return 'Travel Adventures'
    return 'RV Life'

# Read the JSON file
with open('/tmp/cc-agent/62037062/project/content/pages.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)

blog_posts_dict = {}  # Use dict with URL as key to prevent duplicates

# Process JSON data
for url, page_data in json_data.items():
    if '/blogsolofemalervliving/' in url and '/category/' not in url and not url.endswith('/blogsolofemalervliving') and not url.endswith('/blogsolofemalervliving/'):
        # Skip pagination pages
        if url.endswith('/2') or url.endswith('/3'):
            continue

        title = page_data.get('title', '')
        meta_description = page_data.get('meta_description', '')
        slug = url.replace('https://makingmyownlane.com/blogsolofemalervliving/', '')

        # Skip if empty title
        if not title or title == 'Making My Own Lane':
            continue

        paragraphs = page_data.get('paragraphs', [])
        content = ''
        if paragraphs:
            content_paragraphs = [p for p in paragraphs if len(p) > 100 and
                                 'Skip to content' not in p and
                                 'Making My Own Lane' not in p[:50] and
                                 'Subscribe to my email' not in p and
                                 'All Rights Reserved' not in p and
                                 'DISCLAIMER' not in p]
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

        category = determine_category(slug, title)

        blog_posts_dict[url] = {
            'title': title,
            'slug': slug,
            'url': url,
            'excerpt': meta_description,
            'description': meta_description,
            'category': category,
            'featured_image': featured_image,
            'content': content[:2000] if content else ''
        }

# Process HTML files
html_files = glob.glob('/tmp/cc-agent/62037062/project/html/_blogsolofemalervliving_*.html')

for html_file in html_files:
    filename = os.path.basename(html_file)

    # Skip category and main blog page files
    if 'category' in filename or filename in ['_blogsolofemalervliving.html', '_blogsolofemalervliving_2.html', '_blogsolofemalervliving_3.html']:
        continue

    try:
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            html_content = f.read()

        parser = BlogHTMLParser()
        parser.feed(html_content)

        # Get the canonical URL from the HTML
        url = parser.canonical_url
        if not url or '/blogsolofemalervliving' not in url:
            continue

        # Skip if already have this URL
        if url in blog_posts_dict:
            continue

        slug = url.replace('https://makingmyownlane.com/blogsolofemalervliving/', '')
        title = parser.h1 or parser.title

        # Skip if no title or generic title
        if not title or 'Full-time Living in a Class C' in title:
            continue

        meta_description = parser.meta_description
        featured_image = parser.images[0]['src'] if parser.images else ''
        content = '\n\n'.join(parser.paragraphs[:3])

        category = determine_category(slug, title)

        blog_posts_dict[url] = {
            'title': title,
            'slug': slug,
            'url': url,
            'excerpt': meta_description,
            'description': meta_description,
            'category': category,
            'featured_image': featured_image,
            'content': content[:2000] if content else ''
        }

    except Exception as e:
        print(f"Error parsing {html_file}: {e}")

# Convert dict to list and sort by title
blog_posts = list(blog_posts_dict.values())
blog_posts.sort(key=lambda x: x['title'])

# Write to output file
output = {
    'total_posts': len(blog_posts),
    'posts': blog_posts,
    'last_updated': '2025-12-30',
    'source': 'makingmyownlane.com'
}

with open('/tmp/cc-agent/62037062/project/src/data/blogPosts.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Successfully extracted {len(blog_posts)} unique blog posts")
print(f"Output saved to: /tmp/cc-agent/62037062/project/src/data/blogPosts.json")

# Print all post titles
print(f"\n{'='*80}")
print(f"ALL {len(blog_posts)} BLOG POSTS")
print(f"{'='*80}\n")
for i, post in enumerate(blog_posts, 1):
    print(f"{i:2d}. {post['title']}")
    print(f"    Category: {post['category']}")
    print(f"    URL: {post['url']}")
    print()

# Category breakdown
from collections import Counter
categories = Counter(p['category'] for p in blog_posts)
print(f"\n{'='*80}")
print(f"CATEGORY BREAKDOWN")
print(f"{'='*80}\n")
for cat, count in sorted(categories.items(), key=lambda x: -x[1]):
    print(f"  {cat}: {count} posts")

print(f"\n{'='*80}")
print(f"TOTAL: {len(blog_posts)} BLOG POSTS")
print(f"{'='*80}\n")
