# Shopify Sync Skill

Syncs data from Shopify to the Turnify B2B Return Portal database.

## Description

This skill triggers the FastAPI backend's OMS sync service to pull customers, products, and orders from Shopify and store them in the PostgreSQL database. It can sync all data or specific types (customers, products, orders).

## Use Cases

- "Sync all Shopify data"
- "Sync Shopify customers"
- "Pull latest orders from Shopify"
- "Update product catalog from Shopify"
- "Force sync with Shopify"

## Requirements

- FastAPI backend running on localhost:8000
- Valid Shopify credentials in backend `.env`
- PostgreSQL database accessible

## Script

Ref: scripts/sync.py

## Parameters

- `--customers` - Sync only customers (optional)
- `--products` - Sync only products (optional)
- `--orders` - Sync only orders (optional)
- `--all` - Sync all data types (default)

## Output

Displays sync statistics:
- Total items synced
- Customers synced
- Products synced
- Orders synced
- Errors encountered

## Examples

```bash
# Sync all data
python scripts/sync.py --all

# Sync only customers
python scripts/sync.py --customers

# Sync products and orders
python scripts/sync.py --products --orders
```
