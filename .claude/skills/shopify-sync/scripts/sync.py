#!/usr/bin/env python3
"""
Shopify Sync Script for Turnify B2B Return Portal

Triggers the FastAPI backend OMS sync service to pull data from Shopify.
"""

import requests
import argparse
import json
import sys
from datetime import datetime

# API Configuration
API_BASE_URL = "http://localhost:8000/api/v1"
SYNC_ENDPOINT = f"{API_BASE_URL}/oms/sync"

def print_header():
    """Print script header"""
    print("=" * 60)
    print("🔄 Shopify Data Sync - Turnify B2B Return Portal")
    print("=" * 60)
    print(f"Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")

def print_footer(success=True):
    """Print script footer"""
    print("\n" + "=" * 60)
    if success:
        print("✅ Sync completed successfully!")
    else:
        print("❌ Sync failed!")
    print(f"Finished at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

def check_backend_health():
    """Check if FastAPI backend is running"""
    try:
        response = requests.get(f"{API_BASE_URL}/health", timeout=5)
        if response.status_code == 200:
            print("✅ Backend is healthy")
            return True
        else:
            print(f"❌ Backend returned status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Cannot connect to backend: {e}")
        print("   Make sure FastAPI is running on localhost:8000")
        return False

def sync_shopify_data(sync_customers=True, sync_products=True, sync_orders=True):
    """
    Trigger Shopify sync via FastAPI backend

    Args:
        sync_customers: Whether to sync customers
        sync_products: Whether to sync products
        sync_orders: Whether to sync orders

    Returns:
        dict: Sync results
    """
    print(f"\n🚀 Triggering sync...")
    print(f"   Customers: {'✓' if sync_customers else '✗'}")
    print(f"   Products:  {'✓' if sync_products else '✗'}")
    print(f"   Orders:    {'✓' if sync_orders else '✗'}\n")

    payload = {
        "syncCustomers": sync_customers,
        "syncProducts": sync_products,
        "syncOrders": sync_orders
    }

    try:
        response = requests.post(
            SYNC_ENDPOINT,
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=300  # 5 minute timeout for large syncs
        )

        if response.status_code == 200:
            result = response.json()
            return result
        else:
            error_data = response.json() if response.headers.get('content-type') == 'application/json' else {}
            print(f"❌ Sync failed with status {response.status_code}")
            print(f"   Error: {error_data.get('error', {}).get('message', 'Unknown error')}")
            return None

    except requests.exceptions.Timeout:
        print("❌ Sync timed out (>5 minutes)")
        print("   Large syncs may take time. Check backend logs.")
        return None
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return None

def display_results(result):
    """Display sync results in a formatted way"""
    if not result or not result.get('success'):
        return

    data = result.get('data', {})

    print("\n" + "📊 Sync Results".center(60))
    print("-" * 60)

    # Total synced
    total = data.get('total_synced', 0)
    print(f"{'Total Items Synced:':<30} {total:>10}")

    # Breakdown
    if 'customers_synced' in data:
        print(f"{'  - Customers:':<30} {data['customers_synced']:>10}")
    if 'products_synced' in data:
        print(f"{'  - Products:':<30} {data['products_synced']:>10}")
    if 'orders_synced' in data:
        print(f"{'  - Orders:':<30} {data['orders_synced']:>10}")

    # Errors
    errors = data.get('errors', 0)
    if errors > 0:
        print(f"\n{'⚠️  Errors Encountered:':<30} {errors:>10}")

    # Success rate
    if total > 0:
        success_rate = ((total - errors) / total) * 100
        print(f"{'Success Rate:':<30} {success_rate:>9.1f}%")

    print("-" * 60)

def main():
    """Main function"""
    parser = argparse.ArgumentParser(
        description="Sync data from Shopify to Turnify B2B Portal"
    )
    parser.add_argument(
        '--customers',
        action='store_true',
        help='Sync customers only'
    )
    parser.add_argument(
        '--products',
        action='store_true',
        help='Sync products only'
    )
    parser.add_argument(
        '--orders',
        action='store_true',
        help='Sync orders only'
    )
    parser.add_argument(
        '--all',
        action='store_true',
        help='Sync all data types (default)'
    )

    args = parser.parse_args()

    # Determine what to sync
    if args.all or not (args.customers or args.products or args.orders):
        # Sync everything
        sync_customers = True
        sync_products = True
        sync_orders = True
    else:
        # Sync only selected types
        sync_customers = args.customers
        sync_products = args.products
        sync_orders = args.orders

    # Print header
    print_header()

    # Check backend health
    if not check_backend_health():
        print_footer(success=False)
        sys.exit(1)

    # Trigger sync
    result = sync_shopify_data(sync_customers, sync_products, sync_orders)

    # Display results
    if result:
        display_results(result)
        print_footer(success=True)
        sys.exit(0)
    else:
        print_footer(success=False)
        sys.exit(1)

if __name__ == "__main__":
    main()
