import json
from pytablewriter import MarkdownTableWriter
from statistics import median


# Reads the json file that was written by main.py
with open('results.json', 'r') as f:
    data = json.load(f)

# Creates a list of all the cookie counts
# Used for the statistics
cookie_counts = [site['cookie_count'] for site in data]
total_cookies = sum(cookie_counts)

site_info_matrix = []
for site in data:
    site_info_matrix.append(list(site.values()))

writer = MarkdownTableWriter(
    table_name="Results",
    headers=["Sites", "Status Code", "Cookie Count", "HttpOnly", "Secure", "SameSite", "SameSite Strict",
             "SameSite Lax", "SameSite None", "Path", "Non-default Path"],
    value_matrix=site_info_matrix
)
# Writes the table to a file
writer.dump('table.md')

# Appends the min, max, median, and mean to the end of table.md
with open('table.md', 'a') as f:
    f.seek(0)
    f.write(
        """
### Min: {} \n
### Max: {} \n
### Median: {} \n
### Mean: {} \n
        """.format(min(cookie_counts), max(cookie_counts), median(cookie_counts), len(data)/total_cookies)
    )
