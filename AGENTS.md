# Agent Guidelines

Personal academic website built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## Tech Stack

- **Jekyll** static site generator
- **al-folio** theme (Bootstrap/MDB, Font Awesome, Academicons)
- **jekyll-scholar** for publications from BibTeX
- **jekyll-paginate-v2** for blog pagination
- **Docker** for local development

## Local Development

```bash
docker compose pull && docker compose up
# Site runs at http://localhost:8080
```

## Key Files

| What | Where |
|------|-------|
| Site config | `_config.yml` |
| About page | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` |
| CV data | `_data/cv.yml` |
| Social links | `_data/socials.yml` |
| Blog posts | `_posts/` |
| Projects | `_projects/` |
| News items | `_news/` |

## Pre-Commit

```bash
npx prettier . --write
docker compose up --build
```
